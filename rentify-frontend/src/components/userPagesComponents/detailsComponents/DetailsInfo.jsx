import { Star, Share2, Heart, BedDouble, Bath, Wifi, Waves } from "lucide-react";

const DetailsInfo = () => {
  return (
    <div className="mt-8">
      
      {/* TITLE + ACTIONS */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold">
            Oceanfront Modern Penthouse
          </h1>

          <div className="flex items-center gap-2 text-gray-600 mt-2 text-sm">
            <Star size={16} className="fill-blue-500 text-blue-500" />
            <span className="font-medium">4.95</span>
            <span>(128 reviews)</span>
            <span>•</span>
            <span>Malibu, California</span>
          </div>
        </div>

        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 border rounded-lg text-sm hover:bg-gray-100">
            <Share2 size={16} />
            Share
          </button>
          <button className="flex items-center gap-2 px-4 py-2 border rounded-lg text-sm hover:bg-gray-100">
            <Heart size={16} />
            Save
          </button>
        </div>
      </div>

      <hr className="my-6" />

      {/* HOST SECTION */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="host"
            className="w-14 h-14 rounded-full object-cover"
          />
          <div>
            <p className="font-semibold text-lg">
              Hosted by Alexander Vance
            </p>
            <p className="text-sm text-gray-500">
              Member since March 2019 · 
              <span className="text-blue-600 font-medium ml-1">
                Verified Owner
              </span>
            </p>
          </div>
        </div>

        <button className="border border-blue-500 text-blue-600 px-5 py-2 rounded-lg hover:bg-blue-50 transition">
          Contact Host
        </button>
      </div>

      {/* FEATURES */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
        <div className="flex flex-col items-center gap-2 p-5 bg-gray-100 rounded-xl">
          <BedDouble size={24} />
          <span className="font-medium">3 Bedrooms</span>
        </div>

        <div className="flex flex-col items-center gap-2 p-5 bg-gray-100 rounded-xl">
          <Bath size={24} />
          <span className="font-medium">2.5 Baths</span>
        </div>

        <div className="flex flex-col items-center gap-2 p-5 bg-gray-100 rounded-xl">
          <Wifi size={24} />
          <span className="font-medium">Fast Wifi</span>
        </div>

        <div className="flex flex-col items-center gap-2 p-5 bg-gray-100 rounded-xl">
          <Waves size={24} />
          <span className="font-medium">Private Pool</span>
        </div>
      </div>

      {/* ABOUT SECTION */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold mb-4">
          About this space
        </h2>

        <p className="text-gray-600 leading-relaxed">
          Experience the ultimate coastal lifestyle in this architectural masterpiece 
          perched directly above the crashing waves of Malibu. This newly renovated 
          penthouse features floor-to-ceiling glass walls that open completely to 
          let the ocean breeze flow through the living space.
        </p>

        <p className="text-gray-600 leading-relaxed mt-4">
          The interior is curated with designer furnishings, a professional-grade 
          kitchen with Sub-Zero appliances, and a primary suite that feels like 
          a private spa retreat. Whether you're watching dolphins from the 
          private deck or enjoying sunset cocktails, this home offers a 
          sanctuary of peace and luxury.
        </p>

        <button className="text-blue-600 font-medium mt-4 hover:underline">
          Read more →
        </button>
      </div>
    </div>
  );
};

export default DetailsInfo;