import React from "react";
import Badge from "./ui/Badge";

interface BlogCardProps {
  imageSrc: string;
  imageAlt: string;
  badgeText: string;
  paragraphText: string;
  className?: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  imageSrc,
  imageAlt,
  badgeText,
  paragraphText,
  className,
}) => {
  return (
    <div className={`flex cursor-pointer flex-col gap-6 ${className}`}>
      <figure className="relative">
        <img
          decoding="async"
          loading="lazy"
          sizes="calc(100vw - 40px)"
          srcSet={`${imageSrc}?scale-down-to=1024 1024w,${imageSrc} 1743w`}
          src={imageSrc}
          alt={imageAlt}
          className="h-[280px] w-full rounded-xl object-cover md:h-[360px] xl:h-[300px]"
        />
      </figure>
      <div className="flex flex-col gap-3">
        <Badge
          text={badgeText}
          dotClassName="hidden"
          className="border border-solid border-violet-300 bg-white"
        />
        <p className="text-2xl font-semibold text-black">{paragraphText}</p>
      </div>
    </div>
  );
};

export default BlogCard;
