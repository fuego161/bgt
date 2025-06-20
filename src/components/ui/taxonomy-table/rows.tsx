import { TaxonomyRow } from "@/components/ui/taxonomy-table/row";
import { TaxonomyTableStructure } from "@/components/ui/taxonomy-table/table-structure";
import { getTaxonomies } from "@/lib/data/get-taxonomies";

import type { TaxonomyTypes } from "@/types/ui/taxonomy-summary";

interface TaxonomyTableProps {
	taxonomy: TaxonomyTypes;
}

export const TaxonomyTableRows = async ({ taxonomy }: TaxonomyTableProps) => {
	const taxonomies = await getTaxonomies(taxonomy);

	if (!taxonomies) {
		throw new Error("No Taxonomies Found");
	}

	const rows = taxonomies.length ? (
		taxonomies.map((taxonomy) => (
			<TaxonomyRow
				key={taxonomy.slug}
				type="taxonomy"
				taxonomy={taxonomy}
			/>
		))
	) : (
		<TaxonomyRow type="message" message="No Results!" />
	);

	return <TaxonomyTableStructure>{rows}</TaxonomyTableStructure>;
};
