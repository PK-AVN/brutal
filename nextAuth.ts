import { AuthOptions } from "next-auth";
import Google from "next-auth/providers/google";
import { connectDB } from "./config/database";
import User from "./models/User";

export const authOptions: AuthOptions = {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID as string,
      clientSecret: process.env.AUTH_GOOGLE_SECRET as string,
      authorization: {
        params: {
          prompt: "consent",
          response_type: "code",
        },
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 0.1 * 60 * 60,
  },
  jwt: {},
  callbacks: {
    async signIn({ profile }) {
      await connectDB();
      const userExists = await User.findOne({ email: profile?.email });
      if (!userExists) {
        const userName = profile?.name?.slice(0, 20);

        await User.create({
          email: profile?.email,
          name: userName,
          image: profile?.image,
        });
      }
      return true;
    },

    // async session({ session }) {
    //   const user = await User.findOne({ email: session.user?.email });
    //   console.log(user, session, "sesson object in next auth");
    //   session.user.id = user._id.toString();
    //   return session;
    // },
  },
  secret: process.env.AUTH_SECRET,
};
