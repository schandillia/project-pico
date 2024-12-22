import DocumentRenderer from "@/components/commons/DocumentRenderer"
import type { Metadata } from "next"
import brand from "@/lib/constants/brand.json"
import ViewportWrapper from "@/components/commons/ViewportWrapper"

export const metadata: Metadata = {
	title: `Privacy Policy | ${brand.BRAND}`,
	description: `Read ${brand.BRAND}’s Privacy Policy to learn about the information we collect, how it’s used, and the control you have over it.`,
}
export default function Page() {
	return (
		<ViewportWrapper className="my-8 flex flex-col">
			<h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
				Privacy Policy
			</h1>
			<DocumentRenderer markdownDocument="PRIVACY.md" />
		</ViewportWrapper>
	)
}
