import Image from "next/image";
import Link from "next/link";
import {
  IoCalendar,
  IoCheckmarkCircle,
  IoCode,
  IoLogOut,
  IoMedical,
  IoWalletOutline,
} from "react-icons/io5";
import { IoLogoReact } from "react-icons/io5";
import { SidebarItem } from "./SidebarItem";

const menuItem = [
  {
    path: "/dashboard",
    icon: <IoCalendar size={30} />,
    title: "Dashboard",
  },
  {
    path: "/dashboard/rest-todos",
    icon: <IoCheckmarkCircle size={30} />,
    title: "Rest TODOS",
  },
  {
    path: "/dashboard/server-todos",
    icon: <IoCode size={30} />,
    title: "Server Actions",
  },
  {
    path: "/dashboard/cookies",
    icon: <IoMedical size={30} />,
    title: "Cookies",
  },
  {
    path: "/dashboard/products",
    icon: <IoWalletOutline size={30} />,
    title: "Productos",
  },
];

export const Sidebar = () => {
  return (
    <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r border-slate-700 bg-gradient-to-b from-slate-900 to-slate-800 transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
      <div>
        <div className="-mx-6 px-6 py-4">
          {/* TODO: Next/Link hacia dashboard */}
          <Link className="flex items-center" href="#" title="home">
            {/* Next/Image */}
            <IoLogoReact className="mr-2 text-3xl text-cyan-400" />
            <span className="text-3xl font-bold bg-linear-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Dash
            </span>
          </Link>
        </div>

        <div className="mt-8 text-center">
          {/* Next/Image */}
          <Image
            src="https://avatars.githubusercontent.com/u/128999319?s=400&u=c76b83328ae8be8e8d1619f8f4cf9ee76de1d96b&v=4"
            alt=""
            className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28 ring-4 ring-cyan-900/50"
            width={50}
            height={50}
          />
          <h5 className="hidden mt-4 text-xl font-semibold text-slate-200 lg:block">
            Raton Perez
          </h5>
          <span className="hidden text-slate-400 lg:block">Admin</span>
        </div>

        <ul className="space-y-2 tracking-wide mt-8">
          {/* TODO: src/components <SidebarItem /> */}
          {/* Active className: text-white bg-gradient-to-r from-sky-600 to-cyan-400 */}
          {menuItem.map((item) => (
            <SidebarItem key={item.path} {...item} />
          ))}
        </ul>
      </div>

      <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t border-slate-700">
        <button className="px-4 py-3 flex items-center space-x-4 rounded-xl text-slate-300 hover:bg-slate-700/50 hover:shadow-md hover:text-red-400 transition-all group">
          <IoLogOut />
          <span className="group-hover:text-red-400 font-medium">Logout</span>
        </button>
      </div>
    </aside>
  );
};
