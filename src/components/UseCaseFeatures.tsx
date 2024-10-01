import React from "react";
import Badge from "./ui/Badge";
import FeatureGrid from "./FeatureGrid";

const UseCaseFeatures: React.FC = () => {
  return (
    <section
      id="usecase-features"
      className="bg-gray-50 px-4 py-[80px] sm:px-6 lg:px-8"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-12 flex flex-col justify-center gap-4">
          <Badge text="Features" className="mx-auto" />
          <p className="text-center text-4xl font-semibold leading-tight tracking-tight text-black md:text-[45px]">
            Essentially, our quest{" "}
            <span className="block text-gray-400">here at Horizon</span>
          </p>
        </div>
        <FeatureGrid />
      </div>
    </section>
  );
};

export default UseCaseFeatures;
