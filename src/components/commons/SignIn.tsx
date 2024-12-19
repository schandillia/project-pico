import { signIn } from "@/auth"
import { Button, buttonVariants } from "@/components/ui/button"
import { FaXTwitter } from "react-icons/fa6"

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
					className: "dark:text-white",
				})}
			>
				Sign in with <FaXTwitter />
			</Button>
		</form>
	)
}
