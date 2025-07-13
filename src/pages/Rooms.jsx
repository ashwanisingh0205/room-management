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
    <div className="min-h-[90vh] px-4 py-10 bg-gradient-to-br from-[#2F323B] to-[#1d1f25] text-white backdrop-blur-2xl">
      <h2 className="text-3xl font-bold text-center mb-10">
        Total Rooms: <span className="text-yellow-400">{rooms.length}</span>
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {rooms.map((room) => (
          <div
            key={room.name}
            className={`rounded-xl h-28 flex flex-col items-center justify-center text-center transition-all duration-300 border bg-white/5 backdrop-blur-sm ${
              room.priority === 'high'
                ? 'border-yellow-400 text-yellow-300 hover:shadow-yellow-400/40'
                : 'border-green-500 text-green-300 hover:shadow-green-300/30'
            } hover:scale-105 shadow-md`}
          >
            <span className="text-lg font-semibold">{room.name}</span>
            {room.priority === 'high' && (
              <span className="mt-1 text-xs bg-yellow-500 text-black px-2 py-0.5 rounded-full font-bold uppercase tracking-wider shadow-sm">
                High
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
