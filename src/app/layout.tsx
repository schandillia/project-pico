import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import Navbar from "@/components/commons/Navbar"

const inter = Inter({ subsets: ["latin"] })

const brandName = process.env.BRAND

export const metadata: Metadata = {
	title: brandName,
	description:
		"Supercharge your X threads with intuitive tools and AI enhancements for creativity and efficiency.",
}

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en" className="light">
			<body
				className={cn(
					"min-h-screen font-sans antialiased",
					inter.className,
				)}
			>
				<Navbar />
				{children}
			</body>
		</html>
	)
}
