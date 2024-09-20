import Sidebar from "@/components/adminComponents/sidebar/Sidebar";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_adminlayout/admin/profile")({
  component: () => (
    <div>
      <div className="flex">Profile111</div>
    </div>
  ),
});
