import type { Metadata } from "next"
import brand from "@/constants/brand.json"
import ViewportWrapper from "@/components/commons/ViewportWrapper"

export const metadata: Metadata = {
	title: `About | ${brand.BRAND}`,
	description: `Read ${brand.BRAND}’s Privacy Policy to learn about the information we collect, how it’s used, and the control you have over it.`,
}
export default function Page() {
	return (
		<ViewportWrapper className="flex flex-col">
			<div>about</div>
		</ViewportWrapper>
	)
}
