interface HomeLayoutProps {
	children: React.ReactNode;
}

export const HomeLayout = ({ children }: HomeLayoutProps) => {
	return (
		<section className="w-full px-14">
			<div className="wrapper">{children}</div>
		</section>
	);
};


