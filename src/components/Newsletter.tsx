import bppflag from '@/assets/images/backgrounds/homepagebanner.png';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Newsletter() {
  return (
    <>
      <section
        className="relative bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${bppflag})` }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div> {/* Black overlay with transparency */}
        <div className="container py-8 md:py-11 relative z-10">
          <div className="flex flex-col items-center text-center text-white">
            <h3 className="mb-2 max-w-full text-2xl font-bold md:mb-2 md:text-4xl lg:mb-6">
              Stay Informed with Bharatiya Popular Party
            </h3>
            <p className="mb-4 max-w-3xl text-md lg:text-md">
              BPP is committed to keep you updated with the latest national news and important political
              developments. By subscribing, you'll receive timely and relevant updates straight to your inbox—
              no spam, just the facts and insights that matter most.
            </p>
            <div className="w-full md:max-w-lg">
              <div className="flex flex-col justify-center gap-2 sm:flex-row">
                <Input placeholder="Enter your email" className="text-black" />
                <Button className="bg-blue-700">Subscribe</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
