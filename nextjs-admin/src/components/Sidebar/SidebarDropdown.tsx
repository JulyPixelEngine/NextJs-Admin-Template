import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SidebarDropdown = ({ item } : any) => {
    const pathname = usePathname()
    return (
        <>
            <ul>
                Sidebardropdown
            </ul>
        </>
    )
}

export default SidebarDropdown;