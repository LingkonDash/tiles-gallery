'use client'

import Link from "next/link";
import Image from "next/image";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";


export default function NavbarProfile() {

    const { data: session } = authClient.useSession();


    const router = useRouter();

    const handleLogout = async () => {
        const { error } = await authClient.signOut();

        if (error) {
            toast.error("Logout failed. Try again.");
            return;
        }

        toast.success("Logged out successfully");

        setTimeout(() => {
            router.push("/");
        }, 800);
    };


    if (!session?.user) {
        return (
            <>
                <Link
                    href="/login"
                    className="px-4 py-2 rounded-full bg-white/10 text-white text-sm uppercase border border-white/20 hover:bg-white hover:text-black transition-all duration-300"
                >
                    Login
                </Link>

                <Link
                    href="/register"
                    className="px-4 py-2 rounded-full bg-blue-600 text-white text-sm uppercase border border-white/20 hover:bg-white hover:text-black transition-all duration-300">
                    Register
                </Link>
            </>
        );
    }

    return (
        <>
            <Link
                href="/profile"
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