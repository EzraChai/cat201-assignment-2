import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const COMMENTS = [
  {
    id: 1,
    title: "Exceptional Custom Software",
    body: "Purple Golem transformed our operations with a solution built precisely around our workflow. Their team took the time to understand our challenges and delivered software that solved problems we had struggled with for years.",
    author: "Google Product Team",
  },
  {
    id: 2,
    title: "Mobile App That Exceeded Expectations",
    body: "We needed an intuitive mobile app for both iOS and Android, and Purple Golem delivered beyond what we imagined. The app feels polished, loads fast, and our customers love the experience.",
    author: "AirAsia Digital Team",
  },
  {
    id: 3,
    title: "Reliable Web Development Partner",
    body: "From planning to deployment, Purple Golem handled everything with precision. Our new website is fast, secure, and beautifully responsive. Their communication was clear at every step, making the whole process stress-free.",
    author: "Tritech Engineering Team",
  },
  {
    id: 4,
    title: "Deep Understanding of Our Business",
    body: "What sets Purple Golem apart is how well they understand your needs. They didn’t just build software — they crafted a solution that fits seamlessly into our existing workflow.",
    author: "Setel Product Team",
  },
  {
    id: 5,
    title: "Professional Team, On-Time Delivery",
    body: "Purple Golem consistently impressed us with their reliability. They delivered everything on schedule, solved issues quickly, and maintained excellent communication throughout the project.",
    author: "Maybank Technology Team",
  },
  {
    id: 6,
    title: "Seamless Integrations",
    body: "Purple Golem integrated our new system flawlessly with our existing tools. The transition was smooth and our team adapted very quickly.",
    author: "Touch ’n Go Engineering Team",
  },
  {
    id: 7,
    title: "Innovative Solutions",
    body: "The team at Purple Golem brought innovative ideas to the table that we hadn’t considered. Their custom solutions helped streamline our workflow and save significant time.",
    author: "Apex Operations Team",
  },
  {
    id: 8,
    title: "Intuitive Mobile Experience",
    body: "The mobile app Purple Golem built feels premium and polished. The design is intuitive, and our users always compliment how smooth everything feels.",
    author: "GOXUAN Digital Team",
  },
  {
    id: 9,
    title: "Outstanding Support",
    body: "Purple Golem's support team is responsive and helpful. Any questions or tweaks were handled quickly, making our experience stress-free.",
    author: "BrightWave IT Team",
  },
  {
    id: 10,
    title: "Trusted Technology Partner",
    body: "Working with Purple Golem has been a pleasure. They are knowledgeable, professional, and genuinely care about delivering the best solution.",
    author: "GreenLeaf Management Team",
  },
];

export function Carousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  return (
    <div className="mt-8 w-full max-w-7xl md:p-4 mx-auto flex">
      <button
        className="group border-2 hidden md:block hover:cursor-pointer border-black bg-white hover:bg-red-500 px-4 py-2 ml-2 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
        onClick={scrollPrev}
      >
        <ChevronLeft className="group-hover:text-white transition-all" />
      </button>
      <div
        className="border-0 md:border-2 bg-neutral-200 md:mx-4 w-full overflow-hidden pt-4 pb-6 md:px-8"
        ref={emblaRef}
      >
        <div className="flex gap-4 md:px-4">
          {COMMENTS.map((comment) => (
            <div
              key={comment.id}
              className="grow-0 shrink-0 basis-80 md:basis-1/3 min-w-0 mx-2"
            >
              <div className="border-2 border-black bg-white hover:bg-yellow-100 p-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
                <div className="">
                  <h1 className="font-black text-base md:text-2xl">
                    {comment.title}
                  </h1>
                  <p className="mt-2 text-justify font-medium text-xs md:text-base text-neutral-600">
                    {comment.body}
                  </p>
                  <p className="mt-4 text-right font-medium text-xs text-neutral-500">
                    {comment.author}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        className="group border-2 hidden md:block hover:cursor-pointer border-black bg-white hover:bg-red-500 px-4 py-2 ml-2 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
        onClick={scrollNext}
      >
        <ChevronRight className="group-hover:text-white transition-all " />
      </button>
    </div>
  );
}
