import { BoardGameTableStructure } from "@/modules/board-games/ui/sections/board-game-table/table-structure";

export const BoardGameTableSkeleton = () => {
	const placeHolderStyles = "block bg-zinc-400 h-6 rounded-sm animate-pulse";

	return (
		<BoardGameTableStructure>
			{Array.from({ length: 6 }).map((_, index) => (
				<article
					key={index}
					role="listitem"
					className="grid grid-cols-1 sm:grid-cols-6 gap-2 px-4 py-4 border-b"
				>
					<span
						className={`${placeHolderStyles} sm:col-span-2`}
					></span>
					<span className={placeHolderStyles}></span>
					<span className={placeHolderStyles}></span>
					<span className={placeHolderStyles}></span>
					<span className={placeHolderStyles}></span>
				</article>
			))}
		</BoardGameTableStructure>
	);
};
