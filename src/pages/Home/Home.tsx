import { About } from "@/components/About";
import Carousel from "@/components/Carousel";
import { FAQ } from "@/components/FAQ";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { Newsletter } from "@/components/Newsletter";
import Layout from "../../layout/Layout";

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
