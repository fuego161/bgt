import prisma from "@/lib/prisma";

import type { SelectedCategory } from "@/types/ui/selected-category";

export const getSelectedCategory = (
	category?: string
): Promise<SelectedCategory> | null => {
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
