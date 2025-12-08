import { NavLink } from "react-router";

function NavBar() {
  return (
    <nav className="w-full flex items-center justify-between absolute top-0 p-2 md:p-8 mx-auto">
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          isActive
            ? "bg-red-100 border-2 p-2 md:p-4 border-black md:px-4 md:py-2 gap-1 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-px hover:translate-y-px hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all md:min-h-8 flex items-center"
            : " bg-white border-2 p-2 md:p-4 border-black md:px-4 md:py-2 gap-1 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-px hover:translate-y-px hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all md:min-h-8 flex items-center"
        }
      >
        <img
          src="/purple_giant.png"
          className=" w-4 h-4 md:w-6 md:h-6"
          alt="Logo"
        />
        <h1 className="font-bold hidden md:block text-xs md:text-base">
          PURPLE GIANT
        </h1>
      </NavLink>
      <div className="flex gap-2">
        <div className="bg-white border-2 p-2 md:p-4 border-black md:px-4 md:py-2 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-px hover:translate-y-px hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all md:min-h-8 flex items-center">
          <h1 className="font-medium text-xs md:text-base">About Us</h1>
        </div>
        <div className="bg-white border-2 p-2 md:p-4 border-black md:px-4 md:py-2 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-px hover:translate-y-px hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all md:min-h-8 flex items-center">
          <h1 className="font-medium text-xs md:text-base">Services</h1>
        </div>
        <NavLink
          to={"/contact"}
          className={({ isActive }) =>
            isActive
              ? "bg-purple-100 border-2 p-2 md:p-4 border-black md:px-4 md:py-2 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-px hover:translate-y-px hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all md:min-h-8 flex items-center"
              : " bg-white border-2 p-2 md:p-4 border-black md:px-4 md:py-2 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-px hover:translate-y-px hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all md:min-h-8 flex items-center"
          }
        >
          <h1 className="font-medium text-xs md:text-base">Contact</h1>
        </NavLink>
      </div>
    </nav>
  );
}

export default NavBar;
