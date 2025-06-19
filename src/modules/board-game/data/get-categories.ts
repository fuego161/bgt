import prisma from "@/lib/prisma";
import { CategorySummaryLink } from "@/types/ui/category-summary";

export const getCategories = async (
	categoryIds?: {
		categoryId: number;
	}[]
): Promise<CategorySummaryLink[]> => {
	return prisma.category.findMany({
		select: {
			title: true,
			slug: true,
		},
		where: categoryIds
			? {
					id: {
						in: categoryIds.map((category) => category.categoryId),
					},
			  }
			: undefined,
	});
};
