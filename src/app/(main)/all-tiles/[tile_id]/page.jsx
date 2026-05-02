import getData from "@/lib/getData";
import Image from "next/image";
import bgImage from '@/assets/hero-bg/newBG3.png'
import bgImage2 from '@/assets/hero-bg/newBG4.png'

export default async function TilesDetailsPage({ params }) {
    const { tile_id } = await params;

    const data = await getData();
    const tile = data.find((obj) => obj.id === tile_id);

    if (!tile) {
        return (
            <div className="text-center relative min-h-screen flex justify-center items-center bg-center bg-cover w-full py-20" style={{ backgroundImage: `url(${bgImage2.src})` }}>
                <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />
                <h2 className="z-10 text-center text-4xl">Tile not found</h2>
            </div>
        )
    }

    return (
        <section
            className="
        relative w-full min-h-screen 
        flex items-center justify-center 
        px-4 py-20
        bg-center bg-cover
      "
            style={{
                backgroundImage: `url(${bgImage.src})`,
            }}
        >
            <div className="absolute inset-0 backdrop-blur-sm" />

            <div
                className="
          relative z-10 
          max-w-5xl w-full 
          bg-white/10 
          backdrop-blur-xl 
          border border-white/40 
          rounded-2xl 
          shadow-lg 
          p-6 md:p-10
        "
            >
                <div className="grid md:grid-cols-2 gap-8 items-center">

                    <div className="relative w-full h-80 rounded-xl overflow-hidden">
                        <Image
                            src={tile.image}
                            alt={tile.title}
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div>
                        <h1 className="text-2xl md:text-4xl font-semibold text-white mb-4">
                            {tile.title}
                        </h1>

                        <p className="text-gray-200 mb-6">
                            {tile.description}
                        </p>

                        <div className="space-y-2 text-sm text-gray-200">
                            <p><strong>Category:</strong> {tile.category}</p>
                            <p><strong>Material:</strong> {tile.material}</p>
                            <p><strong>Dimensions:</strong> {tile.dimensions}</p>
                            <p><strong>Price:</strong> ${tile.price}</p>
                            <p>
                                <strong>Status:</strong>{" "}
                                {tile.inStock ? "In Stock" : "Out of Stock"}
                            </p>
                        </div>

                        <button className="
              mt-6 
              px-6 py-2 
              bg-white/40 
              rounded-lg 
              font-medium 
              hover:bg-blue-600
              cursor-pointer 
              transition
            ">
                            Contact / Buy Now
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
}