import { Inter } from "next/font/google"

import type { Metadata } from "next"
import { SessionProvider } from "next-auth/react"

import CookieConsent from "@/components/CookieConsent"
import Footer from "@/components/commons/Footer"
import Navbar from "@/components/commons/Navbar"
import { ThemeProvider } from "@/components/theme/theme-provider"

import meta from "@/lib/constants/meta.json"
import { cn } from "@/lib/utils"

import "@/app/globals.css"
import { auth } from "@/auth"

// Import Google font with Latin subset
const font = Inter({ subsets: ["latin"] })

// Metadata for the app
export const metadata: Metadata = {
	title: meta.HOME.TITLE,
	description: meta.HOME.DESCRIPTION,
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
					"min-h-screen font-sans antialiased flex flex-col", // Minimum height and font styling
					font.className, // Apply Google font
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
							className="flex-1"
							id="main-content"
							role="main"
							aria-labelledby="main-heading"
						>
							{children}
						</main>
						<Footer />
						<CookieConsent />
					</ThemeProvider>
				</SessionProvider>
			</body>
		</html>
	)
}
