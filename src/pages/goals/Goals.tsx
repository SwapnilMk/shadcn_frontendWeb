import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Layout from "@/layout/Layout";
import { PaletteIcon, PresentationIcon, StoreIcon } from "lucide-react";

export default function Goals() {
  return (
    <>
    <Layout>
      {/* Icon Blocks */}
      <div className="container py-24 lg:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-6 md:gap-10">
          {/* Card */}
          <Card>
            <CardHeader className="pb-4 flex-row items-center gap-4">
              <CardTitle>NATIONAL INTEGRITY</CardTitle>
            </CardHeader>
            <CardContent>
            The party shall bear true faith and allegiance to the constitution of India as by law established, and to the principles of socialism, secularism and democracy and would uphold the sovereignty, unity and integrity of India.
            </CardContent>
          </Card>
          {/* End Card */}
          {/* Card */}
          <Card>
            <CardHeader className="pb-4 flex-row items-center gap-4">
              <CardTitle>EQUAL OPPORTUNITY AND GENDER EQUALITY</CardTitle>
            </CardHeader>
            <CardContent>
            The party is committed to the task of building a developed democratic India based on principle of equal opportunity to all citizens. The party will lay special emphasis on improving the condition of socially and economically disadvantaged sections of society in order to build an India based on lofty objectives of our freedom struggle.
            </CardContent>
          </Card>
          {/* End Card */}
          {/* Card */}
          <Card>
            <CardHeader className="pb-4 flex-row items-center gap-4">
              <CardTitle>GOOD HEALTH AND WELL-BEING</CardTitle>
            </CardHeader>
            <CardContent>
            The party will work to provide quality health facilities to all citizens, ensuring that every individual has access to health services that improve their quality of life.
            </CardContent>
          </Card>
          {/* End Card */}
          {/* Card */}
          <Card>
            <CardHeader className="pb-4 flex-row items-center gap-4">
              <CardTitle>AGAINST MUSCLE AND MONEY POWER</CardTitle>
            </CardHeader>
            <CardContent>
            The party will endeavor to campaign against evil influence of money power and muscle power vitiating the democratic politics.
            </CardContent>
          </Card>
          {/* End Card */}
          {/* Card */}
          <Card>
            <CardHeader className="pb-4 flex-row items-center gap-4">
              <CardTitle>UPHOLD SECULARISM </CardTitle>
            </CardHeader>
            <CardContent>
            The party firmly supports secularism and is opposed to the idea of a theocratic state. It will work to protect and promote religious harmony and ensure equal rights for all faiths.
            </CardContent>
          </Card>
          {/* End Card */}
          {/* Card */}
          <Card>
            <CardHeader className="pb-4 flex-row items-center gap-4">
              <CardTitle>INDUSTRIAL DEVELOPMENT & INFRASTRUCTURE</CardTitle>
            </CardHeader>
            <CardContent>
            The goal of the party is to promote industrial development and build world-class infrastructure to drive economic development. By modernizing industries, encouraging research and development, and enhancing transportation, energy, and digital networks, the party aims to create a sustainable competitive economy.
            </CardContent>
          </Card>
          {/* End Card */}
        </div>
      </div>
      {/* End Icon Blocks */}
      </Layout>
    </>
  );
}
