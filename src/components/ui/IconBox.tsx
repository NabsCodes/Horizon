type IconBoxProps = {
  bgColor: string;
  strokeColor: string;
};

const IconBox = ({ bgColor, strokeColor }: IconBoxProps) => {
  return (
    <div
      className={`flex h-[56px] w-[56px] flex-col items-center justify-center rounded-[16px]`}
      style={{ backgroundColor: bgColor }}
    >
      <svg
        width="28"
        height="28"
        viewBox="-1 -1 28 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10.6667 1.50033H6.4C4.15979 1.50033 3.03969 1.50033 2.18404 1.9363C1.43139 2.31979 0.819467 2.93172 0.435974 3.68436C0 4.54001 0 5.66012 0 7.90033V19.1003C0 21.3405 0 22.4606 0.435974 23.3163C0.819467 24.0689 1.43139 24.6809 2.18404 25.0644C3.03969 25.5003 4.15979 25.5003 6.4 25.5003H17.6C19.8402 25.5003 20.9603 25.5003 21.816 25.0644C22.5686 24.6809 23.1805 24.0689 23.564 23.3163C24 22.4606 24 21.3405 24 19.1003V14.8337M12 8.16699H17.3333V13.5003M16.6667 2.16699V0.166992M21.9191 3.58121L23.3333 2.16699M23.347 8.83366H25.347M0 15.2965C0.869253 15.4307 1.75983 15.5003 2.66667 15.5003C8.51515 15.5003 13.6871 12.6038 16.8262 8.16699"
          stroke={strokeColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default IconBox;
