'use client'

import heroBg1 from "@/assets/hero-bg/hero1.png";
import { Button } from "@heroui/react";
import Image from "next/image";
import dynamic from "next/dynamic";

//disabled marquee ssr for hydration issue
const Marquee = dynamic(() => import("react-fast-marquee"), { ssr: false });

export default function HeroSection() {
    return (
        <section className="relative w-full h-screen overflow-hidden">

            <div className='absolute inset-0'>
                <Image
                    src={heroBg1}
                    alt="hero background"
                    fill
                    className="object-cover blur-xs"
                />
            </div>

            <div className="relative z-5 flex flex-col items-center justify-center h-full text-center text-white px-4">
                <h1 className="text-3xl md:text-5xl font-bold mb-6">
                    Discover Your Perfect Aesthetic
                </h1>

                <Button size="lg" className="px-6 py-3 font-semibold text-white bg-white/10 backdrop-blur-md border border-white/20 rounded-xl hover:bg-white hover:text-black transition-all duration-300" >
                    Browse Now
                </Button>
            </div>

            <div className="absolute bottom-0 left-0 w-full backdrop-blur-md bg-white/10 border-t border-white/10">
                <Marquee speed={40} className="py-3 text-white text-sm md:text-base font-medium uppercase tracking-wide">
                    New Arrivals: Marble Shine Tiles &nbsp; | &nbsp; Weekly Feature: Modern Geometric Patterns &nbsp; | &nbsp; Join the Community & Explore Premium Designs &nbsp; | &nbsp; New Arrivals: Wooden Texture Tiles &nbsp; | &nbsp; Elevate Your Space with Luxury Finishes &nbsp; | &nbsp;
                </Marquee>
            </div>

        </section>
    );
}