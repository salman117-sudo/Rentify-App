export default function DashboardHeader() {
  return (
    <div className="flex justify-between items-center mb-10">
      
      <div>
        <h1 className="text-4xl font-semibold text-gray-800">
          My Bookings
        </h1>
        <p className="text-gray-500 mt-1">
          Manage your active and past rentals
        </p>
      </div>

      {/* Profile */}
      <div className="flex items-center gap-4 bg-white px-6 py-3 rounded-full shadow-sm border border-gray-100">
        <img
          src="https://i.pravatar.cc/40"
          alt="user"
          className="w-11 h-11 rounded-full"
        />
        <div>
          <p className="font-semibold text-gray-800">Alex Johnson</p>
          <p className="text-xs text-blue-600 font-medium">
            PREMIUM MEMBER
          </p>
        </div>
      </div>
    </div>
  );
}