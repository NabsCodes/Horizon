import Features from "./Features";
import Hero from "./Hero";
import UseCase from "./UseCase";
import UseCaseFeatures from "./UseCaseFeatures";
import Integrations from "./Integrations";
import Pricing from "./Pricing";
import Blog from "./Blog";
import Cta from "./Cta";

function Homepage() {
  return (
    <main
      id="homepage"
      className="flex h-full w-full flex-col bg-white pt-[88px]"
    >
      <Hero />
      <Features />
      <UseCase />
      <UseCaseFeatures />
      <Integrations />
      <Pricing />
      <Blog />
      <Cta />
    </main>
  );
}

export default Homepage;
