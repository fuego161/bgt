export class Seeder {
	static characterMap = {
		$: "dollar",
		"%": "percent",
		"&": "and",
		"<": "less",
		">": "greater",
		"|": "or",
		"¢": "cent",
		"£": "pound",
		"¥": "yen",
		"©": "(c)",
		"®": "(r)",
		"–": "-",
		"‘": "'",
		"’": "'",
		"“": '"',
		"”": '"',
		"„": '"',
		"•": "*",
		"…": "...",
	};

	/**
	 * Converts a string into a URL-safe slug
	 *
	 * @param title The title to slugify
	 * @param separator The character used to replace spaces (default is "-")
	 * @returns A lowercased, "slugified" string
	 */
	static slugify(title: string, separator = "-"): string {
		return title
			.trim()
			.normalize("NFC")
			.split("")
			.reduce((result, character) => {
				const newCharacter = Object.hasOwn(this.characterMap, character)
					? this.characterMap[
							character as keyof typeof this.characterMap
					  ]
					: character;

				return result + newCharacter;
			}, "")
			.replace(/[^\w\s$*_+~.'"\-]+/g, "")
			.replace(/\s+/g, separator)
			.toLocaleLowerCase();
	}

	static generateTitleWithSlug(
		title: string,
		separator = "-"
	): { title: string; slug: string } {
		if (!title) throw new Error("Title is required to generate a slug");

		return {
			title: title,
			slug: this.slugify(title, separator),
		};
	}

	/**
	 * Links a board game to multiple children (e.g. categories, mechanics)
	 *
	 * @param seedData The array which link objects will be pushed to
	 * @param gameSlug The slug of the game we're looking for
	 * @param childSlugs The slugs of the children to link
	 * @param gameMap A map of game slugs to their IDs
	 * @param childMap A map of child slugs to their IDs
	 * @param childKey The key representing the child in the link object
	 */
	linkBoardGameToMany<T extends { boardGameId: number }>(
		seedData: T[],
		gameSlug: string,
		childSlugs: string[],
		gameMap: Map<string, number>,
		childMap: Map<string, number>,
		childKey: keyof T
	) {
		// Attempt to get the game ID from the game map
		const gameId = gameMap.get(gameSlug);

		// If the game slug wasn't present within the game map, throw an error
		if (!gameId) throw new Error(`Missing Game: ${gameSlug}`);

		// Loop each child slug
		for (const childSlug of childSlugs) {
			// Attempt to get the child ID from the child map
			const childId = childMap.get(childSlug);

			// If the child slug wasn't present within the child map, throw an error
			if (!childId)
				throw new Error(
					`Missing Child: ${childSlug} | On Game: ${gameSlug}`
				);

			// If it was connect the parent ID to the child ID
			seedData.push({
				boardGameId: gameId,
				[childKey]: childId,
			} as T);
		}
	}
}
