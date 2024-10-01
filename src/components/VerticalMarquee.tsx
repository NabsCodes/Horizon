import React, { useRef, useState } from "react";
import { motion, useAnimationFrame } from "framer-motion";
import IntegrationCard from "./IntegrationCard";

interface VerticalMarqueeProps {
  integrations: Array<{ logo: string; name: string; description: string }>;
  direction: "up" | "down";
}

const VerticalMarquee: React.FC<VerticalMarqueeProps> = ({
  integrations,
  direction,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [yPosition, setYPosition] = useState(0);

  useAnimationFrame(() => {
    if (!containerRef.current) return;

    const speed = 0.5; // Adjust this value to change the speed
    const contentHeight = containerRef.current.scrollHeight;

    let newY = yPosition + (direction === "up" ? -speed : speed);

    if (direction === "up" && Math.abs(newY) >= contentHeight / 2) {
      newY = 0;
    } else if (direction === "down" && newY >= 0) {
      newY = -contentHeight / 2;
    }

    setYPosition(newY);
  });

  return (
    <div ref={containerRef} className="h-full overflow-hidden">
      <motion.div className="flex flex-col" style={{ y: yPosition }}>
        {[...integrations, ...integrations].map((integration, index) => (
          <div key={index} className="my-2">
            <IntegrationCard {...integration} />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default VerticalMarquee;
