import React from "react";

interface StatItem {
  number: string;
  text: string;
}

const Portfolio: React.FC = () => {
  const stats: StatItem[] = [
    { number: "50+", text: "Projects Delivered" },
    { number: "5+", text: "Years of Experience" },
    { number: "10+", text: "Industry Awards Won" },
    { number: "100%", text: "Client Satisfaction Rate" }
  ];

  return (
    <section
      id="portfolio"
      className="flex flex-col justify-center items-center text-center w-full px-4 lg:px-35 py-20"
    >
      <h2 className="w-full text-[28px] lg:text-[40px] font-bold leading-[38px] lg:leading-[56px] tracking-[-2%] mb-[11px]">
        End-to-End IT Solutions That Drive Results
      </h2>
      <p className="text-sm lg:text-lg font-medium text-[#717680] dark:text-[#A4A7AE] leading-7 lg:leading-8 mb-6 lg:mb-16">
        From strategy to execution, we deliver solutions that grow your business.
      </p>
      
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 justify-center items-center gap-4 lg:gap-5">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col w-[172.5px] lg:w-[275px] h-[172.5px] lg:h-[275px] rounded-full aspect-square bg-[#FAFAFA] dark:bg-[#0A0D12] outline outline-1 outline-[#DEDCDC] dark:outline-[#181D27] -outline-offset-1 p-4 justify-center items-center"
          >
            <h3 className="flex justify-center items-center text-4xl lg:text-5xl font-bold text-center text-[#FF623E] leading-11 lg:leading-15 tracking-[-2%]">
              {stat.number}
            </h3>
            <p className="flex justify-center items-center text-sm lg:text-xl font-semibold text-center leading-7 lg:leading-8.5">
              {stat.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;