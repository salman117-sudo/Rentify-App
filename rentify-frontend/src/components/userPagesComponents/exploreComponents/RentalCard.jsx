import { Heart, Star, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export default function RentalCard({ rental }) {
  return (
    <Link to={`/rental/${rental.id}`} className="block">
      <div className="group bg-slate-100 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition duration-300 overflow-hidden">

        {/* IMAGE SECTION */}
        <div className="relative overflow-hidden">
          <img
            src={rental.image}
            alt={rental.title}
            className="w-full h-56 object-cover transform transition duration-500 ease-in-out group-hover:scale-105"
          />

          <div className="absolute top-3 left-3 bg-blue-600 text-white text-[10px] font-semibold px-3 py-1 rounded-md tracking-wide">
            INSTANT BOOK
          </div>

          <div className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-sm cursor-pointer">
            <Heart size={16} className="text-gray-500" />
          </div>
        </div>

        {/* CONTENT SECTION */}
        <div className="p-4">
          <div className="flex justify-between items-start">
            <h3 className="text-[15px] font-semibold text-gray-800 leading-5">
              {rental.title}
            </h3>

            <div className="flex items-center bg-yellow-100 text-yellow-600 text-[11px] font-medium px-2 py-0.5 rounded-md">
              <Star size={12} className="mr-1 fill-yellow-500" />
              {rental.rating}
            </div>
          </div>

          <div className="flex items-center text-[12px] text-gray-500 mt-2">
            <MapPin size={13} className="mr-1 text-gray-400" />
            {rental.location}
          </div>

          <div className="flex justify-between items-center mt-5">
            <div>
              <span className="text-blue-600 font-semibold text-[16px]">
                ${rental.price}
              </span>
              <span className="text-gray-500 text-[13px] ml-1">
                /day
              </span>
            </div>

            <button
              onClick={(e) => e.preventDefault()}
              className="bg-blue-600 hover:bg-blue-700 text-white text-[13px] font-medium px-5 py-2 rounded-lg transition"
            >
              Book Now
            </button>
          </div>
        </div>

      </div>
    </Link>
  );
}