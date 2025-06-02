import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface BoardGameMechanicData {
	boardGameId: number;
	mechanicId: number;
}

export class BoardGameMechanicSeed {
	constructor() {}

	private addMechanicLinks(
		seedData: BoardGameMechanicData[],
		gameSlug: string,
		mechanicSlugs: string[],
		gameMap: Map<string, number>,
		mechanicMap: Map<string, number>
	) {
		const gameId = gameMap.get(gameSlug);

		if (!gameId) throw new Error(`Missing Game: ${gameSlug}`);

		for (const mechanicSlug of mechanicSlugs) {
			const mechanicId = mechanicMap.get(mechanicSlug);

			if (!mechanicId)
				throw new Error(
					`Missing Mechanic: ${mechanicSlug} | On Game: ${gameSlug}`
				);

			seedData.push({
				boardGameId: gameId,
				mechanicId: mechanicId,
			});
		}
	}

	async createSeedData() {
		const seedData: BoardGameMechanicData[] = [];

		const mechanics = await prisma.mechanic.findMany();
		const mechanicMap = new Map(mechanics.map((m) => [m.slug, m.id]));

		const games = await prisma.boardGame.findMany({
			where: {
				OR: [
					{ slug: "arcs" },
					{ slug: "bananagrams" },
					{ slug: "blue-lagoon" },
				],
			},
		});
		const gameMap = new Map(games.map((g) => [g.slug, g.id]));

		const toLink = [
			{
				gameSlug: "arcs",
				mechanicSlugs: [
					'area-majority-influence',
					'area-movement',
					'campaign-battle-card-driven',
					'dice-rolling',
					'die-icon-resolution',
					'hand-management',
					'take-that',
					'trick-taking',
					'turn-order-claim-action',
					'variable-player-powers',
				],
			},
			{
				gameSlug: "bananagrams",
				mechanicSlugs: [
					"race",
					"spelling",
					"tile-placement",
				],
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

		for (const mechanicLink of toLink) {
			this.addMechanicLinks(
				seedData,
				mechanicLink.gameSlug,
				mechanicLink.mechanicSlugs,
				gameMap,
				mechanicMap
			);
		}

		return seedData;
	}
}
