interface TaxonomyTableStructureProps {
	children: React.ReactNode;
}

export const TaxonomyTableStructure = ({
	children,
}: TaxonomyTableStructureProps) => (
	<section
		className="grid w-full sm:grid-cols-2 md:grid-cols-3"
		aria-label="List of categories"
	>
		<header
			className="px-4 py-2 text-sm border-b sm:col-span-2 md:col-span-3"
			role="rowgroup"
		>
			<h3 className="text-lg font-semibold">Board Game Categories</h3>
		</header>
		{children}
	</section>
);
