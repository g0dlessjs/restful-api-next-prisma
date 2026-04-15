// Admin Dashboard https://tailwindcomponents.com/component/dashboard-12
import {
  CiBellOn,
  CiBookmarkCheck,
  CiChat1,
  CiLogout,
  CiMenuBurger,
  CiSearch,
} from "react-icons/ci";
import { IoLogoReact } from "react-icons/io5";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* TODO: src/components <Sidebar /> */}
      <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r border-slate-700 bg-gradient-to-b from-slate-900 to-slate-800 transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
        <div>
          <div className="-mx-6 px-6 py-4">
            {/* TODO: Next/Link hacia dashboard */}
            <a className="flex items-center" href="#" title="home">
              {/* Next/Image */}
              <IoLogoReact className="mr-2 text-3xl text-cyan-400" />
              <span className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Dash
              </span>
            </a>
          </div>

          <div className="mt-8 text-center">
            {/* Next/Image */}
            <img
              src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c"
              alt=""
              className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28 ring-4 ring-cyan-900/50"
            />
            <h5 className="hidden mt-4 text-xl font-semibold text-slate-200 lg:block">
              Máximo Décimo Meridio
            </h5>
            <span className="hidden text-slate-400 lg:block">Admin</span>
          </div>

          <ul className="space-y-2 tracking-wide mt-8">
            {/* TODO: src/components <SidebarItem /> */}
            {/* Active className: text-white bg-gradient-to-r from-sky-600 to-cyan-400 */}
            <li>
              <a
                href="#"
                className="relative px-4 py-3 flex items-center space-x-4 rounded-xl text-white bg-gradient-to-r from-cyan-600 to-blue-600 shadow-lg shadow-cyan-900/30"
              >
                <CiBookmarkCheck size={30} />
                <span className="-mr-1 font-medium">Dashboard</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="px-4 py-3 flex items-center space-x-4 rounded-xl text-slate-300 hover:bg-slate-700/50 hover:shadow-md transition-all group"
              >
                <CiBookmarkCheck size={30} />
                <span className="group-hover:text-cyan-400 font-medium">
                  Categories
                </span>
              </a>
            </li>
          </ul>
        </div>

        <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t border-slate-700">
          <button className="px-4 py-3 flex items-center space-x-4 rounded-xl text-slate-300 hover:bg-slate-700/50 hover:shadow-md hover:text-red-400 transition-all group">
            <CiLogout />
            <span className="group-hover:text-red-400 font-medium">Logout</span>
          </button>
        </div>
      </aside>

      {/*TODO: Fin del <Sidebar /> */}

      {/* Main Layout content - Contenido principal del Layout */}
      <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%] min-h-screen bg-slate-950">
        {/* TODO: src/components <TopMenu /> */}
        <div className="sticky z-10 top-0 h-16 border-b border-slate-700 bg-slate-900/80 backdrop-blur-lg lg:py-2.5">
          <div className="px-6 flex items-center justify-between space-x-4">
            <h5 className="text-2xl text-slate-200 font-semibold lg:block">
              Dashboard
            </h5>
            <button className="w-12 h-16 -mr-2 border-r border-slate-700 lg:hidden">
              <CiMenuBurger size={30} />
            </button>
            <div className="flex space-x-2">
              <div className="md:block">
                <div className="relative flex items-center text-slate-400 focus-within:text-cyan-400">
                  <span className="absolute left-4 h-6 flex items-center pr-3 border-r border-slate-600">
                    <CiSearch />
                  </span>
                  <input
                    type="search"
                    name="leadingIcon"
                    id="leadingIcon"
                    placeholder="Search here"
                    className="w-full pl-14 pr-4 py-2.5 rounded-xl text-sm text-slate-200 outline-none border border-slate-700 bg-slate-800/50 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-900/30 transition"
                  />
                </div>
              </div>

              <button className="flex items-center justify-center w-10 h-10 rounded-xl border border-slate-700 bg-slate-800 hover:bg-cyan-900/30 hover:text-cyan-400 hover:border-cyan-800 transition-all md:hidden">
                <CiSearch />
              </button>
              <button className="flex items-center justify-center w-10 h-10 rounded-xl border border-slate-700 bg-slate-800 hover:bg-cyan-900/30 hover:text-cyan-400 hover:border-cyan-800 transition-all">
                <CiChat1 size={25} />
              </button>
              <button className="flex items-center justify-center w-10 h-10 rounded-xl border border-slate-700 bg-slate-800 hover:bg-cyan-900/30 hover:text-cyan-400 hover:border-cyan-800 transition-all relative">
                <CiBellOn size={25} />
                <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
            </div>
          </div>
        </div>
        {/* TODO: Fin del <TopMenu /> */}

        {/* TODO: Contenido en el Layout.tsx */}
        <div className="px-6 pt-6">
          {/* TODO: dashboard/page.tsx  */}
          {/* Este contenido va dentro de page.tsx */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* TODO: src/components <WidgetItem /> */}
            <div className="md:col-span-2 lg:col-span-1">
              <div className="h-full py-8 px-6 space-y-6 rounded-2xl border border-slate-700 bg-slate-800/50 shadow-sm hover:shadow-lg hover:shadow-cyan-900/10 transition-shadow">
                <div>
                  <h5 className="text-xl text-slate-300 text-center font-medium">
                    Global Activities
                  </h5>
                  <div className="mt-2 flex justify-center gap-4">
                    <h3 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                      $23,988
                    </h3>
                    <div className="flex items-end gap-1 text-emerald-400">
                      <svg
                        className="w-3"
                        viewBox="0 0 12 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.00001 0L12 8H-3.05176e-05L6.00001 0Z"
                          fill="currentColor"
                        />
                      </svg>
                      <span className="font-semibold">2%</span>
                    </div>
                  </div>
                  <span className="block text-center text-slate-400">
                    Compared to last week $13,988
                  </span>
                </div>
              </div>
            </div>
            {/* TODO: Fin <WidgetItem /> */}
          </div>
          {/* TODO: fin del dashboard/page.tsx  */}

          {/* TODO: Fin del contenido en el Layout.tsx */}
        </div>
      </div>
    </>
  );
}
