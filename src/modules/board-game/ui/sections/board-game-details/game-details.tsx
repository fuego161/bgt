import { formatPlayerCount } from "@/modules/board-game/shared/format-player-count";

import type { BoardGameDataIncludes } from "@/types/ui/board-game-data";

interface BoardGameDetailsGameProps {
	game: BoardGameDataIncludes;
}

export const BoardGameDetailsGame = async ({
	game,
}: BoardGameDetailsGameProps) => {
	return (
		<>
			<header>
				<h2 className="text-xl font-semibold">{game.title}</h2>
			</header>

			<p className="text-base">{game.designerName}</p>
			<p className="text-base">{game.publisherName}</p>

			<p className="text-base">
				{formatPlayerCount(game.minPlayers, game.maxPlayers)}
			</p>
		</>
	);
};
