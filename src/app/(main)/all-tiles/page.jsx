import getData from "@/lib/getData";
import tilesBG from "@/assets/hero-bg/newBG3.png";
import AllTilesClient from "@/components/client/AllTilesClient";

export default async function AllTilesPage() {
  const data = await getData();

  return (
    <section
      className="relative w-full min-h-screen py-20 px-4 md:px-10 bg-repeat md:bg-cover md:bg-no-repeat"
      style={{
        backgroundImage: `url(${tilesBG.src})`,
      }}
    >
      <div className="absolute inset-0 backdrop-blur-md" />

      <div className="relative z-10 max-w-7xl mx-auto">
        
        <div className="text-center mb-14">
          <h1 className="text-3xl md:text-5xl font-semibold text-white">
            All Tiles Collection
          </h1>
          <p className="text-gray-200 mt-3">
            Explore our complete range of premium tile designs
          </p>
        </div>

        <AllTilesClient data={data} />
      </div>
    </section>
  );
}