import { cva } from "class-variance-authority";

export const buttonVariants = cva(
	"block px-4 py-1 border-zinc-600 border-2 rounded-sm text-center whitespace-nowrap",
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
				true: "transition-colors hover:bg-zinc-600/80",
				false: null,
			},
		},
		defaultVariants: {
			intent: "primary",
			active: false,
			disabled: false,
			disabledHandler: false,
			hoverable: true,
		},
	}
);
