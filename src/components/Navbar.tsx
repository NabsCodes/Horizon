import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, easeInOut } from "framer-motion";
import PrimaryLinkButton from "./ui/PrimaryLinkButton";
import { useMenuContext } from "../context/MenuContext";
import HorizonLink from "./ui/HorizonLink";
import { CloseIcon, MenuIcon } from "./SvgIcons";
import useClickOutside from "@/hooks/useClickOutside";

type NavLink = {
  id: number;
  name: string;
  href: string;
};

const navLinks: NavLink[] = [
  { id: 1, name: "Features", href: "#features" },
  { id: 2, name: "Use Case", href: "#usecase" },
  { id: 3, name: "Integration", href: "#integration" },
  { id: 4, name: "Pricing", href: "#pricing" },
  { id: 5, name: "Blog", href: "#blog" },
] as const;

const Navbar = () => {
  const { isMenuOpen, setIsMenuOpen, handleScroll } = useMenuContext();
  const menuRef = useRef<HTMLDivElement>(null); // Ref for the menu

  // Close the menu when the user clicks outside of it
  useClickOutside(menuRef, () => {
    if (isMenuOpen) setIsMenuOpen(false);
  });

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur-sm ${isMenuOpen ? "h-[400px]" : "md:h-[88px]"} transition-all duration-300 ease-custom-bezier`}
    >
      <nav className="mx-auto flex w-full max-w-8xl items-center justify-between px-4 py-[20.5px] sm:px-6 lg:px-8">
        <HorizonLink handleScroll={handleScroll} />
        <div className="hidden items-center text-[#4b5563] md:flex md:gap-4 lg:gap-6">
          {navLinks.map((link: NavLink) => (
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

        <PrimaryLinkButton
          to="https://github.com/NabsCodes"
          target="_blank"
          ariaLabel="Get this template"
          linkClassName="hidden md:flex md:space-x-0 lg:space-x-2"
          svgClassName="md:hidden lg:block transition-transform duration-300 ease-custom-bezier group-hover:translate-x-1"
        >
          Get this Template
        </PrimaryLinkButton>

        {isMenuOpen ? (
          <CloseIcon onClick={() => setIsMenuOpen(!isMenuOpen)} />
        ) : (
          <MenuIcon onClick={() => setIsMenuOpen(!isMenuOpen)} />
        )}

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              ref={menuRef}
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -100 }}
              transition={{ duration: 0.5, ease: easeInOut }}
              className="shadow-custom-shadow absolute left-0 top-[77px] z-50 flex w-full flex-col items-center justify-between gap-5 p-6 text-[#4b5563] md:hidden"
            >
              <div className="flex max-w-max flex-col items-center justify-center gap-5">
                {navLinks.map((link: NavLink) => (
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

              <PrimaryLinkButton
                to="https://github.com/NabsCodes"
                target="_blank"
                ariaLabel="Get this template"
                linkClassName="w-full md:hidden"
                spanClassName="transition-transform duration-300 ease-custom-bezier group-hover:-translate-x-1"
                svgClassName="group-hover:translate-x-1 transition-transform duration-300 ease-custom-bezier"
              >
                Get this Template
              </PrimaryLinkButton>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;
