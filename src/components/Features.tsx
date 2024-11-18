import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";


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
                Common an in Bharatiya Popular party is the voter or supporter who is associated with
the party and expresses loyalty and trust in party’s vision, principles, and
leadership.
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
                A professional member in the Bharatiya Popular party is someone who is highly skilled and experienced in
their respective field, such as a doctor, chartered accountant, advocate,
educator, or other specialists.
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
                In the party, members who are considered under business community are both individuals and institutions who provide products and services to meet the needs of the community. These business members provide goods or services to the community.
                </p>
              </TabsTrigger>
            </TabsList>

            <div className="md:w-3/4 h-full md:px-6 flex-1">
            <TabsContent value="feature-1">
                <div className="p-6 bg-gray-100 rounded-md shadow-md">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Common an in Bharatiya Popular party is the voter or supporter who is associated with
                    the party and expresses loyalty and trust in party’s vision, principles, and
                    leadership. This individual may or may not have expertise in specific fields such as
                    education, business, or services, but is actively engaged in party activities, discussions, 
                    and the exchange of ideas. Common Man’s role is important in shaping the grassroots of the party 
                    through their participation in events, campaigning, and voicing their opinions. At times, especially 
                    during elections or when the party faces any challenge, the common man within the party may stand for 
                    the party’s interest. Their involvement typically reflects the democratic nature of the party, where 
                    every member, regardless of status or expertise, has a stake the party. In essence, this member helps 
                    build the party's social fabric and often acts as a bridge between the leadership and the broader public. 
                    Such individuals may not hold positions of power or influence within the party, but their contribution, 
                    through support, loyalty, and active participation remains vital to the party's identity and progress.
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="feature-2">
                <div className="p-6 bg-gray-100 rounded-md shadow-md">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    A professional member in the Bharatiya Popular party is someone who is highly skilled and experienced in
                    their respective field, such as a doctor, chartered accountant, advocate, educator, or other specialists. 
                    This individual not only possesses formal qualifications but also actively applies their expertise in practice. 
                    In party’s community, their role extends beyond just offering services for monetary gain rather they should be committed to the well-being of community. 
                    During times of need, such as health issues, legal challenges, or financial difficulties, a professional member steps forward to offer their knowledge and skills. For example:
                  </p>
                  <ul className="list-disc list-inside mt-4 text-muted-foreground">
                    <li>Doctors may provide medical consultations or advice.</li>
                    <li>Chartered accountants can assist with financial planning, tax advice, or budgeting.</li>
                    <li>Advocates can offer legal consultation or can help with legal processes.</li>
                    <li>Educationists may provide guidance on learning, academic development, or career planning.</li>
                  </ul>
                  <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                    While these professionals will charge for their services, but that should be reasonable. This is important to ensure that their services remain accessible and affordable to the members of the community.
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="feature-3">
                <div className="p-6 bg-gray-100 rounded-md shadow-md">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    In the party, members who are considered under business community are both individuals and institutions who provide products and services to meet the needs of the community. 
                    These business members provide goods or services to the community. For example, local businesses, suppliers, and service providers such as hospitals, training centres, or IT services.
                  </p>
                  <ul className="list-disc list-inside mt-4 text-muted-foreground">
                    <li>Hospitals, medical professionals, and wellness centers can offer discounted or specialized medical services during health camps or emergencies.</li>
                    <li>Local shops can provide essential products such as food, equipment, or materials needed by the community, at cost-effective rates.</li>
                    <li>Skill development centers, educational institutions, or mentors can contribute by offering training, workshops, or certification courses for community members.</li>
                  </ul>
                  <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                    Various vendors can come forward to support community events by providing necessary goods and services, such as catering, transportation, promotional materials, etc., on reasonable rates.
                  </p>
                </div>
              </TabsContent>
            </div>
          </div>
        </Tabs>
      </div>

    </section>
  );
};
