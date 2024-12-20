import MarkdownRenderer from "@/components/commons/MarkdownRenderer"
import type { Metadata } from "next"
import brand from "@/constants/brand.json"

export const metadata: Metadata = {
	title: `Privacy Policy | ${brand.BRAND}`,
	description: `Read ${brand.BRAND}’s Privacy Policy to learn about the information we collect, how it’s used, and the control you have over it.`,
}
export default function Page() {
	return <MarkdownRenderer markdownDocument="PRIVACY.md" />
}
