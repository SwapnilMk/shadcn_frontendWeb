import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

export const Features = () => {
  return (
    <section className="py-10">
      <section id="features" className="container space-y-4">
        <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
          Community Contribution Program
        </h2>
        <p className="mx-auto max-w-6xl mt-4 mb-8 text-md text-center text-muted-foreground">
          Bharatiya Popular Party Any Indian citizen, irrespective of caste, religion, or any
          other discrimination, who has attained the age of 18 and is willing to contribute to the
          community, is welcome to join us as a member
          Party’s community is made up of a diverse group of individuals: common citizens,
          professionals, and business leaders, each one of them playing a vital role in driving
          party’s mission forward.
        </p>
        <p className="mx-auto mt-4 max-w-6xl mb-8 text-md text-center text-muted-foreground">
          Party’s community is made up of a diverse group of individuals: common citizens,
          professionals, and business leaders, each one of them playing a vital role in driving
          party’s mission forward.
        </p>
      </section>
      <div className="container mt-4 max-w-6xl">
        <Tabs defaultValue="feature-1">
          <div className="flex flex-col md:flex-row h-full">
            {/* Tabs List */}
            <TabsList className="flex h-auto w-full flex-col gap-2 bg-background md:w-1/4 md:gap-4">
              <TabsTrigger
                value="feature-1"
                className="flex w-full flex-col items-start justify-start gap-1 whitespace-normal rounded-md border p-4 text-left text-primary hover:border-primary/40 data-[state=active]:border-primary"
              >
                <div className="flex items-center gap-2 md:flex-col md:items-start lg:gap-4">
                  <p className="text-lg font-semibold md:text-xl lg:text-xl">
                    The Common Man
                  </p>
                </div>
              </TabsTrigger>
              <TabsTrigger
                value="feature-2"
                className="flex w-full flex-col items-start justify-start gap-1 whitespace-normal rounded-md border p-4 text-left text-primary hover:border-primary/40 data-[state=active]:border-primary"
              >
                <div className="flex items-center gap-2 md:flex-col md:items-start lg:gap-4">
                  <p className="text-lg font-semibold md:text-xl lg:text-xl">
                    Professionals
                  </p>
                </div>
              </TabsTrigger>
              <TabsTrigger
                value="feature-3"
                className="flex w-full flex-col items-start justify-start gap-1 whitespace-normal rounded-md border p-4 text-left text-primary hover:border-primary/40 data-[state=active]:border-primary"
              >
                <div className="flex items-center gap-2 md:flex-col md:items-start lg:gap-4">
                  <p className="text-lg font-semibold md:text-xl lg:text-xl">
                    Business Leaders
                  </p>
                </div>
              </TabsTrigger>
            </TabsList>
            {/* Tabs Content */}
            <div className="flex-1 md:px-6">
              <div className="h-full flex flex-col">
                <TabsContent value="feature-1" className="h-full">
                  <div className="p-6 bg-gray-100 rounded-md shadow-md h-full space-y-4">
                    <div>
                      <h3 className="text-xl font-bold">Common Man</h3>
                    </div>
                    <p className="text-md text-muted-foreground leading-relaxed">
                      The backbone of the party, the common man is the
                      primary beneficiary of the party’s efforts. It is for you that we fight for equitable
                      development and opportunities. Your challenges and aspirations guide our
                      mission, and together, we work to create a better future.
                    </p>
                  </div>
                </TabsContent>
                <TabsContent value="feature-2" className="h-full">
                  <div className="p-6 bg-gray-100 rounded-md shadow-md h-full space-y-4">
                    <div>
                      <h3 className="text-xl font-bold">Professionals</h3>
                    </div>
                    <p className="text-md text-muted-foreground leading-relaxed">
                      Among the common people, there are the people with
                      specialized expertise in various sectors and a passion to serve the
                      community. These professionals step forward to contribute their knowledge,
                      skills, and leadership to support the party’s objectives. These are the
                      professionals who bring practical solutions to real-world issues.
                    </p>
                  </div>
                </TabsContent>
                <TabsContent value="feature-3" className="h-full">
                  <div className="p-6 bg-gray-100 rounded-md shadow-md h-full space-y-4">
                    <div>
                      <h3 className="text-xl font-bold">Business Community</h3>
                    </div>
                    <p className="text-md text-muted-foreground leading-relaxed">
                      Businesses members including entrepreneurs and
                      institutional leaders, must be registered with the party and shall be committed
                      to supporting the community by providing products and services at reasonable
                      prices. Their role is very important in building a sustainable, growing economy
                      that benefits everyone.
                    </p>
                  </div>
                </TabsContent>

              </div>
            </div>
          </div>
        </Tabs>
      </div>
    </section>
  );
};
