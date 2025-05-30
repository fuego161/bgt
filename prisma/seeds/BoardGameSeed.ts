import { Seeder } from './Seeder';

interface BoardGameData {
	title: string;
	slug: string;
	publisherName: string;
	designerName: string;
	minPlayers: number;
	maxPlayers: number;
}

export class BoardGameSeed extends Seeder {
	constructor() {
		super();
	}

	createSeedData(): BoardGameData[] {
		return [
			{
				title: "Arcs",
				slug: this.slugify("Arcs"),
				publisherName: "Leder Games",
				designerName: "Cole Wehrle",
				minPlayers: 2,
				maxPlayers: 4,
			},
			{
				title: "Bananagrams",
				slug: this.slugify("Bananagrams"),
				publisherName: "Bananagrams, Inc.",
				designerName: "Rena Nathanson",
				minPlayers: 1,
				maxPlayers: 8,
			},
			{
				title: "Blue Lagoon",
				slug: this.slugify("Blue Lagoon"),
				publisherName: "Blue Orange Games",
				designerName: "Reiner Knizia",
				minPlayers: 2,
				maxPlayers: 4,
			},
			{
				title: "Boggle",
				slug: this.slugify("Boggle"),
				publisherName: "Alga",
				designerName: "Bill Cooke",
				minPlayers: 1,
				maxPlayers: 8,
			},
			{
				title: "Boss Monster: The Dungeon Building Card Game",
				slug: this.slugify(
					"Boss Monster: The Dungeon Building Card Game"
				),
				publisherName: "Brotherwise Games",
				designerName: "Johnny O'Neal",
				minPlayers: 2,
				maxPlayers: 4,
			},
			{
				title: "Boss Monster 2: The Next Level",
				slug: this.slugify("Boss Monster 2: The Next Level"),
				publisherName: "Brotherwise Games",
				designerName: "Johnny O'Neal",
				minPlayers: 2,
				maxPlayers: 4,
			},
			{
				title: "Boss Monster: Paper & Pixels",
				slug: this.slugify("Boss Monster: Paper & Pixels"),
				publisherName: "Brotherwise Games",
				designerName: "Johnny O'Neal",
				minPlayers: 2,
				maxPlayers: 4,
			},
			{
				title: "Boss Monster: Tools of Hero-Kind",
				slug: this.slugify("Boss Monster: Tools of Hero-Kind"),
				publisherName: "Brotherwise Games",
				designerName: "Johnny O'Neal",
				minPlayers: 2,
				maxPlayers: 4,
			},
			{
				title: "Brass: Birmingham",
				slug: this.slugify("Brass: Birmingham"),
				publisherName: "Roxley",
				designerName: "Gavan Brown",
				minPlayers: 2,
				maxPlayers: 4,
			},
			{
				title: "Cat in the Box: Deluxe Edition",
				slug: this.slugify("Cat in the Box: Deluxe Edition"),
				publisherName: "Hobby Japan",
				designerName: "Muneyuki Yokouch",
				minPlayers: 2,
				maxPlayers: 5,
			},
			{
				title: "Clank! In! Space!: A Deck-Building Adventure",
				slug: this.slugify(
					"Clank! In! Space!: A Deck-Building Adventure"
				),
				publisherName: "Dire Wolf",
				designerName: "Paul Dennen",
				minPlayers: 2,
				maxPlayers: 4,
			},
			{
				title: "Clank! Legacy: Acquisitions Incorporated",
				slug: this.slugify("Clank! Legacy: Acquisitions Incorporated"),
				publisherName: "Dire Wolf",
				designerName: "Paul Dennen",
				minPlayers: 2,
				maxPlayers: 4,
			},
		];
	}
}
