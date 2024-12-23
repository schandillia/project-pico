import type { Metadata } from "next"

import DocumentRenderer from "@/components/commons/DocumentRenderer"
import PageHeading from "@/components/commons/PageHeading"
import ViewportWrapper from "@/components/commons/ViewportWrapper"

import brand from "@/lib/constants/brand.json"

export const metadata: Metadata = {
	title: `Terms of Service | ${brand.BRAND}`,
	description: `Read ${brand.BRAND}’s Terms of Service to understand the rules governing your access of all ${brand.BRAND} services.`,
}

export default function Page() {
	return (
		<ViewportWrapper className="my-8 flex flex-col">
			<PageHeading>Terms of Service</PageHeading>
			<DocumentRenderer markdownDocument="TERMS.md" />
		</ViewportWrapper>
	)
}
