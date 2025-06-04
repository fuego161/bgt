import prisma from "@/lib/prisma";
const Page = async () => {
	const boardGames = await prisma.boardGame.findMany();

	return (
		<div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center -mt-16">
			<h1 className="text-4xl font-bold mb-8 font-[family-name:var(--font-geist-sans)] text-[#333333]">
				BGT
			</h1>

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
		</div>
	);
};

export default Page;
