import { Link } from "react-router";

function NotFound() {
  return (
    <>
      <title>Contact | Purple Golem</title>
      <section className="w-full pr-2 h-[80vh] flex flex-col justify-center items-center">
        <div className="text-black text-4xl md:text-7xl font-black bg-[#ff6b6b] border-4 border-black px-4 py-2 ml-2 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
          Opps... <br /> Page Not Found
        </div>
        <Link
          to={"/"}
          className={
            " mt-12 bg-white border-2 p-2 md:p-4 border-black md:px-4 md:py-2 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-px hover:translate-y-px hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all md:min-h-8 flex items-center"
          }
        >
          <h1 className="font-medium text-xs md:text-base">Home</h1>
        </Link>
      </section>
    </>
  );
}

export default NotFound;
