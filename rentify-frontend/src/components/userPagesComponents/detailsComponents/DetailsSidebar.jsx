import { Star } from "lucide-react";

const DetailsSidebar = () => {
  return (
    <div className="sticky top-24 self-start">
      <div className="bg-white rounded-2xl shadow-lg border p-6 max-w-[380px]">

        {/* Price + Rating */}
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold">
            $450 <span className="text-sm font-normal">/ night</span>
          </h2>

          <div className="flex items-center gap-1 text-sm">
            <Star size={14} className="fill-blue-500 text-blue-500" />
            <span>4.95</span>
          </div>
        </div>

        {/* Booking Box */}
        <div className="border rounded-xl mt-6 overflow-hidden text-sm">

          <div className="grid grid-cols-2">
            <div className="p-3 border-r">
              <p className="text-gray-500 text-xs">CHECK-IN</p>
              <p>12/05/2023</p>
            </div>

            <div className="p-3">
              <p className="text-gray-500 text-xs">CHECKOUT</p>
              <p>12/12/2023</p>
            </div>
          </div>

          <div className="border-t p-3">
            <p className="text-gray-500 text-xs">GUESTS</p>
            <p>2 guests</p>
          </div>

        </div>

        {/* Button */}
        <button className="w-full bg-blue-600 text-white py-3 rounded-xl mt-6 font-semibold hover:bg-blue-700 transition shadow-md">
          Check Availability
        </button>

        <p className="text-center text-sm text-gray-500 mt-3">
          You won't be charged yet
        </p>

        {/* Pricing Breakdown */}
        <div className="mt-6 text-sm space-y-3">
          <div className="flex justify-between">
            <span>$450 × 7 nights</span>
            <span>$3,150</span>
          </div>

          <div className="flex justify-between">
            <span>Cleaning fee</span>
            <span>$120</span>
          </div>

          <div className="flex justify-between">
            <span>Service fee</span>
            <span>$435</span>
          </div>

          <hr />

          <div className="flex justify-between font-semibold text-base">
            <span>Total</span>
            <span>$3,705</span>
          </div>
        </div>

        {/* Buyer Protection */}
        <div className="mt-6 bg-blue-50 border rounded-xl p-4 text-sm">
          <p className="font-semibold text-blue-700">
            BUYER PROTECTION
          </p>
          <p className="text-gray-600 mt-1">
            Your payments are secured with our 100% money-back guarantee if the item is not as described.
          </p>
        </div>

      </div>
    </div>
  );
};

export default DetailsSidebar;