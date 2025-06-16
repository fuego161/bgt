import type { BoardGame } from "@prisma/client";

export type BoardGameListItem = Pick<
	BoardGame,
	| "id"
	| "title"
	| "slug"
	| "designerName"
	| "publisherName"
	| "minPlayers"
	| "maxPlayers"
>;
