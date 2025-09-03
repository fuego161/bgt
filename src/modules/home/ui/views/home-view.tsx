import { Intro } from "@/modules/home/ui/sections/intro";
import { FeaturedGames } from "@/modules/home/ui/sections/featured-games";
import { CategoriesCarousel } from "@/components/ui/categories-carousel";

export const HomeView = () => {
	return (
		<div>
			<Intro />

			<FeaturedGames />

			<CategoriesCarousel type="link" />
		</div>
	);
};
