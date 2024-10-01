import React from "react";

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  avatarSrc: string;
  companyLogo: string;
  content: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  role,
  company,
  avatarSrc,
  companyLogo,
  content,
}) => {
  return (
    <div className="flex flex-col bg-transparent">
      <div className="mb-4 flex items-start">
        <img
          src={avatarSrc}
          alt={name}
          className="mr-4 h-16 w-16 rounded-full md:h-20 md:w-20"
        />
      </div>
      <p className="mb-4 text-[20px] font-normal leading-[125%] tracking-[-0.03em] text-gray-700 lg:text-[25px]">
        &quot;{content}&quot;
      </p>
      <div className="mt-auto">
        <img src={companyLogo} alt={company} className="mb-4 h-8" />
      </div>
      <div className="flex flex-col">
        <p className="text-lg font-medium">{name}</p>
        <p className="text-base text-gray-400">{role}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
