import MaxWidthWrapper from "@/components/commons/MaxWidthWrapper"
import { buttonVariants } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { FaXTwitter } from "react-icons/fa6"
import brand from "@/constants/brand.json"

export default function Home() {
	return (
		<>
			<MaxWidthWrapper className="mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center">
				<h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl">
					Create <span className="text-primary">threads</span> in a
					jiffy!
				</h1>
				<p className="mt-5 max-w-prose text-zinc-700 dark:text-zinc-400 sm:text-lg">
					{brand.BRAND} takes the grind out of your thread creation
					process, so you could focus on elevating your content and
					reach instead.
				</p>
				<Link
					className={buttonVariants({
						size: "lg",
						className: "mt-5 dark:text-white",
					})}
					href="/dashboard"
				>
					Get started <ArrowRight className="ml-2 h-5 w-5" />
				</Link>
			</MaxWidthWrapper>
			{/* Value proposition */}
			<div>
				<div className="relative isolate">
					<div
						aria-hidden="true"
						className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
					>
						<div
							style={{
								clipPath:
									"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
							}}
							className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
						/>
					</div>
					<div>
						<div className="mx-auto max-w-6xl px-6 lg:px-8">
							<div className="mt-16 flow-root sm:mt-24">
								<div className="-m-2 rounded-xl bg-gray-900/5 dark:bg-gray-500/15 p-2 ring-1 ring-inset ring-gray-900/10 dark:ring-gray-400/10 lg:-m-4 lg:rounded-2xl lg:p-4">
									<Image
										src="/thread-editor.png"
										alt="product preview"
										width={1364}
										height={866}
										quality={100}
										className="rounded-md bg-white p-2 sm:p-8 md:p-20 shadow-2xl ring-1 ring-gray-900/10"
									/>
								</div>
							</div>
						</div>
					</div>
					<div
						aria-hidden="true"
						className="pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
					>
						<div
							style={{
								clipPath:
									"polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
							}}
							className="relative left-[calc(50%-13rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem]"
						/>
					</div>
				</div>
			</div>
			{/* Feature section */}
			<div className="mx-auto mb-32 mt-32 max-w-5xl sm:mt-56">
				<div className="mb-12 px-6 lg:px-8">
					<div className="mx-auto max-w-2xl sm:text-center">
						<h2 className="mt-2 font-bold text-4xl text-gray-900 dark:text-gray-200 sm:text-5xl">
							Start creating right away
						</h2>

						<p className="mt-4 text-lg text-gray-600 dark:text-zinc-400">
							Creating, publishing, and managing X threads has
							never been easier
						</p>
					</div>
				</div>
				{/* steps */}
				<ol className="my-8 space-y-4 pt-8 md:flex md:space-x-12 md:space-y-0">
					<li className="md:flex-1">
						<div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
							<span className="text-sm font-medium text-primary">
								Step 1
							</span>
							<span className="text-xl font-semibold">
								Sign in with your{" "}
								<FaXTwitter className="inline align-middle relative top-[-2px]" />
							</span>
							<span className="mt-2 text-zinc-700 dark:text-zinc-400">
								Get started with a free, no-frills plan and
								start creating.
							</span>
						</div>
					</li>
					<li className="md:flex-1">
						<div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
							<span className="text-sm font-medium text-primary">
								Step 2
							</span>
							<span className="text-xl font-semibold">
								Draft your first thread
							</span>
							<span className="mt-2 text-zinc-700 dark:text-zinc-400">
								Use AI to fix grammar, polish style, or even
								generate content ideas.
							</span>
						</div>
					</li>
					<li className="md:flex-1">
						<div className="flex flex-col space-y-2 border-l-4 border-zinc-300 py-2 pl-4 md:border-l-0 md:border-t-2 md:pb-0 md:pl-0 md:pt-4">
							<span className="text-sm font-medium text-primary">
								Step 3
							</span>
							<span className="text-xl font-semibold">
								Publish with a single click
							</span>
							<span className="mt-2 text-zinc-700 dark:text-zinc-400">
								Or save draft for further review, or schedule to
								post later.
							</span>
						</div>
					</li>
				</ol>
				<div className="mx-auto max-w-6xl px-6 lg:px-8">
					<div className="mt-16 flow-root sm:mt-24">
						<div className="-m-2 rounded-xl bg-gray-900/5 dark:bg-gray-500/15 p-2 ring-1 ring-inset ring-gray-900/10 dark:ring-gray-400/10 lg:-m-4 lg:rounded-2xl lg:p-4">
							<Image
								src="/thread-analytics.png"
								alt="uploading preview"
								width={1419}
								height={732}
								quality={100}
								className="rounded-md bg-white p-2 sm:p-8 md:p-20 shadow-2xl ring-1 ring-gray-900/10"
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
