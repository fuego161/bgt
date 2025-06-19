import type { Category } from "@prisma/client";

export type CategorySummary = Pick<Category, "id" | "title">;

export type CategorySummaryLink = Pick<Category, "title" | "slug">;
