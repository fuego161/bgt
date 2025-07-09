import { CategoryView } from "@/modules/category/ui/views/category-view";

interface PageProps {
	params: Promise<{ slug: string }>;
}

const Page = async ({ params }: PageProps) => {
	const { slug } = await params;

	return <CategoryView slug={slug} />;
};

export default Page;
