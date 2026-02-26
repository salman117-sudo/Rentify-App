import { MapPin, Calendar } from "lucide-react";

export default function BookingCard({
  image,
  category,
  title,
  date,
  location,
  price,
  status,
}) {
  const statusStyle = {
    Booked: "bg-blue-500 text-white",
    Completed: "bg-green-500 text-white",
    Cancelled: "bg-gray-300 text-gray-600",
  };

  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 flex gap-6 items-center">
      
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="w-56 h-36 rounded-2xl object-cover"
      />

      {/* Content */}
      <div className="flex-1">
        
        <div className="flex justify-between items-start">
          <div>
            <p className="text-xs font-semibold tracking-widest text-blue-600 uppercase">
              {category}
            </p>

            <h2 className="text-2xl font-semibold text-gray-800 mt-1">
              {title}
            </h2>
          </div>

          <span
            className={`text-xs px-4 py-1 rounded-full font-medium ${statusStyle[status]}`}
          >
            {status}
          </span>
        </div>

        {/* Date + Location */}
        <div className="flex gap-8 mt-4 text-sm text-gray-500">
          <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg">
            <Calendar size={16} />
            {date}
          </div>

          <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg">
            <MapPin size={16} />
            {location}
          </div>
        </div>

        {/* Price + Button */}
        <div className="flex justify-between items-center mt-6">
          <p className="text-xl font-bold text-gray-800">
            ${price} <span className="text-sm text-gray-400">total</span>
          </p>

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl text-sm font-medium shadow-md transition">
            View Ticket
          </button>
        </div>
      </div>
    </div>
  );
}