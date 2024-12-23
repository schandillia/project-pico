import Link from "next/link"

import { Check, HelpCircle, Star, X } from "lucide-react"
import type { Metadata } from "next"

import PageHeading from "@/components/commons/PageHeading"
import ViewportWrapper from "@/components/commons/ViewportWrapper"
import { buttonVariants } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip"

import brand from "@/lib/constants/brand.json"
import meta from "@/lib/constants/meta.json"
import subscriptionPlans from "@/lib/constants/subscription_plans.json"
import { cn } from "@/lib/utils"

import { auth } from "@/auth"

export const metadata: Metadata = {
	title: meta.PRICING.TITLE,
	description: meta.PRICING.DESCRIPTION,
}

export default async function Page() {
	const session = await auth()
	const user = session?.user

	return (
		<ViewportWrapper className="my-8 flex flex-col">
			<PageHeading>Pricing</PageHeading>
			<p className="mt-5 text-soft dark:text-white/70 sm:text-lg">
				Whether you’re just trying out {brand.BRAND} or need more, we’ve
				got you covered.
			</p>
			<div className="pt-12 grid grid-cols-1 gap-10 lg:grid-cols-3">
				<TooltipProvider>
					{subscriptionPlans.map((item, index) => (
						<Card
							key={index}
							className={cn(
								"flex flex-col rounded-lg",
								index === 1 && "border-2 border-primary",
							)}
						>
							<CardHeader className="text-center relative">
								{/* Tag for the middle card */}
								{index === 1 && (
									<div className="flex items-center justify-center z-50 absolute top-0 left-1/2 -translate-x-1/2 -translate-y-6 bg-white dark:bg-zinc-800 border-primary border-2 rounded-full py-2 px-6 text-xl leading-tight font-semibold text-primary">
										<Star className="mr-2" />
										Popular
										<Star className="ml-2" />
									</div>
								)}
								<h2 className="text-3xl my-2 font-bold text-soft dark:text-white">
									{item.plan}
								</h2>
								<p className="text-sm text-muted-foreground">
									{item.tagline}
								</p>
								<div className="mt-4 flex items-center justify-center text-soft dark:text-white">
									<span className="text-3xl font-bold">
										${item.price}
									</span>
									<span className="ml-1 text-sm text-muted-foreground">
										/mo
									</span>
								</div>
							</CardHeader>
							<CardContent className="flex flex-col flex-1">
								<ul className="space-y-3 mb-8 flex-1">
									{item.features.map(
										(feature, featureIndex) => (
											<li
												key={featureIndex}
												className="flex items-center"
											>
												{feature.negative ? (
													<X className="mr-2 h-4 w-4 text-red-500" />
												) : (
													<Check className="mr-2 h-4 w-4 text-green-500" />
												)}
												<span
													className={`flex items-center ${
														feature.negative
															? "text-muted-foreground"
															: ""
													}`}
												>
													{feature.text}
													{feature.footnote && (
														<Tooltip>
															<TooltipTrigger
																asChild
															>
																<HelpCircle className="ml-1 h-4 w-4 text-muted-foreground" />
															</TooltipTrigger>
															<TooltipContent>
																{
																	feature.footnote
																}
															</TooltipContent>
														</Tooltip>
													)}
												</span>
											</li>
										),
									)}
								</ul>
								<Link
									href={user ? "/dashboard" : "/sign-up"}
									className={cn(
										buttonVariants({
											variant:
												index === 1
													? "default"
													: "outline",
											size: "lg",
										}),
										index === 1 &&
											"dark:text-white dark:bg-primary/80", // Apply conditionally
										"w-full mt-auto",
									)}
								>
									Select
								</Link>
							</CardContent>
						</Card>
					))}
				</TooltipProvider>
			</div>
		</ViewportWrapper>
	)
}
