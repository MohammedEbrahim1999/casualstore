import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import InstagramProvider from "next-auth/providers/instagram";
import { AuthOptions } from "next-auth";
export const authOptions: AuthOptions = {
  providers: [
   GoogleProvider({
      clientId: '204376297079-ikodeta4ndal3dijq3acvqpvivnho2r1.apps.googleusercontent.com' as string,
      clientSecret: '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' as string,
    }),
    FacebookProvider({
      clientId: '1940976796381864',
      clientSecret: '8b8077dbec83eb1541e960ae945564d9',
    }),
    InstagramProvider({
      clientId: '524128893740986',
      clientSecret: 'f207dee930c2b04b3fb80900210d557a',
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 1 * 24 * 60 * 60,
  },
  jwt: {
    // JWT Encoding and Decoding Configurations
  },
  callbacks: {
    // SIGNIN, Session Callbacks
  },
  secret: process.env.NEXTAUTH_SECRET,
};
