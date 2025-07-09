import { getCategory } from "@/lib/data/get-category";

interface IntroOutputProps {
	category: string;
}

export const IntroOutput = async ({ category }: IntroOutputProps) => {
	const categoryData = await getCategory(category);

	if (!category) return;

	return <h1>Category: {categoryData?.title}</h1>;
};
