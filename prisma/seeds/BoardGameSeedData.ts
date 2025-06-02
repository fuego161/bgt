import { BoardGameSeedData } from '@/types/board-game-seed';

export const boardGameData: BoardGameSeedData[] = [
	{
		gameSlug: "arcs",
		categorySlugs: ["science-fiction", "space-exploration", "wargame"],
		mechanicSlugs: [
			"area-majority-influence",
			"area-movement",
			"campaign-battle-card-driven",
			"dice-rolling",
			"die-icon-resolution",
			"hand-management",
			"take-that",
			"trick-taking",
			"turn-order-claim-action",
			"variable-player-powers",
		],
	},
	{
		gameSlug: "bananagrams",
		categorySlugs: ["real-time", "word-game"],
		mechanicSlugs: ["race", "spelling", "tile-placement"],
	},
	{
		gameSlug: "blue-lagoon",
		categorySlugs: ["abstract-strategy"],
		mechanicSlugs: [
			"area-majority-influence",
			"chaining",
			"connections",
			"end-game-bonuses",
			"hexagon-grid",
			"network-and-route-building",
			"score-and-reset-game",
			"set-collection",
			"variable-set-up",
		],
	},
];
