import { cva } from "class-variance-authority";

export const buttonVariants = cva(
	"block border-zinc-600 border-2 text-center whitespace-nowrap",
	{
		variants: {
			intent: {
				primary: null,
				skeleton: "w-[100px] animate-pulse",
				handler: "cursor-pointer",
			},
			active: {
				true: "bg-white text-zinc-800 hover:text-white",
				false: "bg-zinc-600 text-white",
			},
			disabled: {
				false: null,
				true: "opacity-75 cursor-not-allowed",
			},
			disabledHandler: {
				false: null,
				true: "pointer-events-none",
			},
			hoverable: {
				true: "transition-colors duration-300 hover:bg-zinc-600/80",
				false: null,
			},
			circle: {
				true: "rounded-full",
				false: "rounded-sm px-4 py-1",
			},
		},
		defaultVariants: {
			intent: "primary",
			active: false,
			disabled: false,
			disabledHandler: false,
			hoverable: true,
			circle: false,
		},
	}
);
