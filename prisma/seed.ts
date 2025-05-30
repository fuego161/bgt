import { PrismaClient } from "@prisma/client";
import { UserSeed } from "./seeds/UserSeed";
import { BoardGameSeed } from "./seeds/BoardGameSeed";
import { CategorySeed } from "./seeds/CategorySeed";
import { MechanicSeed } from "./seeds/MechanicSeed";

const prisma = new PrismaClient();

async function main() {
	const userSeed = new UserSeed(10);
	const usersData = await userSeed.createSeedData();

	const boardGameSeed = new BoardGameSeed().createSeedData();
	const categorySeed = new CategorySeed().createSeedData();
	const mechanicSeed = new MechanicSeed().createSeedData();

	console.log(`Seeding: Users | ${usersData.length} Records`);
	await Promise.all(
		usersData.map((user) =>
			prisma.user.upsert({
				where: { email: user.email },
				update: {},
				create: user,
			})
		)
	);

	console.log(`Seeding: Board Games | ${boardGameSeed.length} Records`);
	await Promise.all(
		boardGameSeed.map((game) =>
			prisma.boardGame.upsert({
				where: { slug: game.slug },
				update: {},
				create: game,
			})
		)
	);

	console.log(`Seeding: Category | ${categorySeed.length} Records`);
	await Promise.all(
		categorySeed.map((category) =>
			prisma.category.upsert({
				where: { slug: category.slug },
				update: {},
				create: category,
			})
		)
	);

	console.log(`Seeding: Mechanic | ${mechanicSeed.length} Records`);
	await Promise.all(
		mechanicSeed.map((mechanic) =>
			prisma.mechanic.upsert({
				where: { slug: mechanic.slug },
				update: {},
				create: mechanic,
			})
		)
	);
}

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error("Seeding failed:", e.message);
		console.error(e.stack);

		await prisma.$disconnect();

		process.exit(1);
	});
