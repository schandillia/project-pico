import Link from "next/link"
import MaxWidthWrapper from "@/components/commons/MaxWidthWrapper"
import { buttonVariants } from "@/components/ui/button"
import brand from "@/constants/brand.json"
import SignIn from "@/components/sign-in"
import UserAccountNav from "@/components/commons/UserAccountNav"

// Define a more specific type for the session
type Session = {
	user?: {
		name?: string | null
		image?: string | null
	} | null
}

const Navbar = ({ session }: { session: Session | null }) => {
	const user = session?.user
	return (
		<nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
			<MaxWidthWrapper>
				<div className="flex h-14 items-center justify-between border-b border-zinc-200">
					<Link href="/" className="flex z-40 font-semibold">
						<span>{brand.BRAND}</span>
					</Link>

					{/* TODO: Add mobile navbar */}

					<div className="hidden items-center space-x-4 sm:flex">
						<>
							<Link
								href="/discover"
								className={buttonVariants({
									variant: "link",
									size: "sm",
								})}
							>
								Discover
							</Link>
							<Link
								href="/pricing"
								className={buttonVariants({
									variant: "link",
									size: "sm",
								})}
							>
								Pricing
							</Link>
							{!user ? (
								<SignIn />
							) : (
								<UserAccountNav
									name={user.name ?? "No name"}
									image={user.image ?? ""}
								/>
							)}
						</>
					</div>
				</div>
			</MaxWidthWrapper>
		</nav>
	)
}
export default Navbar
