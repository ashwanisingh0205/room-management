import React from 'react';

const rooms = [
  { name: 'Room 1', priority: 'high' },
  { name: 'Room 2', priority: 'high' },
  { name: 'Room 3', priority: 'normal' },
  { name: 'Room 4', priority: 'normal' },
  { name: 'Room 5', priority: 'normal' },
  { name: 'Room 6', priority: 'normal' },
  { name: 'Room 7', priority: 'normal' },
  { name: 'Room 8', priority: 'normal' },
  { name: 'Room 9', priority: 'normal' },
  { name: 'Room 10', priority: 'normal' },
  { name: 'Room 11', priority: 'normal' },
  { name: 'Room 12', priority: 'normal' },
];

export default function Rooms() {
  return (
    <div className="min-h-[80vh] bg-[#020B17] flex flex-col items-center justify-center py-4 sm:py-8 px-2">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white md-mb-12 xl-mb-16 lg-mb-14 sm:mb-8">Total Rooms: <span className="text-yellow-400">{rooms.length}</span></h2>
      {/* First row: 2 rooms */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 mb-4 w-full max-w-2xl">
        {rooms.slice(0, 2).map((room) => (
          <div
            key={room.name}
            className={
              room.priority === 'high'
                ? 'rounded-2xl bg-gradient-to-br from-yellow-200 via-yellow-400 to-yellow-600 flex flex-col items-center justify-center shadow-2xl border-4 border-yellow-400 text-gray-900 text-lg sm:text-2xl md:text-3xl font-bold relative h-20 sm:h-24 md:h-32 w-full sm:w-40 md:w-48'
                : 'rounded-2xl bg-green-300 flex items-center justify-center shadow-lg border-2 border-green-700 text-yellow-900 text-lg sm:text-2xl md:text-3xl font-semibold h-20 sm:h-24 md:h-32 w-full sm:w-40 md:w-48'
            }
          >
            {room.name}
          </div>
        ))}
      </div>
      {/* Second row: 5 rooms */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 mb-4 w-full max-w-4xl">
        {rooms.slice(2, 7).map((room) => (
          <div
            key={room.name}
            className={
              room.priority === 'high'
                ? 'rounded-2xl bg-gradient-to-br from-yellow-200 via-yellow-400 to-yellow-600 flex flex-col items-center justify-center shadow-2xl border-4 border-yellow-400 text-gray-900 text-lg sm:text-2xl md:text-3xl font-bold relative h-20 sm:h-24 md:h-32 w-full sm:w-40 md:w-48'
                : 'rounded-2xl bg-green-300 flex items-center justify-center shadow-lg border-2 border-green-700 text-yellow-900 text-lg sm:text-2xl md:text-3xl font-semibold h-20 sm:h-24 md:h-32 w-full sm:w-40 md:w-48'
            }
          >
            {room.name}
          </div>
        ))}
      </div>
      {/* Third row: 5 rooms */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 w-full max-w-4xl">
        {rooms.slice(7).map((room) => (
          <div
            key={room.name}
            className={
              room.priority === 'high'
                ? 'rounded-2xl bg-gradient-to-br from-yellow-200 via-yellow-400 to-yellow-600 flex flex-col items-center justify-center shadow-2xl border-4 border-yellow-400 text-gray-900 text-lg sm:text-2xl md:text-3xl font-bold relative h-20 sm:h-24 md:h-32 w-full sm:w-40 md:w-48'
                : 'rounded-2xl bg-green-300 flex items-center justify-center shadow-lg border-2 border-green-700 text-yellow-900 text-lg sm:text-2xl md:text-3xl font-semibold h-20 sm:h-24 md:h-32 w-full sm:w-40 md:w-48'
            }
          >
            {room.name}
          </div>
        ))}
      </div>
    </div>
  );
}
