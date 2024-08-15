import { Metadata } from "next";
import Link from "next/link";



export const metadata: Metadata = {
    title : "",
    description : ""
}

const AuthenticatorPage = () => {
    return (
        <div className="relative h-screen">
            <Link href={"/"}>
                Login
            </Link>
        </div>
    )
}

export default AuthenticatorPage;