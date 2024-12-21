import DocumentRenderer from "@/components/commons/DocumentRenderer"
import type { Metadata } from "next"
import brand from "@/constants/brand.json"

export const metadata: Metadata = {
	title: `Terms of Service | ${brand.BRAND}`,
	description: `Read ${brand.BRAND}’s Terms of Service to understand the rules governing your access of all ${brand.BRAND} services.`,
}

export default function Page() {
	return <DocumentRenderer markdownDocument="TERMS.md" />
}
