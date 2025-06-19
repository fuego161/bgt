import { getCategories } from "@/lib/data/get-categories";
import { CategoryRow } from "@/modules/categories/ui/sections/category-table/row";
import { CategoryTableStructure } from "@/modules/categories/ui/sections/category-table/table-structure";

export const CategoryTableRows = async () => {
	const categories = await getCategories();

	const rows = categories.length ? (
		categories.map((category) => (
			<CategoryRow
				key={category.slug}
				type="category"
				category={category}
			/>
		))
	) : (
		<CategoryRow type="message" message="No Results!" />
	);

	return <CategoryTableStructure>{rows}</CategoryTableStructure>;
};
