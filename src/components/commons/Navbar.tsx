import Link from "next/link"
import ViewportWrapper from "@/components/commons/ViewportWrapper"
import { buttonVariants } from "@/components/ui/button"
import brand from "@/constants/brand.json"
import SignIn from "@/components/commons/SignIn"
import UserAccountNav from "@/components/commons/UserAccountNav"
import ThemeToggle from "@/components/theme/theme-toggle"
import NavbarLogo from "@/components/commons/NavbarLogo"

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
					<Link
						href="/"
						className="flex z-40 font-semibold gap-2 items-center"
					>
						<NavbarLogo />
						<span className="text-lg">{brand.BRAND}</span>
					</Link>

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
