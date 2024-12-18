import NextAuth from "next-auth"
import Twitter from "next-auth/providers/twitter"
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [Twitter],

  callbacks: {
    authorized: async({auth})=> {
      // Logged in users are authenticated, otherwise return to login page
      return !!auth
    },
  },

  pages: {
    signIn: "/login",
  },
})