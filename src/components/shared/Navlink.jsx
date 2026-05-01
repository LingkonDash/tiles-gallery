'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navlink({ children, href }) {
    const pathName = usePathname();

    const isActive = pathName === href;

    return (
        <Link
            href={href}
            className={`relative pb-1 transition-all duration-300 
            ${isActive ? "text-white" : "text-white/70 hover:text-white"}`}
        >
            {children}

            <span
                className={`absolute left-0 bottom-0 h-0.5 bg-white transition-all duration-300
                ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
            />
        </Link>
    );
}