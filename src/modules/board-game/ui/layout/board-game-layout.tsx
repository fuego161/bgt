interface BoardGameLayoutProps {
	children: React.ReactNode;
}

export const BoardGameLayout = ({ children }: BoardGameLayoutProps) => {
	return (
		<section className="w-full">
			<div className="wrapper">{children}</div>
		</section>
	);
};
