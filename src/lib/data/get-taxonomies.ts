import { Prisma } from "@prisma/client";

import prisma from "@/lib/prisma";

import type { TaxonomyTypes, TaxonomyLink } from "@/types/ui/taxonomy-summary";

export const getTaxonomies = async (
	taxonomy: TaxonomyTypes
): Promise<TaxonomyLink[] | undefined> => {
	const query: Prisma.CategoryFindManyArgs | Prisma.MechanicFindManyArgs = {
		select: {
			title: true,
			slug: true,
		},
		orderBy: { title: "asc" },
	};

	if (taxonomy === "category") {
		const firedQuery = await prisma.category.findMany({
			...(query as Prisma.CategoryFindManyArgs),
		});

		return firedQuery.map((tax) => ({ ...tax, taxonomy }));
	}

	if (taxonomy === "mechanic") {
		const firedQuery = await prisma.mechanic.findMany({
			...(query as Prisma.MechanicFindManyArgs),
		});

		return firedQuery.map((tax) => ({ ...tax, taxonomy }));
	}

	return;
};
