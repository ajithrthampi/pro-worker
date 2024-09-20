import { Link } from "@tanstack/react-router";

const Sidebar = () => {
  return (
    <div className="w-[300px]">
      <ul className="border-r border-black h-screen p-6">
        <Link to="/admin/dashboard" className="[&.active]:font-bold">
          <li className="">Dashboard</li>
        </Link>
        <Link to="/admin/profile" className="[&.active]:font-bold">
          <li>Profile</li>
        </Link>
        <li>Settings</li>
      </ul>
    </div>
  );
};

export default Sidebar;
