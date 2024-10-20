import React from "react";
import Badge from "./ui/Badge";
import PricingCard from "./PricingCard";

const Pricing: React.FC = () => {
  const plans = [
    {
      name: "Explorer",
      price: "$4.99",
      features: [
        "Market Trend Analysis",
        "Limited Query Mapping",
        "Standard Dashboards",
        "Email Notifications",
        "Entry-Level Support",
      ],
      highlight: false,
    },
    {
      name: "Innovator",
      price: "$19.99",
      features: [
        "Everything in Explorer, plus:",
        "Predictive Analytics",
        "Advanced Query Mapping",
        "Customizable Dashboards",
        "Smart Alert System",
        "Extended Support",
      ],
      highlight: true,
      badge: "BEST VALUE",
    },
    {
      name: "Visionary",
      price: "$49.99",
      features: [
        "Everything in Innovator, plus",
        "Competitor Benchmarking",
        "Holistic Market Visualization",
        "Adaptive Strategy Planner",
        "24/7 Priority Support",
        "Custom Integrations",
      ],
      highlight: false,
    },
  ];

  return (
    <section
      id="pricing"
      className="bg-gradient-to-bl from-gray-100 to-violet-50/80 px-4 py-[80px] sm:px-20 md:px-40 lg:px-8"
    >
      <div className="mx-auto w-full max-w-6xl">
        <Badge text="Pricing" className="mx-auto mb-6" />
        <h2 className="mb-12 text-center text-5xl font-semibold leading-tight tracking-tight text-black md:text-[52px]">
          Start making <span className="text-violet-500">smarter</span>{" "}
          decisions,
          <span className="block text-gray-400">Choose a plan</span>
        </h2>
        <div className="mb-16 flex flex-col items-center justify-center gap-8 lg:flex-row">
          {plans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>
        <div className="flex flex-col items-center justify-center gap-8 sm:flex-row">
          <div className="flex items-center gap-2">
            <svg
              className="h-7 w-7 text-violet-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-base font-medium text-violet-500">
              Free trial
            </span>
          </div>
          <div className="flex items-center gap-2">
            <svg
              className="h-7 w-7 text-violet-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-base font-medium text-violet-500">
              Cancel anytime
            </span>
          </div>
          <div className="flex items-center gap-2">
            <svg
              className="h-7 w-7 text-violet-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-base font-medium text-violet-500">
              Support included
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
