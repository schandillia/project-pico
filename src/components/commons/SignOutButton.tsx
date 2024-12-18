"use client"

import logout from "@/actions/logout"

export default function SignoutButton() {
	const handleSignout = async () => {
		await logout()
	}

	return (
		<button
			type="submit"
			onClick={handleSignout}
			className="w-full text-left"
		>
			Sign Out
		</button>
	)
}
