import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

import { TaxonomyTableRows } from "@/components/ui/taxonomy-table/rows";
import { TaxonomyTableSkeleton } from "@/components/ui/taxonomy-table/skeleton";

import type { TaxonomyTypes } from "@/types/ui/taxonomy-summary";

interface TaxonomyTableProps {
	taxonomy: TaxonomyTypes;
}

// TODO: Update skeleton
export const TaxonomyTable = ({ taxonomy }: TaxonomyTableProps) => {
	return (
		<ErrorBoundary fallback={<p>Error...</p>}>
			<Suspense fallback={<TaxonomyTableSkeleton />}>
				<TaxonomyTableRows taxonomy={taxonomy} />
			</Suspense>
		</ErrorBoundary>
	);
};
