import React from "react";
import { DollarSign, FileCheck } from "lucide-react";
import FeaturesIcon from "./ui/FeaturesIcon";

interface FeatureCardProps {
  iconType: "dollar" | "file";
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  iconType,
  title,
  description,
}) => {
  const iconProps =
    iconType === "dollar"
      ? {
          bgColor: "#E8F2FF",
          strokeColor: "#3B82F6",
          icon: <DollarSign size={32} color="#3B82F6" />,
        }
      : {
          bgColor: "#F3E8FF",
          strokeColor: "#8B5CF6",
          icon: <FileCheck size={32} color="#8B5CF6" />,
        };

  return (
    <div className="drop-shadow-inner mx-auto flex h-[300px] w-fit flex-col justify-between rounded-[26px] bg-white p-6 shadow-md">
      <FeaturesIcon {...iconProps} />
      <div className="flex flex-col gap-2">
        <h3 className="text-2xl font-medium">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
