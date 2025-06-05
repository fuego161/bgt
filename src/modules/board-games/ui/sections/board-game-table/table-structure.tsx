interface BoardGameTableStructureProps {
	children: React.ReactNode;
	category?: string | null;
}

export const BoardGameTableStructure = ({
	children,
	category,
}: BoardGameTableStructureProps) => (
	<section
		className="grid w-full"
		aria-label={`List of board games${
			category ? ` categorised under ${category}` : ""
		}`}
	>
		<header
			className="hidden sm:grid grid-cols-6 gap-2 px-4 py-2 text-sm border-b"
			role="rowgroup"
		>
			<h3 className="text-lg font-semibold sm:col-span-2">Title</h3>
			<h3 className="text-lg font-semibold">Designer</h3>
			<h3 className="text-lg font-semibold">Publisher</h3>
			<h3 className="text-lg font-semibold">Players</h3>
			<h3 className="text-lg font-semibold" aria-hidden="true">
				&nbsp;
			</h3>
		</header>
		{children}
	</section>
);
