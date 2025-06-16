import prisma from "@/lib/prisma";
import { SelectedCategory } from "@/types/ui/selected-category";

export const getBoardGames = (selectedCategory?: SelectedCategory) => {
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
