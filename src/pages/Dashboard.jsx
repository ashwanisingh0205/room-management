import React from 'react';
import bg from '../assets/bg.jpg'; // Adjust the path as necessary

export default function Dashboard({ onMakeBooking, onCheckBooking }) {
  return (
    <>
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center blur-md brightness-30"
        style={{ backgroundImage: `url(${bg})` }}
        aria-hidden="true"
      />

      <div className="relative flex flex-col items-center  min-h-[90vh] overflow-hidden px-4 py-10 sm:py-20 text-white w-full">
        {/* Gradient overlays */}
        <div className=" pointer-events-none absolute inset-0 z-10">
          <div className="absolute left-1/3 top-1/4 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-gradient-radial from-purple-700/30 via-transparent to-transparent rounded-full blur-3xl opacity-60"></div>
          <div className="absolute right-1/4 bottom-1/4 w-[240px] sm:w-[400px] h-[240px] sm:h-[400px] bg-gradient-radial from-green-600/30 via-transparent to-transparent rounded-full blur-2xl opacity-50"></div>
        </div>

        {/* Header Section */}
        <div className="w-full relative z-20 text-center mb-10">
          <h1 className="text-3xl sm:text-5xl font-bold text-white drop-shadow-md">Room Management Dashboard</h1>
          <p className="mt-4 text-gray-300 text-sm sm:text-lg max-w-2xl mx-auto">
            Quickly book rooms and manage your reservations with an intuitive and beautiful interface.
          </p>
        </div>

        {/* Main content cards */}
        <div className="relative z-20 flex flex-col sm:flex-row flex-wrap justify-center gap-10 sm:gap-10 md:gap-16 w-full max-w-5xl">
          {/* Make a Booking */}
          <article
            onClick={onMakeBooking}
            className="cursor-pointer rounded-xl border border-white/10 bg-white/20 backdrop-blur-md p-6 sm:p-8 shadow-md transition-all hover:shadow-green-500 hover:scale-105 w-full sm:w-80 transform duration-300 ease-in-out brightness-100"
          >
            <div className="inline-block rounded-lg bg-green-600 p-3 text-white shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 20v-7.5l4-2.222" />
              </svg>
            </div>

            <h3 className="mt-4 text-xl font-semibold text-white">Make a Booking</h3>

            <p className="mt-2 text-sm text-gray-200 leading-relaxed">
              Reserve rooms seamlessly for your guests, events, or staff with one click.
            </p>

            <div className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-green-400">
              Book now
              <span aria-hidden="true" className="transition-all group-hover:ms-1">&rarr;</span>
            </div>
          </article>

          {/* Check a Booking */}
          <article
            onClick={onCheckBooking}
            className="cursor-pointer rounded-xl border border-white/10 bg-white/25 backdrop-blur-md p-6 sm:p-8 shadow-md transition-all hover:shadow-purple-500 hover:scale-105 w-full sm:w-80 transform duration-300 ease-in-out brightness-100"
          >
            <div className="inline-block rounded-lg bg-purple-600 p-3 text-white shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3M4 11h16M4 19h16M4 15h16" />
              </svg>
            </div>

            <h3 className="mt-4 text-xl font-semibold text-white">Check a Booking</h3>

            <p className="mt-2 text-sm text-gray-200 leading-relaxed">
              View existing bookings, check availability, or modify reservations instantly.
            </p>

            <div className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-purple-300">
              View bookings
              <span aria-hidden="true" className="transition-all group-hover:ms-1">&rarr;</span>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}
