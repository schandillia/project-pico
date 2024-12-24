"use client"

import { useEffect, useState } from "react"

import Link from "next/link"

import { CookieIcon } from "lucide-react"

import { cn } from "@/lib/utils"

import { Button } from "./ui/button"

interface CookieConsentProps {
	demo?: boolean
	onAcceptCallback?: () => void
}

export default function CookieConsent({
	demo = false,
	onAcceptCallback = () => {},
}: CookieConsentProps) {
	const [isOpen, setIsOpen] = useState<boolean>(false)
	const [hide, setHide] = useState<boolean>(false)
	const [isClient, setIsClient] = useState(false) // Added state to track client-side rendering

	const accept = (): void => {
		setIsOpen(false)
		document.cookie =
			"cookieConsent=true; expires=Fri, 31 Dec 9999 23:59:59 GMT"
		setTimeout(() => {
			setHide(true)
		}, 700)
		onAcceptCallback()
	}

	useEffect(() => {
		// Ensures this runs only on the client-side
		setIsClient(true)

		try {
			setIsOpen(true)
			if (document.cookie.includes("cookieConsent=true")) {
				if (!demo) {
					setIsOpen(false)
					setTimeout(() => {
						setHide(true)
					}, 700)
				}
			}
		} catch (e) {
			// console.log("Error: ", e);
		}
	}, [demo])

	// Only render the modal after client-side rendering
	if (!isClient) {
		return null
	}

	return (
		<>
			{/* Overlay */}
			{isOpen && (
				<div
					className="fixed top-0 left-0 right-0 bottom-0 z-[100] bg-black opacity-50"
					style={{ pointerEvents: "auto" }}
				/>
			)}

			{/* Cookie Consent Modal */}
			<div
				className={cn(
					"fixed z-[200] bottom-0 left-0 right-0 mx-auto w-full sm:w-1/2 sm:left-0 sm:bottom-0 duration-500 ease-out transform",
					!isOpen
						? "opacity-0 translate-y-full"
						: "opacity-100 translate-y-0",
					hide && "hidden",
				)}
			>
				<div className="m-3 dark:bg-card bg-background border border-border rounded-lg">
					<div className="flex items-center justify-between p-3">
						<h1 className="text-lg font-medium">We use cookies</h1>
						<CookieIcon className="h-[1.2rem] w-[1.2rem]" />
					</div>
					<div className="p-3 -mt-2 flex items-center space-x-4">
						<p className="text-sm text-left text-muted-foreground">
							We use cookies to ensure you get the best experience
							on our website. By continuing to use our site or
							clicking “<strong>I accept</strong>,” you consent to
							our use of cookies as described in our{" "}
							<Link href="/cookie-policy" className="underline">
								Cookie Policy
							</Link>
							.
						</p>
						<Button onClick={accept}>I accept</Button>
					</div>
				</div>
			</div>
		</>
	)
}
