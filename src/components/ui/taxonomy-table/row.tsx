import Link from "next/link";

import type { TaxonomyLink } from "@/types/ui/taxonomy-summary";

type RowProps =
	| { type: "message"; message: string }
	| { type: "taxonomy"; taxonomy: TaxonomyLink };

export const TaxonomyRow = (props: RowProps) => {
	const articleStyles =
		"px-4 py-4 border-b sm:border-r sm:odd:border-r-0 md:odd:border-r md:nth-[3n+1]:border-r-0";

	if (props.type === "message") {
		return (
			<article role="listitem" className={articleStyles}>
				<h2 className="text-sm font-semibold">{props.message}</h2>
			</article>
		);
	}

	const { taxonomy } = props;

	return (
		<article role="listitem" className={articleStyles}>
			<h2 className="text-sm font-semibold">
				<Link href={`categories/${taxonomy.slug}`}>
					{taxonomy.title}
				</Link>
			</h2>
		</article>
	);
};
