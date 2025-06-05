import prisma from "@/lib/prisma";
import { BoardGameRow } from "@/modules/board-games/ui/sections/board-game-table/row";
import { BoardGameTableStructure } from "@/modules/board-games/ui/sections/board-game-table/table-structure";

import type { BoardGameListItem } from "@/types/ui/board-game-list";

interface BoardGameTableRowsProps {
	category?: string;
}

export const BoardGameTableRows = async ({
	category,
}: BoardGameTableRowsProps) => {
	const selectedCategory = category
		? await prisma.category.findUnique({
				select: {
					id: true,
					title: true,
				},
				where: {
					slug: category,
				},
		  })
		: null;

	if (category && !selectedCategory) {
		return (
			<BoardGameTableStructure>
				<BoardGameRow type="message" message="Category Not Found" />
			</BoardGameTableStructure>
		);
	}

	const boardGames: BoardGameListItem[] = await prisma.boardGame.findMany({
		select: {
			id: true,
			title: true,
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

	const rows = boardGames.length ? (
		boardGames.map((game) => (
			<BoardGameRow key={game.id} type="game" game={game} />
		))
	) : (
		<BoardGameRow type="message" message="No Results!" />
	);

	return (
		<BoardGameTableStructure category={selectedCategory?.title}>
			{rows}
		</BoardGameTableStructure>
	);
};
