import type { Category, Mechanic } from "@prisma/client";

export type CategorySummary = Pick<Category, "id" | "title">;
export type MechanicSummary = Pick<Mechanic, "id" | "title">;

export type CategorySummaryLink = Pick<Category, "title" | "slug">;
export type MechanicSummaryLink = Pick<Mechanic, "title" | "slug">;

export type TaxonomyTypes = "category" | "mechanic";

export type TaxonomySummary =
	| ({ taxonomy: "category" } & CategorySummary)
	| ({ taxonomy: "mechanic" } & MechanicSummary);

export type TaxonomyLink =
	| ({ taxonomy: "category" } & CategorySummaryLink)
	| ({ taxonomy: "mechanic" } & MechanicSummaryLink);
