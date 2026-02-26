import { Star, Gift, CheckCircle } from "lucide-react";

export default function DashboardStats() {
  return (
    <div className="grid grid-cols-3 gap-8 mt-12">
      
      <div className="bg-blue-50 p-8 rounded-3xl flex items-center gap-4 shadow-sm">
        <div className="bg-blue-600 text-white p-4 rounded-full">
          <CheckCircle size={22} />
        </div>
        <div>
          <p className="text-sm text-gray-500 uppercase">Total Bookings</p>
          <p className="text-3xl font-bold text-gray-800">24</p>
        </div>
      </div>

      <div className="bg-green-50 p-8 rounded-3xl flex items-center gap-4 shadow-sm">
        <div className="bg-green-600 text-white p-4 rounded-full">
          <Gift size={22} />
        </div>
        <div>
          <p className="text-sm text-gray-500 uppercase">Points Earned</p>
          <p className="text-3xl font-bold text-gray-800">1,450</p>
        </div>
      </div>

      <div className="bg-yellow-50 p-8 rounded-3xl flex items-center gap-4 shadow-sm">
        <div className="bg-yellow-500 text-white p-4 rounded-full">
          <Star size={22} />
        </div>
        <div>
          <p className="text-sm text-gray-500 uppercase">Average Rating</p>
          <p className="text-3xl font-bold text-gray-800">4.9</p>
        </div>
      </div>

    </div>
  );
}