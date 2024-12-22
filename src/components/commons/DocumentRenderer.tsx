import brand from "@/lib/constants/brand.json"
import fs from "fs/promises"
import path from "path"
import { marked } from "marked"
import { getTimeSpan } from "@/lib/getTimeSpan"

async function getDocumentContent(markdownDocument: string) {
	const filePath = path.join(
		process.cwd(),
		"src",
		"documents",
		markdownDocument,
	)
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
	)}.`

	const processedContent = content
		.replace(/{date}/g, formattedDate)
		.replace(/{brand}/g, brand.BRAND)
		.replace(/{company}/g, brand.COMPANY)
		.replace(/{site}/g, brand.SITE)
		.replace(/{email}/g, brand.SUPPORT_EMAIL)
		.replace(/{twitter_handle}/g, brand.TWITTER_HANDLE)

	return { htmlContent: marked(processedContent), timeSinceModified }
}

interface DocumentRendererProps {
	markdownDocument: string
}

export default async function DocumentRenderer({
	markdownDocument = "TERMS.md",
}: DocumentRendererProps) {
	const { htmlContent, timeSinceModified } = await getDocumentContent(
		markdownDocument,
	)

	return (
		<div className="w-full mx-auto py-8">
			<div
				className="prose lg:prose-lg prose-headings:text-soft dark:prose-headings:text-white/70 prose-strong:text-soft dark:prose-strong:text-white/70 prose-a:text-primary dark:prose-invert max-w-full mx-auto bg-zinc-200 dark:bg-zinc-700 p-10 rounded-lg"
				dangerouslySetInnerHTML={{
					__html: htmlContent,
				}}
			/>
			<p className="mt-8 text-md text-soft dark:text-white/70">
				{timeSinceModified}
			</p>
		</div>
	)
}
