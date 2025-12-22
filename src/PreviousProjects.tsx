const projects = [
  {
    imageSource: "/projects/RpRadar.png",
    projectTitle: "RpRadar",
    projectDescription:
      "RpRadar is a web-based application that visualises and monitors real-time data through a radar-style interface. The project focuses on performance, clarity, and responsiveness, delivering an intuitive user experience across devices. Deployed on Vercel, RpRadar demonstrates my ability to design and build modern web applications using current frontend technologies and best practices.",
    hrefLink: "https://rpradar.vercel.app",
    techStack: ["Next.js", "Tailwind CSS", "Leaflet.js"],
  },
  {
    imageSource: "/projects/GoXuan.png",
    projectTitle: "GoXuan Website",
    projectDescription:
      "GoXuan is a digital radio platform that streams live shows, trending music, and multimedia content tailored for young listeners, blending audio and interactive online features to create a modern radio experience.",
    hrefLink: "https://goxuan.syok.my/",
    techStack: ["Next.js", "Node.js"],
  },
  {
    imageSource: "/projects/setel.png",
    projectTitle: "Setel je! Senangnya Promotion",
    projectDescription:
      "A promotional campaign page for Setel highlighting the 'Setel je! Senangnya' event — offering new users instant rewards, bonus Mesra Points, and multiple ways to earn entries for prizes during the event period. This design showcases how promotions can be structured to drive user engagement and reward behaviour.",
    hrefLink: "https://www.setel.com/promotions/seteljesenangnya",
  },
];

export default function PreviousProjects() {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-center mt-12 mb-4 font-black text-xl md:text-3xl">
        Previous Projects
      </h2>
      <p className="text-center">
        Projects that we&apos;ve done for our clients.
      </p>
      <div className="my-12 md:my-0">
        {projects.map((project, index) => (
          <Project
            key={project.projectTitle + index}
            index={index}
            imageSource={project.imageSource}
            projectTitle={project.projectTitle}
            projectDescription={project.projectDescription}
            hrefLink={project.hrefLink}
            techStack={project.techStack}
          />
        ))}
      </div>
    </div>
  );
}

function Project({
  index,
  imageSource,
  projectTitle,
  projectDescription,
  hrefLink,
  techStack,
}: {
  index: number;
  imageSource: string;
  projectTitle: string;
  projectDescription: string;
  hrefLink: string;
  techStack?: string[];
}) {
  return (
    <a
      href={hrefLink}
      className="grid md:grid-cols-2 w-full my-6 gap-4 md:my-24 md:gap-12 "
    >
      <div
        className={`${
          index % 2 === 0 ? "order-2 md:order-1" : "order-1 md:order-2"
        } flex mx-4 justify-center items-center border-2 border-black bg-white shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all`}
      >
        <img src={imageSource} alt={`${projectTitle} Project Image`} />
      </div>

      <div
        className={`p-6 ${
          index % 2 === 0 ? "order-2 md:order-2" : "order-2 md:order-1"
        } flex flex-col justify-center`}
      >
        <h3 className="text-2xl font-black mb-4">{projectTitle}</h3>
        <p className="text-neutral-700 mb-4">{projectDescription}</p>
        {techStack && (
          <>
            <h4>Tech Stack</h4>

            <div className="flex gap-2 items-center">
              <div className="flex gap-2 items-center">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-sm bg-neutral-200 px-2 py-1 rounded-md font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </a>
  );
}
