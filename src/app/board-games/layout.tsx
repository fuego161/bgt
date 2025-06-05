import { BoardGamesLayout } from "@/modules/board-games/ui/layout/board-games-layout";

interface LayoutProps {
	children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
	return <BoardGamesLayout>{children}</BoardGamesLayout>;
};

export default Layout;
