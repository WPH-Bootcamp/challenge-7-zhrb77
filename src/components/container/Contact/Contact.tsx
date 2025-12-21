import React, { useState } from "react";
import Input from "../../ui/Input";
import Button from "../../ui/Button";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    services: {
      webDev: true,
      mobileDev: false,
      uiux: false,
      cloud: false,
      softDev: false,
      other: false
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleServiceChange = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: {
        ...prev.services,
        [service]: !prev.services[service as keyof typeof prev.services]
      }
    }));
  };

  return (
    <section
      id="contact"
      className="flex flex-col justify-center items-center text-center w-full px-4 py-10 gap-6 lg:px-35 lg:py-20 lg:gap-16"
    >
      <div className="flex flex-col w-full lg:w-[720px] lg:gap-12">
        <div className="contact-header flex flex-col w-full lg:gap-4">
          <h2 className="w-full font-bold text-[28px] leading-[38px] tracking-[-2%] mb-[11px] lg:text-[40px] lg:leading-14 lg:mb-0">
            Ready to Start? Let's Talk.
          </h2>
          <p className="text-sm leading-7 lg:text-lg lg:leading-8 font-medium text-[#717680] dark:text-[#A4A7AE]">
            Tell us what you need, and we'll get back to you soon.
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="w-full gap-5">
          <Input
            label="Name"
            id="name"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />

          <Input
            label="Email"
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />

          <div className="flex flex-col w-full gap-1.5 mb-4">
            <label htmlFor="message" className="text-sm font-bold text-start leading-7">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Enter your message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-none border border-[#DFDFDF] dark:border-[#252B37] rounded-xl px-4 py-2 text-sm leading-7 lg:text-base lg:leading-7.5 font-medium text-[#717680] dark:text-[#FDFDFD] focus:outline-none focus:border-[#CC4E32]"
            />
          </div>

          <div className="flex flex-col w-full gap-1.5 mb-10">
            <p className="text-sm font-bold text-start leading-7">Services</p>
            <div className="flex flex-col lg:grid lg:grid-cols-2 w-full">
              {[
                { id: "webDev", label: "Web Development" },
                { id: "mobileDev", label: "Mobile App Development" },
                { id: "uiux", label: "UI/UX Design" },
                { id: "cloud", label: "Cloud Solutions" },
                { id: "softDev", label: "Software Development" },
                { id: "other", label: "Other" }
              ].map((service) => (
                <div key={service.id} className="flex w-full mb-2">
                  <label className="flex items-center gap-2 lg:gap-3 text-sm font-medium leading-7 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.services[service.id as keyof typeof formData.services]}
                      onChange={() => handleServiceChange(service.id)}
                      className="peer w-5 h-5 appearance-none border border-[#252B37] rounded-md checked:bg-[#FF623E] checked:border-[#FF623E]"
                    />
                    <img
                      src="../assets/icons/checked.svg"
                      alt="checked icon"
                      className="w-3 h-3 -ml-6 lg:-ml-7 -mt-0.5 opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity duration-50"
                    />
                    <span className="text-sm leading-7 lg:text-base lg:leading-7.5 text-[#0A0D12] dark:text-[#FDFDFD]">
                      {service.label}
                    </span>
                  </label>
                </div>
              ))}
            </div>
          </div>

          <Button type="submit" className="w-full h-11">
            Send
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;