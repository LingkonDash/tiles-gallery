import Link from "next/link";
import notFoundBG from "@/assets/hero-bg/not-found-bg.png";

export default function NotFoundPage() {
    return (
        <section
            className="relative min-h-screen flex items-center px-6 md:px-20"
            style={{
                backgroundImage: `url(${notFoundBG.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="absolute inset-0 bg-linear-to-r from-black/50 via-black/20 to-transparent" />
            <div className="max-w-350 w-full mx-auto">

                <div className="relative z-10 max-w-xl text-white">

                    <h1 className="text-6xl md:text-7xl font-bold mb-4">
                        404
                    </h1>

                    <h2 className="text-xl md:text-2xl font-medium mb-4 text-white/90">
                        Oops! Page not found
                    </h2>

                    <p className="text-sm md:text-base text-white/70 mb-8 leading-relaxed">
                        Looks like you have taken a wrong turn. <br />
                        The page you are looking for does not exist or has been moved.
                    </p>

                    {/* Button */}
                    <Link href="/">
                        <button className="flex items-center gap-2 px-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white hover:text-black transition-all duration-300">
                            Go Back Home →
                        </button>
                    </Link>

                </div>
            </div>
        </section>
    );
}