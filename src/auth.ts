import NextAuth from "next-auth"
import Twitter from "next-auth/providers/twitter"

// Initialize NextAuth with configuration
export const { handlers, auth, signIn, signOut } = NextAuth({
	providers: [
		// Set up Twitter authentication provider
		Twitter,
	],

	callbacks: {
		// Callback function to log the session object after authentication
		async session({ session, token }) {
			console.log("Twitter session object:", session) // Log the session object
			return session
		},

		// Callback function to check if the user is authorized (logged in)
		authorized: async ({ auth }) => {
			// Return true if authenticated, otherwise redirect to the login page
			return !!auth
		},
	},

	// Custom sign-in page configuration
	pages: {
		signIn: "/login", // Custom login page path
	},
})
