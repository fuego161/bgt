import { getMechanics } from "@/modules/board-game/data/get-mechanics";
import { LinkList } from "@/modules/board-game/ui/sections/board-game-details/list-output";

import type { BoardGameDataIncludes } from "@/types/ui/board-game-data";

interface BoardGameDetailsMechanicsProps {
	game: BoardGameDataIncludes;
}

export const BoardGameDetailsMechanics = async ({
	game,
}: BoardGameDetailsMechanicsProps) => {
	if (!game.boardGameMechanics) return;

	const mechanics = await getMechanics(game.boardGameMechanics);

	if (!mechanics || mechanics.length === 0) return;

	return (
		<LinkList sectionTitle="Mechanics" path="mechanics" items={mechanics} />
	);
};
