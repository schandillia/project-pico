"use client"

import Image from "next/image"
import brand from "@/constants/brand.json"

export default function NavbarLogo() {
	return (
		<Image
			src="/brand/logo.svg"
			alt={brand.BRAND}
			className="size-8"
			width={50}
			height={50}
			style={{
				filter: "invert(45%) sepia(40%) saturate(400%) hue-rotate(122deg) brightness(95%) contrast(95%)",
			}}
		/>
	)
}
