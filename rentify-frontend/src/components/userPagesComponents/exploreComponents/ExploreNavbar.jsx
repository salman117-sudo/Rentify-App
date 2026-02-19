import { Search, Bell, Zap } from "lucide-react";

export default function ExploreNavbar() {
  return (
    <div className="bg-[#F5F7FA] border-b">
      <div className="max-w-8xl mx-auto flex items-center justify-between px-6 py-3">

        {/* LEFT: Logo */}
        <div className="flex items-center gap-3">
          <div className="bg-blue-600 p-2 rounded-lg">
            <Zap size={18} className="text-white" />
          </div>
          <span className="text-lg font-bold text-blue-600 ">
            Rentify
          </span>
        </div>

        {/* CENTER: Search Bar */}
        <div className="flex-1 flex justify-center px-10">
          <div className="flex items-center bg-gray-300 w-full max-w-xl px-4 py-2 rounded-full">
            <Search size={18} className="text-gray-400 mr-3" />
            <input
              type="text"
              placeholder="Search for bikes, cars, or housing..."
              className="bg-transparent outline-none w-full text-sm text-gray-600"
            />
          </div>
        </div>

        {/* RIGHT: Notification + Profile */}
        <div className="flex items-center gap-6">

          {/* Notification */}
          <div className="relative">
            <Bell size={20} className="text-gray-500" />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </div>

          {/* Profile */}
          <div className="flex items-center gap-2 cursor-pointer">
            <img
              src="https://i.pravatar.cc/40"
              alt="user"
              className="w-9 h-9 rounded-full"
            />
            <span className="text-sm font-medium text-gray-700">
              Alex Johnson
            </span>
          </div>

        </div>

      </div>
    </div>
  );
}
