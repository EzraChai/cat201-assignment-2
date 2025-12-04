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
        <h2 className="text-center mt-4 font-black text-3xl">WHAT DO WE DO</h2>
        <p className="text-center "></p>
      </section>
    </>
  );
}

export default App;
