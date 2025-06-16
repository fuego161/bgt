import { BoardGameDetails } from "@/modules/board-game/ui/sections/board-game-details";

interface BoardGameViewProps {
	slug: string;
}

export const BoardGameView = ({ slug }: BoardGameViewProps) => {
	return (
		<>
			<BoardGameDetails slug={slug} />
		</>
	);
};
