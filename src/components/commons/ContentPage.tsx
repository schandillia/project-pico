import MaxWidthWrapper from "@/components/commons/MaxWidthWrapper"
import brand from "@/constants/brand.json"
import fs from "fs/promises"
import path from "path"
import { marked } from "marked"

interface ContentPageProps {
	fileName: string
	title: string
	description: string
	replaceValues: { [key: string]: string }
}

async function getContent(fileName: string) {
	const filePath = path.join(process.cwd(), "src", "documents", fileName)
	const content = await fs.readFile(filePath, "utf8")

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
		.replace(/{site}/g, brand.SITE)
		.replace(/{company_name}/g, brand.COMPANY) // Add any other dynamic replacements here

	return marked(processedContent)
}

export default async function ContentPage({ fileName }: ContentPageProps) {
	const htmlContent = await getContent(fileName)

	return (
		<MaxWidthWrapper className="flex flex-col">
			<div className="w-full mx-auto py-8 px-4 sm:px-8 lg:px-10">
				<div
					className="prose lg:prose-lg prose-a:text-primary prose-h4:text-zinc-500 dark:prose-h4:text-zinc-400 dark:prose-invert max-w-full mx-auto bg-zinc-200 dark:bg-zinc-700 p-10 rounded-lg"
					dangerouslySetInnerHTML={{
						__html: htmlContent,
					}}
				/>
			</div>
		</MaxWidthWrapper>
	)
}
