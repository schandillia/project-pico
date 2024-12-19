import MaxWidthWrapper from "@/components/commons/MaxWidthWrapper"
import Link from "next/link"
import React from "react"
import brand from "@/constants/brand.json"
import { buttonVariants } from "@/components/ui/button" // Import buttonVariants from the correct location

// Get the current year dynamically
const d = new Date()

interface LinkItem {
	id: string // Unique identifier for the link (used for URL routing)
	text: string // Text to be displayed for the link
}

// Links for footer
const links: LinkItem[] = [
	{ id: "privacy", text: "Privacy" },
	{ id: "terms", text: "Terms" },
	{ id: "legal", text: "Legal" },
	{ id: "sitemap", text: "Site Map" },
]

export default function Footer() {
	return (
		<>
			<div className="flex-grow" />
			<div
				className="h-14 inset-x-0 bottom-0 w-full border-t border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-black/75 text-sm text-softer dark:text-softer-dark"
				role="contentinfo" // Landmark role for footer
			>
				<MaxWidthWrapper>
					<div
						className="flex flex-col sm:flex-row py-5 sm:h-14 items-center justify-between"
						aria-label="Footer content"
					>
						{/* Copyright Section */}
						<div className="flex py-2 sm:py-0">
							<span>
								&copy; {d.getFullYear()} {brand.COMPANY}
							</span>
						</div>

						{/* Footer Links Section */}
						<div
							className="flex py-2 sm:py-0 gap-4 items-center"
							aria-label="Footer links" // Label the link section for screen readers
						>
							{links.map((link, index) => (
								<React.Fragment key={link.id}>
									<Link
										href={link.id}
										className={buttonVariants({
											variant: "link", // Use the "link" variant for button-like links
											size: "sm", // Set to small size
											className: "dark:text-white", // Apply dark mode text color
										})}
										aria-label={`Go to ${link.text} page`} // Ensure each link has a descriptive label
									>
										{link.text}
									</Link>

									{/* Divider - border between links */}
									{index !== links.length - 1 && (
										<div
											className="border-l border-gray-200 dark:border-gray-800 h-6 mx-3"
											aria-hidden="true" // Hide the divider from screen readers
										/>
									)}
								</React.Fragment>
							))}
						</div>
					</div>
				</MaxWidthWrapper>
			</div>
		</>
	)
}
