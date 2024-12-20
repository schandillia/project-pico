import MaxWidthWrapper from "@/components/commons/MaxWidthWrapper"
import brand from "@/constants/brand.json"
import fs from "fs/promises"
import path from "path"
import { marked } from "marked"

async function getTermsContent() {
	const filePath = path.join(process.cwd(), "src", "documents", "TERMS.md")
	const content = await fs.readFile(filePath, "utf8")

	// Get the current date and format it to "January 13, 2024"
	const currentDate = new Date()
	const formattedDate = currentDate.toLocaleDateString("en-US", {
		year: "numeric",
		month: "long",
		day: "numeric",
	})

	const processedContent = content
		.replace(/{date}/g, formattedDate)
		.replace(/{brand}/g, brand.BRAND)
		.replace(/{company}/g, brand.COMPANY)
		.replace(/{email}/g, brand.SUPPORT_EMAIL)
		.replace(/{twitter_handle}/g, brand.TWITTER_HANDLE)

	return marked(processedContent)
}

export default async function Page() {
	const htmlContent = await getTermsContent()

	return (
		<>
			{/* Hero Section */}
			<MaxWidthWrapper className="flex flex-col">
				<div className="w-full mx-auto py-8">
					<div
						className="prose prose-slate lg:prose-lg max-w-4xl mx-auto"
						dangerouslySetInnerHTML={{ __html: htmlContent }}
					/>
				</div>
			</MaxWidthWrapper>
		</>
	)
}
