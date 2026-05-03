"use client";

import Link from "next/link";
import Image from "next/image";
import { useSpring, animated } from "@react-spring/web";
import { useState } from "react";

export default function TilesCard({ tile }) {
  const [hovered, setHovered] = useState(false);

  const spring = useSpring({
    transform: hovered
      ? "translateY(-6px) scale(1.02)"
      : "translateY(0px) scale(1)",
    boxShadow: hovered
      ? "0px 20px 40px rgba(0,0,0,0.25)"
      : "0px 10px 20px rgba(0,0,0,0.15)",
    config: { tension: 220, friction: 18 },
  });

  return (
    <animated.div
      style={spring}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="backdrop-blur-xl rounded-2xl overflow-hidden border border-white/30 group"
    >
      <div className="relative w-full h-65 overflow-hidden">
        <Image
          src={tile.image}
          alt={tile.title}
          fill
          className={`object-cover transition duration-500 ${
            hovered ? "scale-105" : "scale-100"
          }`}
        />
      </div>

      <div className="p-5">
        <h3 className="text-lg font-semibold text-white mb-2">
          {tile.title}
        </h3>

        <p className="text-sm text-gray-200 mb-4 line-clamp-2">
          {tile.description}
        </p>

        <Link href={`/tile/${tile.id}`}>
          <button className="w-full bg-white/80 text-[#2c2c2c] py-2 rounded-lg font-medium hover:bg-white cursor-pointer transition">
            View Details
          </button>
        </Link>
      </div>
    </animated.div>
  );
}