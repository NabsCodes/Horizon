import { Link } from "react-router-dom";
import IconBox from "./ui/IconBox";

interface IconCardProps {
  title: string;
  description: string;
  linkText: string;
  linkUrl: string;
  bgColor: string;
  strokeColor: string;
}

const IconCard = ({
  title,
  description,
  linkText,
  linkUrl,
  bgColor,
  strokeColor,
}: IconCardProps) => {
  return (
    <div className="cols-span-1 md:cols-span-2 flex flex-col gap-[16px] text-[16px]">
      <IconBox bgColor={bgColor} strokeColor={strokeColor} />
      <h4 className="font-[600] leading-[120%] tracking-[-.5px]">{title}</h4>
      <p className="font-[500] text-gray-700">{description}</p>
      <Link
        to={linkUrl}
        className="group flex items-center gap-[6px] hover:text-violet-500"
      >
        {linkText}{" "}
        <svg
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
          className="transition-all duration-500 group-hover:translate-x-1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.33203 3.94336V5.11003C3.33203 7.91029 3.33203 9.31042 3.877 10.38C4.35637 11.3208 5.12127 12.0857 6.06208 12.5651C7.13164 13.11 8.53177 13.11 11.332 13.11H16.6654M16.6654 13.11L12.4987 8.94336M16.6654 13.11L12.4987 17.2767"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>
    </div>
  );
};

export default IconCard;
