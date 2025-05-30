import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface BoardGameCategoryData {
	boardGameId: number;
	categoryId: number;
}

export class BoardGameCategorySeed {
	constructor() {}

	private addCategoryLinks(
		seedData: BoardGameCategoryData[],
		gameSlug: string,
		categorySlugs: string[],
		gameMap: Map<string, number>,
		categoryMap: Map<string, number>
	) {
		const gameId = gameMap.get(gameSlug);

		if (!gameId) throw new Error(`Missing Game: ${gameSlug}`);

		for (const categorySlug of categorySlugs) {
			const categoryId = categoryMap.get(categorySlug);

			if (!categoryId)
				throw new Error(
					`Missing Category: ${categorySlug} | On Game: ${gameSlug}`
				);

			seedData.push({
				boardGameId: gameId,
				categoryId: categoryId,
			});
		}
	}

	async createSeedData() {
		const seedData: BoardGameCategoryData[] = [];

		const categories = await prisma.category.findMany();
		const categoryMap = new Map(categories.map((c) => [c.slug, c.id]));

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
				categorySlugs: [
					"science-fiction",
					"space-exploration",
					"wargame",
				],
			},
			{
				gameSlug: "bananagrams",
				categorySlugs: ["real-time", "word-game"],
			},
			{
				gameSlug: "blue-lagoon",
				categorySlugs: ["abstract-strategy"],
			},
		];

		for (const categoryLink of toLink) {
			this.addCategoryLinks(
				seedData,
				categoryLink.gameSlug,
				categoryLink.categorySlugs,
				gameMap,
				categoryMap
			);
		}

		return seedData;
	}
}
