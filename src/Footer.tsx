import { Link } from "react-router";

function Footer() {
  return (
    <div className="max-w-7xl mx-auto w-full md:grid md:grid-cols-2 p-4 mt-12">
      <div className="">
        <div className="flex justify-center md:justify-start items-center gap-2">
          <img
            src="/purple_golem.png"
            className=" w-4 h-4 md:w-8 md:h-8"
            alt="Logo"
          />
          <h1 className="font-bold text-base md:text-xl">PURPLE GOLEM</h1>
        </div>
        <div className="mt-2 text-center md:text-left font-light ml-1 text-neutral-500">
          © 2025 PURPLE GOLEM SDN BHD
        </div>
      </div>
      <div className="mt-4 md:mt-0 flex gap-4 md:gap-12 justify-center md:justify-end">
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
          <Link className="hover:underline" to={"/contact"}>
            Contact
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
