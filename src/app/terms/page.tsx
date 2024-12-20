import ContentPage from "@/components/commons/ContentPage"
import brand from "@/constants/brand.json"
import { Metadata } from "next"

export const metadata: Metadata = {
	title: `Terms of Service | ${brand.BRAND}`,
	description: `Read ${brand.BRAND}’s Terms of Service to understand the rules governing your access of all ${brand.BRAND} services.`,
}

export default function Page() {
	return (
		<ContentPage
			fileName="TERMS.md"
			title={`Terms of Service | ${brand.BRAND}`}
			description={`Read ${brand.BRAND}’s Terms of Service to understand the rules governing your access of all ${brand.BRAND} services.`}
			replaceValues={{
				date: new Date().toLocaleDateString("en-US", {
					year: "numeric",
					month: "long",
					day: "numeric",
				}),
				brand: brand.BRAND,
				company: brand.COMPANY,
				email: brand.SUPPORT_EMAIL,
				twitter_handle: brand.TWITTER_HANDLE,
			}}
		/>
	)
}
