import DashboardSidebar from "../../components/userPagesComponents/dashboardComponents/DashboardSidebar";
import DashboardHeader from "../../components/userPagesComponents/dashboardComponents/DashboardHeader";
import BookingCard from "../../components/userPagesComponents/dashboardComponents/BookingCard";
import DashboardStats from "../../components/userPagesComponents/dashboardComponents/DashboardStats";
import { userBookings } from "../../data/index";

export default function UserDashboard() {
  return (
    <div className="flex bg-gray-100 min-h-screen">
      <DashboardSidebar />

      <div className="flex-1 p-10">
        <DashboardHeader />

        <div className="space-y-6">
          {userBookings.map((booking) => (
            <BookingCard key={booking.id} {...booking} />
          ))}
        </div>

        <DashboardStats />
      </div>
    </div>
  );
}