import Link from "next/link";

import { getCategories } from "@/modules/board-game/data/get-categories";

import type { BoardGameDataIncludes } from "@/types/ui/board-game-data";

interface BoardGameDetailsCategoriesProps {
	game: BoardGameDataIncludes;
}

export const BoardGameDetailsCategories = async ({
	game,
}: BoardGameDetailsCategoriesProps) => {
	if (!game.boardGameCategories) return;

	const categories = await getCategories(game.boardGameCategories);

	console.log(categories);

	return (
		<>
			<h3 className="text-lg font-semibold">Categories</h3>

			<ul>
				{categories.map(({ slug, title }) => (
					<li key={slug}>
						<Link href={`/categories/${slug}`}>{title}</Link>
					</li>
				))}
			</ul>
		</>
	);
};
