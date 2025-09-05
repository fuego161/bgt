"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";

import { buttonVariants } from "@/components/ui/button/button-variants";

import type {
	CarouselItemLinkProps,
	CarouselItemHandlerProps,
	CarouselItemCardProps,
} from "@/types/ui/carousel";
import type { ReactElement } from "react";
import { CarouselCard } from "@/components/ui/carousel/card";

interface CarouselItemPropsBase {
	gapSize: number;
	fixedSize?: number | false;
}
type CarouselItemPropsVariant =
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
	  }
	| {
			type: "card";
			data: CarouselItemCardProps;
			initialItem?: string;
			collectSize: (index: number) => (size: number) => void;
			index: number;
	  };

type CarouselItemProps = CarouselItemPropsBase & CarouselItemPropsVariant;

const widthMap: Record<number, Record<string, string>> = {
	1: {
		width: "w-full",
		min: "min-w-full",
		max: "max-w-full",
	},
	2: {
		width: "w-1/2",
		min: "min-w-1/2",
		max: "max-w-1/2",
	},
	3: {
		width: "w-1/3",
		min: "min-w-1/3",
		max: "max-w-1/3",
	},
	4: {
		width: "w-1/4",
		min: "min-w-1/4",
		max: "max-w-1/4",
	},
	5: {
		width: "w-1/5",
		min: "min-w-1/5",
		max: "max-w-1/5",
	},
	6: {
		width: "w-1/6",
		min: "min-w-1/6",
		max: "max-w-1/6",
	},
};

const itemWrapper = (
	item: ReactElement,
	gapSize: number,
	fixedSize?: number | false,
	ref?: React.RefObject<HTMLLIElement | null>
): ReactElement => {
	const fixedWidth = fixedSize
		? `${widthMap[fixedSize].width} ${widthMap[fixedSize].min} ${widthMap[fixedSize].max}`
		: "";

	return (
		<li
			ref={ref}
			className={`${fixedWidth}`}
			style={{ marginRight: gapSize }}
		>
			{item}
		</li>
	);
};

export const CarouselItem = (props: CarouselItemProps) => {
	const ref = useRef<HTMLLIElement | null>(null);

	const { type, collectSize, index, gapSize, fixedSize } = props;

	if (type === "card") {
		console.log({
			props: props,
			fixedSize: props.fixedSize,
		});
	}

	useEffect(() => {
		if (ref.current && type !== "loader") {
			const width = ref.current.getBoundingClientRect().width;
			collectSize(index)(width);
		}
	}, [type, collectSize, index]);

	if (type === "loader") {
		return itemWrapper(
			<button
				className={buttonVariants({
					intent: "secondary",
					hoverable: false,
					handler: false,
					disabled: true,
					skeleton: true,
				})}
				disabled
				aria-disabled="true"
				aria-hidden="true"
				tabIndex={-1}
			>
				&nbsp;
			</button>,
			gapSize,
			fixedSize
		);
	}

	if (type === "link") {
		const { title, link, disabled } = props.data;

		if (disabled) {
			return itemWrapper(
				<span
					className={buttonVariants({
						intent: "secondary",
						disabled: true,
						hoverable: false,
						handler: false,
					})}
				>
					{title}
				</span>,
				gapSize,
				fixedSize,
				ref
			);
		}

		if (link) {
			const { pathname, query } = link;

			return itemWrapper(
				<Link
					className={buttonVariants({ intent: "secondary" })}
					href={{
						pathname,
						query,
					}}
				>
					{title}
				</Link>,
				gapSize,
				fixedSize,
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
					intent: "secondary",
					active,
					handler: !active,
					disabledHandler: active,
					hoverable: !active,
				})}
				onClick={() => onSelect?.(slug)}
				disabled={active}
				aria-disabled={active}
				tabIndex={active ? -1 : undefined}
			>
				{title}
			</button>,
			gapSize,
			fixedSize,
			ref
		);
	}

	if (type === "card") {
		const { data } = props;

		return itemWrapper(
			<CarouselCard data={data} />,
			gapSize,
			fixedSize,
			ref
		);
	}

	if (process.env.NODE_ENV === "development") {
		console.warn("Unhandled CarouselItemProps variant:", props);
	}

	return null;
};
