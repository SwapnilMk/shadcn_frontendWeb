import { Button } from "./ui/button";
import { buttonVariants } from "./ui/button";
import { HeroCards } from "./HeroCards";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const navigate = useNavigate()

  return (
    <section className="container grid lg:grid-cols-2 place-items-center py-20 md:py-32 gap-10">
      <div className="text-center lg:text-start space-y-6">
        <main className="text-5xl md:text-6xl font-bold">
          <h1 className="inline">
            <span className="inline bg-gradient-to-r from-[#F596D3]  to-[#D247BF] text-transparent bg-clip-text">
            Empowering
            </span>{" "}
            Communities Through
          </h1>{" "}
        
          <h2 className="inline">
            <span className="inline bg-gradient-to-r from-[#61DAFB] via-[#1fc0f1] to-[#03a3d7] text-transparent bg-clip-text">
            Decentralization
            </span>{" "}
          </h2>
        </main>

        <p className="text-xl text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
        Our goal at BPP is to foster mass connectivity, empowering individuals from all levels of society. We aim to create a transparent and accessible platform where every citizen can contribute to shaping policies and decisions. BPP envisions a society where all voices are heard, and decision-making is a collective, inclusive process.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Button className="w-full md:w-1/3"
             onClick={()=> navigate('/login')}
          >Get Started</Button>

          <a
            rel="noreferrer noopener"
            // href="https://github.com/leoMirandaa/shadcn-landing-page.git"
            // target="_blank"
            className={`w-full md:w-1/3 ${buttonVariants({
              variant: "outline",
            })}`}
            onClick={()=> navigate('/signup')}
          >
            Register Now
          </a>
        </div>
      </div>

      {/* Hero cards sections */}
      <div className="z-10">

        <HeroCards />
      </div>

      {/* Shadow effect */}
      <div className="shadow"></div>
    </section>
  );
};
