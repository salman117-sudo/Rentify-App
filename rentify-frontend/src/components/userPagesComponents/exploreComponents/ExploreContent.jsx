import ExploreSidebar from "./ExploreSidebar";
import ExploreGrid from "./ExploreGrid";
import ExplorePagination from "./ExplorePagination";

export default function ExploreContent() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-8 flex gap-8">

      {/* ===== SIDEBAR ===== */}
      <ExploreSidebar />

      {/* ===== MAIN CONTENT ===== */}
      <div className="flex-1">

        {/* Top Section */}
        <div className="flex justify-between items-start mb-8">

          {/* Left Text */}
          <div>
            <h2 className="text-[22px] font-semibold text-gray-800">
              128 rentals available
            </h2>
            <p className="text-[13px] text-gray-500 mt-1">
              Found in San Francisco, CA · All Categories
            </p>
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center text-[13px]">
            <span className="text-gray-500 mr-2">
              Sort by:
            </span>

            <select className="bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 text-[13px]">
              <option>Recommended</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Top Rated</option>
            </select>
          </div>

        </div>

        {/* Grid */}
        <ExploreGrid />

        {/* Pagination */}
        <div className="mt-10">
          <ExplorePagination />
        </div>

      </div>

    </div>
  );
}
