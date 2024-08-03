import React, { useState } from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import MotionLinkButton from "./MotionLinkButton";

const navLinks = [
  { id: 1, name: "Features", href: "#features" },
  { id: 2, name: "Use Case", href: "#usecase" },
  { id: 3, name: "Integration", href: "#integration" },
  { id: 4, name: "Pricing", href: "#pricing" },
  { id: 5, name: "Blog", href: "#blog" },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    // eslint-disable-next-line no-useless-escape
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <motion.header className="fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur-sm">
      <nav className="flex w-full items-center justify-between px-[20px] py-[20.5px] lg:px-[80px]">
        <Link to={"/"} className="flex items-center gap-1.5">
          <img src={logo} alt="Horizon Logo" className="h-[36px] w-[36px]" />
          <h1 className="text-[22px] font-medium tracking-[0.02em]">Horizon</h1>
        </Link>

        <div className="hidden items-center text-[#4b5563] md:flex md:gap-4 lg:gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              to={link.href}
              onClick={handleScroll}
              className={`${link.id === 1 ? "lg:pl-5" : ""} cursor-pointer text-[16px] font-normal transition-colors duration-300 ease-custom-bezier hover:text-[#000]`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <MotionLinkButton
          to="https://andrea-montini.lemonsqueezy.com/"
          target="_blank"
          ariaLabel="Get this template"
          linkClassName="hidden md:flex"
          spanClassName="transition-transform duration-300 ease-custom-bezier group-hover:-translate-x-2"
        >
          Get this Template
        </MotionLinkButton>

        {isMenuOpen ? (
          <svg
            width="100%"
            height="1.5em"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            color="rgb(0, 0, 0)"
            className="h-8 w-8 cursor-pointer md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <path
              d="M6.758 17.243L12.001 12m5.243-5.243L12 12m0 0L6.758 6.757M12.001 12l5.243 5.243"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            color="rgb(0, 0, 0)"
            className="h-8 w-8 cursor-pointer md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        )}

        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute left-0 top-[77px] z-50 flex w-full flex-col items-center justify-between gap-5 bg-white/70 p-6 text-[#4b5563] shadow-custom-shadow backdrop-blur-sm md:hidden"
          >
            <div className="flex max-w-max flex-col items-center justify-center gap-5">
              {navLinks.map((link) => (
                <Link
                  key={link.id}
                  to={link.href}
                  onClick={handleScroll}
                  className="cursor-pointer text-[16px] font-normal transition-colors duration-300 ease-custom-bezier hover:text-[#000]"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <MotionLinkButton
              to="https://andrea-montini.lemonsqueezy.com/"
              target="_blank"
              ariaLabel="Get this template"
              linkClassName="w-full md:hidden"
              spanClassName="transition-transform duration-300 ease-custom-bezier group-hover:-translate-x-1"
              svgClassName="group-hover:translate-x-1 transition-transform duration-300 ease-custom-bezier"
            >
              Get this Template
            </MotionLinkButton>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
}

export default Navbar;
