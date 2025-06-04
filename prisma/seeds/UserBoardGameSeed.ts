import { faker } from "@faker-js/faker";
import { PrismaClient } from "@prisma/client";
import type { BoardGame } from "@prisma/client";
import type { BoardGameSeedData } from "@/types/seed/board-game";

const prisma = new PrismaClient();

enum State {
	Owned = "OWNED",
	Prev = "PREVIOUSLY_OWNED",
	Play = "WANT_PLAY",
	Buy = "WANT_BUY",
}

interface UserBoardGameData {
	userId: number;
	boardGameId: number;
	rating?: number;
	status?: State;
	notes?: string;
}

export class UserBoardGameSeed {
	constructor(private toLink: BoardGameSeedData[]) {}

	private getRandomCount(max: number, min = 0) {
		return Math.floor(Math.random() * (max - min + 1) + min);
	}

	private getRandomStatus(): string {
		// Create an array of available state keys
		const stateKeys = Object.keys(State);
		// Get a random state by getting a random number (minus 1 to account for the 0 index)
		const randomState =
			stateKeys[this.getRandomCount(stateKeys.length - 1)];

		return randomState ?? "Owned";
	}

	private createCollection(games: BoardGame[]): number[] {
		const collection = [];
		const collectionSize = this.getRandomCount(games.length, 1);
		const gameMap = new Map(games.map((g, i) => [i, g.id]));

		for (let i = 0; i < collectionSize; i++) {
			const keys = Array.from(gameMap.keys());
			if (keys.length === 0) break;

			const randomIndex = this.getRandomCount(keys.length - 1);
			const gameKey = keys[randomIndex];
			const gameToAdd = gameMap.get(gameKey);

			if (gameToAdd) {
				collection.push(gameToAdd);
				gameMap.delete(gameKey);
			}
		}

		return collection;
	}

	async createSeedData() {
		const seedData: UserBoardGameData[] = [];

		// Get 10 users
		const users = await prisma.user.findMany({
			where: {
				role: "USER",
			},
			take: 10,
		});

		// Get a collection of games
		const games = await prisma.boardGame.findMany({
			where: {
				OR: this.toLink.map((link) => {
					return { slug: link.slug };
				}),
			},
		});

		for (const user of users) {
			const gameCollection = this.createCollection(games);

			for (const game of gameCollection) {
				seedData.push({
					userId: user.id,
					boardGameId: game,
					rating: this.getRandomCount(5, 1),
					status: State[this.getRandomStatus() as keyof typeof State],
					notes: faker.lorem.paragraph({ min: 1, max: 3 }),
				});
			}
		}

		return seedData;
	}
}
