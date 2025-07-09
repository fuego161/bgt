import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

import { BoardGameTableRows } from "@/modules/board-games/ui/sections/board-game-table/rows";
import { BoardGameTableSkeleton } from "@/modules/board-games/ui/sections/board-game-table/skeleton";

interface ContainedGamesProps {
	category: string;
}

export const ContainedGames = ({ category }: ContainedGamesProps) => {
	return (
		<ErrorBoundary fallback={<p>Error...</p>}>
			<Suspense fallback={<BoardGameTableSkeleton />}>
				<BoardGameTableRows category={category} />
			</Suspense>
		</ErrorBoundary>
	);
};
