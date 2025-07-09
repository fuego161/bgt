import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

import { IntroOutput } from "@/modules/category/ui/sections/intro/output";

interface IntroProps {
	category: string;
}

export const Intro = ({ category }: IntroProps) => {
	return (
		<ErrorBoundary fallback={<p>Error...</p>}>
			<Suspense fallback={<IntroSkeleton />}>
				<IntroOutput category={category} />
			</Suspense>
		</ErrorBoundary>
	);
};

const IntroSkeleton = () => {
	return (
		<>
			<h1>Skeleton</h1>
		</>
	);
};
