import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import MotionLinkButton from "./MotionLinkButton";

const Footer = () => {
  return (
    <motion.footer
      className="absolute bottom-0 flex w-full items-center justify-center bg-white/80 px-10 py-8 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex flex-col items-center justify-center gap-[40px] lg:flex-row lg:gap-3">
        <div className="flex items-center justify-center gap-1.5">
          <img src={logo} alt="horizon logo" className="h-[36px] w-[36px]" />
          <h1 className="text-[22px] font-medium tracking-[0.02em]">Horizon</h1>
        </div>

        <div className="flex flex-col items-center justify-center gap-4">
          <p className="text-center text-[16px] text-gray-500">
            Designed by{" "}
            <Link
              to="https://andrea-montini.lemonsqueezy.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-custom-purple font-medium hover:underline"
            >
              Andrea Montini
            </Link>{" "}
            • Developed by{" "}
            <Link
              to="https://github.com/NabsCodes"
              target="_blank"
              rel="noopener noreferrer"
              className="text-custom-purple font-medium hover:underline"
            >
              Hassan Umar Hassan
            </Link>{" "}
            • All rights reserved | Copyright © {new Date().getFullYear()}
          </p>
        </div>

        <MotionLinkButton
          to="https://andrea-montini.lemonsqueezy.com/"
          target="_blank"
          ariaLabel="Get this template"
          svgClassName="group-hover:translate-x-1 transition-transform duration-300 ease-custom-bezier"
        >
          Get this template
        </MotionLinkButton>
      </div>
    </motion.footer>
  );
};

export default Footer;
