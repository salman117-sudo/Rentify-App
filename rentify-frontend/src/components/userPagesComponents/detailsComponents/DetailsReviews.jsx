import { Flag } from "lucide-react";

const DetailsReviews = () => {
  return (
    <div className="mt-14">

      {/* REVIEWS HEADER */}
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold">
          ★ 4.95 · 128 reviews
        </h3>

        <button className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-700">
          <Flag size={14} />
          Report this listing
        </button>
      </div>

      {/* REVIEWS GRID */}
      <div className="grid md:grid-cols-2 gap-10 mt-8">

        {/* Review 1 */}
        <div>
          <div className="flex items-center gap-3">
            <img
              src="https://randomuser.me/api/portraits/women/44.jpg"
              alt="Sarah"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="font-semibold">Sarah Jenkins</p>
              <p className="text-sm text-gray-500">October 2023</p>
            </div>
          </div>

          <p className="text-gray-600 mt-4 leading-relaxed">
            This place exceeded all expectations. The views are even better in person.
            Alexander was an incredible host and was always available if we had questions.
          </p>
        </div>

        {/* Review 2 */}
        <div>
          <div className="flex items-center gap-3">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Michael"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="font-semibold">Michael Chen</p>
              <p className="text-sm text-gray-500">September 2023</p>
            </div>
          </div>

          <p className="text-gray-600 mt-4 leading-relaxed">
            Absolutely stunning design. The attention to detail in the kitchen
            and living areas is remarkable. Highly recommended for a quiet getaway.
          </p>
        </div>
      </div>

      {/* SHOW ALL BUTTON */}
      <button className="mt-8 border px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition">
        Show all 128 reviews
      </button>

      {/* DIVIDER */}
      <hr className="my-12" />

      {/* MAP SECTION */}
      <div className="mt-16">
        <h3 className="text-2xl font-semibold mb-6">
          Where you'll be
        </h3>

        <div
          className="relative rounded-2xl overflow-hidden bg-blue-100"
          style={{ height: "350px" }}
        >
          {/* Gradient Background */}
          <div
            className="absolute inset-0 opacity-70"
            style={{
              background:
                "linear-gradient(to bottom right, #bfdbfe, #93c5fd)",
            }}
          ></div>

          {/* Location Pin */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-14 h-14 bg-blue-400/40 rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-blue-700 rounded-full"></div>
            </div>
          </div>

          {/* Location Card */}
          <div className="absolute bottom-6 left-6 bg-white rounded-xl shadow-lg px-5 py-4">
            <p className="font-semibold text-sm">
              Malibu, California
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Exact location provided after booking
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};

export default DetailsReviews;