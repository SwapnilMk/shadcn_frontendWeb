import { About } from "@/components/About";
import { FAQ } from "@/components/FAQ";
import { Features } from "@/components/Features";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Newsletter } from "@/components/Newsletter";
import  Layout  from "../layout/Layout";
import Carousel from "@/components/Carousel";
import Vision from "./Vision/Vision";

function Home() {
  return (
    <>
    <Layout>
      <Carousel/>
      {/* <Hero /> */}
      <HowItWorks />
      {/* <Sponsors /> */}
      {/* <Vision /> */}
      <About />
      <Features />
      {/* <Services /> */}
      {/* <Cta /> */}
      {/* <Testimonials /> */}
      {/* <Team /> */}
      {/* <Pricing /> */}
      <Newsletter />
      <FAQ />
    </Layout>
    </>
  );
}

export default Home;
