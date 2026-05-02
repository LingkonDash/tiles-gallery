'use client'

import { useState } from "react"
import Link from "next/link"
import Navlink from "./Navlink"
import { FaUserCircle } from "react-icons/fa"
import { HiMenu, HiX } from "react-icons/hi"

export default function MobileMenu({ isLoggedIn }) {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <div className="relative">

            <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-white text-3xl cursor-pointer"
            >
                {menuOpen ? <HiX /> : <HiMenu />}
            </button>

            {menuOpen && (
                <div className="absolute right-0 mt-4 w-64 p-5 rounded-2xl
                    backdrop-blur-lg bg-black/50 border border-white/10 shadow-lg">

                    <ul className="flex flex-col gap-5 text-white uppercase text-sm font-medium">

                        <li onClick={() => setMenuOpen(false)}>
                            <Navlink href="/">Home</Navlink>
                        </li>

                        <li onClick={() => setMenuOpen(false)}>
                            <Navlink href="/all-tiles">All Tiles</Navlink>
                        </li>

                        <li onClick={() => setMenuOpen(false)}>
                            <Navlink href="/profile">My Profile</Navlink>
                        </li>
                    </ul>

                    <div className="mt-6 flex flex-col gap-3">

                        {!isLoggedIn ? (
                            <Link
                                href="/login"
                                onClick={() => setMenuOpen(false)}
                                className="text-center px-4 py-2 rounded-full bg-white/10 text-white uppercase
                                border border-white/20 hover:bg-white hover:text-black transition-all duration-300"
                            >
                                Login
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href="/profile"
                                    onClick={() => setMenuOpen(false)}
                                    className="flex items-center justify-center gap-2 text-white"
                                >
                                    <FaUserCircle className="text-xl" />
                                    Profile
                                </Link>

                                <button
                                    className="px-4 py-2 rounded-full bg-white/10 text-white uppercase
                                    border border-white/20 hover:bg-yellow-700 transition-all duration-300"
                                >
                                    Logout
                                </button>
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}