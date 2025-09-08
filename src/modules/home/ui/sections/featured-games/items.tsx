import prisma from "@/lib/prisma";

import { Carousel } from "@/components/ui/carousel";

import type { BoardGame } from "@prisma/client";
import type { CarouselItemCardProps } from "@/types/ui/carousel";

type FeaturedGame = Pick<
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

export const FeaturedGamesCarouselItems = async () => {
	const featuredGames: FeaturedGame[] = await prisma.boardGame.findMany({
		select: {
			id: true,
			title: true,
			snippet: true,
			slug: true,
			imagePath: true,
		},
		where: {
			isFeatured: true,
		},
		orderBy: { title: "asc" },
	});

	if (!featuredGames.length) {
		return (
			<h1>
				There's currently no featured games! Check back later to see
				what's hot.
			</h1>
		);
	}

	const featuredGameCards: CarouselItemCardProps[] = featuredGames.map(
		({ title, snippet, slug, imagePath }) =>
			toCarouselData(title, snippet, slug, imagePath)
	);

	return (
		<Carousel
			ariaLabel="Featured Games"
			data={featuredGameCards}
			fixedSize={4}
			type="card"
		/>
	);
};
