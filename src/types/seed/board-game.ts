export interface BoardGameSeedData {
	title: string;
	slug: string;
	publisherName: string;
	designerName: string;
	minPlayers: number;
	maxPlayers: number;
	categorySlugs: string[];
	mechanicSlugs: string[];
}
