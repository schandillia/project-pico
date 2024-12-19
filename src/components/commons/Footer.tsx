import MaxWidthWrapper from "@/components/commons/MaxWidthWrapper"
import Link from "next/link"
import React from "react"
import brand from "@/constants/brand.json"

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
			<div className="h-14 inset-x-0 bottom-0 w-full bg-softest dark:bg-softest-dark text-sm text-softer dark:text-softer-dark">
				<MaxWidthWrapper>
					<div className="flex flex-col sm:flex-row py-5 sm:h-14 items-center justify-between">
						{/* Copyright Section */}
						<div className="flex py-2 sm:py-0">
							<span aria-live="polite">
								&copy; {d.getFullYear()} {brand.BRAND}. All
								rights reserved.
							</span>
						</div>

						{/* Footer Links Section */}
						<div className="flex py-2 sm:py-0 gap-2">
							{links.map((link, index) => (
								<React.Fragment key={link.id}>
									<Link
										href={link.id}
										aria-label={`Go to ${link.text} page`}
									>
										{link.text}
									</Link>
									{index !== links.length - 1 && (
										<span aria-hidden="true">|</span> // Separator between links
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
