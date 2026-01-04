import { Code, LaptopMinimal, Smartphone } from "lucide-react";
import "./App.css";
import TrustedBy from "./TrustedBy";
import { Carousel } from "./Carousel";
import PreviousProjects from "./PreviousProjects";

function App() {
  return (
    <>
      <title>Home | Purple Golem</title>
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
          What Do We Do?
        </h2>
        <div className="grid md:grid-cols-3 p-4 pr-6 gap-8 mb-20">
          <div className="flex flex-col border-2 border-black bg-white px-4 py-2 ml-2 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
            <Code />
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

      <section className="flex flex-col justify-center items-center">
        <h2 className="text-center mt-12 mb-4 font-black text-xl md:text-3xl">
          Introduction Video
        </h2>
        <div className="my-6 mr-2 max-w-2xl mx-auto flex aspect-video flex-col border-2 border-black bg-white  ml-2 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
          <video controls>
          <source  src="/videos/about-us.mp4" />
            Your browser does not support the video tag.
</video>
        </div>
      </section>
      <section>
        <PreviousProjects />
      </section>
      <section>
        <h2 className="text-center mt-24 md:mt-32 mb-4 font-black text-xl md:text-3xl">
          Here's What Our Clients Say
        </h2>
        <Carousel />
      </section>
      <h2 className="text-center mt-24 mb-4 font-black text-xl md:text-3xl">
        Trusted By
      </h2>
      <TrustedBy />
    </>
  );
}

export default App;
