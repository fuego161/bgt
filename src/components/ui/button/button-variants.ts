import { cva } from "class-variance-authority";

export const buttonVariants = cva(
	"block border-2 text-center whitespace-nowrap",
	{
		variants: {
			intent: {
				primary: null,
				secondary: null,
			},
			active: {
				true: null,
				false: null,
			},
			disabled: {
				true: "opacity-75 cursor-not-allowed",
				false: null,
			},
			handler: {
				true: "cursor-pointer",
				false: null,
			},
			disabledHandler: {
				true: "pointer-events-none",
				false: null,
			},
			hoverable: {
				true: null,
				false: null,
			},
			skeleton: {
				true: "w-[100px] animate-pulse",
				false: null,
			},
			circle: {
				true: "rounded-full",
				false: "rounded-md px-4 py-1",
			},
		},
		compoundVariants: [
			// Primary
			// Active
			{
				intent: "primary",
				active: false,
				class: "bg-main border-main text-white",
			},
			{
				intent: "primary",
				active: true,
				class: "bg-light border-light text-main",
			},
			// Hover
			{
				intent: "primary",
				hoverable: true,
				class: "hover:bg-light hover:text-main transition-colors duration-300",
			},

			// Secondary
			// Active
			{
				intent: "secondary",
				active: false,
				class: "bg-light border-light text-main",
			},
			{
				intent: "secondary",
				active: true,
				class: "bg-main border-main text-white",
			},
			// Hover
			{
				intent: "secondary",
				hoverable: true,
				class: "hover:bg-main hover:border-main hover:text-white transition-colors duration-300",
			},
		],
		defaultVariants: {
			intent: "primary",
			active: false,
			disabled: false,
			handler: true,
			disabledHandler: false,
			hoverable: true,
			skeleton: false,
			circle: false,
		},
	}
);
