import Carousel from "@/components/Carousel";
import { Features } from "@/components/Features";
import Newsletter from "@/components/Newsletter";
import VisionMission from "@/components/VisionMission";
import Layout from "../../layout/Layout";

function Home() {
  return (
    <>
    <Layout>
      <Carousel/>
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
