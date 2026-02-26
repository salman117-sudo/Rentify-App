import { NavLink } from "react-router-dom";
import { User, Calendar, Heart, Settings, LogOut } from "lucide-react";

export default function DashboardSidebar() {
  const linkStyle =
    "flex items-center gap-3 px-4 py-3 rounded-xl transition text-sm font-medium";

  return (
    <div className="w-72 min-h-screen bg-white border-r border-gray-100 flex flex-col justify-between p-6">
      
      <div>
        <div className="flex items-center gap-2 mb-10">
          <div className="bg-blue-600 text-white p-2 rounded-xl">
            <Calendar size={18} />
          </div>
          <h2 className="text-xl font-bold text-gray-800">Rentify</h2>
        </div>

        <nav className="flex flex-col gap-2">
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              `${linkStyle} ${
                isActive
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-gray-600 hover:bg-gray-100"
              }`
            }
          >
            <User size={18} /> Profile
          </NavLink>

          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `${linkStyle} ${
                isActive
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-gray-600 hover:bg-gray-100"
              }`
            }
          >
            <Calendar size={18} /> My Bookings
          </NavLink>

          <NavLink
            to="/saved"
            className={`${linkStyle} text-gray-600 hover:bg-gray-100`}
          >
            <Heart size={18} /> Saved
          </NavLink>

          <NavLink
            to="/settings"
            className={`${linkStyle} text-gray-600 hover:bg-gray-100`}
          >
            <Settings size={18} /> Settings
          </NavLink>
        </nav>
      </div>

      <button className="flex items-center gap-3 text-red-500 text-sm font-medium">
        <LogOut size={18} /> Logout
      </button>
    </div>
  );
}