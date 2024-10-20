import React from "react";
import Badge from "./ui/Badge";
import { ArrowRight } from "lucide-react";
import PrimaryLinkButton from "./ui/PrimaryLinkButton";
import SecondaryLinkButton from "./ui/SecondaryLinkButton";
import { useMenuContext } from "@/context/MenuContext";

interface PricingCardProps {
  name: string;
  price: string;
  features: string[];
  highlight: boolean;
  badge?: string;
}

const PricingCard: React.FC<PricingCardProps> = ({
  name,
  price,
  features,
  highlight,
  badge,
}) => {
  const { handleScroll } = useMenuContext();

  return (
    <div
      className={`flex w-full flex-col rounded-3xl border border-solid bg-white py-[0.8px] pl-[2px] pr-[0px] shadow-sm ${
        highlight ? "card-wrapper" : ""
      }`}
    >
      <div className="card-content z-10 flex flex-col p-6">
        <div className="mt-8 flex flex-row items-center justify-center">
          <h3
            className={`mb-2 text-lg font-medium ${
              highlight ? "text-violet-500" : "text-black"
            }`}
          >
            {name}
          </h3>
          {badge && (
            <Badge text={badge} className="mb-2 ml-2 px-[8px] py-[2px]" />
          )}
        </div>
        <p className="mx-auto mb-6 text-4xl font-semibold">
          {price}
          <span className="text-gray-400">/mo</span>
        </p>
        <div className="mb-10 flex flex-col gap-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center text-base font-medium"
            >
              <ArrowRight className="mr-2 text-violet-500" />
              {feature}
            </div>
          ))}
        </div>
        {highlight ? (
          <PrimaryLinkButton
            onClick={handleScroll}
            to="#cta"
            ariaLabel="Get notified"
            linkClassName="w-full"
            svgClassName="transition-transform duration-300 ease-custom-bezier group-hover:translate-x-1"
          >
            Get notifed
          </PrimaryLinkButton>
        ) : (
          <SecondaryLinkButton
            onClick={handleScroll}
            to="#cta"
            ariaLabel="Get notified"
            linkClassName="w-full"
            svgClassName="transition-transform duration-300 ease-custom-bezier group-hover:translate-x-1"
          >
            Get notifed
          </SecondaryLinkButton>
        )}
      </div>
    </div>
  );
};

export default PricingCard;
