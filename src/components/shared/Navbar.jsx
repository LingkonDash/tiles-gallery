import Image from "next/image";
import logo from '@/assets/logo.png'
import Link from "next/link";
import { notoSerif } from "@/app/layout";
import Navlink from "./Navlink";

export default function Navbar() {
    return (
        <nav className={`max-w-400 mx-auto flex justify-between items-center py-4 px-6 ${notoSerif.className}`}>

            {/* Left: Logo */}
            <div className="flex justify-center items-center gap-2">
                <Link href="/" className="flex items-center gap-2">
                    <Image src={logo} alt="Logo" width={40} height={40} className="brightness-110" />
                    <h1 className={`text-2xl font-bold text-primary-text`}>TILES GALLERY</h1>
                </Link>
            </div>

            <div className="flex justify-center items-center">
                <ul className="flex gap-6 font-medium uppercase border-r-2 pr-3">
                    <li>
                        <Navlink href="/"> Home </Navlink>
                    </li>
                    <li>
                        <Navlink href="/tiles"> All Tiles </Navlink>
                    </li>
                    <li>
                        <Navlink href="/profile"> My Profile </Navlink>
                    </li>
                </ul>

                <div className="ml-3">
                    <Link
                        href="/login"
                        className="text-xl uppercase  hover:bg-gray-300 rounded-xl p-2"
                    >
                        Login
                    </Link>
                </div>
            </div>

        </nav>
    )
}