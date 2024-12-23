import type { Metadata } from "next"

import PageHeading from "@/components/commons/PageHeading"
import ViewportWrapper from "@/components/commons/ViewportWrapper"

import meta from "@/lib/constants/meta.json"

export const metadata: Metadata = {
	title: meta.ABOUT.TITLE,
	description: meta.ABOUT.DESCRIPTION,
}

export default function Page() {
	return (
		<ViewportWrapper className="my-8 flex flex-col">
			<PageHeading>About</PageHeading>
		</ViewportWrapper>
	)
}
