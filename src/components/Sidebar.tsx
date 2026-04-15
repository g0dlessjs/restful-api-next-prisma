import Image from "next/image";
import Link from "next/link";
import { CiBookmarkCheck, CiLogout } from "react-icons/ci";
import { IoLogoReact } from "react-icons/io5";
import { SidebarItem } from "./SidebarItem";

export const Sidebar = () => {
  return (
    <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r border-slate-700 bg-gradient-to-b from-slate-900 to-slate-800 transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
      <div>
        <div className="-mx-6 px-6 py-4">
          {/* TODO: Next/Link hacia dashboard */}
          <Link className="flex items-center" href="#" title="home">
            {/* Next/Image */}
            <IoLogoReact className="mr-2 text-3xl text-cyan-400" />
            <span className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Dash
            </span>
          </Link>
        </div>

        <div className="mt-8 text-center">
          {/* Next/Image */}
          <Image
            src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c"
            alt=""
            className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28 ring-4 ring-cyan-900/50"
            width={50}
            height={50}
          />
          <h5 className="hidden mt-4 text-xl font-semibold text-slate-200 lg:block">
            Máximo Décimo Meridio
          </h5>
          <span className="hidden text-slate-400 lg:block">Admin</span>
        </div>

        <ul className="space-y-2 tracking-wide mt-8">
          {/* TODO: src/components <SidebarItem /> */}
          {/* Active className: text-white bg-gradient-to-r from-sky-600 to-cyan-400 */}
          <SidebarItem />
        </ul>
      </div>

      <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t border-slate-700">
        <button className="px-4 py-3 flex items-center space-x-4 rounded-xl text-slate-300 hover:bg-slate-700/50 hover:shadow-md hover:text-red-400 transition-all group">
          <CiLogout />
          <span className="group-hover:text-red-400 font-medium">Logout</span>
        </button>
      </div>
    </aside>
  );
};
