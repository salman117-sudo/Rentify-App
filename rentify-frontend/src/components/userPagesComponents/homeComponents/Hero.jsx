import React from "react";
import { MapPin, List, DollarSign, Search } from "lucide-react";

export default function Hero() {
  return (
    <section className="bg-slate-100 py-20 text-center">
      <h1 className="text-6xl md:text-5xl font-bold text-gray-900 mb-4">
        Rent bikes, cars, rooms, and <br />
        apartments in <span className="text-blue-600">one place.</span>
      </h1>

      <p className="text-gray-500 max-w-2xl mx-auto mb-10 font-bold ">
        Affordable and reliable rentals at your fingertips. Browse thousands of
        listings near you and book instantly.
      </p>

      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-full px-6 py-3 flex flex-wrap md:flex-nowrap gap-4 items-center">

        {/* Location Input */}
        <div className="flex items-center flex-1 bg-gray-100 rounded-full px-4 py-2">
          <MapPin className="text-gray-400 mr-2" size={20} />
          <input
            className="flex-1 outline-none bg-gray-100 text-gray-600"
            placeholder="Where are you going?"
          />
        </div>

        {/* Category Select */}
        <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
          <List className="text-gray-400 mr-2" size={20} />
          <select className="outline-none bg-gray-100 text-gray-600">
            <option>All Categories</option>
            <option>Bikes</option>
            <option>Cars</option>
            <option>Rooms</option>
            <option>Apartments</option>
          </select>
        </div>

        {/* Price Range Input */}
        <div className="flex items-center flex-1 bg-gray-100 rounded-full px-4 py-2">
          <DollarSign className="text-gray-400 mr-2" size={20} />
          <input
            className="flex-1 outline-none bg-gray-100 text-gray-600"
            placeholder="Price Range"
          />
        </div>

        {/* Search Button */}
        <button className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-full">
          <Search size={20} />
          Search
        </button>

      </div>
    </section>
  );
}
