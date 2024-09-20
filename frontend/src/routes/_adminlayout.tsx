import Header from "@/components/adminComponents/header/Header";
import Sidebar from "@/components/adminComponents/sidebar/Sidebar";
import Sidebar2 from "@/components/adminComponents/sidebar/Sidebar2";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_adminlayout")({
  component: () => (
    <div className="">
      <Header />
      <div className="flex gap-7">
        <div className="flex w-full justify-start">
        <Sidebar />
        </div>
        <Outlet />
        <div className="flex w-full justify-end">
        <Sidebar2 />
        </div>
      </div>
    </div>
  ),
});
