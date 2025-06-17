import { getBoardGame } from "@/modules/board-game/data/get-board-game";
import { BoardGameDetailsCategories } from "@/modules/board-game/ui/sections/board-game-details/categories";
import { BoardGameDetailsGame } from "@/modules/board-game/ui/sections/board-game-details/game-details";

import type { BoardGameDataIncludes } from "@/types/ui/board-game-data";

interface BoardGameDetailsOutputProps {
	slug: string;
}

export const BoardGameDetailsOutput = async ({
	slug,
}: BoardGameDetailsOutputProps) => {
	const game: BoardGameDataIncludes = await getBoardGame(slug, true, true);

	return (
		<article className="rounded-sm bg-amber-50">
			<BoardGameDetailsGame game={game} />
			<BoardGameDetailsCategories game={game} />
		</article>
	);
};
