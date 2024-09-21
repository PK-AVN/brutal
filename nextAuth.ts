import { AuthOptions } from "next-auth";
import Google from "next-auth/providers/google";

export const authOptions: AuthOptions = {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID as string,
      clientSecret: process.env.AUTH_GOOGLE_SECRET as string,
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 1 * 60 * 60,
  },
  jwt: {},
  callbacks: {},
  secret: process.env.AUTH_SECRET,
};
