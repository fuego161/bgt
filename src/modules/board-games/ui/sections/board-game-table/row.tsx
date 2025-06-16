import Link from "next/link";

import type { BoardGameListItem } from "@/types/ui/board-game-list";

type RowProps =
	| { type: "message"; message: string }
	| { type: "game"; game: BoardGameListItem };

const formatPlayerCount = (min: number, max: number): string =>
	min === max ? `${max}` : `${min} - ${max}`;

export const BoardGameRow = (props: RowProps) => {
	const articleStyles =
		"grid grid-cols-1 sm:grid-cols-6 gap-2 px-4 py-4 border-b";

	if (props.type === "message") {
		return (
			<article role="listitem" className={articleStyles}>
				<h2 className="text-sm font-semibold sm:col-span-5">
					{props.message}
				</h2>
			</article>
		);
	}

	const { game } = props;

	return (
		<article role="listitem" className={articleStyles}>
			<h2 className="text-sm font-semibold sm:col-span-2">
				<Link href={`board-games/${game.slug}`}>{game.title}</Link>
			</h2>

			<p className="text-sm">{game.designerName}</p>

			<p className="text-sm">{game.publisherName}</p>

			<p className="text-sm">
				{formatPlayerCount(game.minPlayers, game.maxPlayers)}
			</p>

			<button className="text-sm hover:underline">
				Add to Collection
			</button>
		</article>
	);
};
