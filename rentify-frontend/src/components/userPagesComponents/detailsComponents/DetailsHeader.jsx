import { Bell, User } from "lucide-react";

const DetailsHeader = () => {
  return (
    <header className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
            <span className="text-white font-bold">🏠</span>
          </div>
          <h1 className="text-lg font-semibold">RentHub</h1>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-8 text-sm font-medium">
          <span className="hover:text-blue-600 cursor-pointer">Explore</span>
          <span className="hover:text-blue-600 cursor-pointer">List your item</span>
          <Bell size={18} className="cursor-pointer" />
          <div className="w-9 h-9 bg-blue-100 rounded-full flex items-center justify-center">
            <User size={16} className="text-blue-600" />
          </div>
        </div>

      </div>
    </header>
  );
};

export default DetailsHeader;