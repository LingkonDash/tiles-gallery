import Link from "next/link";
import Image from "next/image";

export default function TilesCard({ tile }) {
    return (
        <div className="backdrop-blur-xl rounded-2xl overflow-hidden border border-white/30 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition duration-300 group " >
            <div className="relative w-full h-65 overflow-hidden">
                <Image
                    src={tile.image}
                    alt={tile.title}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-500"
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
                    <button className="w-full bg-white/80 text-[#2c2c2c] py-2 rounded-lg font-medium hover:bg-blue-700 hover:text-white cursor-pointer transition">
                        View Details
                    </button>
                </Link>
            </div>
        </div>
    );
}