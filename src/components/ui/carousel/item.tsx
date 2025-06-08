"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

import { buttonVariants } from "@/components/ui/button/button-variants";

import type {
	CarouselItemHandlerProps,
	CarouselItemLinkProps,
} from "@/types/ui/carousel";
import type { ReactElement } from "react";

type CarouselItemProps =
	| { type: "loader"; collectSize?: undefined; index?: undefined }
	| {
			type: "link";
			data: CarouselItemLinkProps;
			collectSize: (index: number) => (size: number) => void;
			index: number;
	  }
	| {
			type: "handler";
			data: CarouselItemHandlerProps;
			initialItem?: string;
			collectSize: (index: number) => (size: number) => void;
			index: number;
	  };

const itemWrapper = (
	item: ReactElement,
	ref?: React.RefObject<HTMLLIElement | null>
): ReactElement => {
	return (
		<li ref={ref} className="mr-3 last-of-type:mr-0">
			{item}
		</li>
	);
};

export const CarouselItem = (props: CarouselItemProps) => {
	const ref = useRef<HTMLLIElement | null>(null);

	const { type, collectSize, index } = props;

	useEffect(() => {
		if (ref.current && type !== "loader") {
			const width = ref.current.offsetWidth;
			collectSize(index)(width);
		}
	}, [type, collectSize, index]);

	if (type === "loader") {
		return itemWrapper(
			<button
				className={buttonVariants({
					intent: "skeleton",
					hoverable: false,
				})}
				disabled
				aria-disabled="true"
				aria-hidden="true"
				tabIndex={-1}
			>
				&nbsp;
			</button>
		);
	}

	if (type === "link") {
		const { title, link, disabled } = props.data;

		if (disabled) {
			return itemWrapper(
				<span
					className={buttonVariants({
						intent: "primary",
						disabled: true,
						hoverable: false,
					})}
				>
					{title}
				</span>,
				ref
			);
		}

		if (link) {
			const { pathname, query } = link;

			return itemWrapper(
				<Link
					className={buttonVariants({ intent: "primary" })}
					href={{
						pathname,
						query,
					}}
				>
					{title}
				</Link>,
				ref
			);
		}
	}

	if (type === "handler") {
		const { data, initialItem } = props;
		const { title, slug, onSelect } = data;

		const active =
			initialItem === slug || (title === "All" && !initialItem);

		return itemWrapper(
			<button
				className={buttonVariants({
					intent: "handler",
					active,
					disabledHandler: active,
				})}
				onClick={() => onSelect?.(slug)}
				disabled={active}
				aria-disabled={active}
				tabIndex={active ? -1 : undefined}
			>
				{title}
			</button>,
			ref
		);
	}

	if (process.env.NODE_ENV === "development") {
		console.warn("Unhandled CarouselItemProps variant:", props);
	}

	return null;
};
