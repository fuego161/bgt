import prisma from "@/lib/prisma";

export const getSelectedCategory = (category?: string) => {
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
