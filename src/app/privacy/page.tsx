import DocumentRenderer from "@/components/commons/DocumentRenderer"
import type { Metadata } from "next"
import brand from "@/constants/brand.json"

export const metadata: Metadata = {
	title: `Privacy Policy | ${brand.BRAND}`,
	description: `Read ${brand.BRAND}’s Privacy Policy to learn about the information we collect, how it’s used, and the control you have over it.`,
}
export default function Page() {
	return <DocumentRenderer markdownDocument="PRIVACY.md" />
}
