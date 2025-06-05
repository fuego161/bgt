import { CategoriesCarousel } from "@/components/ui/categories-carousel";
import { BoardGameTable } from "@/modules/board-games/ui/sections/board-game-table";

interface BoardGamesViewProps {
	category?: string;
}

export const BoardGamesView = ({ category }: BoardGamesViewProps) => {
	return (
		<>
			<CategoriesCarousel />
			<BoardGameTable category={category} />
		</>
	);
};
