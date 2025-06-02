import { PrismaClient } from "@prisma/client";
import { Seeder } from "./Seeder";
import { BoardGameSeedData } from "@/types/board-game";

const prisma = new PrismaClient();

interface BoardGameCategoryData {
	boardGameId: number;
	categoryId: number;
}

export class BoardGameCategorySeed extends Seeder {
	constructor(private toLink: BoardGameSeedData[]) {
		super();
	}

	async createSeedData() {
		// Set an array which will hold the link objects
		const seedData: BoardGameCategoryData[] = [];

		// Get all categories
		const categories = await prisma.category.findMany();
		// Map category slugs to ids
		const categoryMap = new Map(categories.map((c) => [c.slug, c.id]));

		// Get a collection of games
		const games = await prisma.boardGame.findMany({
			where: {
				OR: this.toLink.map((link) => {
					return { slug: link.slug };
				}),
			},
		});
		// Map game slugs to ids
		const gameMap = new Map(games.map((g) => [g.slug, g.id]));

		// Loop each item we want to link
		for (const categoryLink of this.toLink) {
			this.linkBoardGameToMany<BoardGameCategoryData>(
				seedData,
				categoryLink.slug,
				categoryLink.categorySlugs,
				gameMap,
				categoryMap,
				"categoryId"
			);
		}

		return seedData;
	}
}
