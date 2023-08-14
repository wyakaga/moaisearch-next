import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "moai: Unleash the Power of the Web",
	description: "Unleash the Power of the Web: Discover, Explore, Search!",
	applicationName: "Moai Search",
	keywords: ["search engine", "search engine project"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
