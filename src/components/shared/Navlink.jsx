'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navlink ({children , href}) {

    const pathName = usePathname();
    console.log(pathName)

    return (
        <Link href={href} className={`text-xl uppercase hover:border-b-primary-text border-b-2 ${pathName === href ? "border-b-primary-text" : 'border-b-transparent'}  duration-200`}>{children}</Link>
    )
}