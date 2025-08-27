import { Hanken_Grotesk } from "next/font/google";

import type { Metadata } from "next";
import "./globals.css";

const hankenGrotesk = Hanken_Grotesk({
	variable: "--font-hanken-grotesk",
	weight: ["400", "600"],
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Board Game Tracker",
	description: "Your Shelf Collection, Online!",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${hankenGrotesk.variable} antialiased`}>
				<section className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
					<div className="wrapper">{children}</div>
				</section>
			</body>
		</html>
	);
}
