import { Home, Car, Bike, MapPin, Grid } from "lucide-react";

export default function ExploreSidebar() {
  return (
    <div className="w-72 bg-slate-200 p-6 rounded-2xl h-fit">

      {/* ================= CATEGORIES ================= */}
      <h3 className="text-[12px] font-semibold text-gray-400 tracking-wider mb-4">
        CATEGORIES
      </h3>

      <div className="space-y-2 text-[14px]">

        {/* Active */}
        <div className="flex items-center gap-3 bg-blue-100 text-blue-600 px-4 py-3 rounded-xl font-medium">
          <Grid size={16} />
          All Rentals
        </div>

        <div className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-200 rounded-xl cursor-pointer transition">
          <Home size={16} />
          Apartments
        </div>

        <div className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-200 rounded-xl cursor-pointer transition">
          <Car size={16} />
          Cars
        </div>

        <div className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-200 rounded-xl cursor-pointer transition">
          <Bike size={16} />
          Bicycles
        </div>

        <div className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-200 rounded-xl cursor-pointer transition">
          🛵
          Scooters
        </div>
      </div>

      {/* ================= PRICE RANGE ================= */}
      <div className="mt-8">
        <h3 className="text-[12px] font-semibold text-gray-400 tracking-wider mb-4">
          PRICE RANGE
        </h3>

        <input
          type="range"
          className="w-full accent-blue-600"
        />

        <div className="flex justify-between text-[12px] text-gray-500 mt-2">
          <span>$0</span>
          <span>$750+</span>
        </div>
      </div>

      {/* ================= LOCATION ================= */}
      <div className="mt-8">
        <h3 className="text-[12px] font-semibold text-gray-400 tracking-wider mb-4">
          LOCATION
        </h3>

        <div className="flex items-center bg-gray-200 rounded-xl px-3 py-2 text-[13px] text-gray-600">
          <MapPin size={14} className="mr-2 text-gray-500" />
          San Francisco, CA
        </div>
      </div>

      {/* ================= RATING ================= */}
      <div className="mt-8">
        <h3 className="text-[12px] font-semibold text-gray-400 tracking-wider mb-4">
          RATING
        </h3>

        <div className="space-y-3 text-[13px] text-gray-600">

          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" className="accent-blue-600" />
            <span className="text-yellow-400">★★★★★</span>
            <span className="text-gray-500">5.0</span>
          </label>

          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" defaultChecked className="accent-blue-600" />
            <span className="text-yellow-400">★★★★☆</span>
            <span className="text-gray-500">4.0 & Up</span>
          </label>

        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200 my-8"></div>

      {/* Clear Button */}
      <button className="w-full bg-gray-400 hover:bg-gray-300 text-gray-700 text-[14px] font-medium py-3 rounded-xl transition">
        Clear All Filters
      </button>

    </div>
  );
}
