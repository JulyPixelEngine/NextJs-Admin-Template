import React from "react"
import DefaultLayout from "@/components/Layouts/DefaultLayout"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Next.js Dashboard Page",
  description: "Home Page",
}

export default function Home() {
  return (
    <>
      <DefaultLayout>
        
      </DefaultLayout>
    </>
  );
}