export default function Loading() {
  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      
      <div className="absolute inset-0 bg-blue-800" />

      <div
        className="
          relative z-10 
          bg-indigo-600 
          backdrop-blur-xl 
          border border-white/40 
          rounded-2xl 
          px-10 py-8 
          shadow-lg 
          flex flex-col items-center gap-6
        "
      >
        <div className="w-10 h-10 border-4 border-[#1a4a7b] border-t-transparent rounded-full animate-spin" />

        <p className="text-gray-200 text-sm tracking-wide">
          Loading please wait...
        </p>
      </div>
    </div>
  );
}