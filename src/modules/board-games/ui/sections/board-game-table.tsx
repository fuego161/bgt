import prisma from "@/lib/prisma";

interface BoardGameTableProps {
	category?: string;
}

export const BoardGameTable = async ({ category }: BoardGameTableProps) => {
	const selectedCategory = category
		? await prisma.category.findUnique({
				select: {
					id: true,
					title: true,
				},
				where: {
					slug: category,
				},
		  })
		: null;

	const boardGames = await prisma.boardGame.findMany({
		where: selectedCategory
			? {
					boardGameCategories: {
						some: {
							categoryId: selectedCategory.id,
						},
					},
			  }
			: undefined,
	});

	if (!boardGames.length) return <p>No Results!</p>;

	return (
		<table>
			<caption className="sr-only">
				List of board games{" "}
				{selectedCategory &&
					`categorised under ${selectedCategory.title}`}
			</caption>
			<thead>
				<tr>
					<th scope="col">Title</th>
					<th scope="col">Player Count</th>
					<th scope="col">Designer</th>
					<th scope="col">Publisher</th>
				</tr>
			</thead>
			<tbody>
				{boardGames.map((game) => (
					<tr key={game.id}>
						<td scope="row">{game.title}</td>
						<td scope="row">
							{game.minPlayers === game.maxPlayers
								? game.maxPlayers
								: `${game.minPlayers} - ${game.maxPlayers}`}
						</td>
						<td scope="row">{game.designerName}</td>
						<td scope="row">{game.publisherName}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};
