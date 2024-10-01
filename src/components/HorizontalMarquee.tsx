import React from "react";
import Marquee from "react-fast-marquee";
import IntegrationCard from "./IntegrationCard";

interface HorizontalMarqueeProps {
  integrations: Array<{ logo: string; name: string; description: string }>;
  direction: "left" | "right";
}

const HorizontalMarquee: React.FC<HorizontalMarqueeProps> = ({
  integrations,
  direction,
}) => {
  return (
    <Marquee direction={direction} speed={20} gradient={false}>
      {integrations.map((integration, index) => (
        <div key={index} className="mx-2">
          <IntegrationCard {...integration} />
        </div>
      ))}
    </Marquee>
  );
};

export default HorizontalMarquee;
