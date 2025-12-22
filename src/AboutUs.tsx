import TeamCard from "./TeamCard";

const TEAM = [
  { name: "Chai Juan Zhe", role: "Project Lead", photo: "https://ui-avatars.com/api/?name=ChaiJuanZhe&background=ff6b6b&color=fff&size=256" },
  { name: "Oi Li Jee", role: "Frontend Developer", photo: "https://ui-avatars.com/api/?name=OiLiJee&background=ff6b6b&color=fff&size=256" },
  { name: "Huam Jun Fei", role: "Backend Developer", photo: "https://ui-avatars.com/api/?name=HuamJunFei&background=ff6b6b&color=fff&size=256" },
];

function AboutUs() {
  return (
    <>
      <section className="bg-[#ff6b6b] w-full h-80 md:h-100 flex flex-col justify-center items-center">
        <h1 className="text-white text-3xl md:text-5xl font-black p-4 drop-shadow-[4px_4px_0_#000]">
          Who We Are
        </h1>
        <span className="text-black text-4xl md:text-7xl font-black bg-purple-300 border-4 border-black px-4 py-2 ml-2 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
          About Us
        </span>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-12 md:py-20">
        <div className="border-2 border-black bg-white p-6 md:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
          <h2 className="text-2xl md:text-4xl font-black mb-4">About Purple Giant</h2>
          <p className="font-medium text-neutral-700 mb-2">
            Purple Giant is dedicated to turning ideas into practical digital solutions. 
            We specialize in building interactive and user-friendly web applications using modern technologies like React, TypeScript, and Vite.
          </p>
          <p className="font-medium text-neutral-700 mb-2">
            Our mission is to deliver software that solves real-world problems efficiently, 
            ensuring seamless integration with existing workflows and a smooth user experience.
          </p>
          <p className="font-medium text-neutral-700">
            By combining innovative design with reliable development practices, Purple Giant helps businesses and individuals bring their digital visions to life.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-12 md:py-20 grid md:grid-cols-2 gap-8">
        <div className="border-2 border-black bg-white p-6 md:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
          <h2 className="text-2xl md:text-3xl font-black mb-4">Our Mission</h2>
          <p className="font-medium text-neutral-700">
            To create reliable, scalable, and user-friendly web solutions that help businesses achieve their goals and empower users with intuitive digital experiences.
          </p>
        </div>
        <div className="border-2 border-black bg-white p-6 md:p-8 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
          <h2 className="text-2xl md:text-3xl font-black mb-4">Our Vision</h2>
          <p className="font-medium text-neutral-700">
            To be recognized as a trusted digital solutions partner, delivering innovative software that transforms ideas into impactful realities.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-12 md:py-20">
        <h2 className="text-2xl md:text-4xl font-black mb-8 text-center">Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {TEAM.map((member, index) => (
            <TeamCard
              key={index}
              name={member.name}
              role={member.role}
              photo={member.photo}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default AboutUs;

