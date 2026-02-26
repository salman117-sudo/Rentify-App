const DetailsGallery = () => {
  return (
    <div className="mt-6">

      {/* BREADCRUMB */}
      <div className="text-sm text-gray-500 mb-6">
        Rentals / Luxury Housing /{" "}
        <span className="text-black font-medium">
          Oceanfront Penthouse
        </span>
      </div>

      {/* IMAGE GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">

        {/* LEFT BIG IMAGE */}
        <div className="lg:col-span-2 h-[500px] rounded-2xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1493809842364-78817add7ffb"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        {/* RIGHT SIDE GRID */}
        <div className="grid grid-cols-2 grid-rows-2 gap-4 h-[500px]">

          <img
            src="https://images.unsplash.com/photo-1505691938895-1758d7feb511"
            alt=""
            className="w-full h-full object-cover rounded-2xl"
          />

          <img
            src="https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6"
            alt=""
            className="w-full h-full object-cover rounded-2xl"
          />

          <img
            src="https://images.unsplash.com/photo-1507089947368-19c1da9775ae"
            alt=""
            className="w-full h-full object-cover rounded-2xl"
          />

          {/* Last Image With Button */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1505691938895-1758d7feb511"
              alt=""
              className="w-full h-full object-cover rounded-2xl"
            />

            <button className="absolute bottom-4 right-4 bg-white px-4 py-2 rounded-xl shadow-md text-sm font-medium hover:bg-gray-100">
              Show all photos
            </button>
          </div>

        </div>

      </div>
    </div>
  );
};

export default DetailsGallery;