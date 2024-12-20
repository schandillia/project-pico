import ContentPage from "@/components/commons/ContentPage"
import brand from "@/constants/brand.json"
import { Metadata } from "next"

export const metadata: Metadata = {
	title: `Privacy Policy | ${brand.BRAND}`,
	description: `Read ${brand.BRAND}’s Privacy Policy to learn about the information we collect, how it’s used, and the control you have over it.`,
}

export default function Page() {
	return (
		<ContentPage
			fileName="PRIVACY.md"
			title={`Privacy Policy | ${brand.BRAND}`}
			description={`Read ${brand.BRAND}’s Privacy Policy to learn about the information we collect, how it’s used, and the control you have over it.`}
			replaceValues={{
				date: new Date().toLocaleDateString("en-US", {
					year: "numeric",
					month: "long",
					day: "numeric",
				}),
				brand: brand.BRAND,
				company: brand.COMPANY,
				site: brand.SITE,
				email: brand.SUPPORT_EMAIL,
				twitter_handle: brand.TWITTER_HANDLE,
			}}
		/>
	)
}
