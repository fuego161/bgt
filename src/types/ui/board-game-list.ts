import type { BoardGame } from "@prisma/client";

export type BoardGameListItem = Pick<
	BoardGame,
	| "id"
	| "title"
	| "designerName"
	| "publisherName"
	| "minPlayers"
	| "maxPlayers"
>;
