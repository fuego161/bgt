import { CategoriesCarousel } from "@/components/ui/categories-carousel";

import { Intro } from "@/modules/home/ui/sections/intro";

export const HomeView = () => {
	return (
		<div>
			<Intro />

			<CategoriesCarousel type="link" />
		</div>
	);
};
