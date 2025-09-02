import { Seeder } from "./Seeder";

interface CategoryData {
	title: string;
	slug: string;
}

export class CategorySeed extends Seeder {
	createSeedData(): CategoryData[] {
		return [
			{ ...CategorySeed.generateTitleWithSlug("Abstract Strategy") },
			{ ...CategorySeed.generateTitleWithSlug("Adventure") },
			{ ...CategorySeed.generateTitleWithSlug("Animals") },
			{ ...CategorySeed.generateTitleWithSlug("Card Game") },
			{ ...CategorySeed.generateTitleWithSlug("City Building") },
			{ ...CategorySeed.generateTitleWithSlug("Civilization") },
			{ ...CategorySeed.generateTitleWithSlug("Comic Book / Strip") },
			{ ...CategorySeed.generateTitleWithSlug("Deduction") },
			{ ...CategorySeed.generateTitleWithSlug("Economic") },
			{ ...CategorySeed.generateTitleWithSlug("Environmental") },
			{
				...CategorySeed.generateTitleWithSlug(
					"Expansion for Base-game"
				),
			},
			{ ...CategorySeed.generateTitleWithSlug("Exploration") },
			{ ...CategorySeed.generateTitleWithSlug("Fantasy") },
			{ ...CategorySeed.generateTitleWithSlug("Farming") },
			{ ...CategorySeed.generateTitleWithSlug("Fighting") },
			{ ...CategorySeed.generateTitleWithSlug("Horror") },
			{
				...CategorySeed.generateTitleWithSlug(
					"Industry / Manufacturing"
				),
			},
			{ ...CategorySeed.generateTitleWithSlug("Medical") },
			{ ...CategorySeed.generateTitleWithSlug("Movies / TV / Radio") },
			{ ...CategorySeed.generateTitleWithSlug("Murder / Mystery") },
			{ ...CategorySeed.generateTitleWithSlug("Music") },
			{ ...CategorySeed.generateTitleWithSlug("Mythology") },
			{ ...CategorySeed.generateTitleWithSlug("Nautical") },
			{ ...CategorySeed.generateTitleWithSlug("Negotiation") },
			{ ...CategorySeed.generateTitleWithSlug("Novel-based") },
			{ ...CategorySeed.generateTitleWithSlug("Party Game") },
			{ ...CategorySeed.generateTitleWithSlug("Political") },
			{ ...CategorySeed.generateTitleWithSlug("Puzzle") },
			{ ...CategorySeed.generateTitleWithSlug("Racing") },
			{ ...CategorySeed.generateTitleWithSlug("Real-time") },
			{ ...CategorySeed.generateTitleWithSlug("Science Fiction") },
			{ ...CategorySeed.generateTitleWithSlug("Space Exploration") },
			{ ...CategorySeed.generateTitleWithSlug("Spies / Secret Agents") },
			{ ...CategorySeed.generateTitleWithSlug("Sports") },
			{ ...CategorySeed.generateTitleWithSlug("Territory Building") },
			{ ...CategorySeed.generateTitleWithSlug("Trains") },
			{ ...CategorySeed.generateTitleWithSlug("Transportation") },
			{ ...CategorySeed.generateTitleWithSlug("Travel") },
			{ ...CategorySeed.generateTitleWithSlug("Trivia") },
			{ ...CategorySeed.generateTitleWithSlug("Video Game") },
			{ ...CategorySeed.generateTitleWithSlug("Wargame") },
			{ ...CategorySeed.generateTitleWithSlug("Word Game") },
			{ ...CategorySeed.generateTitleWithSlug("Zombies") },
		];
	}
}
