import img7 from "@/assets/images/banners/EMPLOYMENT & ECONOMIC GROWTH.jpeg";
import img2 from "@/assets/images/banners/EQUAL OPPORTUNITY AND GENDER EQUALITY.jpeg";
import img4 from "@/assets/images/banners/GAINST MUSCLE AND MONEY POWER.webp";
import img3 from "@/assets/images/banners/GOOD HEALTH AND WELL-BEING.jpeg";
import img5 from "@/assets/images/banners/INDIA UPHOLD SECULARISM .jpeg";
import img6 from "@/assets/images/banners/INDUSTRIAL DEVELOPMENT & INFRASTRUCTURE.jpeg";
import img8 from "@/assets/images/banners/JUSTICE, PEACE, CALM AND PROSPERITY.jpeg";
import img1 from "@/assets/images/banners/NATIONAL INTEGRITY.jpeg";
import img10 from "@/assets/images/banners/QUALITY EDUCATION.jpg";
import img9 from "@/assets/images/banners/UPLIFTMENT OF FARMERS.jpeg";
import HeaderComponent from '@/components/HeaderComponent';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import Layout from '@/layout/Layout';

const Goals = () => {
  return (
    <Layout>
      <HeaderComponent heading="BPP Goals" text="BPP is dedicated to a united, prosperous India. We fight for equal opportunity, quality healthcare and education,
industrial growth and upliftment of farmers. We believe in socialism, secularism and democracy and would uphold the
sovereignty, unity and integrity of India."  breadcrumbLinks={[
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "BPP Goals", href: "/bpp-goals" }
  ]} imgUrl={img1} />
      <section className="py-8">
        <div className="container">
          <div className="mx-auto flex flex-col items-center gap-6 text-center">
            <div className="grid grid-cols-1 place-items-center gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader className="pb-1">
                  {/* <FaBalanceScale className="size-6" /> */}
                </CardHeader>
                <CardContent className="text-left">
                  <h2 className="mb-1 text-lg font-semibold">NATIONAL INTEGRITY</h2>
                  <p className="leading-snug text-muted-foreground">
                    The party shall bear true faith and allegiance to the constitution of India as by law established, and to the principles of socialism, secularism and democracy and would uphold the sovereignty ...
                  </p>
                </CardContent>
                <CardFooter className="justify-end pb-0 pr-0">
                  <img
                    className="h-40 w-full rounded-tl-md object-cover object-center"
                    src={img1}
                    alt="placeholder"
                  />
                </CardFooter>
              </Card>

              <Card>
                <CardHeader className="pb-1">
                  {/* <FaHandshake className="size-6" /> */}
                </CardHeader>
                <CardContent className="text-left">
                  <h2 className="mb-1 text-lg font-semibold">EQUAL OPPORTUNITY AND GENDER EQUALITY</h2>
                  <p className="leading-snug text-muted-foreground">
                    The party is committed to the task of building a developed democratic India based on principle of equal opportunity to all citizens. The party will lay special emphasis  ....
                  </p>
                </CardContent>
                <CardFooter className="justify-end pb-0 pr-0">
                  <img
                    className="h-40 w-full rounded-tl-md object-cover object-center"
                    src={img2}
                    alt="placeholder"
                  />
                </CardFooter>
              </Card>

              <Card>
                <CardHeader className="pb-1">
                  {/* <FaHospital className="size-6" /> */}
                </CardHeader>
                <CardContent className="text-left">
                  <h2 className="mb-1 text-lg font-semibold">GOOD HEALTH AND WELL-BEING</h2>
                  <p className="leading-snug text-muted-foreground">
                    The party will work to provide quality health facilities to all citizens, ensuring that every individual has access to health services that improve their quality of life.
                  </p>
                </CardContent>
                <CardFooter className="justify-end pb-0 pr-0">
                  <img
                    className="h-40 w-full rounded-tl-md object-cover object-center"
                    src={img3}
                    alt="placeholder"
                  />
                </CardFooter>
              </Card>

              <Card>
                <CardHeader className="pb-1">
                  {/* <FaShieldAlt className="size-6" /> */}
                </CardHeader>
                <CardContent className="text-left">
                  <h2 className="mb-1 text-lg font-semibold">AGAINST MUSCLE AND MONEY POWER</h2>
                  <p className="leading-snug text-muted-foreground">
                    The party will endeavor to campaign against evil influence of money power and muscle power vitiating the democratic politics.
                  </p>
                </CardContent>
                <CardFooter className="justify-end pb-0 pr-0">
                  <img
                    className="h-40 w-full rounded-tl-md object-cover object-center"
                    src={img4}
                    alt="placeholder"
                  />
                </CardFooter>
              </Card>

              <Card>
                <CardHeader className="pb-1">
                  {/* <FaPrayingHands className="size-6" /> */}
                </CardHeader>
                <CardContent className="text-left">
                  <h2 className="mb-1 text-lg font-semibold">UPHOLD SECULARISM</h2>
                  <p className="leading-snug text-muted-foreground">
                    The party firmly supports secularism and is opposed to the idea of a theocratic state. It will work to protect and promote religious harmony and ensure equal rights for all faiths.
                  </p>
                </CardContent>
                <CardFooter className="justify-end pb-0 pr-0">
                  <img
                    className="h-40 w-full rounded-tl-md object-cover object-center"
                    src={img5}
                    alt="placeholder"
                  />
                </CardFooter>
              </Card>

              <Card>
                <CardHeader className="pb-1">
                  {/* <FaIndustry className="size-6" /> */}
                </CardHeader>
                <CardContent className="text-left">
                  <h2 className="mb-1 text-lg font-semibold">INDUSTRIAL DEVELOPMENT & INFRASTRUCTURE</h2>
                  <p className="leading-snug text-muted-foreground">
                    The goal of the party is to promote industrial development and build world-class infrastructure to drive economic development ....
                  </p>
                </CardContent>
                <CardFooter className="justify-end pb-0 pr-0">
                  <img
                    className="h-40 w-full rounded-tl-md object-cover object-center"
                    src={img6}
                    alt="placeholder"
                  />
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="pb-1">
                  {/* <FaIndustry className="size-6" /> */}
                </CardHeader>
                <CardContent className="text-left">
                  <h2 className="mb-1 text-lg font-semibold">EMPLOYMENT & ECONOMIC GROWTH</h2>
                  <p className="leading-snug text-muted-foreground">
                  BPP is committed to promoting decent work and sustained economic growth by creating job opportunities, ensuring fair wages and improving working conditions for all citizens. The party aims to empower individuals particularly in rural and marginalized communities through skill development, entrepreneurship and access to employment.
                  </p>
                </CardContent>
                <CardFooter className="justify-end pb-0 pr-0">
                  <img
                    className="h-40 w-full rounded-tl-md object-cover object-center"
                    src={img7}
                    alt="placeholder"
                  />
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="pb-1">
                  {/* <FaIndustry className="size-6" /> */}
                </CardHeader>
                <CardContent className="text-left">
                  <h2 className="mb-1 text-lg font-semibold">JUSTICE, PEACE, CALM AND PROSPERITY</h2>
                  <p className="leading-snug text-muted-foreground">
                  BPP  aims to create a peaceful, just, and prosperous society where all citizens have equal opportunities, security and access to resources. By this goal BPP will uphold individual rights as well as the right to privacy freedom of expression and access to information.
                  </p>
                </CardContent>
                <CardFooter className="justify-end pb-0 pr-0">
                  <img
                    className="h-40 w-full rounded-tl-md object-cover object-center"
                    src={img8}
                    alt="placeholder"
                  />
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="pb-1">
                  {/* <FaIndustry className="size-6" /> */}
                </CardHeader>
                <CardContent className="text-left">
                  <h2 className="mb-1 text-lg font-semibold">UPLIFTMENT OF FARMERS</h2>
                  <p className="leading-snug text-muted-foreground">
                  BPP is dedicated to the upliftment of farmers by ensuring fair prices for their product, providing access to modern farming techniques and improving infrastructure in rural areas. The focus will be on increasing farmer’s income through better market access, sustainable agricultural practices and timely financial support.
                  </p>
                </CardContent>
                <CardFooter className="justify-end pb-0 pr-0">
                  <img
                    className="h-40 w-full rounded-tl-md object-cover object-center"
                    src={img9}
                    alt="placeholder"
                  />
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className="pb-1">
                  {/* <FaIndustry className="size-6" /> */}
                </CardHeader>
                <CardContent className="text-left">
                  <h2 className="mb-1 text-lg font-semibold">QUALITY EDUCATION</h2>
                  <p className="leading-snug text-muted-foreground">
                  BPP believes that education is one of the most powerful and proven vehicles for sustainable development. The goal is to ensure that all girls and boys complete primary and secondary schooling. It also eliminate gender and wealth disparities and achieve universal access to a quality higher education. 
                  </p>
                </CardContent>
                <CardFooter className="justify-end pb-0 pr-0">
                  <img
                    className="h-40 w-full rounded-tl-md object-cover object-center"
                    src={img10}
                    alt="placeholder"
                  />
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Goals;