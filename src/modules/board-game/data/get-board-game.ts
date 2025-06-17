import prisma from "@/lib/prisma";

import type { BoardGameDataIncludes } from "@/types/ui/board-game-data";

export const getBoardGame = async (
	slug: string,
	includeCategories = false,
	includeMechanics = false
): Promise<BoardGameDataIncludes> => {
	return prisma.boardGame.findUniqueOrThrow({
		select: {
			id: true,
			title: true,
			slug: true,
			designerName: true,
			publisherName: true,
			minPlayers: true,
			maxPlayers: true,
			boardGameCategories: includeCategories
				? {
						select: {
							categoryId: true,
						},
				  }
				: undefined,
			boardGameMechanics: includeMechanics
				? {
						select: {
							mechanicId: true,
						},
				  }
				: undefined,
		},
		where: { slug },
	});
};
