import { PrismaClient } from "@prisma/client";
import { boardGameData } from './seeds/BoardGameSeedData';
import { UserSeed } from "./seeds/UserSeed";
import { CategorySeed } from "./seeds/CategorySeed";
import { MechanicSeed } from "./seeds/MechanicSeed";
import { BoardGameCategorySeed } from "./seeds/BoardGameCategorySeed";
import { BoardGameMechanicSeed } from "./seeds/BoardGameMechanicSeed";

const prisma = new PrismaClient();

async function main() {
	const userSeed = new UserSeed(10);
	const usersData = await userSeed.createSeedData();

	const categorySeed = new CategorySeed().createSeedData();
	const mechanicSeed = new MechanicSeed().createSeedData();

	const boardGameCategorySeed = new BoardGameCategorySeed(boardGameData);
	const boardGameMechanicSeed = new BoardGameMechanicSeed(boardGameData);

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

	console.log(`Seeding: Board Games | ${boardGameData.length} Records`);
	await Promise.all(
		boardGameData.map((game) =>
			prisma.boardGame.upsert({
				where: { slug: game.slug },
				update: {},
				create: {
					title: game.title,
					slug: game.slug,
					publisherName: game.publisherName,
					designerName: game.designerName,
					minPlayers: game.minPlayers,
					maxPlayers: game.maxPlayers,
				},
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

	const boardGameCategoryData = await boardGameCategorySeed.createSeedData();
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

	const boardGameMechanicData = await boardGameMechanicSeed.createSeedData();
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
