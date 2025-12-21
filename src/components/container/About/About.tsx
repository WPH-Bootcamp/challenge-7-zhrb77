import React from "react";

const About: React.FC = () => {
  const clients = [
    "client-4.svg",
    "client-5.svg",
    "client-6.svg",
    "client-10.svg",
    "client-2.svg",
    "client-3.svg",
    "client-7.svg",
    "client-8.svg",
    "client-9.svg"
  ];

  return (
    <section
      id="about"
      className="flex flex-col justify-center items-center w-full"
    >
      <h2 className="text-base lg:text-2xl font-bold leading-[30px] lg:leading-9 tracking-[-2%] lg:tracking-normal">
        Trusted by Global Innovators & Leading Brands
      </h2>
      <div className="flex relative w-full h-[114px] lg:h-50">
        <div className="absolute left-0 top-0 w-[50px] lg:w-[260px] h-[98px] lg:h-50 bg-linear-to-r from-white via-white/80 dark:from-black dark:via-black/80 to-transparent pointer-events-none z-9"></div>
        <div className="absolute right-0 top-0 w-[50px] lg:w-[260px] h-[98px] lg:h-50 bg-linear-to-l from-white via-white/80 dark:from-black dark:via-black/80 to-transparent pointer-events-none z-9"></div>
        <div className="flex flex-wrap justify-center items-center lg:w-[1604] lg:h-32 px:0 py-10 lg:py-11 gap-10">
          {clients.map((client, index) => (
            <img
              key={index}
              src={`../assets/images/${client}`}
              alt={`Client ${index + 1}`}
              className={`h-[34px] lg:h-12 w-auto mix-blend-luminosity ${
                index < 3 || index === 3 ? "hidden lg:flex" : ""
              } ${index === 0 ? "lg:hidden" : ""}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;