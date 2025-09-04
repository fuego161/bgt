import { PrismaClient } from "@prisma/client";

import { BoardGameCategorySeed } from "./seeds/BoardGameCategorySeed";
import { BoardGameMechanicSeed } from "./seeds/BoardGameMechanicSeed";
import { boardGameData } from "./seeds/BoardGameSeedData";
import { CategorySeed } from "./seeds/CategorySeed";
import { MechanicSeed } from "./seeds/MechanicSeed";
import { UserBoardGameSeed } from "./seeds/UserBoardGameSeed";
import { UserSeed } from "./seeds/UserSeed";

const prisma = new PrismaClient();

async function main() {
	const userSeed = new UserSeed(10);
	const usersData = await userSeed.createSeedData();

	const categorySeed = new CategorySeed().createSeedData();
	const mechanicSeed = new MechanicSeed().createSeedData();

	const boardGameCategorySeed = new BoardGameCategorySeed(boardGameData);
	const boardGameMechanicSeed = new BoardGameMechanicSeed(boardGameData);

	const userBoardGameSeed = new UserBoardGameSeed(boardGameData);

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
					snippet: game.snippet,
					publisherName: game.publisherName,
					designerName: game.designerName,
					minPlayers: game.minPlayers,
					maxPlayers: game.maxPlayers,
					isFeatured: game.isFeatured,
					imagePath: game.imagePath,
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

	const userBoardGameData = await userBoardGameSeed.createSeedData();
	console.log(
		`Seeding: User Board Games | ${userBoardGameData.length} Records`
	);
	await Promise.all(
		userBoardGameData.map((userBoardGame) =>
			prisma.userBoardGame.upsert({
				where: {
					userId_boardGameId: {
						userId: userBoardGame.userId,
						boardGameId: userBoardGame.boardGameId,
					},
				},
				update: {},
				create: userBoardGame,
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
