import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { TrendingUp, Users, Calendar, Clock } from 'lucide-react';

// Mock data for room analytics - this would come from your actual booking data
const generateRoomAnalytics = () => {
  const rooms = Array.from({ length: 12 }, (_, i) => `Room ${i + 1}`);
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  
  return rooms.map((room, roomIndex) => {
    const weeklyData = days.map((day) => {
      // Generate random occupation data (0-100%)
      const occupation = Math.floor(Math.random() * 100);
      return {
        day,
        occupation,
        room: room,
        color: occupation > 70 ? '#ef4444' : occupation > 40 ? '#f59e0b' : '#10b981'
      };
    });
    
    return {
      room,
      roomIndex: roomIndex + 1,
      weeklyData,
      averageOccupation: Math.round(
        weeklyData.reduce((sum, day) => sum + day.occupation, 0) / 7
      ),
      totalBookings: Math.floor(Math.random() * 20) + 5
    };
  });
};

const roomAnalytics = generateRoomAnalytics();

// Calculate overall statistics
const overallStats = {
  totalRooms: roomAnalytics.length,
  averageOccupation: Math.round(
    roomAnalytics.reduce((sum, room) => sum + room.averageOccupation, 0) / roomAnalytics.length
  ),
  totalBookings: roomAnalytics.reduce((sum, room) => sum + room.totalBookings, 0),
  mostOccupiedRoom: roomAnalytics.reduce((max, room) => 
    room.averageOccupation > max.averageOccupation ? room : max
  )
};

export default function Analytics() {
  return (
    <div className="h-full bg-[#020B17] overflow-y-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">
          Room Analytics
        </h1>
        <p className="text-gray-300 text-lg">
          Weekly room occupation and booking statistics
        </p>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Card className="bg-gradient-to-br from-blue-600 to-blue-700 border-blue-500">
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Users className="h-8 w-8 text-white" />
              <div>
                <p className="text-white/80 text-sm">Total Rooms</p>
                <p className="text-white text-2xl font-bold">{overallStats.totalRooms}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-green-600 to-green-700 border-green-500">
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <TrendingUp className="h-8 w-8 text-white" />
              <div>
                <p className="text-white/80 text-sm">Avg. Occupation</p>
                <p className="text-white text-2xl font-bold">{overallStats.averageOccupation}%</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-600 to-purple-700 border-purple-500">
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Calendar className="h-8 w-8 text-white" />
              <div>
                <p className="text-white/80 text-sm">Total Bookings</p>
                <p className="text-white text-2xl font-bold">{overallStats.totalBookings}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-orange-600 to-orange-700 border-orange-500">
          <CardContent className="p-4">
            <div className="flex items-center space-x-2">
              <Clock className="h-8 w-8 text-white" />
              <div>
                <p className="text-white/80 text-sm">Most Occupied</p>
                <p className="text-white text-lg font-bold">{overallStats.mostOccupiedRoom.room}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Chart */}
      <Card className="bg-white/5 border-gray-700 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="text-white text-2xl">Weekly Room Occupation</CardTitle>
          <CardDescription className="text-gray-300">
            Percentage of time each room is occupied throughout the week
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={roomAnalytics}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis 
                  dataKey="room" 
                  stroke="#9CA3AF"
                  fontSize={12}
                  tick={{ fill: '#9CA3AF' }}
                />
                <YAxis 
                  stroke="#9CA3AF"
                  fontSize={12}
                  tick={{ fill: '#9CA3AF' }}
                  label={{ 
                    value: 'Occupation %', 
                    angle: -90, 
                    position: 'insideLeft',
                    fill: '#9CA3AF',
                    fontSize: 12
                  }}
                />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: '#1F2937',
                    border: '1px solid #374151',
                    borderRadius: '8px',
                    color: '#F9FAFB'
                  }}
                  labelStyle={{ color: '#F9FAFB' }}
                />
                <Legend 
                  wrapperStyle={{ color: '#F9FAFB' }}
                />
                <Bar 
                  dataKey="averageOccupation" 
                  fill="#3B82F6"
                  radius={[4, 4, 0, 0]}
                  name="Average Occupation %"
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Detailed Room Table */}
      <div className="mt-8">
        <Card className="bg-white/5 border-gray-700 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white">Room Details</CardTitle>
            <CardDescription className="text-gray-300">
              Detailed breakdown of each room's weekly performance
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left p-3 text-gray-300 font-semibold">Room</th>
                    <th className="text-left p-3 text-gray-300 font-semibold">Avg. Occupation</th>
                    <th className="text-left p-3 text-gray-300 font-semibold">Total Bookings</th>
                    <th className="text-left p-3 text-gray-300 font-semibold">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {roomAnalytics.map((room) => (
                    <tr key={room.room} className="border-b border-gray-800 hover:bg-gray-800/50">
                      <td className="p-3 text-white font-medium">{room.room}</td>
                      <td className="p-3">
                        <div className="flex items-center space-x-2">
                          <div className="w-16 bg-gray-700 rounded-full h-2">
                            <div 
                              className={`h-2 rounded-full ${
                                room.averageOccupation > 70 ? 'bg-red-500' :
                                room.averageOccupation > 40 ? 'bg-yellow-500' : 'bg-green-500'
                              }`}
                              style={{ width: `${room.averageOccupation}%` }}
                            ></div>
                          </div>
                          <span className="text-gray-300">{room.averageOccupation}%</span>
                        </div>
                      </td>
                      <td className="p-3 text-gray-300">{room.totalBookings}</td>
                      <td className="p-3">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          room.averageOccupation > 70 ? 'bg-red-500/20 text-red-400' :
                          room.averageOccupation > 40 ? 'bg-yellow-500/20 text-yellow-400' : 'bg-green-500/20 text-green-400'
                        }`}>
                          {room.averageOccupation > 70 ? 'High' :
                           room.averageOccupation > 40 ? 'Medium' : 'Low'}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
