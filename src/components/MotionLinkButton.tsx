import React from "react";
import { Link } from "react-router-dom";

interface MotionLinkButtonProps {
  to: string;
  target?: string;
  ariaLabel: string;
  linkClassName?: string;
  spanClassName?: string;
  svgClassName?: string;
  children: React.ReactNode;
}

const MotionLinkButton: React.FC<MotionLinkButtonProps> = ({
  to,
  target,
  ariaLabel,
  linkClassName = "",
  spanClassName = "",
  svgClassName = "",
  children,
}) => {
  return (
    <Link
      to={to}
      target={target}
      aria-label={ariaLabel}
      className={`group rounded-[10px] border border-[#8D4DD1] bg-custom-gradient px-5 py-2.5 font-normal text-white shadow-custom-shadow transition-all duration-300 ease-custom-bezier hover:bg-inverse-gradient ${linkClassName}`}
    >
      <div className="flex flex-row items-center justify-center space-x-2">
        <span
          className={`text-[15px] font-[500] leading-[155%] tracking-[0.02em] ${spanClassName}`}
        >
          {children}
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 256"
          focusable="false"
          color="inherit"
          className={`h-6 w-6 ${svgClassName}`}
          fill="currentColor"
        >
          <g color="inherit">
            <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
          </g>
        </svg>
      </div>
    </Link>
  );
};

export default MotionLinkButton;
