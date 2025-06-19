import prisma from "@/lib/prisma";

import type { CategorySummary } from "@/types/ui/category-summary";

export const getSelectedCategory = (
	category?: string
): Promise<CategorySummary | null> | null => {
	return category
		? prisma.category.findUnique({
				select: {
					id: true,
					title: true,
				},
				where: {
					slug: category,
				},
		  })
		: null;
};
