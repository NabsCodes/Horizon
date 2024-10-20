/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Badge from "./ui/Badge";
import Form from "./Form";

const Cta: React.FC = () => {
  return (
    <section id="cta" className="bg-gray-50 px-4 pt-20 sm:px-6 lg:px-8">
      <div className="mx-auto mb-10 w-full max-w-7xl rounded-2xl bg-white pt-12 md:mb-24 md:rounded-3xl">
        <div className="mx-auto mb-12 flex max-w-6xl flex-col justify-center gap-4">
          <Badge text="Ready?" className="mx-auto" />
          <h2 className="text-center text-5xl font-semibold leading-tight tracking-tight text-black md:text-6xl lg:text-[70px]">
            Detect your next <span className="text-violet-500">big move</span>
          </h2>
          <p className="mx-auto max-w-xl text-center text-lg text-gray-700">
            Experience the synergy of your favorite tools working seamlessly
            together, all powered by Horizon's cutting-edge AI analytics.
          </p>
          <Form />
        </div>
        <div className="mt-16">
          <img
            decoding="async"
            loading="lazy"
            src="https://framerusercontent.com/images/dIk9yGGYKI1q7IxNLZ1B88dOy4Y.jpg"
            srcSet="https://framerusercontent.com/images/dIk9yGGYKI1q7IxNLZ1B88dOy4Y.jpg?scale-down-to=512 512w,
                    https://framerusercontent.com/images/dIk9yGGYKI1q7IxNLZ1B88dOy4Y.jpg?scale-down-to=1024 1024w,
                    https://framerusercontent.com/images/dIk9yGGYKI1q7IxNLZ1B88dOy4Y.jpg?scale-down-to=2048 2048w,
                    https://framerusercontent.com/images/dIk9yGGYKI1q7IxNLZ1B88dOy4Y.jpg 2559w"
            sizes="(min-width: 1280px) 1200px, (min-width: 1024px) 976px, (min-width: 640px) 608px, calc(100vw - 32px)"
            alt="Screenshot of the main dashboard front center with gradients"
            className="h-[450px] w-full rounded-b-2xl object-cover object-left md:h-auto md:rounded-b-3xl md:object-center"
          />
        </div>
      </div>
    </section>
  );
};

export default Cta;
