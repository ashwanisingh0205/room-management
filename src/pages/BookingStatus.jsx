import React, { useState } from 'react';

// Helper to get the current week's dates
function getWeekDates() {
  const today = new Date();
  const start = new Date(today.setDate(today.getDate() - today.getDay() + 1)); // Monday
  return Array.from({ length: 7 }, (_, i) => {
    const d = new Date(start);
    d.setDate(start.getDate() + i);
    return d;
  });
}

const rooms = Array.from({ length: 12 }, (_, i) => `Room ${i + 1}`);

// Mock booking data (removed blocked/maintenance)
const bookings = [
  { room: 1, start: 1, end: 2, label: 'Col XYZ', guest: 'John Smith', type: 'business' },
  { room: 2, start: 2, end: 5, label: 'VIP Guest', guest: 'Sarah Johnson', type: 'vip' },
  { room: 3, start: 3, end: 5, label: 'Conference', guest: 'Tech Corp', type: 'conference' },
  { room: 5, start: 2, end: 4, label: 'Family', guest: 'Mike Wilson', type: 'leisure' },
  { room: 6, start: 4, end: 5, label: 'Business', guest: 'Alice Brown', type: 'business' },
  { room: 7, start: 5, end: 6, label: 'VIP', guest: 'David Lee', type: 'vip' },
  { room: 8, start: 0, end: 4, label: 'Extended Stay', guest: 'Emma Davis', type: 'extended' },
  { room: 9, start: 2, end: 6, label: 'Conference', guest: 'Global Corp', type: 'conference' },
];

function getCellStatus(roomIdx, dayIdx) {
  for (const b of bookings) {
    if (b.room === roomIdx + 1 && dayIdx >= b.start && dayIdx <= b.end) {
      return 'booked';
    }
  }
  return 'available';
}

function getBookingInfo(roomIdx, dayIdx) {
  for (const b of bookings) {
    if (b.room === roomIdx + 1 && dayIdx >= b.start && dayIdx <= b.end) {
      return b;
    }
  }
  return null;
}

export default function BookingStatus() {
  const weekDates = getWeekDates();
  const [selectedRoom, setSelectedRoom] = useState(null);

  const getStatusColor = (status) => {
    switch (status) {
      case 'booked':
        return 'outline outline-1 outline-red-400 text-white shadow-lg';
      case 'available':
        return 'outline outline-1 outline-green-400 text-white shadow-lg';
      default:
        return 'bg-gray-200 text-gray-700';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'booked':
        return '🗓️';
      case 'available':
        return '✅';
      default:
        return '❓';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#020B17] via-[#0a1a2e] to-[#1a2e4a] p-4 sm:p-6 lg:p-8">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto mb-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-cyan-300 mb-4">
            Booking Status Dashboard
          </h1>
          <p className="text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto">
            Room availability and booking status for the current week
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 backdrop-blur-sm border border-green-400/30 rounded-2xl p-6 text-center">
            <div className="text-3xl mb-2">✅</div>
            <div className="text-2xl font-bold text-green-400">Available</div>
            <div className="text-green-300 text-sm">Rooms ready for booking</div>
          </div>
          <div className="bg-gradient-to-br from-red-500/20 to-red-600/20 backdrop-blur-sm border border-red-400/30 rounded-2xl p-6 text-center">
            <div className="text-3xl mb-2">🏨</div>
            <div className="text-2xl font-bold text-red-400">Occupied</div>
            <div className="text-red-300 text-sm">Currently booked rooms</div>
          </div>
          <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 backdrop-blur-sm border border-blue-400/30 rounded-2xl p-6 text-center">
            <div className="text-3xl mb-2">📊</div>
            <div className="text-2xl font-bold text-blue-400">Total</div>
            <div className="text-blue-300 text-sm">12 rooms in system</div>
          </div>
        </div>
      </div>

      {/* Main Table Container */}
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/20 rounded-3xl shadow-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-sm">
                  <th className="px-6 py-4 text-left text-white font-bold text-lg border-b border-white/20">
                    <div className="flex items-center gap-3">
                      {/* <span className="text-2xl">🏢</span> */}
                      <span>Room No.</span>
                      
                    </div>
                  </th>
                  {weekDates.map((date, i) => (
                    <th key={i} className="px-4 py-4 text-center text-white font-semibold border-b border-white/20 min-w-[120px]">
                      <div className="flex flex-col items-center gap-1">
                        <div className="text-sm text-gray-300">
                          {date.toLocaleDateString('en-US', { weekday: 'short' })}
                        </div>
                        <div className="text-lg font-bold">
                          {date.getDate()}
                        </div>
                        <div className="text-xs text-gray-400">
                          {date.toLocaleDateString('en-US', { month: 'short' })}
                        </div>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rooms.map((room, roomIdx) => (
                  <tr 
                    key={roomIdx} 
                    className={`hover:bg-white/5 transition-all duration-300 cursor-pointer ${
                      selectedRoom === roomIdx ? 'bg-white/10' : ''
                    }`}
                    onClick={() => setSelectedRoom(selectedRoom === roomIdx ? null : roomIdx)}
                  >
                    <td className="px-0 py-4 border-b border-white/10 ">
                      <div className="flex items-center justify-center flex-row  gap-3 text-align-center">
                        {/* <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center text-white  font-bold text-lg shadow-lg">
                          {roomIdx + 1}
                          
                        </div> */}
                        <div className=" text-white font-semibold  text-lg">{room}</div>
                        
                        
                         
                        
                      </div>
                    </td>
                    {weekDates.map((_, dayIdx) => {
                      const status = getCellStatus(roomIdx, dayIdx);
                      const bookingInfo = getBookingInfo(roomIdx, dayIdx);
                      
                      return (
                        <td key={dayIdx} className="px-2 py-2 border-b border-white/10  ">
                          <div className={`relative group ${getStatusColor(status)}   rounded-xl p-3 min-h-[80px] flex flex-col items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-xl`}>
                            <div className="text-2xl mb-1 ">{getStatusIcon(status)}</div>
                            <div className="text-xs font-semibold text-center ">
                              {status === 'booked' ? 'Booked' : 'Available'}
                            </div>
                            
                            {/* Booking Details Tooltip */}
                            {bookingInfo && (
                              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-50">
                                
                              </div>
                            )}
                          </div>
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Legend */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 backdrop-blur-sm border border-green-400/30 rounded-xl p-4 flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-green-500 rounded-lg flex items-center justify-center text-white text-sm">✅</div>
            <div>
              <div className="text-green-400 font-semibold">Available</div>
              <div className="text-green-300 text-sm">Ready for booking</div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-red-500/20 to-red-600/20 backdrop-blur-sm border border-red-400/30 rounded-xl p-4 flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center text-white text-sm">🏨</div>
            <div>
              <div className="text-red-400 font-semibold">Booked</div>
              <div className="text-red-300 text-sm">Currently occupied</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
