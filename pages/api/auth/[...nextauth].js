import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from "@prisma/client"
import bcrypt from "bcrypt"

const prisma = new PrismaClient()

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "username" },
        password: { label: "Password", type: "password" },
      },
      async authorize (credentials) {
        // database look up
        const user = await prisma.user.findUnique({
          where: {
            user_username: credentials.username
          }
        })

        if (!user)
          return null

        const isMatch = await bcrypt.compare(credentials.password, user.user_password)

        if (!isMatch)
          return null

        if (isMatch)
          return {
            id: user.user_uuid,
            name: user.user_username
          }
        
        return null
        
      }
    })
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.id = user.id
      }

      return token
    },
    session: ({ session, token }) => {
      if (token) {
        session.id = token.id
      }
      return session
    }
  },
  secret: "test",
  jwt: {
    secret: "test",
    encryption: true
  },
  // pages: {
  //   signIn: '/auth/signin'
  // },
  theme: {
    colorScheme: "light"
  }
})