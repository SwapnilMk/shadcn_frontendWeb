import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
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
import Layout from '@/layout/Layout';
import { FC } from 'react';

interface Goal {
  title: string;
  description: string;
  imgSrc: string;
}

const GoalCard: FC<Goal> = ({ title, description, imgSrc }) => {
  return (
    <Card className="group transition-all duration-300 hover:scale-105 hover:shadow-2xl 
      flex flex-col h-full overflow-hidden">
      <CardHeader className="pb-1">
        {/* Placeholder for potential icon */}
      </CardHeader>
      <CardContent className="text-left flex-grow">
        <h2 className="mb-1 text-lg font-bold">{title}</h2>
        <p className="leading-snug text-muted-foreground">
          {description}
        </p>
      </CardContent>
      <CardFooter className="justify-end pb-0 pr-0 mt-auto">
        <div className="w-full h-40">
          <img
            className="w-full h-full object-cover object-center rounded-tl-md 
            transition-transform duration-300 group-hover:scale-110"
            src={imgSrc}
            alt={title}
          />
        </div>
      </CardFooter>
    </Card>
  );
};

const Goals = () => {
  const goals = [
    {
      title: "NATIONAL INTEGRITY",
      description: "BPP shall bear true faith and allegiance to the constitution of India as by law established, and to the principles of socialism, secularism and democracy and would uphold the sovereignty, unity and integrity of India.",
      imgSrc: img1
    },
    {
      title: "EQUAL OPPORTUNITY AND GENDER EQUALITY",
      description: "BPP is committed to the task of building a developed democratic India based on principle of equal opportunity to all citizens. The party will lay special emphasis on improving the condition of socially and economically disadvantaged sections of society.",
      imgSrc: img2
    },
    {
      title: "GOOD HEALTH AND WELL-BEING",
      description: "BPP will work to provide quality health facilities to all citizens, ensuring that every individual has access to health services that improve their quality of life.",
      imgSrc: img3
    },
    {
      title: "AGAINST MUSCLE AND MONEY POWER",
      description: "BPP will work against the misuse of money and muscle power in democratic politics.",
      imgSrc: img4
    },
    {
      title: "UPHOLD SECULARISM",
      description: "BPP firmly supports secularism and is opposed to the idea of a theocratic state. BPP will work to protect and promote religious harmony and ensure equal rights for all faiths.",
      imgSrc: img5
    },
    {
      title: "INDUSTRIAL DEVELOPMENT & INFRASTRUCTURE",
      description: "The goal of the BPP is to promote industrial development and build world-class infrastructure to drive economic development. By modernizing industries, encouraging research and development and enhancing transportation, energy and digital networks, the party aims to create a sustainable competitive economy.",
      imgSrc: img6
    },
    {
      title: "EMPLOYMENT & ECONOMIC GROWTH",
      description: "BPP is committed to promoting decent work and sustained economic growth by creating job opportunities, ensuring fair wages and improving working conditions for all citizens. The party aims to empower individuals particularly in rural and marginalized communities through skill development, entrepreneurship and access to employment.",
      imgSrc: img7
    },
    {
      title: "JUSTICE, PEACE, CALM AND PROSPERITY",
      description: "BPP aims to create a peaceful, just, and prosperous society where all citizens have equal opportunities, security and access to resources. By this goal BPP will uphold individual rights as well as the right to privacy freedom of expression and access to information.",
      imgSrc: img8
    },
    {
      title: "UPLIFTMENT OF FARMERS",
      description: "BPP is dedicated to the upliftment of farmers by ensuring fair prices for their product, providing access to modern farming techniques and improving infrastructure in rural areas. The focus will be on increasing farmer's income through better market access, sustainable agricultural practices and timely financial support.",
      imgSrc: img9
    },
    {
      title: "QUALITY EDUCATION",
      description: "BPP believes that education is one of the most powerful and proven vehicles for sustainable development. The goal is to ensure that all girls and boys complete primary and secondary schooling. It also eliminate gender and wealth disparities and achieve universal access to a quality higher education.",
      imgSrc: img10
    }
  ];

  return (
    <Layout>
      <HeaderComponent
        heading="Bharatiya Popular Party Goals"
        text="BPP is dedicated to a united, prosperous India. We fight for equal opportunity, quality healthcare and education, industrial growth and upliftment of farmers. We believe in socialism, secularism and democracy and would uphold the sovereignty, unity and integrity of India."
        breadcrumbLinks={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "BPP Goals", href: "/bpp-goals" }
        ]}
        imgUrl={img1}
      />
      <section className="py-8">
        <div className="container">
          <div className="mx-auto flex flex-col items-center gap-6 text-center">
            <div className="grid grid-cols-1 place-items-center gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {goals.map((goal, index) => (
                <GoalCard
                  key={index}
                  title={goal.title}
                  description={goal.description}
                  imgSrc={goal.imgSrc}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Goals;