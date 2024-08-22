type SvgIconsProps = {
  className?: string;
  onClick?: () => void;
};

export const CloseIcon = ({ onClick }: SvgIconsProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
    color="rgb(0, 0, 0)"
    className="h-8 w-8 cursor-pointer md:hidden"
    onClick={onClick}
  >
    <path
      d="M6.758 17.243L12.001 12m5.243-5.243L12 12m0 0L6.758 6.757M12.001 12l5.243 5.243"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></path>
  </svg>
);

export const MenuIcon = ({ onClick }: SvgIconsProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
    color="rgb(0, 0, 0)"
    className="h-8 w-8 cursor-pointer md:hidden"
    onClick={onClick}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 6h16M4 12h16m-7 6h7"
    />
  </svg>
);
