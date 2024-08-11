import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";

const HorizonLink = ({
  handleScroll,
}: {
  handleScroll: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}) => {
  return (
    <Link
      to="#homepage"
      className="flex items-center justify-center gap-1.5"
      onClick={handleScroll}
    >
      <img src={logo} alt="Horizon Logo" className="h-[36px] w-[36px]" />
      <h1 className="text-[22px] font-medium tracking-[0.02em]">Horizon</h1>
    </Link>
  );
};

export default HorizonLink;
