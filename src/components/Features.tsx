import Badge from "./ui/Badge";

const Features = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 pt-[80px]">
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
      <div className="mt-[100px] grid grid-cols-1 gap-[80px] lg:grid-cols-2">
        <img
          decoding="async"
          sizes="calc(100vw - 40px)"
          srcSet="https://framerusercontent.com/images/x5U7jodM3LYs9Btx8ZgdPHosAI.jpg?scale-down-to=1024 985w,https://framerusercontent.com/images/x5U7jodM3LYs9Btx8ZgdPHosAI.jpg 1110w"
          src="https://framerusercontent.com/images/x5U7jodM3LYs9Btx8ZgdPHosAI.jpg"
          alt="Feature view"
          className="w-full"
        />
        <div className="flex flex-col gap-[24px]">
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
        </div>
      </div>
    </section>
  );
};

export default Features;
