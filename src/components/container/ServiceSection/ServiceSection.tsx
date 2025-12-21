import React from "react";

interface Service {
  icon: string;
  title: string;
  description: string;
}

const Services: React.FC = () => {
  const services: Service[] = [
    {
      icon: "Web-Dev.svg",
      title: "Web Development",
      description: "Build fast, scalable, and SEO-friendly websites."
    },
    {
      icon: "Mobile.svg",
      title: "Mobile App Development",
      description: "Native & cross-platform apps tailored to user needs."
    },
    {
      icon: "UI-UIX.svg",
      title: "UI/UX Design",
      description: "Delight users with intuitive and beautiful interfaces needs."
    },
    {
      icon: "Cloud.svg",
      title: "Cloud Solutions",
      description: "Secure and flexible cloud infrastructure for your growth."
    },
    {
      icon: "Soft-Dev.svg",
      title: "Software Development",
      description: "Custom solutions built around your business logic."
    },
    {
      icon: "Server.svg",
      title: "IT Infrastructure",
      description: "Scale your backend with reliable tech foundations."
    },
    {
      icon: "Security.svg",
      title: "Cybersecurity Services",
      description: "Stay protected with enterprise-grade security."
    },
    {
      icon: "Document.svg",
      title: "QA Solutions",
      description: "Ensure performance with rigorous testing frameworks."
    },
    {
      icon: "Support.svg",
      title: "IT Consulting & Support",
      description: "Make smarter tech decisions with expert guidance."
    }
  ];

  return (
    <section
      id="services"
      className="flex flex-col justify-center items-center text-center w-full px-4 lg:px-35 py-10 lg:py-20 gap-10 lg:gap-16"
    >
      <div className="w-full flex flex-col justify-center items-center">
        <h2 className="w-full text-[28px] lg:text-[40px] font-bold leading-[38px] lg:leading-14 tracking-[-2%] mb-[11px]">
          Smart IT Solutions That Grow With You
        </h2>
        <p className="text-sm lg:text-lg font-medium text-[#717680] dark:text-[#A4A7AE] leading-7 lg:leading-8">
          Tailored tech to boost efficiency, security, and results.
        </p>
      </div>

      <div className="w-full flex flex-col justify-center items-center gap-10 lg:grid lg:grid-cols-3 lg:grid-rows-3">
        {services.map((service, index) => (
          <div
            key={index}
            className="box-border flex flex-col relative justify-between items-start w-full rounded-2xl bg-[#FAFAFA] dark:bg-[#0A0D12] outline outline-1 outline-[#DEDCDC] dark:outline-[#181D27] -outline-offset-1 pt-12 pr-5 pb-5 pl-5 lg:pt-16 lg:pr-5 lg:pb-5 lg:pl-5"
          >
            <img
              src={`../assets/icons/${service.icon}`}
              alt={`${service.title} Icon`}
              className="absolute w-16 h-16 lg:w-20 lg:h-20 left-5 -top-[21px] lg:top-[-26px] order-1 z-1"
            />
            <div className="flex flex-col gap-1 items-start">
              <h3 className="text-base lg:text-xl font-bold text-start leading-[30px] lg:leading-[34px] tracking-[-2%] lg:tracking-normal">
                {service.title}
              </h3>
              <p className="text-sm lg:text-base font-medium text-start text-[#717680] dark:text-[#A4A7AE] leading-7 lg:leading-7.5">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;