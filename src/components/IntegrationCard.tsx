import React from "react";

interface IntegrationCardProps {
  logo: string;
  name: string;
  description: string;
}

const IntegrationCard: React.FC<IntegrationCardProps> = ({
  logo,
  name,
  description,
}) => {
  return (
    <div className="flex w-[200px] flex-col justify-between gap-12 rounded-3xl border border-gray-200 bg-gray-50 p-4 xl:w-full">
      <img src={logo} alt={name} className="h-12 w-12 object-contain" />
      <div className="flex flex-col">
        <p className="text-lg font-semibold text-black">{name}</p>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default IntegrationCard;
