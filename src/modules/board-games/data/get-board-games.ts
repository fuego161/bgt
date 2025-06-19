import prisma from "@/lib/prisma";

import type { BoardGameData } from "@/types/ui/board-game-data";
import type { CategorySummary } from "@/types/ui/category-summary";

export const getBoardGames = (
	selectedCategory?: CategorySummary | null
): Promise<BoardGameData[]> => {
	return prisma.boardGame.findMany({
		select: {
			id: true,
			title: true,
			slug: true,
			designerName: true,
			publisherName: true,
			minPlayers: true,
			maxPlayers: true,
		},
		where: selectedCategory
			? {
					boardGameCategories: {
						some: {
							categoryId: selectedCategory.id,
						},
					},
			  }
			: undefined,
		orderBy: { title: "asc" },
	});
};
