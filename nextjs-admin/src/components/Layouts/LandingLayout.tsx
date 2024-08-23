import Image from "next/image";
// import { getSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";


export default async function Home() {
    const session = (await getServerSession()) || {};
    return (
        <div className="relative h-screen flex-col">
            Login
            <div className="relative hidden h-full">

            </div>
            <div className="flex h-full items-center p-4 lg:p-8">
                <blockquote>
                    <p>
                        Design Text Here
                    </p>
                </blockquote>
            </div>
        </div>
    )
}