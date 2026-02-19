import { Link } from "react-router-dom";
import { FaGoogle, FaApple, FaCar, FaBicycle, FaHome } from "react-icons/fa";
import { Building2 } from "lucide-react";

export default function Register() {
  return (
    <div className="min-h-screen flex">

      {/* LEFT SIDE */}
      <div className="hidden md:flex w-1/2 bg-gradient-to-r from-blue-100 to-blue-200 items-center justify-center p-12">
        <div className="text-center max-w-md">

          {/* Logo Icon */}
          <div className="w-14 h-14 bg-blue-600 text-white flex items-center justify-center rounded-xl mx-auto mb-6 shadow-lg">
            <Building2 size={28} />
          </div>

          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Unlock your next journey <br />
            with <span className="text-blue-600">Rentify</span>.
          </h1>

          <p className="text-gray-600 mb-8">
            Join thousands of users who rent bikes, cars, and homes
            all in one professional platform.
          </p>

          {/* Illustration */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
            <img
              src="https://cdn-icons-png.flaticon.com/512/741/741407.png"
              alt="Car"
              className="w-full"
            />
          </div>

          {/* Bottom Categories */}
          <div className="flex justify-center gap-6 text-gray-600 text-sm">
            <span className="flex items-center gap-1">
              <FaBicycle /> Bikes
            </span>
            <span className="flex items-center gap-1">
              <FaCar /> Cars
            </span>
            <span className="flex items-center gap-1">
              <FaHome /> Housing
            </span>
          </div>

        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-50 px-8 relative">

        {/* Go to Home */}
        <Link
          to="/"
          className="absolute top-6 left-8 text-blue-600 font-medium hover:underline"
        >
          ← Go to Home Page
        </Link>

        <div className="w-full max-w-md bg-white p-10 rounded-2xl shadow-xl">

          <h2 className="text-2xl font-bold mb-2 text-gray-800">
            Create your account
          </h2>

          <p className="text-gray-500 mb-6">
            Start your journey with us today.
          </p>

          {/* Form */}
          <div className="space-y-4">

            <div>
              <label className="text-sm text-gray-600">Full Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full mt-1 border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">Email Address</label>
              <input
                type="email"
                placeholder="john@example.com"
                className="w-full mt-1 border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="text-sm text-gray-600">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full mt-1 border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Role Selection */}
            <div>
              <label className="text-sm text-gray-600 mb-2 block">
                I want to...
              </label>

              <div className="flex gap-4">
                <button
                  type="button"
                  className="flex-1 border-2 border-blue-600 text-blue-600 py-2 rounded-lg font-medium"
                >
                  Rent Items
                </button>

                <button
                  type="button"
                  className="flex-1 border py-2 rounded-lg font-medium text-gray-600 hover:border-blue-600"
                >
                  List my Items
                </button>
              </div>
            </div>

            {/* Terms */}
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <input type="checkbox" />
              <span>
                I agree to the{" "}
                <span className="text-blue-600 cursor-pointer">
                  Terms of Service
                </span>{" "}
                and{" "}
                <span className="text-blue-600 cursor-pointer">
                  Privacy Policy
                </span>
              </span>
            </div>

            {/* Register Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg shadow-md transition"
            >
              Register Account
            </button>

          </div>

          {/* Login Link */}
          <p className="text-center text-sm text-gray-600 mt-6">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-blue-600 font-medium hover:underline"
            >
              Log in
            </Link>
          </p>

          {/* Divider */}
          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-gray-300"></div>
            <span className="text-gray-400 text-sm">Or register with</span>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          {/* Social Login */}
          <div className="flex gap-4">
            <button className="flex items-center justify-center gap-2 w-1/2 border rounded-lg py-2 hover:bg-gray-100 transition">
              <FaGoogle />
              Google
            </button>

            <button className="flex items-center justify-center gap-2 w-1/2 border rounded-lg py-2 hover:bg-gray-100 transition">
              <FaApple />
              Apple
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}
