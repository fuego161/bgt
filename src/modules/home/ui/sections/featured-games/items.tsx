import prisma from "@/lib/prisma";

import { Carousel } from "@/components/ui/carousel";

import type { BoardGame } from "@prisma/client";
import type { CarouselItemCardProps } from "@/types/ui/carousel";
import { faker } from "@faker-js/faker";

type FeaturedGame = Pick<BoardGame, "id" | "title" | "slug">;

const tempImages = [
	"arcs",
	"azul",
	"gloomhaven",
	"hero-realms",
	"pandemic-legacy",
	"root",
];

const getRandomInt = (min: number, max: number) => {
	const minCeil = Math.ceil(min);
	const maxFloor = Math.floor(max);
	return Math.floor(Math.random() * (maxFloor - minCeil) + minCeil); // The maximum is exclusive and the minimum is inclusive
};

const toCarouselData = (
	title: string,
	slug: string
): CarouselItemCardProps => ({
	title,
	slug,
	// TODO: Update imagePath to be DB collected
	imagePath: `/home/${tempImages[getRandomInt(0, 6)]}.png`,
	// TODO: Update snippet to be DB collected
	snippet: faker.lorem.sentence({ min: 10, max: 20 }),
});

export const FeaturedGamesCarouselItems = async () => {
	const featuredGames: FeaturedGame[] = await prisma.boardGame.findMany({
		select: {
			id: true,
			title: true,
			slug: true,
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

	const featuredGameCards: CarouselItemCardProps[] = [];

	featuredGameCards.push(
		...featuredGames.map(({ title, slug }) => toCarouselData(title, slug))
	);

	return (
		<Carousel
			ariaLabel="Featured Games"
			data={featuredGameCards}
			type="card"
		/>
	);
};
