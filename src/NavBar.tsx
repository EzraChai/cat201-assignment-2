function NavBar() {
  return (
    <nav className="w-full flex items-center justify-between absolute top-0 p-8 mx-auto">
      <div className="bg-white border-2 p-4 border-black px-4 gap-1 py-2 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-px hover:translate-y-px hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all min-h-8 flex items-center">
        <img src="/purple_giant.png" className="w-6 h-6" alt="Logo" />
        <h1 className="font-bold">PURPLE GIANT</h1>
      </div>
      <div className="flex gap-2">
        <div className="bg-white border-2 p-4 border-black px-4 py-2 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-px hover:translate-y-px hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all min-h-8 flex items-center">
          <h1 className="font-medium">About Us</h1>
        </div>
        <div className="bg-white border-2 p-4 border-black px-4 py-2 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-px hover:translate-y-px hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all min-h-8 flex items-center">
          <h1 className="font-medium">Services</h1>
        </div>
        <div className="bg-white border-2 p-4 border-black px-4 py-2 shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:translate-x-px hover:translate-y-px hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all min-h-8 flex items-center">
          <h1 className="font-medium">Contact</h1>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
