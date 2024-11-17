import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

// interface FeatureProps {
//   title: string;
//   description: string;
// }

// const features: FeatureProps[] = [
//   {
//     title: "Common Man",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente."
//   },
//   {
//     title: "Professionals",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente."
//   },
//   {
//     title: "Business Community",
//     description:
//       "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nesciunt est nostrum omnis ab sapiente.",
//   },
// ];


export const Features = () => {
  return (
    <section className="py-10">
      <section id="features" className="container space-y-4">
        <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
          PARTY'S{" "}
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            PEOPLE
          </span>
        </h2>

        {/* <div className="flex flex-wrap md:justify-center gap-4">
        {featureList.map((feature: string) => (
          <div key={feature}>
            <Badge variant="secondary" className="text-sm">
              {feature}
            </Badge>
          </div>
        ))}
      </div> */}

        <p className="md:w-3/4 mx-auto mt-4 mb-8 text-lg text-center text-muted-foreground">
          The Party intends to create an environment where every citizen has a
          voice, where transparency is the norm, and where decision-making is a
          collective process. The Party is aimed to ensure that all voices are
          heard, and all perspectives are considered.
        </p>
      </section>
      <div className="container">
        <Tabs defaultValue="feature-1">
          <div className="flex flex-col-reverse md:flex-row">
            <TabsList className="flex h-auto w-full flex-col gap-2 bg-background md:w-1/4 md:flex-col md:gap-4">
              <TabsTrigger
                value="feature-1"
                className="flex w-full flex-col items-start justify-start gap-1 whitespace-normal rounded-md border p-4 text-left text-primary hover:border-primary/40 data-[state=active]:border-primary"
              >
                <div className="flex items-center gap-2 md:flex-col md:items-start lg:gap-4">
                  <p className="text-lg font-semibold md:text-2xl lg:text-2xl">
                    Common Man
                  </p>
                </div>
                <p className="font-normal text-muted-foreground md:block">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </TabsTrigger>
              <TabsTrigger
                value="feature-2"
                className="flex w-full flex-col items-start justify-start gap-1 whitespace-normal rounded-md border p-4 text-left text-primary hover:border-primary/40 data-[state=active]:border-primary"
              >
                <div className="flex items-center gap-2 md:flex-col md:items-start lg:gap-4">
                  <p className="text-lg font-semibold md:text-2xl lg:text-2xl">
                    Professionals
                  </p>
                </div>
                <p className="font-normal text-muted-foreground md:block">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </TabsTrigger>
              <TabsTrigger
                value="feature-3"
                className="flex w-full flex-col items-start justify-start gap-1 whitespace-normal rounded-md border p-4 text-left text-primary hover:border-primary/40 data-[state=active]:border-primary"
              >
                <div className="flex items-center gap-2 md:flex-col md:items-start lg:gap-4">
                  <p className="text-lg font-semibold md:text-2xl lg:text-2xl">
                    Business Community
                  </p>
                </div>
                <p className="font-normal text-muted-foreground md:block">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </TabsTrigger>
            </TabsList>

            <div className="md:w-3/4 md:px-6 flex-1">
              <TabsContent value="feature-1">
                <img
                  src="https://www.shadcnblocks.com/images/block/placeholder-1.svg"
                  alt=""
                  className="aspect-video rounded-md object-cover"
                />
              </TabsContent>
              <TabsContent value="feature-2">
                <img
                  src="https://www.shadcnblocks.com/images/block/placeholder-2.svg"
                  alt=""
                  className="aspect-video rounded-md object-cover"
                />
              </TabsContent>
              <TabsContent value="feature-3">
                <img
                  src="https://www.shadcnblocks.com/images/block/placeholder-3.svg"
                  alt=""
                  className="aspect-video rounded-md object-cover"
                />
              </TabsContent>
            </div>
          </div>
        </Tabs>
      </div>

    </section>
  );
};
