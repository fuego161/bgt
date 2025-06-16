import prisma from "@/lib/prisma";

export const getBoardGame = async (slug: string) => {
	return prisma.boardGame.findUniqueOrThrow({
		select: {
			id: true,
			title: true,
			slug: true,
			designerName: true,
			publisherName: true,
			minPlayers: true,
			maxPlayers: true,
		},
		where: { slug },
	});
};
