import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/userPages/Home";
import Explore from "./pages/userPages/Explore";
import Login from "./pages/userPages/auth/Login";
import Register from "./pages/userPages/auth/Register";

export default function App() {
  return (
    <Routes>

      {/* Pages WITH Header */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
      </Route>

      {/* Page WITHOUT Header */}
      <Route path="/list-item" element={<Explore />} />

      {/* Auth */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

    </Routes>
  );
}
