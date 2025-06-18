import { getCategories } from "@/modules/board-game/data/get-categories";
import { LinkList } from "@/modules/board-game/ui/sections/board-game-details/list-output";

import type { BoardGameDataIncludes } from "@/types/ui/board-game-data";

interface BoardGameDetailsCategoriesProps {
	game: BoardGameDataIncludes;
}

export const BoardGameDetailsCategories = async ({
	game,
}: BoardGameDetailsCategoriesProps) => {
	if (!game.boardGameCategories) return;

	const categories = await getCategories(game.boardGameCategories);

	if (!categories || categories.length === 0) return;

	return (
		<LinkList
			sectionTitle="Categories"
			path="categories"
			items={categories}
		/>
	);
};
