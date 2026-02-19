import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

export default function Login() {
  return (
    <div className="min-h-screen flex">
      {/* LEFT SIDE */}
      <div className="hidden md:flex w-1/2 relative">
        <img
          src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
          alt="Apartment"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 flex flex-col justify-between p-12 text-white w-full">
          <div className="text-xl font-semibold">Rentify</div>

          <div>
            <h1 className="text-5xl font-bold leading-tight mb-6">
              Your next adventure starts <br /> with a better stay.
            </h1>

            <p className="text-gray-200 max-w-md">
              Seamlessly rent houses, cars, and bikes all in one modern platform
              designed for the modern nomad.
            </p>
          </div>

          <div className="text-sm text-gray-300">
            Join 10k+ renters <br />
            <span className="italic">“Simplest rental experience ever”</span>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-50 px-8">
        <div className="w-full max-w-md bg-white p-10 rounded-2xl shadow-xl">
          <h2 className="text-3xl font-bold mb-2 text-gray-800">
            Welcome back
          </h2>

          <p className="text-gray-500 mb-6">
            Please enter your details to sign in.
          </p>

          {/* Social Buttons */}
          <div className="flex gap-4 mb-6">
            <button className="flex items-center justify-center gap-2 w-1/2 border rounded-lg py-2 hover:bg-gray-100 transition">
              <FcGoogle size={20} />
              Google
            </button>

            <button className="flex items-center justify-center gap-2 w-1/2 border rounded-lg py-2 hover:bg-gray-100 transition">
              <FaApple size={18} />
              Apple
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 h-px bg-gray-300"></div>
            <span className="text-gray-400 text-sm">
              OR CONTINUE WITH EMAIL
            </span>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          {/* Form */}
          <div className="space-y-4">
            <div>
              <label className="text-sm text-gray-600">Email Address</label>
              <input
                type="email"
                placeholder="name@company.com"
                className="w-full mt-1 border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <div className="flex justify-between text-sm text-gray-600">
                <label>Password</label>
                <span className="text-blue-600 cursor-pointer hover:underline">
                  Forgot password?
                </span>
              </div>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full mt-1 border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-600">
              <input type="checkbox" />
              Remember me for 30 days
            </div>

            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg shadow-md transition">
              Login to Your Account
            </button>
          </div>

          <p className="text-center text-sm text-gray-600 mt-6">
            Don’t have an account?{" "}
            <Link
              to="/register"
              className="text-blue-600 font-medium hover:underline"
            >
              Register now
            </Link>
          </p>

          <div className="flex justify-between text-xs text-gray-400 mt-8">
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Help Center</span>
          </div>
        </div>
      </div>
    </div>
  );
}
