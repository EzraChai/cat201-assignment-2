import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const COMMENTS = [
  {
    id: 1,
    title: "Exceptional Custom Software",
    body: "Purple Giant transformed our operations with a solution built precisely around our workflow. Their team took the time to understand our challenges and delivered software that solved problems we had struggled with for years.",
    author: "Adrian Lim, NovaMart",
  },
  {
    id: 2,
    title: "Mobile App That Exceeded Expectations",
    body: "We needed an intuitive mobile app for both iOS and Android, and Purple Giant delivered beyond what we imagined. The app feels polished, loads fast, and our customers love the experience.",
    author: "Sarah Yong, MyCare Solutions",
  },
  {
    id: 3,
    title: "Reliable Web Development Partner",
    body: "From planning to deployment, Purple Giant handled everything with precision. Our new website is fast, secure, and beautifully responsive. Their communication was clear at every step, making the whole process stress-free.",
    author: "Daniel Tan, Tritech",
  },
  {
    id: 4,
    title: "Deep Understanding of Our Business",
    body: "What sets Purple Giant apart is how well they understand your needs. They didn’t just build software — they crafted a solution that fits seamlessly into our existing workflow.",
    author: "Michelle Chen, UrbanEdge",
  },
  {
    id: 5,
    title: "Professional Team, On-Time Delivery",
    body: "Purple Giant consistently impressed us with their reliability. They delivered everything on schedule, solved issues quickly, and maintained excellent communication throughout the project.",
    author: "Raymond Lau, VisionPlus",
  },
  {
    id: 6,
    title: "Seamless Integrations",
    body: "Purple Giant integrated our new system flawlessly with our existing tools. The transition was smooth and our team adapted very quickly.",
    author: "Farah Hakim, SwiftLink",
  },
  {
    id: 7,
    title: "Innovative Solutions",
    body: "The team at Purple Giant brought innovative ideas to the table that we hadn’t considered. Their custom solutions helped streamline our workflow and save significant time.",
    author: "Jonathan Lee, Apex",
  },
  {
    id: 8,
    title: "Intuitive Mobile Experience",
    body: "The mobile app Purple Giant built feels premium and polished. The design is intuitive, and our users always compliment how smooth everything feels.",
    author: "Nur Aina, HelioWorks",
  },
  {
    id: 9,
    title: "Outstanding Support",
    body: "Purple Giant’s support team is responsive and helpful. Any questions or tweaks were handled quickly, making our experience stress-free.",
    author: "Kelvin Ong, BrightWave",
  },
  {
    id: 10,
    title: "Trusted Technology Partner",
    body: "Working with Purple Giant has been a pleasure. They are knowledgeable, professional, and genuinely care about delivering the best solution.",
    author: "Lisa Tan, GreenLeaf",
  },
];

export function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  return (
    <div className="mt-8 max-w-7xl p-4 mx-auto flex">
      <button
        className="border-2 border-black bg-white px-4 py-2 ml-2 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
        onClick={scrollPrev}
      >
        <ChevronLeft />
      </button>
      <div
        className="border-2 mx-4 w-full overflow-hidden p-4 px-8"
        ref={emblaRef}
      >
        <div className="flex gap-4 px-4">
          {COMMENTS.map((comment) => (
            <div
              key={comment.id}
              className="grow-0 shrink-0 basis-1/3 min-w-0 mx-2"
            >
              <div className="border-2 border-black bg-white p-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all">
                <div className="">
                  <h1 className="font-black text-base md:text-2xl">
                    {comment.title}
                  </h1>
                  <p className="mt-2 font-medium text-xs md:text-base text-neutral-600">
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
        className="border-2 border-black bg-white px-4 py-2 ml-2 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
        onClick={scrollNext}
      >
        <ChevronRight />
      </button>
    </div>
  );
}
