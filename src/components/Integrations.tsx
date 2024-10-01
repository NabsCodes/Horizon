import React from "react";
import Badge from "./ui/Badge";

// Import all logos
import thingsLogo from "../assets/things.svg";
import loomLogo from "../assets/loom.svg";
import notionLogo from "../assets/notion.svg";
import githubLogo from "../assets/github.svg";
import confluenceLogo from "../assets/confluence.svg";
import mailchimpLogo from "../assets/mailchimp.svg";
import intercomLogo from "../assets/intercom.svg";
import slackLogo from "../assets/slack.svg";
import codepenLogo from "../assets/codepen.svg";
import HorizontalMarquee from "./HorizontalMarquee";
import VerticalMarquee from "./VerticalMarquee";

const Integrations: React.FC = () => {
  const integrations = [
    { logo: loomLogo, name: "Loom", description: "Record in a breeze" },
    { logo: thingsLogo, name: "Things", description: "Handy to-do list" },
    { logo: notionLogo, name: "Notion", description: "Plan your life" },
    { logo: githubLogo, name: "Github", description: "Code repository" },
    {
      logo: confluenceLogo,
      name: "Confluence",
      description: "Productivity boosted",
    },
    { logo: mailchimpLogo, name: "Mailchimp", description: "Smart newsletter" },
    { logo: intercomLogo, name: "Intercom", description: "Customer care" },
    { logo: slackLogo, name: "Slack", description: "Timely messaging" },
    { logo: codepenLogo, name: "Codepen", description: "Code repository" },
  ];

  return (
    <section
      id="integration"
      className="bg-white px-4 py-[80px] sm:px-6 lg:px-8"
    >
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
          <div className="mb-12 flex flex-col justify-center gap-4 xl:text-left">
            <Badge text="INTEGRATIONS" className="mx-auto xl:mx-0" />
            <p className="text-center text-4xl font-semibold leading-tight tracking-tight text-black md:text-[45px] xl:text-left">
              Smart <span className="text-violet-500">integrations</span> at
              your fingertips
            </p>
            <p className="mx-auto max-w-[800px] text-center text-lg font-medium leading-tight tracking-tight text-gray-700 xl:text-left">
              Our open API and robust integration framework ensure a smooth
              connection with the tools you rely on daily, creating a unified
              ecosystem for unparalleled efficiency.
            </p>
          </div>
          <div className="col-span-1 space-y-4 md:space-y-6 xl:space-y-0">
            {/* Horizontal marquees for smaller screens */}
            <div className="space-y-4 mask-custom-gradient xl:hidden">
              <HorizontalMarquee
                integrations={integrations}
                direction="right"
              />
              <HorizontalMarquee integrations={integrations} direction="left" />
              <HorizontalMarquee
                integrations={integrations}
                direction="right"
              />
            </div>

            {/* Vertical marquees for xl screens */}
            <div className="mask-custom-gradient-vertical hidden xl:grid xl:h-[600px] xl:grid-cols-3 xl:gap-4">
              <VerticalMarquee integrations={integrations} direction="up" />
              <VerticalMarquee integrations={integrations} direction="down" />
              <VerticalMarquee integrations={integrations} direction="up" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;
