import heroBg1 from "@/assets/hero-bg/hero1.png";
import { Button } from "@heroui/react";
import Image from "next/image";

export default function HeroSection() {
    return (
        <section className="relative w-full h-screen overflow-hidden">
            <div className='absolute inset-0'>
                <Image
                    src={heroBg1}
                    alt="hero background"
                    fill
                    className="w-full h-full object-cover blur-xs"
                />
            </div>

            <div className="relative z-5 flex flex-col items-center justify-center h-full text-center text-white px-4">
                <h1 className="text-3xl md:text-5xl font-bold mb-6">
                    Discover Your Perfect Aesthetic
                </h1>

                <Button
                    size="lg"
                    className="bg-white text-black font-semibold px-6 py-3 hover:bg-gray-200 transition"
                >
                    Browse Now
                </Button>
            </div>
        </section>
    );
}