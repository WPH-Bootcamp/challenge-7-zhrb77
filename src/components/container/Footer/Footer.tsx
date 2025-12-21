import React from "react";

const Footer: React.FC = () => {
  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#projects", label: "Projects" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#faq", label: "FAQ" },
  ];

  const socialMedia = [
    {
      name: "Facebook",
      icon: "../assets/icons/Facebook.svg",
      iconDark: "../assets/icons/Facebook-dark.svg",
    },
    {
      name: "Instagram",
      icon: "../assets/icons/Instagram.svg",
      iconDark: "../assets/icons/Instagram-dark.svg",
    },
    {
      name: "Linkedin",
      icon: "../assets/icons/Linkedin.svg",
      iconDark: "../assets/icons/Linkedin-dark.svg",
    },
    {
      name: "TikTok",
      icon: "../assets/icons/TikTok.svg",
      iconDark: "../assets/icons/TikTok-dark.svg",
    },
  ];

  return (
    <footer className="flex flex-col justify-center items-center text-center w-full px-4 py-6 mb-[37px] lg:px-35 lg:py-20 lg:gap-16">
      <div className="flex flex-col w-full justify-items-start bg-[#FAFAFA] dark:bg-[#0A0D12] border border-[#DFDFDF] dark:border-[#252B37] p-5 gap-6 lg:p-10 lg:gap-15 rounded-3xl">
        <div className="footer-header flex flex-col lg:flex-row-reverse w-full items-start lg:justify-between">
          <img
            src="../assets/logos/logo-smart-tech.svg"
            alt="Smart Tech Logo"
            className="mb-6 lg:items-end lg:w-[158.63px] lg:h-auto block dark:hidden"
          />
          <img
            src="../assets/logos/logo-smart-tech-dark.svg"
            alt="Smart Tech Dark Logo"
            className="mb-6 lg:items-end lg:w-[158.63px] lg:h-auto hidden dark:block"
          />
          <h2 className="lg:items-start lg:w-[281px] left-0 font-bold text-start text-[28px] leading-[38px] lg:text-4xl lg:leading-11 tracking-[-2%]">
            LET'S DISCUSS YOUR IDEAS
          </h2>
        </div>
        <div className="faq-line flex flex-col w-full justify-center">
          <hr className="w-full border-[#DFDFDF] dark:border-[#252B37]" />
        </div>
        <div className="footer-content flex flex-col lg:flex-row w-full justify-between gap-6 lg:gap-0">
          {/* Footer Menu */}
          <div className="footer-menu flex flex-col lg:flex-row w-full items-start">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="flex w-full font-medium text-sm lg:text-base leading-7 lg:leading-7.5 lg:px-4 py-2"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social Media Icons */}
          <div className="footer-social-media flex flex-row w-full items-start lg:justify-end gap-4">
            {socialMedia.map((social) => (
              <div
                key={social.name}
                className="flex aspect-square rounded-full w-10 h-10 bg-transparent justify-center items-center outline-1 outline-[#252B37] -outline-offset-1"
              >
                <img
                  src={social.icon}
                  alt={`${social.name} icon`}
                  className="block dark:hidden"
                />
                <img
                  src={social.iconDark}
                  alt={`${social.name} icon`}
                  className="hidden dark:block"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;