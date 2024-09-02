import Image from "next/image";
// import { getSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import Link from "next/link";

import AuthForm from '@/components/Forms/AuthForm'


export default async function Home() {
    const session = (await getServerSession()) || {};
    return (
      <div className="relative h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <Link href={"/"}>Login</Link>
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
          <div className="relative z-20 flex items-center text-lg font-medium">
            <svg width="200" height="200" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <rect width="100" height="100" fill="black" />
                <rect x="30" y="35" width="40" height="30" rx="10" fill="none" stroke="white" strokeWidth="5" />
                <path d="M45 45 L40 50 L45 55" stroke="white" strokeWidth="5" fill="none" />
                <path d="M55 45 L60 50 L55 55" stroke="white" strokeWidth="5" fill="none" />
                <text x="50%" y="80%" dominantBaseline="middle" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="13" fill="white" fontWeight="bold">bytecode</text>
                <text x="50%" y="95%" dominantBaseline="middle" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="5" fill="white">WEB PROGRAMMING</text>
            </svg>
            Logo
          </div>
          <div className="relative z-20 mt-auto">
            <blockquote className="space-y-2">
              <p className="text-lg">Design Text</p>
            </blockquote>
          </div>
        </div>
        <div className="flex h-full items-center p-4 lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Create an account
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your email below to create your account
              </p>
            </div>

            <AuthForm/>
            <p className="px-8 text-center text-sm">
              By clicking continue, you agree to our
            </p>
          </div>
        </div>
      </div>
    );
}