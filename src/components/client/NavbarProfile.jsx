'use client'

import Link from "next/link";
import Image from "next/image";
import { authClient } from "@/lib/auth-client";

export default function NavbarProfile() {

    const { data: session, isPending } = authClient.useSession();

    const handleLogout = async () => {
        await authClient.signOut();
        window.location.href = "/";
    };

    if (isPending) {
        return (
            <div className="w-10 h-10 rounded-full bg-white/20 animate-pulse border border-white/30" />
        );
    }

    if (!session?.user) {
        return (
            <>
                <Link
                    href="/login"
                    className="px-4 py-2 rounded-full bg-white/10 text-white text-sm uppercase
                    border border-white/20 hover:bg-white hover:text-black transition-all duration-300"
                >
                    Login
                </Link>

                <Link
                    href="/register"
                    className="px-4 py-2 rounded-full bg-blue-600 text-white text-sm uppercase
                    border border-white/20 hover:bg-white hover:text-black transition-all duration-300"
                >
                    Register
                </Link>
            </>
        );
    }

    return (
        <>
            <Link
                href="/my-profile"
                className="relative w-10 h-10 rounded-full overflow-hidden border border-white/30 hover:scale-110 transition"
            >
                <Image
                    src={session.user.image}
                    alt="user"
                    fill
                    className="object-cover"
                />
            </Link>

            <button
                onClick={handleLogout}
                className="px-4 py-2 rounded-full bg-white/10 text-white text-sm uppercase
                border border-white/20 hover:bg-blue-700 cursor-pointer hover:text-white transition-all duration-300"
            >
                Logout
            </button>
        </>
    );
}