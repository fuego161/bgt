import { CategoryTableStructure } from "@/modules/categories/ui/sections/category-table/table-structure";

export const CategoryTableSkeleton = () => {
	const placeHolderStyles = "block bg-zinc-400 h-6 rounded-sm animate-pulse";

	return (
		<CategoryTableStructure>
			{Array.from({ length: 20 }).map((_, index) => (
				<article
					key={index}
					role="listitem"
					className="grid grid-cols-1 sm:grid-cols-6 gap-2 px-4 py-4 border-b"
				>
					<span className={placeHolderStyles}></span>
				</article>
			))}
		</CategoryTableStructure>
	);
};
