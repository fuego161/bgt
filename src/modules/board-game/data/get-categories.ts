import prisma from "@/lib/prisma";

type Category = {
	title: string;
	slug: string;
};

export const getCategories = async (
	categoryIds: {
		categoryId: number;
	}[]
): Promise<Category[]> => {
	return prisma.category.findMany({
		select: {
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
