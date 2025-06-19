import prisma from "@/lib/prisma";
import { CategorySummary } from "@/types/ui/category-summary";

export const getCategories = async (
	categoryIds: {
		categoryId: number;
	}[]
): Promise<CategorySummary[]> => {
	return prisma.category.findMany({
		select: {
			id: true,
			title: true,
			slug: true,
		},
		where: {
			id: {
				in: categoryIds.map((category) => category.categoryId),
			},
		},
	});
};
