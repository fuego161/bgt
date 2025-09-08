import { Intro } from "@/modules/home/ui/sections/intro";
import { FeaturedGames } from "@/modules/home/ui/sections/featured-games";
import { MostOwned } from "@/modules/home/ui/sections/most-owned";
import { CategoriesCarousel } from "@/components/ui/categories-carousel";

export const HomeView = () => {
	return (
		<div>
			<Intro />

			<FeaturedGames />

			<MostOwned />

			<CategoriesCarousel type="link" />
		</div>
	);
};
