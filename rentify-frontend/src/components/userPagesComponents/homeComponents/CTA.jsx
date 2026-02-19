import React from "react";

export default function CTA() {
  return (
    <section className="bg-slate-100 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div
          className="bg-slate-900
                        rounded-3xl px-10 md:px-16 py-14
                        flex flex-col md:flex-row
                        items-center justify-between
                        text-white shadow-2xl"
        >
          {/* Left Content */}
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
              Have something to rent? Join our community.
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed">
              Earn extra income by listing your unused bikes, cars, or spaces.
              It’s free to list and easy to manage.
            </p>

            <button
              className="mt-8 bg-blue-600 hover:bg-blue-700 
                               transition duration-300
                               px-8 py-4 rounded-xl
                               text-lg font-semibold shadow-lg"
            >
              Start Hosting Now
            </button>
          </div>

          {/* Right Image */}
          <div className="mt-10 md:mt-0 md:ml-10">
            <div className="bg-white p-4 rounded-2xl rotate-3 shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6"
                alt="person"
                className="w-64 md:w-72 rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
