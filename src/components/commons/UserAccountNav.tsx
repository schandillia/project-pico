import React from "react"
import Link from "next/link"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import initials from "@/lib/initials"
import { User } from "lucide-react"
import SignoutButton from "./SignOutButton"
// import SignoutButton from "@/components/commons/SignOutButton"

interface UserAccountNavProps {
	name: string | undefined
	image: string
}

function UserAccountNav({ image, name }: UserAccountNavProps) {
	const menuItems = [
		{ label: "Dashboard", href: "/dashboard" },
		{ label: "Server", href: "/server" },
		{ label: "Client", href: "/client" },
		{ label: "Settings", href: "/settings" },
	]

	return (
		<DropdownMenu>
			<DropdownMenuTrigger className="overflow-visible focus:outline-none">
				<Avatar>
					<AvatarImage src={image} alt={name} />
					<AvatarFallback>
						<User />
					</AvatarFallback>
				</Avatar>
			</DropdownMenuTrigger>
			<DropdownMenuContent align="end">
				<Link href="/profile">
					<div className="flex items-center justify-start gap-2 p-2">
						<div className="flex flex-col space-y-0.5 leading-none">
							{name && (
								<p className="font-medium text-sm">{name}</p>
							)}
						</div>
					</div>
				</Link>
				<DropdownMenuSeparator />
				{menuItems.map((menuItem) => {
					return (
						<React.Fragment key={menuItem.label}>
							<DropdownMenuItem className="cursor-pointer">
								<Link href={menuItem.href}>
									{menuItem.label}
								</Link>
							</DropdownMenuItem>
							{/* <DropdownMenuSeparator /> */}
						</React.Fragment>
					)
				})}
				<DropdownMenuSeparator />
				<DropdownMenuItem className="cursor-pointer">
					<SignoutButton />
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}

export default UserAccountNav
