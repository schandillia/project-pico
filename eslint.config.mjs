import { FlatCompat } from "@eslint/eslintrc"
import { dirname } from "path"
import { fileURLToPath } from "url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
	baseDirectory: __dirname,
})

const eslintConfig = [
	...compat.extends("next/core-web-vitals", "next/typescript"),
	{
		ignores: [
			// dependencies
			"node_modules",
			"./node_modules/**",
			"**/node_modules/**",
			".pnp",
			".pnp.js",

			// testing
			"coverage",

			// next.js
			".next/",
			"out/",

			// production
			"build",

			// misc
			".DS_Store",
			"*.pem",

			// debug
			"npm-debug.log*",
			"yarn-debug.log*",
			"yarn-error.log*",
			".pnpm-debug.log*",

			// local env files
			".env*.local",
			".env*",

			// vercel
			".vercel",

			// typescript
			"*.tsbuildinfo",
			"next-env.d.ts",

			// custom
			"next.config.js",
			"postcss.config.js",
			"src/components/ui/*",
			"src/lib/utils*",
		],
	},
]

export default eslintConfig
