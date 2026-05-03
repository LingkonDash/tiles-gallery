export default function Loading() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">

      <div className="absolute inset-0 bg-linear-to-br from-blue-900/60 via-blue-700/40 to-blue-500/30 backdrop-blur-xl" />

      <div className="relative z-10 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-lg flex flex-col items-center gap-4">

        <div className="w-12 h-12 border-4 border-white/30 border-t-blue-400 rounded-full animate-spin" />

        <p className="text-white/80 text-sm tracking-wide">
          Loading please wait...
        </p>

      </div>
    </div>
  );
}