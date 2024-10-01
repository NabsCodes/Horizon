type FeaturesIconProps = {
  bgColor: string;
  strokeColor: string;
  icon: React.ReactNode;
};

const FeaturesIcon = ({ bgColor, icon }: FeaturesIconProps) => {
  return (
    <div
      className={`flex h-[64px] w-[64px] flex-col items-center justify-center rounded-[16px]`}
      style={{ backgroundColor: bgColor }}
    >
      {icon}
    </div>
  );
};

export default FeaturesIcon;
