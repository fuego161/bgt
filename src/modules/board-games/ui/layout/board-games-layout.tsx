interface BoardGamesLayoutProps {
	children: React.ReactNode;
}

export const BoardGamesLayout = ({ children }: BoardGamesLayoutProps) => {
	return (
		<section className="w-full">
			<div className="wrapper">{children}</div>
		</section>
	);
};
