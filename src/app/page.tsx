import { auth } from "@/auth"
import GuestHome from "@/components/commons/GuestHome"
import ViewportWrapper from "@/components/commons/ViewportWrapper"
export default async function Home() {
	const session = await auth()
	const user = session?.user

	if (user) {
		return (
			<ViewportWrapper className="mb-12 mt-28 sm:mt-40">
				<h1 className="text-4xl font-bold text-soft dark:text-white">
					Welcome back, {user.name}!
				</h1>
				<p className="mt-4 text-zinc-700 dark:text-zinc-400">
					Ready to create your next viral thread?
				</p>
			</ViewportWrapper>
		)
	}

	return <GuestHome />
}
