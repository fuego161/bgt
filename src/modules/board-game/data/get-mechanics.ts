import prisma from "@/lib/prisma";

type Mechanic = {
	title: string;
	slug: string;
};

export const getMechanics = async (
	mechanicIds: {
		mechanicId: number;
	}[]
): Promise<Mechanic[]> => {
	return prisma.mechanic.findMany({
		select: {
			title: true,
			slug: true,
		},
		where: {
			id: {
				in: mechanicIds.map((mechanic) => mechanic.mechanicId),
			},
		},
	});
};
