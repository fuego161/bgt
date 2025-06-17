import Link from "next/link";

import { getMechanics } from "@/modules/board-game/data/get-mechanics";

import type { BoardGameDataIncludes } from "@/types/ui/board-game-data";

interface BoardGameDetailsMechanicsProps {
	game: BoardGameDataIncludes;
}

export const BoardGameDetailsMechanics = async ({
	game,
}: BoardGameDetailsMechanicsProps) => {
	if (!game.boardGameMechanics) return;

	const mechanics = await getMechanics(game.boardGameMechanics);

	console.log(mechanics);

	return (
		<>
			<h3 className="text-lg font-semibold">Mechanics</h3>

			<ul>
				{mechanics.map(({ slug, title }) => (
					<li key={slug}>
						<Link href={`/categories/${slug}`}>{title}</Link>
					</li>
				))}
			</ul>
		</>
	);
};
