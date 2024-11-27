import { Features } from "@/components/Features";
import Newsletter from "@/components/Newsletter";
import Goals from "@/components/test/goals";
import VisionMission from "@/components/VisionMission";
import Layout from "../../layout/Layout";
import Join from "@/components/hero/Join";

function Home() {
  return (
    <>
      <Layout>
        <Goals />
        <VisionMission />
        <Features />
        <Join />
        {/* Decentralized Democracy, Centralized Progress */}
        {/* add this button */}
        <Newsletter />
      </Layout>
    </>
  );
}

export default Home;
