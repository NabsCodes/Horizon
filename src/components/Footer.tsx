import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PrimaryLinkButton from "./ui/PrimaryLinkButton";
import HorizonLink from "./ui/HorizonLink";
import { useMenuContext } from "../context/MenuContext";

const Footer = () => {
  const { handleScroll } = useMenuContext();
  return (
    <motion.footer
      className="z-40 mx-auto flex max-w-8xl flex-col items-center justify-between gap-[40px] px-4 py-8 backdrop-blur-sm sm:px-6 md:flex-row lg:gap-[20px] lg:px-8 xl:gap-[40px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <HorizonLink handleScroll={handleScroll} />
      <div className="flex flex-col items-center justify-center gap-4">
        <p className="text-center text-[14px] text-gray-500">
          Design by{" "}
          <Link
            to="https://andrea-montini.lemonsqueezy.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-custom-purple hover:underline"
          >
            Andrea Montini
          </Link>{" "}
          • Developed by{" "}
          <Link
            to="https://github.com/NabsCodes"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-custom-purple hover:underline"
          >
            H. U. Hassan
          </Link>{" "}
          • © {new Date().getFullYear()}
        </p>
      </div>

      <PrimaryLinkButton
        to="https://andrea-montini.lemonsqueezy.com/"
        target="_blank"
        ariaLabel="Get this template"
        linkClassName="md:space-x-0 lg:space-x-2"
        spanClassName="md:hidden lg:block"
        svgClassName="group-hover:translate-x-1 transition-transform duration-300 ease-custom-bezier"
      >
        Get this template
      </PrimaryLinkButton>
    </motion.footer>
  );
};

export default Footer;
