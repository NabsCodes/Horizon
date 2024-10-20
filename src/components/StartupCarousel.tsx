import Marquee from "react-fast-marquee";
import binance from "../assets/binance.png";
import bitfinex from "../assets/bitfinex.png";
import coinbase from "../assets/coinbase.png";
import kraken from "../assets/kraken.png";
import bitget from "../assets/bitget.png";
import { motion } from "framer-motion";

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
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ amount: "some", once: true }}
      transition={{ duration: 0.8, delay: 0.4, ease: "easeInOut" }}
      className="z-10 flex w-full flex-col items-center justify-center gap-[20px] px-[20px] sm:px-[60px]"
    >
      <p className="text-center text-[17px] font-[500] leading-[140%] tracking-[0em] text-gray-700">
        Already trusted by industry leaders
      </p>
      <div className="relative h-[107px] w-full overflow-hidden">
        <div className="relative flex h-full w-full list-none place-items-center p-[10px] opacity-100 mask-custom-gradient">
          <Marquee gradient={false} pauseOnHover={true} speed={100}>
            <ul className="flex h-full max-h-full w-full list-none flex-row place-items-center gap-[120px] last:pr-[120px]">
              {logos.concat(logos).map((logo, index) => (
                <LogoItem key={index} src={logo.src} alt={logo.alt} />
              ))}
            </ul>
          </Marquee>
        </div>
      </div>
    </motion.div>
  );
};

export default StartupCarousel;
