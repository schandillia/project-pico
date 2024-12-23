import type { Metadata } from "next"

import DocumentRenderer from "@/components/commons/DocumentRenderer"
import PageHeading from "@/components/commons/PageHeading"
import ViewportWrapper from "@/components/commons/ViewportWrapper"

import meta from "@/lib/constants/meta.json"

export const metadata: Metadata = {
	title: meta.TERMS.TITLE,
	description: meta.TERMS.DESCRIPTION,
}

export default function Page() {
	return (
		<ViewportWrapper className="my-8 flex flex-col">
			<PageHeading>Terms of Service</PageHeading>
			<DocumentRenderer markdownDocument="TERMS.md" />
		</ViewportWrapper>
	)
}
