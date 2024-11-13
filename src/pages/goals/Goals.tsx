import { FaBalanceScale, FaHandshake, FaHospital, FaShieldAlt, FaPrayingHands, FaIndustry } from 'react-icons/fa';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import Layout from '@/layout/Layout';
import img1 from "@/assets/images/backgrounds/image1.jpg";
import img2 from "@/assets/images/backgrounds/image2.jpg"
import img3 from "@/assets/images/backgrounds/image3.jpg";
import img4 from "@/assets/images/backgrounds/image4.jpg";
import img5 from "@/assets/images/backgrounds/image5.png";
import img6 from "@/assets/images/backgrounds/image6.png";

const Goals = () => {
  return (
    <Layout>
      <section className="py-16">
        <div className="container">
          <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 text-center">
            <h1 className="mb-6 text-pretty text-4xl font-semibold lg:text-5xl">
              OUR GOALS
            </h1>

            <div className="mt-10 grid grid-cols-1 place-items-center gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader className="pb-1">
                  <FaBalanceScale className="size-6" />
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
                  <FaHandshake className="size-6" />
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
                  <FaHospital className="size-6" />
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
                  <FaShieldAlt className="size-6" />
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
                  <FaPrayingHands className="size-6" />
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
                  <FaIndustry className="size-6" />
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
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Goals;