import React from "react";
import Badge from "./ui/Badge";
import SecondaryLinkButton from "./ui/SecondaryLinkButton";
import BlogCard from "./BlogCard";
import { motion } from "framer-motion";

const BlogCardDetails = [
  {
    imageSrc:
      "https://framerusercontent.com/images/7FOabk989OG2KJ7TK8usaRJPA.jpg",
    imageAlt: "Article Image",
    badgeText: "Articles",
    paragraphText: "What is CAC and how do I calculate it?",
  },
  {
    imageSrc:
      "https://framerusercontent.com/images/OQAHvT55Xc7DYJv7mifWalcGrU.jpg",
    imageAlt: "Case study image",
    badgeText: "Case Studies",
    paragraphText:
      "How you can use recurring revenue financing for faster growth without dilution",
  },
  {
    imageSrc:
      "https://framerusercontent.com/images/WRF16K38iUReQKe4Cj5vcAPaGR8.jpg?scale-down-to=1024",
    imageAlt: "Funding image",
    badgeText: "Funding",
    paragraphText: "Announcing Slang.ai's $20M in funding",
  },
  {
    imageSrc:
      "https://framerusercontent.com/images/W1I9tdEFDx5KRP9fLstLOrGqUqg.jpeg?scale-down-to=1024",
    imageAlt: "Innovation image",
    badgeText: "Innovation",
    paragraphText: "Announcing Slang.ai's $20M in funding",
  },
] as const;

const Blog: React.FC = () => {
  return (
    <section id="blog" className="bg-white px-4 py-[80px] sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-12 flex flex-col justify-center gap-4">
          <Badge text="Blog" />
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row md:gap-0">
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.8,
                  delay: 0.4,
                  ease: "easeInOut",
                },
              }}
              viewport={{
                amount: "some",
                once: true,
              }}
              className="self-start text-5xl font-semibold leading-tight tracking-tight text-black md:text-[52px]"
            >
              Read, learn, improve
            </motion.p>
            <SecondaryLinkButton
              to="#cta"
              ariaLabel="All articles"
              linkClassName="md:w-fit w-full"
              svgClassName="transition-transform duration-300 ease-custom-bezier group-hover:translate-x-1"
            >
              All articles
            </SecondaryLinkButton>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.8,
              delay: 1.2,
              ease: "easeInOut",
            },
          }}
          viewport={{
            amount: "some",
            once: true,
          }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          {BlogCardDetails.map((card, index) => (
            <BlogCard
              key={index}
              imageSrc={card.imageSrc}
              imageAlt={card.imageAlt}
              badgeText={card.badgeText}
              paragraphText={card.paragraphText}
              className={index === 3 ? "xl:hidden" : ""}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;
