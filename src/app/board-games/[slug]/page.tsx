import { BoardGameView } from "@/modules/board-game/ui/views/board-game-view";

interface PageProps {
	params: Promise<{ slug: string }>;
}

const Page = async ({ params }: PageProps) => {
	const { slug } = await params;

	return <BoardGameView slug={slug} />;
};

export default Page;
