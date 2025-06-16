import { getBoardGame } from "@/modules/board-game/data/get-board-game";
import { formatPlayerCount } from "@/modules/board-game/shared/format-player-count";

interface BoardGameDetailsOutputProps {
	slug: string;
}

export const BoardGameDetailsOutput = async ({
	slug,
}: BoardGameDetailsOutputProps) => {
	const game = await getBoardGame(slug);

	return (
		<article className="rounded-sm bg-amber-50">
			<header>
				<h2 className="text-xl font-semibold">{game.title}</h2>
			</header>

			<p className="text-base">{game.designerName}</p>
			<p className="text-base">{game.publisherName}</p>

			<p className="text-base">
				{formatPlayerCount(game.minPlayers, game.maxPlayers)}
			</p>
		</article>
	);
};
