import type { BoardGame } from "@prisma/client";

export type BoardGameData = Pick<
	BoardGame,
	| "id"
	| "title"
	| "slug"
	| "designerName"
	| "publisherName"
	| "minPlayers"
	| "maxPlayers"
>;
