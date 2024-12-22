import DocumentRenderer from "@/components/commons/DocumentRenderer"
import type { Metadata } from "next"
import brand from "@/lib/constants/brand.json"
import ViewportWrapper from "@/components/commons/ViewportWrapper"

export const metadata: Metadata = {
	title: `Terms of Service | ${brand.BRAND}`,
	description: `Read ${brand.BRAND}’s Terms of Service to understand the rules governing your access of all ${brand.BRAND} services.`,
}

export default function Page() {
	return (
		<ViewportWrapper className="my-8 flex flex-col">
			<h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
				Terms of Service
			</h1>
			<DocumentRenderer markdownDocument="TERMS.md" />
		</ViewportWrapper>
	)
}
