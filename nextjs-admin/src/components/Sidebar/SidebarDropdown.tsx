import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SidebarDropdown = ({ item } : any) => {
    const pathname = usePathname()
    return (
        <>
            <ul className="my-2 flex flex-col gap-1.5 pl-9">
                {item?.map((item:any, index: number) =>(
                    <li key={index}>
                        <Link href={item.route} className="">
                        {item.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default SidebarDropdown;