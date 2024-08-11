import Marquee from "react-fast-marquee";
import binance from "../assets/binance.png";
import bitfinex from "../assets/bitfinex.png";
import coinbase from "../assets/coinbase.png";
import kraken from "../assets/kraken.png";
import bitget from "../assets/bitget.png";

const logos = [
  { src: binance, alt: "Binance" },
  { src: kraken, alt: "Kraken" },
  { src: bitget, alt: "Bitget" },
  { src: bitfinex, alt: "Bitfinex" },
  { src: coinbase, alt: "Coinbase" },
];

const LogoItem = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <li className="w-[150px]">
      <img src={src} alt={alt} className="min-w-[150px]" />
    </li>
  );
};

const StartupCarousel = () => {
  return (
    <div className="z-10 flex w-full flex-col items-center justify-center gap-[10px] px-[20px] sm:px-[60px] xl:mt-[60px]">
      <p className="text-[17px] font-[500] leading-[140%] tracking-[0em] text-gray-700">
        Already trusted by industry leaders
      </p>
      <div className="relative h-[107px] w-full overflow-hidden">
        <div className="mask-custom-gradient relative flex h-full w-full list-none place-items-center p-[10px] opacity-100">
          <Marquee gradient={false} pauseOnHover={true} speed={100}>
            <ul className="flex h-full max-h-full w-full list-none flex-row place-items-center gap-[120px] last:pr-[120px]">
              {logos.concat(logos).map((logo, index) => (
                <LogoItem key={index} src={logo.src} alt={logo.alt} />
              ))}
            </ul>
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default StartupCarousel;
