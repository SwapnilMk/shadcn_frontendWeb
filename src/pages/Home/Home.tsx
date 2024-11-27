import { Features } from "@/components/Features";
import Newsletter from "@/components/Newsletter";
import Goals from "@/components/test/goals";
import VisionMission from "@/components/VisionMission";
import Layout from "../../layout/Layout";

function Home() {
  return (
    <>
      <Layout>
        <Goals />
        <VisionMission />
        <Features />
        <Newsletter />
        {/* Decentralized Democracy, Centralized Progress */}
        {/* add this button */}
      </Layout>
    </>
  );
}

export default Home;
