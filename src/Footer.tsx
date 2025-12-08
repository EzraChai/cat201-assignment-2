import { Link } from "react-router";

function Footer() {
  return (
    <div className="max-w-7xl mx-auto w-full grid grid-cols-2 p-4 mt-12">
      <div className="">
        <div className="flex items-center gap-2">
          <img
            src="/purple_giant.png"
            className=" w-4 h-4 md:w-8 md:h-8"
            alt="Logo"
          />
          <h1 className="font-bold hidden md:block text-base md:text-xl">
            PURPLE GIANT
          </h1>
        </div>
        <div className="mt-2 font-light ml-1 text-neutral-500">
          © 2025 PURPLE GIANT SDN BHD
        </div>
      </div>
      <div className="flex gap-12 justify-end">
        <ul>
          <Link className="hover:underline" to={"/"}>
            Home
          </Link>
        </ul>
        <ul>
          <Link className="hover:underline" to={"/about-us"}>
            About Us
          </Link>
        </ul>
        <ul>
          <Link className="hover:underline" to={"/services"}>
            Services
          </Link>
        </ul>
        <ul>
          <Link className="hover:underline" to={"/contact"}>
            Contact
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
