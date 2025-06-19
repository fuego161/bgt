import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

import { CategoryTableRows } from "@/modules/categories/ui/sections/category-table/rows";
import { CategoryTableSkeleton } from "@/modules/categories/ui/sections/category-table/skeleton";

// TODO: Update skeleton
export const CategoryTable = () => {
	return (
		<ErrorBoundary fallback={<p>Error...</p>}>
			<Suspense fallback={<CategoryTableSkeleton />}>
				<CategoryTableRows />
			</Suspense>
		</ErrorBoundary>
	);
};
