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
	createSeedData(): BoardGameData[] {
		return [
			{
				...this.generateTitleWithSlug("Arcs"),
				publisherName: "Leder Games",
				designerName: "Cole Wehrle",
				minPlayers: 2,
				maxPlayers: 4,
			},
			{
				...this.generateTitleWithSlug("Bananagrams"),
				publisherName: "Bananagrams, Inc.",
				designerName: "Rena Nathanson",
				minPlayers: 1,
				maxPlayers: 8,
			},
			{
				...this.generateTitleWithSlug("Blue Lagoon"),
				publisherName: "Blue Orange Games",
				designerName: "Reiner Knizia",
				minPlayers: 2,
				maxPlayers: 4,
			},
			{
				...this.generateTitleWithSlug("Boggle"),
				publisherName: "Alga",
				designerName: "Bill Cooke",
				minPlayers: 1,
				maxPlayers: 8,
			},
			{
				...this.generateTitleWithSlug("Boss Monster: The Dungeon Building Card Game"),
				publisherName: "Brotherwise Games",
				designerName: "Johnny O'Neal",
				minPlayers: 2,
				maxPlayers: 4,
			},
			{
				...this.generateTitleWithSlug("Boss Monster 2: The Next Level"),
				publisherName: "Brotherwise Games",
				designerName: "Johnny O'Neal",
				minPlayers: 2,
				maxPlayers: 4,
			},
			{
				...this.generateTitleWithSlug("Boss Monster: Paper & Pixels"),
				publisherName: "Brotherwise Games",
				designerName: "Johnny O'Neal",
				minPlayers: 2,
				maxPlayers: 4,
			},
			{
				...this.generateTitleWithSlug("Boss Monster: Tools of Hero-Kind"),
				publisherName: "Brotherwise Games",
				designerName: "Johnny O'Neal",
				minPlayers: 2,
				maxPlayers: 4,
			},
			{
				...this.generateTitleWithSlug("Brass: Birmingham"),
				publisherName: "Roxley",
				designerName: "Gavan Brown",
				minPlayers: 2,
				maxPlayers: 4,
			},
			{
				...this.generateTitleWithSlug("Cat in the Box: Deluxe Edition"),
				publisherName: "Hobby Japan",
				designerName: "Muneyuki Yokouch",
				minPlayers: 2,
				maxPlayers: 5,
			},
			{
				...this.generateTitleWithSlug("Clank! In! Space!: A Deck-Building Adventure"),
				publisherName: "Dire Wolf",
				designerName: "Paul Dennen",
				minPlayers: 2,
				maxPlayers: 4,
			},
			{
				...this.generateTitleWithSlug("Clank! Legacy: Acquisitions Incorporated"),
				publisherName: "Dire Wolf",
				designerName: "Paul Dennen",
				minPlayers: 2,
				maxPlayers: 4,
			},
		];
	}
}
