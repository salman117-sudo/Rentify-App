import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

import Home from "./pages/userPages/Home";
import Explore from "./pages/userPages/Explore";
import RentalDetails from "./pages/userPages/RentalDetails";
import Login from "./pages/userPages/auth/Login";
import Register from "./pages/userPages/auth/Register";
import UserDashboard from "./pages/userPages/UserDashboard";

export default function App() {
  return (
    <Routes>

      {/* Pages WITH Common Header + Footer */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/list-item" element={<Explore />} />
      </Route>

      {/* Rental Page WITHOUT common layout */}
      <Route path="/rental/:id" element={<RentalDetails />} />

      {/* Auth Pages */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Dashboard Page (Separate Layout) */}
      <Route path="/dashboard" element={<UserDashboard />} />

    </Routes>
  );
}