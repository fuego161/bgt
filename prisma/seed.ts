import { PrismaClient } from "@prisma/client";
import { boardGameData } from './seeds/BoardGameSeedData';
import { UserSeed } from "./seeds/UserSeed";
import { BoardGameSeed } from "./seeds/BoardGameSeed";
import { CategorySeed } from "./seeds/CategorySeed";
import { MechanicSeed } from "./seeds/MechanicSeed";
import { BoardGameCategorySeed } from "./seeds/BoardGameCategorySeed";
import { BoardGameMechanicSeed } from "./seeds/BoardGameMechanicSeed";

const prisma = new PrismaClient();

async function main() {
	const userSeed = new UserSeed(10);
	const usersData = await userSeed.createSeedData();

	const boardGameSeed = new BoardGameSeed().createSeedData();
	const categorySeed = new CategorySeed().createSeedData();
	const mechanicSeed = new MechanicSeed().createSeedData();

	const boardGameCategorySeed = new BoardGameCategorySeed(boardGameData);
	const boardGameCategoryData = await boardGameCategorySeed.createSeedData();

	const boardGameMechanicSeed = new BoardGameMechanicSeed(boardGameData);
	const boardGameMechanicData = await boardGameMechanicSeed.createSeedData();

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

	console.log(
		`Seeding: Board Game Categories | ${boardGameCategoryData.length} Records`
	);
	await Promise.all(
		boardGameCategoryData.map((boardGameCat) =>
			prisma.boardGameCategory.upsert({
				where: {
					boardGameCategoryId: {
						categoryId: boardGameCat.categoryId,
						boardGameId: boardGameCat.boardGameId,
					},
				},
				update: {},
				create: boardGameCat,
			})
		)
	);

	console.log(
		`Seeding: Board Game Mechanics | ${boardGameMechanicData.length} Records`
	);
	await Promise.all(
		boardGameMechanicData.map((boardGameMechanic) =>
			prisma.boardGameMechanic.upsert({
				where: {
					boardGameMechanicId: {
						mechanicId: boardGameMechanic.mechanicId,
						boardGameId: boardGameMechanic.boardGameId,
					},
				},
				update: {},
				create: boardGameMechanic,
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
