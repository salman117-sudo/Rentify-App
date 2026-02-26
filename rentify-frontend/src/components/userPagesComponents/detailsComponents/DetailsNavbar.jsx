import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const DetailsNavbar = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center gap-3 p-4 border-b">
      <button onClick={() => navigate(-1)}>
        <ArrowLeft />
      </button>

      <h2 className="text-lg font-semibold">Property Details</h2>
    </div>
  );
};

export default DetailsNavbar;