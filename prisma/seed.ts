import { PrismaClient } from "@prisma/client";
import { UserSeed } from "./seeds/UserSeed";
import { BoardGameSeed } from "./seeds/BoardGameSeed";

const prisma = new PrismaClient();

async function main() {
	const userSeed = new UserSeed(10);
	const usersData = await userSeed.createSeedData();

	const boardGameSeed = new BoardGameSeed().createSeedData();

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
