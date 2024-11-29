import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { ArrowRight, Users, Briefcase, Building } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Features = () => {
  const navigate = useNavigate()
  return (
    <section className="bg-gradient-to-b my-4 from-background to-gray-50/50">
      <section className="relative overflow-hidden py-10">
        {/* Decorative background elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 blur-3xl opacity-20">
            <svg width="800" height="400" viewBox="0 0 800 400" fill="none">
              <circle cx="400" cy="100" r="200" fill="var(--primary)" />
              <circle cx="700" cy="300" r="150" fill="var(--primary)" />
              <circle cx="100" cy="300" r="150" fill="var(--primary)" />
            </svg>
          </div>
        </div>

        <div className="container relative">
          <div className="mx-auto text-center ">
            {/* Badge */}
            <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
              <span className="text-sm font-medium">Join Our Community</span>
            </div>

            {/* Main Heading with animated gradient */}
            <h2 className="text-4xl lg:text-6xl font-bold">
              <span className="inline-block my-5">  Community Contribution Program</span>
            </h2>

            {/* Stats */}
            {/* <div className="grid grid-cols-3 gap-4 mx-auto mt-8 mb-12">
              <div className="p-4 rounded-xl bg-background/50 backdrop-blur-sm border">
                <div className="text-2xl font-bold text-primary">18+</div>
                <div className="text-sm text-muted-foreground">Age Requirement</div>
              </div>
              <div className="p-4 rounded-xl bg-background/50 backdrop-blur-sm border">
                <div className="text-2xl font-bold text-primary">1000+</div>
                <div className="text-sm text-muted-foreground">Active Members</div>
              </div>
              <div className="p-4 rounded-xl bg-background/50 backdrop-blur-sm border">
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Inclusive</div>
              </div>
            </div> */}

            {/* Description with enhanced typography */}
            <div className="space-y-6">
              <p className="text-xl text-muted-foreground leading-relaxed">
                Bharatiya Popular Party Any Indian citizen, irrespective of caste, religion, or any other discrimination, who has attained the age of 18 and is willing to contribute to the community, is welcome to join us as a member Party’s community is made up of a diverse group of individuals: common citizens, professionals, and business leaders, each one of them playing a vital role in driving party’s mission forward.
              </p>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Party’s community is made up of a diverse group of individuals: common citizens, professionals, and business leaders, each one of them playing a vital role in driving party’s mission forward.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="container ">
        <Tabs defaultValue="feature-1" className="w-full">
          <div className="flex flex-col md:flex-row h-full gap-8">
            {/* Tabs List */}
            <TabsList className="flex h-auto w-full flex-col gap-3 bg-background md:w-2/4">
              <TabsTrigger
                value="feature-1"
                className="flex w-full flex-col items-start justify-start gap-2 whitespace-normal rounded-lg border-2 p-6 text-left hover:bg-gray-50 data-[state=active]:border-primary data-[state=active]:bg-primary/5 transition-all duration-200"
              >
                <div className="flex items-start gap-4">
                  <Users className="w-6 h-6 text-primary" />
                  <div className="space-y-2">
                    <p className="text-xl font-bold">The Common Man</p>
                    <div className="text-muted-foreground leading-relaxed">
                      Any Indian citizen who has attained 18 years of age and is
                      willing to be the part of community. Common man is the foundation of the
                      party's community.
                    </div>
                  </div>
                </div>
              </TabsTrigger>

              <TabsTrigger
                value="feature-2"
                className="flex w-full flex-col items-start justify-start gap-2 whitespace-normal rounded-lg border-2 p-6 text-left hover:bg-gray-50 data-[state=active]:border-primary data-[state=active]:bg-primary/5 transition-all duration-200"
              >
                <div className="flex items-start gap-4">
                  <Briefcase className="w-6 h-6 text-primary" />
                  <div className="space-y-2">
                    <p className="text-xl font-bold">Professionals</p>
                    <div className="text-muted-foreground leading-relaxed">
                      Any skilled, educated, or expert individual from any professional
                      field, such as doctors, teachers, engineers, lawyers, entrepreneurs, etc., who is
                      willing to serve the community with their knowledge and services.
                    </div>
                  </div>
                </div>
              </TabsTrigger>

              <TabsTrigger
                value="feature-3"
                className="flex w-full flex-col items-start justify-start gap-2 whitespace-normal rounded-lg border-2 p-6 text-left hover:bg-gray-50 data-[state=active]:border-primary data-[state=active]:bg-primary/5 transition-all duration-200"
              >
                <div className="flex items-start gap-4">
                  <Building className="w-10 h-10 text-primary" />
                  <div className="space-y-2">
                    <p className="text-xl font-bold">Business Leaders</p>
                    <div className="text-muted-foreground leading-relaxed">
                      including entrepreneurs and institutional leaders (owners of
                      hospital, Hotels, Schools, Colleges, Training Institutes, Event houses, etc) play a
                      critical role in supporting community people by contributing their resources
                      and services, on reasonable charges to the community.
                    </div>
                  </div>
                </div>
              </TabsTrigger>
            </TabsList>

            {/* Tabs Content */}
            <div className="flex-1">
              <div className="h-full flex flex-col">
                <TabsContent value="feature-1" className="h-full">
                  <div className="p-8 bg-white rounded-xl shadow-lg border border-gray-100 h-full space-y-6">
                    <h3 className="text-2xl font-bold text-primary">Common Man</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      The backbone of the party, the common man is the
                      primary beneficiary of the party's efforts. It is for you that we fight for equitable
                      development and opportunities. Your challenges and aspirations guide our
                      mission, and together, we work to create a better future.
                    </p>
                    <div className="mt-12">
                      <button
                        className="group inline-flex items-center justify-center rounded-full bg-primary px-4 py-3 text-md font-semibold text-primary-foreground transition-transform hover:bg-primary/90"
                        onClick={() => navigate('/auth/signup')}
                      >
                        <span>Join Our Community</span>
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </button>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="feature-2" className="h-full">
                  <div className="p-8 bg-white rounded-xl shadow-lg border border-gray-100 h-full space-y-6">
                    <h3 className="text-2xl font-bold text-primary">Professionals</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Among the common people, there are the people with
                      specialized expertise in various sectors and a passion to serve the
                      community. These professionals step forward to contribute their knowledge,
                      skills, and leadership to support the party's objectives. These are the
                      professionals who bring practical solutions to real-world issues.
                    </p>
                    <div className="mt-12">
                      <button
                        className="group inline-flex items-center justify-center rounded-full bg-primary px-4 py-3 text-md font-semibold text-primary-foreground transition-transform hover:bg-primary/90"
                        onClick={() => navigate('/auth/signup')}
                      >
                        <span>Join Our Community</span>
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </button>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="feature-3" className="h-full">
                  <div className="p-8 bg-white rounded-xl shadow-lg border border-gray-100 h-full space-y-6">
                    <h3 className="text-2xl font-bold text-primary">Business Community</h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Businesses members including entrepreneurs and
                      institutional leaders, must be registered with the party and shall be committed
                      to supporting the community by providing products and services at reasonable
                      prices. Their role is very important in building a sustainable, growing economy
                      that benefits everyone.
                    </p>
                    <div className="mt-12">
                      <button
                        className="group inline-flex items-center justify-center rounded-full bg-primary px-4 py-3 text-md font-semibold text-primary-foreground transition-transform hover:bg-primary/90"
                        onClick={() => navigate('/auth/signup')}
                      >
                        <span>Join Our Community</span>
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </button>

                    </div>
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