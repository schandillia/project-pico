"use client"

import * as React from "react"
import { MoonStar, Sun, Computer } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export default function ThemeToggle() {
	const { theme, setTheme } = useTheme()
	const [mounted, setMounted] = React.useState(false)

	React.useEffect(() => {
		setMounted(true)
	}, [])

	const cycleTheme = () => {
		const themes = ["light", "dark", "system"]
		const currentIndex = themes.indexOf(theme ?? "system")
		const nextIndex = (currentIndex + 1) % themes.length
		setTheme(themes[nextIndex])
	}

	if (!mounted) {
		return (
			<Button variant="ghost" size="icon">
				<span className="h-5 w-5" />
				<span className="sr-only">Toggle theme</span>
			</Button>
		)
	}

	return (
		<Button
			className="rounded-full hover:opacity-80"
			variant="ghost"
			size="icon"
			onClick={cycleTheme}
		>
			{theme === "light" && (
				<Sun className="text-zinc-700 dark:text-white" />
			)}
			{theme === "dark" && (
				<MoonStar className="text-zinc-700 dark:text-white" />
			)}
			{theme === "system" && (
				<Computer className="text-zinc-700 dark:text-white" />
			)}
			<span className="sr-only">Toggle theme</span>
		</Button>
	)
}
