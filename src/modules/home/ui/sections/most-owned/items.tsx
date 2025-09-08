import prisma from "@/lib/prisma";

import { Carousel } from "@/components/ui/carousel";
import { OwnershipState } from "@/types/ownership-state";

import type { BoardGame } from "@prisma/client";
import type { CarouselItemCardProps } from "@/types/ui/carousel";

type MostOwnedGame = Pick<
	BoardGame,
	"id" | "title" | "snippet" | "slug" | "imagePath"
>;

const toCarouselData = (
	title: string,
	snippet: string,
	slug: string,
	imagePath: string
): CarouselItemCardProps => ({
	title,
	slug,
	imagePath,
	snippet,
});

export const MostOwnedCarouselItems = async () => {
	// Get most owned board game IDs (ordered by count desc)
	const mostOwned = await prisma.userBoardGame.groupBy({
		by: ["boardGameId"],
		_count: {
			boardGameId: true,
		},
		where: {
			status: OwnershipState.Owned,
		},
		orderBy: {
			_count: {
				boardGameId: "desc",
			},
		},
		take: 10,
	});

	const mostOwnedIds = mostOwned.map((game) => game.boardGameId);

	// Collect the BoardGame entries matching the most owned IDs
	const mostOwnedGames: MostOwnedGame[] = await prisma.boardGame.findMany({
		select: {
			id: true,
			title: true,
			snippet: true,
			slug: true,
			imagePath: true,
		},
		where: {
			id: { in: mostOwnedIds },
		},
		orderBy: {},
	});

	// Create a mapping of BoardGame ID to BoardGame
	const gamesById = new Map(mostOwnedGames.map((g) => [g.id, g]));

	// Reorder games to match ID order
	// DB integrity guarantees IDs match, so missing IDs mean corrupted data. Throw to catch inconsistencies early and satisfy TS
	const orderedGames = mostOwnedIds.map((id) => {
		const game = gamesById.get(id);

		if (!game) throw new Error(`BoardGame with ID ${id} not found`);

		return game;
	});

	if (!orderedGames.length) {
		return (
			<h1>
				Hmm, we're not quite sure on the most owned game right now!
				Check back later
			</h1>
		);
	}

	const mostOwnedCards: CarouselItemCardProps[] = orderedGames.map(
		({ title, snippet, slug, imagePath }) =>
			toCarouselData(title, snippet, slug, imagePath)
	);

	return (
		<Carousel
			ariaLabel="Most Owned Games"
			data={mostOwnedCards}
			fixedSize={4}
			type="card"
		/>
	);
};
