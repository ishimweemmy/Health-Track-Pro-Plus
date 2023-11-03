import MainDashboard from "src/views/admin/default";
import DataTables from "src/views/admin/tables";

// Icon Imports
import {
  MdHome,
  MdOutlineShoppingCart,
  MdBarChart,
  MdPerson,
} from "react-icons/md";

const routes = [
  {
    name: "patients",
    layout: "/admin",
    icon: <MdBarChart className="h-6 w-6" />,
    path: "patients",
    component: <DataTables />,
  }
];
export default routes;
