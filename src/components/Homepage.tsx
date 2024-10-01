import Features from "./Features";
import Hero from "./Hero";
import UseCase from "./UseCase";
import UseCaseFeatures from "./UseCaseFeatures";
import Integrations from "./Integrations";
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
    </main>
  );
}

export default Homepage;
