export default function TrustedBy() {
  const logos = [
    "/logos/google.png",
    "/logos/airasia.png",
    "/logos/setel.png",
    "/logos/tng.jpg",
    "/logos/goxuan.png",
    "/logos/maybank.png",
  ];

  return (
    <div className="overflow-hidden whitespace-nowrap p-6 md:p-0 md:py-6 ">
      <div className="grid grid-cols-2 gap-6 md:flex md:justify-center md:items-center md:gap-16 ">
        {logos.map((src, i) => (
          <img
            key={i}
            src={src}
            className="h-auto md:w-32 filter grayscale hover:grayscale-0 transition duration-300"
            alt="Company Logo"
          />
        ))}
      </div>
    </div>
  );
}
