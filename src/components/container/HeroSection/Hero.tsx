import React from "react";
import Button from "../../ui/Button";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative flex flex-col lg:flex-row justify-center lg:justify-end items-center w-full gap-10"
    >
      <div className="lg:absolute flex flex-col items-start mt-[61px] top-32 left-4 lg:left-35 gap-2 w-[90%] max-w-[361px] lg:max-w-[653px] h-auto">
        <h1 className="text-4xl sm:text-4xl lg:text-[56px] font-bold leading-11 lg:leading-17 tracking-[-2%] max-w-3xl">
          Your Tech Partner for{" "}
          <span className="text-[#FF6C37]">Smarter Growth</span>
        </h1>
        <p className="text-base sm:text-base lg:text-[20px] font-semibold leading-[30px] lg:leading-[34px]">
          We deliver tailored IT solutions to help you scale with speed and
          confidence.
        </p>
        <Button className="w-full lg:w-50 h-11 lg:h-12 mt-10">
          Let's Talk
        </Button>
      </div>
      <div className="flex w-full lg:w-[747px] h-auto lg:items-end lg:right-0 lg:z-[-1]">
        <img
          src="../assets/images/hero-light.png"
          alt="Hero Image"
          className="w-full h-auto block dark:hidden"
        />
        <img
          src="../assets/images/hero-dark.png"
          alt="Hero Image"
          className="w-full h-auto hidden dark:block"
        />
      </div>
    </section>
  );
};

export default Hero;