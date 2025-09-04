export interface BoardGameSeedData {
	title: string;
	slug: string;
	snippet: string;
	publisherName: string;
	designerName: string;
	minPlayers: number;
	maxPlayers: number;
	isFeatured: boolean;
	imagePath: string;
	categorySlugs: string[];
	mechanicSlugs: string[];
}
