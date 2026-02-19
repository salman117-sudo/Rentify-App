import { Heart, Star, ShoppingCart } from "lucide-react";
import { listings } from "../../../data/index";

export default function Featured() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              Featured Listings
            </h2>
            <p className="text-gray-500 mt-2">
              Handpicked top rated rentals for your next adventure
            </p>
          </div>
          <a href="#" className="text-blue-600 font-medium hover:underline">
            View all listings →
          </a>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {listings.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition duration-300 overflow-hidden"
            >
              {/* Image Section */}
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-48 w-full object-cover"
                />

                {/* Status Badge */}
                <span
                  className={`absolute top-4 left-4 text-xs font-semibold px-3 py-1 rounded-full text-white
                  ${item.status === "AVAILABLE" ? "bg-green-500" : "bg-gray-500"}`}
                >
                  {item.status}
                </span>

                {/* Heart Icon */}
                <div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow cursor-pointer">
                  <Heart size={16} className="text-gray-600" />
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col justify-between h-52">
                <div>
                  <p className="text-sm text-gray-500">{item.type}</p>

                  <h3 className="font-semibold text-lg text-gray-900 mt-1">
                    {item.title}
                  </h3>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mt-2 text-sm">
                    <Star
                      size={14}
                      className="text-yellow-500 fill-yellow-500"
                    />
                    <span className="text-gray-800 font-medium">
                      {item.rating}
                    </span>
                    <span className="text-gray-500">({item.reviews})</span>
                  </div>
                </div>

                {/* Price + Cart */}
                <div className="flex justify-between items-center mt-4">
                  <p className="text-blue-600 font-bold text-lg">
                    {item.price}
                    <span className="text-gray-500 text-sm font-normal">
                      {" "}
                      {item.duration}
                    </span>
                  </p>

                  <button className="bg-blue-100 p-3 rounded-xl hover:bg-blue-200 transition">
                    <ShoppingCart size={18} className="text-blue-600" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
