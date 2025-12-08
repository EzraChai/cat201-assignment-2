import { Code, LaptopMinimal, Smartphone } from "lucide-react";
import "./App.css";
import TrustedBy from "./TrustedBy";
import { EmblaCarousel } from "./Carousel";

function App() {
  return (
    <>
      <head>
        <title>Home | Purple Giant</title>
      </head>
      <section className="bg-[#ff6b6b] w-full h-80 md:h-100 flex flex-col justify-center items-center">
        <h1 className="text-white text-3xl md:text-5xl font-black p-4 drop-shadow-[4px_4px_0_#000]">
          WE TURN IDEAS INTO
        </h1>
        <span className="text-black mr-2 text-4xl md:text-7xl font-black bg-purple-300 border-4 border-black px-4 py-2 ml-2 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
          REALITY
        </span>
      </section>
      <hr className="border-2 border-black" />
      <section className="max-w-7xl mx-auto">
        <h2 className="text-center mt-12 mb-4 font-black text-xl md:text-3xl">
          WHAT DO WE DO
        </h2>
        <div className="grid md:grid-cols-3 p-4 pr-6 gap-8 mb-20">
          <div className="flex flex-col border-2 border-black bg-white px-4 py-2 ml-2 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
            {/* <div className=" border-2 border-black bg-white pt-1 px-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-px hover:translate-y-px hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all"> */}
            <Code />
            {/* </div> */}
            <div className="">
              <h1 className="mt-2 font-black text-base md:text-2xl">
                Custom Software
              </h1>
              <p className="font-medium text-xs md:text-base text-neutral-600">
                Tailored applications built to solve your unique business
                problems and integrate seamlessly with your existing workflow.
              </p>
            </div>
          </div>
          <div className=" border-2 border-black bg-white px-4 py-2 ml-2 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
            <Smartphone className="" />

            <div className="">
              <h1 className="mt-2 font-black text-base md:text-2xl">
                Mobile App Development (Android & IOS)
              </h1>
              <p className="font-medium text-xs md:text-base text-neutral-600">
                Engaging and intuitive iOS and Android apps that connect you
                with your customers on the go.
              </p>
            </div>
          </div>
          <div className=" border-2 border-black bg-white px-4 py-2 ml-2 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
            <LaptopMinimal className="" />

            <div className="">
              <h1 className="mt-2 font-black text-base md:text-2xl">
                Web Development
              </h1>
              <p className="font-medium text-xs md:text-base text-neutral-600">
                Responsive, powerful, and secure websites and web applications
                designed for performance and scale.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <hr className="border-2 border-black" /> */}

      <section className="flex justify-center items-center">
        <div className="my-12 mr-2 flex aspect-video flex-col border-2 border-black bg-white px-4 py-2 ml-2 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"></div>
      </section>
      <section>
        <h2 className="text-center mt-12 mb-4 font-black text-xl md:text-3xl">
          HERE'S WHAT OUR CLIENTS SAY
        </h2>
        <EmblaCarousel />
      </section>
      <h2 className="text-center mt-12 mb-4 font-black text-xl md:text-3xl">
        TRUSTED BY
      </h2>
      <TrustedBy />
    </>
  );
}

export default App;
