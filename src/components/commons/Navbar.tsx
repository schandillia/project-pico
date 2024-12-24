import Link from "next/link"

import { Menu } from "lucide-react"

import NavbarLogo from "@/components/commons/NavbarLogo"
import SignIn from "@/components/commons/SignIn"
import UserAccountNav from "@/components/commons/UserAccountNav"
import ViewportWrapper from "@/components/commons/ViewportWrapper"
import ThemeToggle from "@/components/theme/theme-toggle"
import { Button, buttonVariants } from "@/components/ui/button"
import {
	Sheet,
	SheetClose,
	SheetContent,
	SheetFooter,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet"

import brand from "@/lib/constants/brand.json"

// Define a more specific type for the session
type Session = {
	user?: {
		name?: string | null
		image?: string | null
	} | null
}

const NAV_LINKS = [
	{
		href: "/about",
		label: "About",
		ariaLabel: "About our services",
	},
	{
		href: "/discover",
		label: "Discover",
		ariaLabel: "Discover our services",
	},
	{ href: "/pricing", label: "Pricing", ariaLabel: "View pricing options" },
]

const Navbar = ({ session }: { session: Session | null }) => {
	const user = session?.user

	return (
		// Main navigation container
		<nav
			className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-black/75 backdrop-blur-lg transition-all"
			aria-label="Main navigation"
		>
			<ViewportWrapper>
				<div className="flex h-14 items-center justify-between border-b border-gray-200 dark:border-gray-800">
					{/* Brand Logo */}
					<div className="flex items-center">
						<Sheet>
							<SheetTrigger asChild>
								{/* Add md:hidden to hide <Menu> icon on desktop */}
								<Button
									variant="outline"
									size="icon"
									className="mr-2"
								>
									<Menu />
									<span className="sr-only">Toggle menu</span>
								</Button>
							</SheetTrigger>
							<SheetContent side="left">
								<SheetHeader>
									<SheetTitle>{brand.BRAND}</SheetTitle>
								</SheetHeader>
								<div className="grid gap-4 py-4">
									<div className="grid grid-cols-4 items-center gap-4">
										<p>test</p>
									</div>
									<div className="grid grid-cols-4 items-center gap-4">
										<p>test 2</p>
									</div>
								</div>
								<SheetFooter>
									<SheetClose asChild>
										<Button type="submit">
											Save changes
										</Button>
									</SheetClose>
								</SheetFooter>
							</SheetContent>
						</Sheet>
						<Link
							href="/"
							className="flex z-40 font-semibold gap-2 items-center"
						>
							<NavbarLogo />
							<span className="text-lg text-soft dark:text-white/70">
								{brand.BRAND}
							</span>
						</Link>
					</div>

					{/* TODO: Add mobile navbar */}

					{/* Desktop Navigation Links */}
					<div className="hidden items-center space-x-4 sm:flex">
						{NAV_LINKS.map(({ href, label, ariaLabel }) => (
							<Link
								key={href}
								href={href}
								className={buttonVariants({
									variant: "link",
									size: "sm",
									className: "dark:text-primary/90",
								})}
								aria-label={ariaLabel}
							>
								{label}
							</Link>
						))}

						{/* Theme Toggle */}
						<ThemeToggle />

						{/* Conditional User Navigation or Sign-In */}
						{!user ? (
							<SignIn aria-label="Sign in to your account" />
						) : (
							<UserAccountNav
								name={user.name ?? "No name"}
								image={user.image ?? ""}
								aria-label={`User account navigation for ${
									user.name || "anonymous user"
								}`}
							/>
						)}
					</div>
				</div>
			</ViewportWrapper>
		</nav>
	)
}

export default Navbar
