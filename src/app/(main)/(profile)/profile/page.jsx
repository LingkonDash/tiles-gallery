"use client";

import Image from "next/image";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import bgImage2 from "@/assets/hero-bg/newBG4.png";

export default function ProfilePage() {
    const { data: session, isPending } = authClient.useSession();

    if (isPending) {
        return (
            <div className="relative min-h-screen flex items-center justify-center overflow-hidden">

                <div className="absolute inset-0 bg-linear-to-br from-blue-900/60 via-blue-700/40 to-blue-500/30 backdrop-blur-xl" />

                <div className="relative z-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-lg flex flex-col items-center gap-4">

                    <div className="w-12 h-12 border-4 border-white/30 border-t-blue-400 rounded-full animate-spin" />

                    <p className="text-white/80 text-sm tracking-wide">
                        Loading your profile...
                    </p>

                </div>
            </div>
        );
    }

    if (!session?.user) {
        return (
            <div className="relative min-h-screen flex items-center justify-center text-white">
                <div className="absolute inset-0 bg-linear-to-br from-blue-900/60 via-blue-700/40 to-blue-500/30 backdrop-blur-xl" />
                <p className="z-10 text-3xl">Please login to view your profile</p>
            </div>
        );
    }

    const user = session.user;

    return (
        <div
            className="relative min-h-screen flex justify-center items-center bg-center bg-cover w-full py-20 px-4"
            style={{ backgroundImage: `url(${bgImage2.src})` }}
        >
            <div className="absolute inset-0 bg-black/30 backdrop-blur-md" />

            <div className="relative z-10 w-full max-w-xl bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl p-8 shadow-lg text-white">

                <h1 className="text-3xl font-semibold mb-6 text-center">
                    My Profile
                </h1>

                <div className="flex justify-center mb-6">
                    <div className="relative w-28 h-28 rounded-full overflow-hidden border border-white/30">
                        <Image
                            src={user.image || "/default-avatar.png"}
                            alt="profile"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                <div className="space-y-3 text-left">
                    <p>
                        <span className="font-semibold">Name:</span> {user.name}
                    </p>
                    <p>
                        <span className="font-semibold">Email:</span> {user.email}
                    </p>
                </div>

                <div className="mt-8">
                    <Link href="/update-profile">
                        <button className="w-full py-2 rounded-lg bg-white text-black font-medium hover:bg-blue-400 hover:text-white transition">
                            Update Information
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}