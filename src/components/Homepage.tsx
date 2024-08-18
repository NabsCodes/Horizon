import Features from "./Features";
import Hero from "./Hero";

function Homepage() {
  return (
    <main
      id="homepage"
      className="flex h-full w-full flex-col bg-white pt-[88px]"
    >
      <Hero />
      <Features />
    </main>
  );
}

export default Homepage;
