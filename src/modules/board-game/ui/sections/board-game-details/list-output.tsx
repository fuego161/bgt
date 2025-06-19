"use client";

import clsx from "clsx";
import Link from "next/link";
import { useState } from "react";

interface LinkListProps {
	sectionTitle: string;
	path: string;
	items: {
		title: string;
		slug: string;
	}[];
}

const linkItem = (path: string, slug: string, title: string) => (
	<li key={slug} className="mb-1">
		<Link href={`/${path}/${slug}`} className="text-sm">
			{title}
		</Link>
	</li>
);

export const LinkList = ({ sectionTitle, path, items }: LinkListProps) => {
	const overflowCount = 4;
	const overflowView = items.length > overflowCount;
	const overflowGroupId = `${path}-overflow-links`;

	const [secondGroupShowing, setSecondGroupShowing] =
		useState<boolean>(false);

	const initialGroup: React.ReactNode = overflowView
		? items
				.slice(0, overflowCount)
				.map(({ slug, title }) => linkItem(path, slug, title))
		: items.map(({ slug, title }) => linkItem(path, slug, title));

	const toggleText = secondGroupShowing
		? "Hide"
		: `+ ${items.length - overflowCount} More`;

	return (
		<>
			<h3 className="text-lg font-semibold">{sectionTitle}</h3>

			<ul>{initialGroup}</ul>

			{overflowView && (
				<>
					<button
						className="text-sm underline cursor-pointer"
						aria-expanded={secondGroupShowing}
						aria-controls={overflowGroupId}
						onClick={() =>
							setSecondGroupShowing(!secondGroupShowing)
						}
					>
						{toggleText}
					</button>

					<ul
						id={overflowGroupId}
						aria-hidden={!secondGroupShowing}
						className={clsx(
							secondGroupShowing ? "block" : "hidden",
							"pt-1"
						)}
					>
						{items
							.slice(overflowCount, items.length)
							.map(({ slug, title }) =>
								linkItem(path, slug, title)
							)}
					</ul>
				</>
			)}
		</>
	);
};
