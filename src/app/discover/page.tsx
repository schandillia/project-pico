import type { Metadata } from "next"

import PageHeading from "@/components/commons/PageHeading"
import ViewportWrapper from "@/components/commons/ViewportWrapper"

import brand from "@/lib/constants/brand.json"

export const metadata: Metadata = {
	title: `About | ${brand.BRAND}`,
	description: `Read ${brand.BRAND}’s Privacy Policy to learn about the information we collect, how it’s used, and the control you have over it.`,
}
export default function Page() {
	return (
		<ViewportWrapper className="my-8 flex flex-col">
			<PageHeading>Discover</PageHeading>
		</ViewportWrapper>
	)
}
