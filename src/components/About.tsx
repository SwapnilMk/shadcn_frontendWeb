import bppflag from "@/assets/images/logos/bppflag.png";

export const About = () => {
  return (
    <section id="about" className="container py-15 sm:py-15">
      <div className="bg-muted/50  rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <img
            src={bppflag}
            alt=""
            className="w-[300px] object-contain rounded-lg"
          />
          <div className="bg-green-0 flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                  Our{" "}
                </span>
                Vision
              </h2>
              <p className="text-xl text-muted-foreground mt-4">
                BPP’s vision is: "Empowering communities through decentralized
                solutions while driving combined progress." Our vision is to
                create a society where local initiatives prosper with autonomy
                and flexibility, yet contribute to a progressive national
                impact. By understanding the strength of localized efforts and
                aligning them with a central mission, we strive to achieve
                sustainable development, peace, and prosperity on the national
                level."
              </p>
            </div>

            {/* <Statistics /> */}
          </div>
        </div>
      </div>
    </section>
  );
};
