import React from 'react';

export default function Dashboard({ onMakeBooking, onCheckBooking }) {
  return (
    <div className="relative flex items-center justify-center min-h-[80vh] bg-[#020B17] overflow-hidden">
      {/* Subtle radial gradient background overlay for depth */}
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
        <div className="absolute left-1/3 top-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-gradient-radial from-purple-700/30 via-transparent to-transparent rounded-full blur-3xl opacity-60"></div>
        <div className="absolute right-1/4 bottom-1/4 w-[240px] sm:w-[400px] h-[240px] sm:h-[400px] bg-gradient-radial from-green-600/30 via-transparent to-transparent rounded-full blur-2xl opacity-50"></div>
      </div>
      <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 sm:gap-10 md:gap-16 z-10 w-full max-w-2xl px-2">
        <button
          onClick={onMakeBooking}
          className="w-full sm:w-56 md:w-64 h-28 sm:h-48 md:h-56 rounded-2xl bg-gradient-to-br from-emerald-700 via-green-600 to-lime-500 text-white text-lg sm:text-2xl md:text-3xl font-semibold flex items-center justify-center shadow-2xl transition-all duration-300 border-4 border-white/10 hover:border-green-300/80 hover:shadow-green-400/60 hover:scale-105 focus:outline-none group relative"
        >
          <span className="text-center leading-snug drop-shadow-lg font-display">MAKE A<br/>BOOKING</span>
          <span className="absolute inset-0 rounded-2xl pointer-events-none group-hover:shadow-[0_0_40px_10px_rgba(132,204,22,0.4)] transition-all duration-300"></span>
        </button>
        <button
          onClick={onCheckBooking}
          className="w-full sm:w-56 md:w-64 h-28 sm:h-48 md:h-56 rounded-2xl bg-gradient-to-br from-violet-700 via-purple-600 to-fuchsia-500 text-white text-lg sm:text-2xl md:text-3xl font-semibold flex items-center justify-center shadow-2xl transition-all duration-300 border-4 border-white/10 hover:border-fuchsia-300/80 hover:shadow-fuchsia-400/60 hover:scale-105 focus:outline-none group relative"
        >
          <span className="text-center leading-snug drop-shadow-lg font-display">CHECK A<br/>BOOKING</span>
          <span className="absolute inset-0 rounded-2xl pointer-events-none group-hover:shadow-[0_0_40px_10px_rgba(192,38,211,0.4)] transition-all duration-300"></span>
        </button>
      </div>
    </div>
  );
}
