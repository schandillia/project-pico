import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import Navbar from "@/components/commons/Navbar"
import brand from "@/constants/brand.json"
import { auth } from "@/auth"
import { SessionProvider } from "next-auth/react"
import { ThemeProvider } from "@/components/theme/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
	title: brand.BRAND,
	description: brand.DESCRIPTION,
}

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	const session = await auth()
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				className={cn(
					"min-h-screen font-sans antialiased",
					inter.className,
				)}
			>
				<SessionProvider session={session}>
					<ThemeProvider
						attribute="class"
						defaultTheme="system"
						enableSystem
						disableTransitionOnChange
					>
						<Navbar session={session} />
						{children}
					</ThemeProvider>
				</SessionProvider>
			</body>
		</html>
	)
}
