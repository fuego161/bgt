import prisma from "@/lib/prisma";
import type { BoardGame, BoardGameCategory } from "@prisma/client";

interface BoardGameTableProps {
	category?: string;
}

type boardGamesProps = (BoardGameCategory[] & BoardGame[]) | BoardGame[];

export const BoardGameTable = async ({ category }: BoardGameTableProps) => {
	let boardGames: boardGamesProps;
	let categoryId: { id: number } | null = null;

	if (category) {
		categoryId = await prisma.category.findUnique({
			select: {
				id: true,
			},
			where: {
				slug: category,
			},
		});
	}

	if (categoryId) {
		boardGames = await prisma.boardGame.findMany({
			where: {
				boardGameCategories: {
					some: {
						categoryId: categoryId.id,
					},
				},
			},
			include: {
				boardGameCategories: true,
			},
		});
	} else {
		boardGames = await prisma.boardGame.findMany();
	}

	return (
		<table>
			<thead>
				<tr>
					<th>Title</th>
					<th>Player Count</th>
					<th>Designer</th>
					<th>Publisher</th>
				</tr>
			</thead>
			<tbody>
				{boardGames.map((game) => (
					<tr key={game.id}>
						<td>{game.title}</td>
						<td>
							{game.minPlayers === game.maxPlayers
								? game.maxPlayers
								: `${game.minPlayers} - ${game.maxPlayers}`}
						</td>
						<td>{game.designerName}</td>
						<td>{game.publisherName}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};
