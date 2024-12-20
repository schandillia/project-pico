import MaxWidthWrapper from "@/components/commons/MaxWidthWrapper"
import brand from "@/constants/brand.json"
import fs from "fs/promises"
import path from "path"
import { marked } from "marked"
import type { Metadata } from "next"
import { getTimeSpan } from "@/lib/getTimeSpan"

export const metadata: Metadata = {
	title: `Privacy Policy | ${brand.BRAND}`,
	description: `Read ${brand.BRAND}’s Privacy Policy to learn about the information we collect, how it’s used, and the control you have over it.`,
}

async function getTermsContent() {
	const filePath = path.join(process.cwd(), "src", "documents", "PRIVACY.md")
	const content = await fs.readFile(filePath, "utf8")

	// Get the current date and format it to long date
	const currentDate = new Date()
	const formattedDate = currentDate.toLocaleDateString("en-US", {
		year: "numeric",
		month: "long",
		day: "numeric",
	})

	// Get the last modified date of the file
	const fileStats = await fs.stat(filePath)
	const lastModifiedDate = new Date(fileStats.mtime)

	// Calculate the time span since the last modification
	const timeSinceModified = `This document was last updated ${getTimeSpan(
		currentDate,
		lastModifiedDate,
	)}`

	const processedContent = content
		.replace(/{date}/g, formattedDate)
		.replace(/{brand}/g, brand.BRAND)
		.replace(/{company}/g, brand.COMPANY)
		.replace(/{email}/g, brand.SUPPORT_EMAIL)
		.replace(/{twitter_handle}/g, brand.TWITTER_HANDLE)

	return { htmlContent: marked(processedContent), timeSinceModified }
}

export default async function Page() {
	const { htmlContent, timeSinceModified } = await getTermsContent()

	return (
		<MaxWidthWrapper className="flex flex-col">
			<div className="w-full mx-auto py-8 px-4 sm:px-8 lg:px-10">
				<div
					className="prose lg:prose-lg prose-a:text-primary prose-h4:text-zinc-500 dark:prose-h4:text-zinc-400 dark:prose-invert max-w-full mx-auto bg-zinc-200 dark:bg-zinc-700 p-10 rounded-lg"
					dangerouslySetInnerHTML={{
						__html: htmlContent,
					}}
				/>
				<p className="mt-8 text-md text-zinc-600 dark:text-zinc-400">
					{timeSinceModified}
				</p>
			</div>
		</MaxWidthWrapper>
	)
}
