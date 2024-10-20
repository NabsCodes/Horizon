import React from "react";

interface MovingBorderProps {
  isActive?: boolean;
  className?: string;
  children: React.ReactNode;
  borderColor?: string;
}

const MovingBorder: React.FC<MovingBorderProps> = ({
  isActive = true,
  className = "",
  children,
  borderColor = "from-violet-500 via-purple-500 to-pink-500",
}) => {
  return (
    <div className={`relative rounded-[24px] ${className}`}>
      {isActive && (
        <div
          className={`absolute -inset-[0.2px] rounded-[24px] bg-gradient-to-r ${borderColor} animate-moving-border opacity-75 blur-sm`}
        />
      )}
      <div className="relative rounded-[24px]">{children}</div>
    </div>
  );
};

export default MovingBorder;
