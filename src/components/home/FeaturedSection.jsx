import featuredBG from "@/assets/hero-bg/newBG4.png";
import TilesCard from "../shared/TilesCard";
import getData from "@/lib/getData";

export default async function FeaturedSection() {

    const data = await getData();
    
    const featured = data.slice(0, 4);

    return (
        <section
            className="relative w-full py-20 px-4 md:px-10 bg-center md:bg-cover bg-repeat"
            style={{
                backgroundImage: `url(${featuredBG.src})`,
            }}
        >
            <div className="absolute inset-0 backdrop-blur-sm" />

            <div className="relative z-10 h-full flex flex-col justify-center">

                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-5xl font-semibold text-white">
                        Featured Tiles
                    </h2>
                    <p className="text-gray-300 mt-3">
                        Curated designs crafted for modern luxury interiors
                    </p>
                </div>
                {/* Tiles card */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {featured.map((tile) => <TilesCard key={tile.id} tile={tile} />)}
                </div>

            </div>
        </section>
    );
}