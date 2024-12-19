import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import Navbar from "@/components/commons/Navbar"
import brand from "@/constants/brand.json"
import { auth } from "@/auth"
import { SessionProvider } from "next-auth/react"
import { ThemeProvider } from "@/components/theme/theme-provider"

// Import Google font with Latin subset
const inter = Inter({ subsets: ["latin"] })

// Metadata for the app
export const metadata: Metadata = {
	title: brand.BRAND,
	description: brand.DESCRIPTION,
}

// Reusable Layout Component
export default async function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	// Fetch user session data
	const session = await auth()

	// Return the root layout structure
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={cn(
					"min-h-screen font-sans antialiased", // Minimum height and font styling
					inter.className, // Apply Inter font class
				)}
				aria-busy="false" // Indicate loading state for accessibility
				aria-live="polite" // Inform screen readers of live updates
			>
				<SessionProvider session={session}>
					<ThemeProvider
						attribute="class" // Use the "class" attribute for theme management
						defaultTheme="system" // Default to system theme
						enableSystem // Allow system theme detection
						disableTransitionOnChange // Prevent transition effects on theme change
					>
						{/* Navigation bar with session data */}
						<Navbar session={session} />

						{/* Main content area */}
						<main
							id="main-content"
							role="main"
							aria-labelledby="main-heading"
						>
							{children}
						</main>
					</ThemeProvider>
				</SessionProvider>
			</body>
		</html>
	)
}
