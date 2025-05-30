export class Seeder {
	private characterMap = {
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

	constructor() {}

	slugify(title: string, separator = "-"): string {
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
}
