import footerBG from "@/assets/hero-bg/footerBG.png";
import Link from "next/link";

export default function Footer() {
    return (
        <footer
            className="relative w-full bg-center bg-cover py-16 px-4 border-t-2 border-t-blue-500 md:px-10"
            style={{
                backgroundImage: `url(${footerBG.src})`,
            }}>

            <div className="absolute inset-0 backdrop-blur-xs" />

            <div className="relative z-10 max-w-7xl mx-auto">
                <div
                    className="
            bg-white/5 
            backdrop-blur-xl 
            border border-white/30 
            rounded-2xl 
            p-8 md:p-12
            shadow-lg
          "
                >

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <div>
                            <h2 className="text-2xl font-semibold text-white mb-3">
                                Tile Gallery
                            </h2>
                            <p className="text-gray-300 text-sm">
                                Discover premium tile designs crafted to elevate your space
                                with modern luxury and timeless elegance.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-white mb-4">
                                Follow Us
                            </h3>
                            <ul className="space-y-2 text-gray-300">
                                <li>
                                    <Link href="#" className="block hover:text-gray-500 transition">
                                        Instagram
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="block hover:text-gray-500 transition">
                                        Facebook
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="block hover:text-gray-500 transition">
                                        Twitter
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" className="block hover:text-gray-500 transition">
                                        Pinterest
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-lg font-semibold text-white mb-4">
                                Contact Us
                            </h3>
                            <ul className="space-y-2 text-gray-200 text-sm">
                                <li>Email: support@tilegallery.com</li>
                                <li>Phone: +880 1776-572194</li>
                                <li>Address: 123 Design Street, Modern City</li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-10 pt-6 border-t border-white/30 text-center text-sm text-gray-400">
                        © {new Date().getFullYear()} Tile Gallery. All rights reserved.
                    </div>
                </div>
            </div>
        </footer>
    );
}