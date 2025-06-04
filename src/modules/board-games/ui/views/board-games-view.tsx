import { BoardGameTable } from "@/modules/board-games/ui/sections/board-game-table";
import { CategoriesSection } from "@/modules/board-games/ui/sections/categories-section";

interface BoardGamesViewProps {
	category?: string;
}

export const BoardGamesView = ({ category }: BoardGamesViewProps) => {
	return (
		<>
			<CategoriesSection />
			<BoardGameTable category={category} />
		</>
	);
};
