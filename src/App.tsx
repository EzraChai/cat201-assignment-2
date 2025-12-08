import { LaptopMinimal } from "lucide-react";
import "./App.css";
import NavBar from "./NavBar";

function App() {
  return (
    <>
      <NavBar />
      <section className="bg-[#ff6b6b] w-full h-100 flex flex-col justify-center items-center">
        <h1 className="text-white text-5xl font-black p-4 drop-shadow-[4px_4px_0_#000]">
          WE TURN IDEAS INTO
        </h1>
        <span className="text-black text-7xl font-black bg-purple-300 border-4 border-black px-4 py-2 ml-2 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
          REALITY
        </span>
      </section>
      <hr className="border-2 border-black" />
      <section className="max-w-7xl mx-auto">
        <h2 className="text-center mt-6 mb-4 font-black text-3xl">
          WHAT DO WE DO
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex flex-col  border-2 border-black bg-white px-4 py-2 ml-2 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
            {/* <div className=" border-2 border-black bg-white pt-1 px-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-px hover:translate-y-px hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all"> */}
            <LaptopMinimal className="" />
            {/* </div> */}
            <div className="">
              <h1 className="mt-2 font-black text-xs md:text-2xl">
                Custom Web Application Development
              </h1>
              <p className="font-medium text-base text-neutral-600">
                We build scalable and efficient web applications tailored to
                your business needs.
              </p>
            </div>
          </div>
          <div className=" border-2 border-black bg-white px-4 py-2 ml-2 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
            <h1 className="font-medium text-xs md:text-base">
              Mobile App Development (Android & IOS)
            </h1>
          </div>
          <div className=" border-2 border-black bg-white px-4 py-2 ml-2 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
            <h1 className="font-medium text-xs md:text-base">UI/UX Design</h1>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
