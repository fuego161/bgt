import { Seeder } from './Seeder';

interface CategoryData {
	title: string;
	slug: string;
}

export class CategorySeed extends Seeder {
	createSeedData(): CategoryData[] {
		return [
			{ ...this.generateTitleWithSlug("Abstract Strategy") },
			{ ...this.generateTitleWithSlug("Adventure") },
			{ ...this.generateTitleWithSlug("Animals") },
			{ ...this.generateTitleWithSlug("Card Game") },
			{ ...this.generateTitleWithSlug("City Building") },
			{ ...this.generateTitleWithSlug("Civilization") },
			{ ...this.generateTitleWithSlug("Deduction") },
			{ ...this.generateTitleWithSlug("Economic") },
			{ ...this.generateTitleWithSlug("Environmental") },
			{ ...this.generateTitleWithSlug("Expansion for Base-game") },
			{ ...this.generateTitleWithSlug("Exploration") },
			{ ...this.generateTitleWithSlug("Fantasy") },
			{ ...this.generateTitleWithSlug("Farming") },
			{ ...this.generateTitleWithSlug("Fighting") },
			{ ...this.generateTitleWithSlug("Horror") },
			{ ...this.generateTitleWithSlug("Industry / Manufacturing") },
			{ ...this.generateTitleWithSlug("Medical") },
			{ ...this.generateTitleWithSlug("Movies / TV / Radio") },
			{ ...this.generateTitleWithSlug("Murder / Mystery") },
			{ ...this.generateTitleWithSlug("Music") },
			{ ...this.generateTitleWithSlug("Mythology") },
			{ ...this.generateTitleWithSlug("Nautical") },
			{ ...this.generateTitleWithSlug("Negotiation") },
			{ ...this.generateTitleWithSlug("Novel-based") },
			{ ...this.generateTitleWithSlug("Party Game") },
			{ ...this.generateTitleWithSlug("Political") },
			{ ...this.generateTitleWithSlug("Puzzle") },
			{ ...this.generateTitleWithSlug("Racing") },
			{ ...this.generateTitleWithSlug("Real-time") },
			{ ...this.generateTitleWithSlug("Science Fiction") },
			{ ...this.generateTitleWithSlug("Space Exploration") },
			{ ...this.generateTitleWithSlug("Spies / Secret Agents") },
			{ ...this.generateTitleWithSlug("Sports") },
			{ ...this.generateTitleWithSlug("Territory Building") },
			{ ...this.generateTitleWithSlug("Trains") },
			{ ...this.generateTitleWithSlug("Transportation") },
			{ ...this.generateTitleWithSlug("Travel") },
			{ ...this.generateTitleWithSlug("Trivia") },
			{ ...this.generateTitleWithSlug("Video Game") },
			{ ...this.generateTitleWithSlug("Wargame") },
			{ ...this.generateTitleWithSlug("Word Game") },
			{ ...this.generateTitleWithSlug("Zombies") },
		];
	}
}
