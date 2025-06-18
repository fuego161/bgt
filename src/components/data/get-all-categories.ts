import prisma from "@/lib/prisma";

import type { Category } from "@prisma/client";

export const getAllCategories = async (): Promise<Category[]> => {
	return prisma.category.findMany({
		orderBy: [
			{
				title: "asc",
			},
		],
	});
};
