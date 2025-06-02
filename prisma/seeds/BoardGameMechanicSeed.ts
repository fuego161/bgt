import { PrismaClient } from "@prisma/client";
import { Seeder } from "./Seeder";

const prisma = new PrismaClient();

interface BoardGameMechanicData {
	boardGameId: number;
	mechanicId: number;
}

export class BoardGameMechanicSeed extends Seeder {
	// The data we're going to seed into the BoardGameMechanic table
	private toLink = [
		{
			gameSlug: "arcs",
			mechanicSlugs: [
				"area-majority-influence",
				"area-movement",
				"campaign-battle-card-driven",
				"dice-rolling",
				"die-icon-resolution",
				"hand-management",
				"take-that",
				"trick-taking",
				"turn-order-claim-action",
				"variable-player-powers",
			],
		},
		{
			gameSlug: "bananagrams",
			mechanicSlugs: ["race", "spelling", "tile-placement"],
		},
		{
			gameSlug: "blue-lagoon",
			mechanicSlugs: [
				"area-majority-influence",
				"chaining",
				"connections",
				"end-game-bonuses",
				"hexagon-grid",
				"network-and-route-building",
				"score-and-reset-game",
				"set-collection",
				"variable-set-up",
			],
		},
	];

	async createSeedData() {
		// Set an array which will hold the link objects
		const seedData: BoardGameMechanicData[] = [];

		// Get all mechanics
		const mechanics = await prisma.mechanic.findMany();
		// Map mechanic slugs to ids
		const mechanicMap = new Map(mechanics.map((m) => [m.slug, m.id]));

		// Get a collection of games
		const games = await prisma.boardGame.findMany({
			where: {
				OR: this.toLink.map((link) => {
					return { slug: link.gameSlug };
				}),
			},
		});
		// Map game slugs to ids
		const gameMap = new Map(games.map((g) => [g.slug, g.id]));

		// Loop each item we want to link
		for (const mechanicLink of this.toLink) {
			this.linkBoardGameToMany<BoardGameMechanicData>(
				seedData,
				mechanicLink.gameSlug,
				mechanicLink.mechanicSlugs,
				gameMap,
				mechanicMap,
				"mechanicId"
			);
		}

		return seedData;
	}
}
