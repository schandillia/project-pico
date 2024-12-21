"use client"

import Image from "next/image"
import logo from "@/app/brand/logo.svg"
import brand from "@/constants/brand.json"

export default function NavbarLogo() {
	return (
		<Image
			src={logo}
			alt={brand.BRAND}
			className="size-8"
			style={{
				filter: "invert(45%) sepia(40%) saturate(400%) hue-rotate(122deg) brightness(95%) contrast(95%)",
			}}
		/>
	)
}
