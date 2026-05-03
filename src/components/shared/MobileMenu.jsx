'use client'

import { useState } from "react"
import Link from "next/link"
import Navlink from "./Navlink"
import { FaUserCircle } from "react-icons/fa"
import { HiMenu, HiX } from "react-icons/hi"
import NavbarProfile from "../client/NavbarProfile"

export default function MobileMenu() {
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

                        <NavbarProfile />
                        
                    </div>
                </div>
            )}
        </div>
    )
}