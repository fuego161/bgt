import { getCategory } from "@/lib/data/get-category";
import { getBoardGames } from "@/modules/board-games/data/get-board-games";
import { BoardGameRow } from "@/modules/board-games/ui/sections/board-game-table/row";
import { BoardGameTableStructure } from "@/modules/board-games/ui/sections/board-game-table/table-structure";

import type { BoardGameData } from "@/types/ui/board-game-data";
import type { CategorySummary } from "@/types/ui/category-summary";

interface BoardGameTableRowsProps {
	category?: string;
}

export const BoardGameTableRows = async ({
	category,
}: BoardGameTableRowsProps) => {
	const selectedCategory: CategorySummary | null = await getCategory(
		category
	);

	if (category && !selectedCategory) {
		return (
			<BoardGameTableStructure>
				<BoardGameRow type="message" message="Category Not Found" />
			</BoardGameTableStructure>
		);
	}

	const boardGames: BoardGameData[] = await getBoardGames(selectedCategory);

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
