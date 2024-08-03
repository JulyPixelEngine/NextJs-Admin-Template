import { useState } from "react";
import Link from "next/link";
import Image from "next/image";


const DropdownUser = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <Link
            href="#"
            className="flex items-center gap-4"
            onClick={() => setDropdownOpen(!dropdownOpen)}
        >
            <span className="">
                <Image 
                    src="/"
                />
            </span>
        </Link>
    )
}