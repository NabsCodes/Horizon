import hero_gradient from "../assets/hero_gradient.png";
import pattern_dotted from "../assets/pattern_dotted.png";
import StartupCarousel from "./StartupCarousel";
import PrimaryLinkButton from "./ui/PrimaryLinkButton";
import SecondaryLinkButton from "./ui/SecondaryLinkButton";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative flex h-full w-full flex-col items-center justify-center gap-[80px] bg-[#F4F6FB] px-[20px] md:gap-[40px] lg:px-[40px]"
    >
      <div className="absolute inset-0 z-0">
        <img
          src={hero_gradient}
          alt="Hero Gradient"
          className="g:opacity-[0.6] absolute top-[720px] w-full object-cover sm:top-[790px] sm:h-[300px] md:h-[400px] lg:top-[780px] lg:h-[510px] xl:top-[90px] xl:h-full"
        />
        <img
          src={pattern_dotted}
          alt="Pattern Dotted"
          className="absolute top-[300px] h-[400px] w-full object-cover sm:h-[500px] md:hidden md:h-[600px] lg:opacity-[0.6]"
        />
      </div>
      <div className="z-10 mt-[88px] flex w-full flex-col items-center justify-center gap-[40px] lg:px-[20px] xl:flex-row xl:gap-0">
        <div className="flex flex-col gap-[24px]">
          <div className="mx-auto flex w-[145px] flex-row items-center justify-center gap-[8px] rounded-[6px] bg-[#EDE9FE] px-[10px] py-[4px] md:mx-0 md:justify-start">
            <div className="h-[6px] w-[6px] rounded-full bg-[#8B5CF6]"></div>
            <p className="whitespace-nowrap text-center font-mono text-[12px] font-[500] uppercase leading-[20px] tracking-[0.06em] text-[#8B5CF6]">
              Coming in Beta
            </p>
          </div>
          <h1 className="text-center text-[45px] font-[600] leading-[105%] tracking-[-2px] text-black md:text-left md:text-[56px]">
            <span className="text-violet-500">Insightful trends</span> to
            discover real opportunities
          </h1>
          <p className="text-center text-gray-700 md:text-left">
            Step into a new era of strategic decision-making. Horizon empowers
            businesses in the marketing space with unparalleled data analytics.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 md:flex-row xl:max-w-[350px]">
            <SecondaryLinkButton
              to="https://andrea-montini.lemonsqueezy.com/"
              target="_blank"
              ariaLabel="Discover more"
              linkClassName="w-full"
              spanClassName="whitespace-nowrap"
              svgClassName="hidden"
            >
              Discover more
            </SecondaryLinkButton>
            <PrimaryLinkButton
              to="https://andrea-montini.lemonsqueezy.com/"
              target="_blank"
              ariaLabel="Get early access"
              linkClassName="w-full"
              spanClassName="whitespace-nowrap"
              svgClassName="transition-transform duration-300 ease-custom-bezier group-hover:translate-x-1"
            >
              Get early access
            </PrimaryLinkButton>
          </div>
        </div>
        <div className="xl:relative xl:translate-x-14">
          <img
            src="https://framerusercontent.com/images/LOAbXWznJsNNcwIB7dPlbgv3E.jpg?scale-down-to=2048"
            alt="Hero Main Visual"
            className="h-auto w-auto max-w-full rounded-[10px] object-cover xl:max-h-full"
          />
        </div>
      </div>
      <StartupCarousel />
    </section>
  );
};

export default Hero;
