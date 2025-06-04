interface BoardGamesLayoutProps {
	children: React.ReactNode;
}

export const BoardGamesLayout = ({ children }: BoardGamesLayoutProps) => {
	return (
		<section className="w-full px-14">
			<div className="wrapper">{children}</div>
		</section>
	);
};
