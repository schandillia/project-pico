import { FaXTwitter } from "react-icons/fa6"

import { Button, buttonVariants } from "@/components/ui/button"

import { signIn } from "@/auth"

export default function SignIn() {
	return (
		<form
			action={async () => {
				"use server"
				await signIn("twitter")
			}}
		>
			<Button
				type="submit"
				className={buttonVariants({
					size: "sm",
					className: "dark:text-white dark:bg-primary/80",
				})}
			>
				Sign in with <FaXTwitter />
			</Button>
		</form>
	)
}
