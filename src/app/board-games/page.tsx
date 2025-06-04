import { BoardGamesView } from "@/modules/board-games/ui/views/board-games-view";

interface PageProps {
	searchParams: Promise<{ category?: string }>;
}

const Page = async ({ searchParams }: PageProps) => {
	const { category } = await searchParams;

	return <BoardGamesView category={category} />;
};

export default Page;
