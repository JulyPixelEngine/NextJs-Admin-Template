"use client"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Loader from "@/components/common/Loader";
import { auth } from "@/auth"
import Provider from "@/components/Provider/Provider";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [session, setSession] = useState(null)
  const router = useRouter()
  // const { data: session, status } = useSession();
  // const router = useRouter();
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() =>{
    const fetchSession = async () => {
      const session = await auth()
      // setSession(session)
    }

    console.log('layout session: ', session)
      // console.log('layout useEffect status', status)
      // console.log("layout useEffect session", session);
      setTimeout(() => setLoading(false), 1000);
  }, [])
  return (
    // <SessionProvider>
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <Provider>{loading ? <Loader /> : children}</Provider>
      </body>
    </html>
    // </SessionProvider>
  );
}
