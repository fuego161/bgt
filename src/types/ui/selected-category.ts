import type { Category } from "@prisma/client";

export type SelectedCategory = Pick<Category, "id" | "title"> | null;
