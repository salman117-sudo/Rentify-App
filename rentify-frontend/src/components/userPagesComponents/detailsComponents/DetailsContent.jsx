import DetailsGallery from "./DetailsGallery";
import DetailsInfo from "./DetailsInfo";
import DetailsSidebar from "./DetailsSidebar";
import DetailsReviews from "./DetailsReviews";

const DetailsContent = () => {
  return (
    <div className="bg-[#f6f7fb] min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-8">

        {/* TITLE SECTION */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold">
            Oceanfront Modern Penthouse
          </h1>

          <div className="flex items-center gap-3 mt-2 text-sm text-gray-600">
            <span className="text-blue-600 font-medium">★ 4.95</span>
            <span>(128 reviews)</span>
            <span>•</span>
            <span>Malibu, California</span>
          </div>
        </div>

        {/* GALLERY */}
        <DetailsGallery />

        {/* ================= DESKTOP LAYOUT ================= */}
        <div className="mt-12 hidden lg:flex gap-16 items-start">

          {/* LEFT SIDE */}
          <div className="flex-1">
            <DetailsInfo />
            <DetailsReviews />
          </div>

          {/* RIGHT SIDE - STICKY SIDEBAR */}
          <div className="w-[380px] shrink-0">
            <DetailsSidebar />
          </div>

        </div>

        {/* ================= MOBILE LAYOUT ================= */}
        <div className="mt-12 lg:hidden">
          <DetailsInfo />
          <DetailsReviews />
          <div className="mt-10">
            <DetailsSidebar />
          </div>
        </div>

      </div>
    </div>
  );
};

export default DetailsContent;