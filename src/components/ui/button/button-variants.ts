import { cva } from "class-variance-authority";

export const buttonVariants = cva(
	"block px-4 py-1 bg-zinc-600 border-zinc-600 border-2 rounded-sm text-white text-center whitespace-nowrap",
	{
		variants: {
			intent: {
				primary: null,
				loading: "w-[100px] animate-pulse",
				handler: "cursor-pointer",
			},
			disabled: {
				false: null,
				true: "opacity-75 cursor-not-allowed",
			},
			hoverable: {
				true: "transition-colors hover:bg-zinc-600/80",
				false: null,
			},
		},
		defaultVariants: {
			disabled: false,
			intent: "primary",
			hoverable: true,
		},
	}
);
