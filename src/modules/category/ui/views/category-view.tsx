import { ContainedGames } from "@/modules/category/ui/sections/contained-games";
import { Intro } from "@/modules/category/ui/sections/intro";

interface CategoryViewProps {
	slug: string;
}

export const CategoryView = ({ slug }: CategoryViewProps) => {
	return (
		<>
			<Intro category={slug} />
			<ContainedGames category={slug} />
		</>
	);
};
