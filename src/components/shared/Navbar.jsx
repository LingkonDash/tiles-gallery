import Image from "next/image";
import logo from '@/assets/logo.png'
import Link from "next/link";
import { notoSerif } from "@/app/layout";
import Navlink from "./Navlink";
import MobileMenu from "./MobileMenu";
import NavbarProfile from "../client/NavbarProfile";

export default function Navbar() {

    return (
        <nav className={`${notoSerif.className} fixed top-0 left-0 w-full z-50 px-3`}>

            <div className="max-w-400 mx-auto px-6 py-3 flex justify-between lg:grid lg:grid-cols-3 items-center
                backdrop-blur-lg bg-white/5 border-b border-white/10 shadow-md rounded-b-2xl">

                <div className="flex items-center">
                    <Link href="/" className="flex items-center gap-2 group">
                        <Image
                            src={logo}
                            alt="Logo"
                            width={40}
                            height={40}
                            className="brightness-110 group-hover:scale-105 duration-300"
                        />
                        <h1 className="text-lg md:text-xl font-semibold text-white tracking-wide">
                            TILES GALLERY
                        </h1>
                    </Link>
                </div>

                <ul className="hidden lg:flex justify-center items-center gap-8 text-sm font-medium uppercase tracking-wider">
                    <li><Navlink href="/">Home</Navlink></li>
                    <li><Navlink href="/all-tiles">All Tiles</Navlink></li>
                    <li><Navlink href="/profile">My Profile</Navlink></li>
                </ul>

                <div className="hidden lg:flex justify-end items-center gap-4">

                    <NavbarProfile />

                </div>
                <div className="flex lg:hidden">
                    <MobileMenu />
                </div>
            </div>
        </nav>
    )
}