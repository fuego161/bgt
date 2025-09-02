export interface BoardGameSeedData {
	title: string;
	slug: string;
	publisherName: string;
	designerName: string;
	minPlayers: number;
	maxPlayers: number;
	isFeatured: boolean;
	categorySlugs: string[];
	mechanicSlugs: string[];
}
