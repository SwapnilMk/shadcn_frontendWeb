import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import Newsletter from "@/components/Newsletter";
import VisionMission from "@/components/VisionMission";
import Layout from "../../layout/Layout";
import Carousel from "@/components/Carousel";

function Home() {
  return (
    <>
    <Layout>
      <Carousel/>
      <HowItWorks />
      <VisionMission />
      <Features />
      {/* <Services /> */}
      {/* <Hero /> */}
      {/* <Sponsors /> */} 
      {/* <About /> */}
      {/* <Cta /> */}
      {/* <Testimonials /> */}
      {/* <Team /> */}
      {/* <Pricing /> */}
      <Newsletter />
      {/* <FAQ /> */}
    </Layout>
    </>
  );
}

export default Home;
