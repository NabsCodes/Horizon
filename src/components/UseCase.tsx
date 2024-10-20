import React from "react";
import Badge from "./ui/Badge";
import TestimonialCard from "./TestimonialCard";
import { motion } from "framer-motion";

// Import images
import avatarIntercom from "../assets/avatar.png";
import avatarAbstract from "../assets/avatar-abstract.png";
import logoIntercom from "../assets/logo-intercom.svg";
import logoAbstract from "../assets/logo-abstract.svg";
import PrimaryLinkButton from "./ui/PrimaryLinkButton";

const UseCase: React.FC = () => {
  const testimonials = [
    {
      name: "Alex Rodriguez",
      role: "Marketing Director, Digital Ventures Inc.",
      company: "INTERCOM",
      avatarSrc: avatarIntercom,
      content:
        "We integrated Horizon into our business operations, and the results have been outstanding. The Smart Alert System ensures we're always informed about critical market developments, giving us a competitive edge.",
      companyLogo: logoIntercom,
    },
    {
      name: "Sarah Thompson",
      role: "Marketing Director, Digital Ventures Inc.",
      company: "Abstract",
      avatarSrc: avatarAbstract,
      content:
        "Horizon has been a game-changer for our marketing strategies. The Dynamic Trend Analysis feature is nothing short of phenomenal. We now receive real-time insights into emerging trends, helping us tailor our campaigns for maximum impact.",
      companyLogo: logoAbstract,
    },
  ];

  return (
    <section
      id="usecase"
      className="bg-gray-100 px-4 py-[80px] sm:px-6 lg:px-8"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-12 flex flex-col justify-center gap-4">
          <Badge text="Customer Voices" className="mx-auto" />
          <h2 className="text-center text-4xl font-semibold leading-tight tracking-tight text-black md:text-[45px]">
            Early adopters are saying
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
        <div className="mt-[100px] grid grid-cols-1 gap-[80px] lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.8,
                delay: 0.4,
                ease: "easeInOut",
              },
            }}
            viewport={{
              amount: "some",
              once: true,
            }}
            className="mx-auto flex flex-col justify-center gap-[24px] xl:max-w-[550px]"
          >
            <p className="text-left text-[38px] font-[600] leading-[110%] tracking-[-1px] text-black md:text-[45px]">
              Benchmark <span className="text-violet-500">against</span> the
              best companies
            </p>
            <p className="text-[16px] font-[500] leading-[140%] tracking-[0em] text-gray-700">
              levate your competitive edge with our Competitor Benchmarking
              feature. Horizon benchmarks your performance against industry
              leaders, providing actionable insights to outperform your
              competition.
            </p>
            <PrimaryLinkButton
              to="https://github.com/NabsCodes"
              target="_blank"
              ariaLabel="Get early access"
              linkClassName="w-fit"
              spanClassName="whitespace-nowrap"
              svgClassName="transition-transform duration-300 ease-custom-bezier group-hover:translate-x-1"
            >
              Get early access
            </PrimaryLinkButton>
          </motion.div>
          <motion.img
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.8,
                delay: 0.4,
                ease: "easeInOut",
              },
            }}
            viewport={{
              amount: "some",
              once: true,
            }}
            decoding="async"
            sizes="min(100vw - 80px, 800px)"
            srcSet="https://framerusercontent.com/images/EHa5NCIzN5F4qKkMwUVwUmXw.jpg?scale-down-to=1024 985w,https://framerusercontent.com/images/EHa5NCIzN5F4qKkMwUVwUmXw.jpg 1110w"
            src="https://framerusercontent.com/images/EHa5NCIzN5F4qKkMwUVwUmXw.jpg"
            alt="Graphic showing a composition of the app widgets/UI elements"
            className="w-full rounded-3xl"
          />
        </div>
      </div>
    </section>
  );
};

export default UseCase;
