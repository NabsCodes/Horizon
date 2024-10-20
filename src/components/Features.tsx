import Badge from "./ui/Badge";
import IconCard from "./IconCard";
import PrimaryLinkButton from "./ui/PrimaryLinkButton";
import { motion } from "framer-motion";

const Features = () => {
  return (
    <section
      id="features"
      className="mx-auto max-w-7xl px-4 py-[80px] sm:px-6 lg:px-8"
    >
      <div className="mx-auto flex max-w-[840px] flex-col justify-center">
        <h2 className="text-center text-[46px] font-[600] leading-[110%] tracking-[-1.5px] text-black">
          Trend detection applied <br />
          <span className="text-gray-400">to the whole market</span>
        </h2>
        <p className="mx-auto mt-4 w-[75%] text-center text-[17px] font-[500] leading-[140%] tracking-[0em] text-gray-700">
          Unlock the full potential of your tech stack with Horizon&rsquo;s
          intuitive and flexible integration options. Experience the synergy of
          your favorite tools working seamlessly together, all powered by
          Horizon&rsquo;s cutting-edge AI analytics.
        </p>
      </div>
      {/* Feature view */}
      <div className="mt-[100px] grid grid-cols-1 gap-[80px] lg:grid-cols-2">
        <motion.img
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              type: "spring",
              damping: 40,
              stiffness: 160,
              mass: 1,
              delay: 1.5,
            },
          }}
          viewport={{
            amount: "some",
            once: true,
          }}
          decoding="async"
          sizes="calc(100vw - 40px)"
          srcSet="https://framerusercontent.com/images/x5U7jodM3LYs9Btx8ZgdPHosAI.jpg?scale-down-to=1024 985w,https://framerusercontent.com/images/x5U7jodM3LYs9Btx8ZgdPHosAI.jpg 1110w"
          src="https://framerusercontent.com/images/x5U7jodM3LYs9Btx8ZgdPHosAI.jpg"
          alt="Feature view"
          className="w-full"
        />
        <motion.div
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
          className="flex flex-col justify-center gap-[24px]"
        >
          <Badge text="Features" className="justify-start" />
          <h3 className="text-left text-[38px] font-[600] leading-[110%] tracking-[-1px] text-black md:text-[45px]">
            <span className="text-violet-500">Uncover</span> latest trends in
            real time
          </h3>
          <p className="text-[16px] font-[500] leading-[140%] tracking-[0em] text-gray-700">
            Stay ahead of the curve with our Dynamic Trend Analysis feature.
            Horizon continuously monitors and analyzes market trends in real
            time, providing you with instant insights into the latest shifts in
            consumer behavior and interests.
          </p>
          <div className="grid grid-cols-1 gap-[24px] md:grid-cols-2">
            <IconCard
              title="Intelligent Query Mapping"
              description="For anyone to start building their real estate portfolio, no matter the size of your wallet."
              linkText="Learn more"
              linkUrl="#"
              bgColor="#EDE9FE"
              strokeColor="#8B5CF6"
            />
            <IconCard
              title="Customizable Dashboards"
              description="For anyone to start building their real estate portfolio, no matter the size of your wallet."
              linkText="Learn more"
              linkUrl="#"
              bgColor="#DBEAFE"
              strokeColor="rgb(59,130,246)"
            />
          </div>
        </motion.div>
      </div>
      {/* Feature view */}
      <div className="mt-[100px] grid grid-cols-1 gap-[80px] lg:grid-cols-2">
        <motion.div
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
          className="flex flex-col justify-center gap-[24px]"
        >
          <Badge text="Features" className="justify-start" />
          <h3 className="text-left text-[38px] font-[600] leading-[110%] tracking-[-1px] text-black md:text-[45px]">
            Tailor-made <span className="text-violet-500">insights</span>, just
            for you
          </h3>
          <p className="text-[16px] font-[500] leading-[140%] tracking-[0em] text-gray-700">
            Empower your decision-makers with personalized insights. Our
            Customizable Insights Dashboards allow you to curate the data that
            matters most to your business.
          </p>
          <PrimaryLinkButton
            to="https://github.com/NabsCodes"
            target="_blank"
            ariaLabel="Get early access"
            linkClassName="hidden w-fit md:flex md:space-x-0 lg:space-x-2"
            svgClassName="md:hidden lg:block transition-transform duration-300 ease-custom-bezier group-hover:translate-x-1"
          >
            Get early access
          </PrimaryLinkButton>
        </motion.div>
        <motion.img
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              type: "spring",
              damping: 40,
              stiffness: 160,
              mass: 1,
              delay: 1.5,
            },
          }}
          viewport={{
            amount: "some",
            once: true,
          }}
          decoding="async"
          sizes="min(100vw - 80px, 800px)"
          srcSet="https://framerusercontent.com/images/KFMF6sf1OuiRyONlLoVwIw2IGo.jpg?scale-down-to=1024 985w,https://framerusercontent.com/images/KFMF6sf1OuiRyONlLoVwIw2IGo.jpg 1110w"
          src="https://framerusercontent.com/images/KFMF6sf1OuiRyONlLoVwIw2IGo.jpg"
          alt="Spline view"
          className="w-full"
        />
      </div>
      {/* Primary CTA */}
      <div className="mt-[100px] grid grid-cols-1 gap-[80px] lg:grid-cols-2">
        <motion.img
          initial={{ opacity: 0, y: 20 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: {
              type: "spring",
              damping: 40,
              stiffness: 160,
              mass: 1,
              delay: 1.5,
            },
          }}
          viewport={{
            amount: "some",
            once: true,
          }}
          decoding="async"
          sizes="min(100vw - 80px, 800px)"
          srcSet="hhttps://framerusercontent.com/images/4aRXowVrrTMR3AIzJTT1G62ydk.jpg?scale-down-to=1024 985w,https://framerusercontent.com/images/4aRXowVrrTMR3AIzJTT1G62ydk.jpg 1110w"
          src="https://framerusercontent.com/images/4aRXowVrrTMR3AIzJTT1G62ydk.jpg"
          alt="Feature view"
          className="w-full"
        />
        <motion.div
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
          className="flex flex-col justify-center gap-[24px]"
        >
          <Badge text="Features" className="justify-start" />
          <h3 className="text-left text-[38px] font-[600] leading-[110%] tracking-[-1px] text-black md:text-[45px]">
            Stay <span className="text-violet-500">informed</span>, instantly
          </h3>
          <p className="text-[16px] font-[500] leading-[140%] tracking-[0em] text-gray-700">
            Our Smart Alert System keeps you in the know. Receive instant
            notifications on critical shifts in market dynamics, competitor
            moves, or emerging trends.
          </p>
          <div className="grid grid-cols-1 gap-[24px] md:grid-cols-2">
            <IconCard
              title="See the Whole Picture"
              description="For anyone to start building their real estate portfolio, no matter the size of your wallet."
              linkText="Learn more"
              linkUrl="#"
              bgColor="#EDE9FE"
              strokeColor="#8B5CF6"
            />
            <IconCard
              title="Adapt, Pivot, Succeed"
              description="For anyone to start building their real estate portfolio, no matter the size of your wallet."
              linkText="Learn more"
              linkUrl="#"
              bgColor="#DBEAFE"
              strokeColor="rgb(59,130,246)"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
