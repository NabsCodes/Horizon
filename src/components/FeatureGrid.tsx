import React from "react";
import FeatureCard from "./FeatureCard";
import { features } from "@/utils/data";

const FeatureGrid: React.FC = () => {
  return (
    <div className="mx-auto w-full max-w-7xl py-8 sm:px-4">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            iconType={feature.iconType as "dollar" | "file"}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
};

export default FeatureGrid;
