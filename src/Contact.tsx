import { Mail, MapPin, Phone, Send } from "lucide-react";

function Contact() {
  return (
    <>
      <head>
        <title>Contact | Purple Giant</title>
      </head>
      {/* Hero Section */}
      <section className="bg-purple-300 w-full h-80 md:h-100 flex flex-col justify-center items-center">
        <h1 className="text-white text-3xl md:text-5xl font-black p-4 drop-shadow-[4px_4px_0_#000]">
          GET IN TOUCH
        </h1>
        <span className="text-black text-4xl md:text-7xl font-black bg-[#ff6b6b] border-4 border-black px-4 py-2 ml-2 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
          CONTACT US
        </span>
      </section>
      <hr className="border-2 border-black" />

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info Column */}
          <div className="flex flex-col gap-8">
            <h2 className="text-3xl md:text-5xl font-black">
              Let's Start a Project Together
            </h2>
            <p className="text-lg font-medium text-neutral-700">
              Have an idea? We'd love to hear about it. Send us a message and we'll get back to you as soon as possible.
            </p>

            <div className="flex flex-col gap-6 mt-4">
              <div className="flex items-center gap-4 border-2 border-black bg-white p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all">
                <div className="bg-[#ff6b6b] p-3 border-2 border-black">
                  <Mail className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Email Us</h3>
                  <p className="font-medium text-neutral-600">purplegiant@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 border-2 border-black bg-white p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all">
                <div className="bg-[#a78bfa] p-3 border-2 border-black">
                  <Phone className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Call Us</h3>
                  <p className="font-medium text-neutral-600">+604 8987766</p>
                </div>
              </div>

              <div className="flex items-center gap-4 border-2 border-black bg-white p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all">
                <div className="bg-[#34d399] p-3 border-2 border-black">
                  <MapPin className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Visit Us</h3>
                  <p className="font-medium text-neutral-600"> 123,Jalan Masjid Negeri,George Town, Penang</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="bg-white border-4 border-black p-6 md:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block font-black text-lg mb-2">NAME</label>
                <input
                  type="text"
                  placeholder="Ali"
                  className="w-full bg-neutral-100 border-2 border-black p-3 font-medium focus:outline-none focus:ring-0 focus:bg-[#fff0f0] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
                />
              </div>

              <div>
                <label className="block font-black text-lg mb-2">EMAIL</label>
                <input
                  type="email"
                  placeholder="Ali@gmail.com"
                  className="w-full bg-neutral-100 border-2 border-black p-3 font-medium focus:outline-none focus:ring-0 focus:bg-[#fff0f0] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
                />
              </div>

              <div>
                <label className="block font-black text-lg mb-2">MESSAGE</label>
                <textarea
                  rows={10}
                  placeholder="Tell us about your project..."
                  className="w-full bg-neutral-100 border-2 border-black p-3 font-medium focus:outline-none focus:ring-0 focus:bg-[#fff0f0] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all resize-none"
                ></textarea>
              </div>

              <button className="flex justify-center items-center gap-2 bg-black text-white font-black text-xl py-4 border-2 border-transparent hover:bg-white hover:text-black hover:border-black shadow-[4px_4px_0px_0px_rgba(128,128,128,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all mt-2 cursor-pointer">
                SEND MESSAGE <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
