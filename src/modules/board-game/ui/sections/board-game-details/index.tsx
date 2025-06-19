import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

import { BoardGameDetailsOutput } from "@/modules/board-game/ui/sections/board-game-details/output";

interface BoardGameDetailsProps {
	slug: string;
}

// TODO: Update Skeleton once layout configured
export const BoardGameDetails = ({ slug }: BoardGameDetailsProps) => {
	return (
		<ErrorBoundary fallback={<p>Error...</p>}>
			<Suspense fallback={<p>Skeleton...</p>}>
				<BoardGameDetailsOutput slug={slug} />
			</Suspense>
		</ErrorBoundary>
	);
};
