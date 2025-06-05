import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

import { BoardGameTableRows } from "@/modules/board-games/ui/sections/board-game-table/rows";
import { BoardGameTableSkeleton } from "@/modules/board-games/ui/sections/board-game-table/skeleton";

interface BoardGameTableProps {
	category?: string;
}

export const BoardGameTable = ({ category }: BoardGameTableProps) => {
	return (
		<ErrorBoundary fallback={<p>Error...</p>}>
			<Suspense fallback={<BoardGameTableSkeleton />}>
				<BoardGameTableRows category={category} />
			</Suspense>
		</ErrorBoundary>
	);
};
