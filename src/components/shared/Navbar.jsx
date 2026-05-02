import Image from "next/image";
import logo from '@/assets/logo.png'
import Link from "next/link";
import { notoSerif } from "@/app/layout";
import Navlink from "./Navlink";
import { FaUserCircle } from "react-icons/fa";
import MobileMenu from "./MobileMenu";

export default function Navbar() {

    const isLoggedIn = false;

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

                    {!isLoggedIn ? (
                        <Link
                            href="/login"
                            className="px-4 py-2 rounded-full bg-white/10 text-white text-sm uppercase
                            border border-white/20 hover:bg-white hover:text-black transition-all duration-300"
                        >
                            Login
                        </Link>
                    ) : (
                        <>
                            <Link
                                href="/profile"
                                className="text-white text-2xl hover:scale-110 transition"
                            >
                                <FaUserCircle />
                            </Link>

                            <button
                                className="px-4 py-2 rounded-full bg-white/10 text-white text-sm uppercase
                                border border-white/20 hover:bg-blue-700 cursor-pointer hover:text-white transition-all duration-300"
                            >
                                Logout
                            </button>
                        </>
                    )}

                </div>
                <div className="flex lg:hidden">
                    <MobileMenu isLoggedIn={isLoggedIn}/>
                </div>
            </div>
        </nav>
    )
}