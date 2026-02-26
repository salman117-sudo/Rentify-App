import { Globe, DollarSign } from "lucide-react";

const DetailsFooter = () => {
  return (
    <footer className="bg-white border-t mt-16">
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between text-sm text-gray-600">

        {/* Left */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-white text-sm font-bold">🏠</span>
          </div>
          <span className="font-medium">RentHub © 2023</span>
        </div>

        {/* Center */}
        <div className="flex items-center gap-6">
          <span className="hover:text-blue-600 cursor-pointer">Privacy</span>
          <span className="hover:text-blue-600 cursor-pointer">Terms</span>
          <span className="hover:text-blue-600 cursor-pointer">Sitemap</span>
          <span className="hover:text-blue-600 cursor-pointer">Company details</span>
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">
          <div className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center">
            <Globe size={16} />
          </div>
          <div className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center">
            <DollarSign size={16} />
          </div>
        </div>

      </div>
    </footer>
  );
};

export default DetailsFooter;