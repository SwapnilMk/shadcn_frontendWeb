import vision from '@/assets/images/headerBanners/Vision.png';
import HeaderComponent from "@/components/HeaderComponent";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Layout from "@/layout/Layout";
import { Globe, Handshake, Share2 } from "lucide-react"; // Updated icons

export default function Vision() {
    return (
        <>
            <Layout>
                <HeaderComponent 
                    heading="Vision Statement" 
                    text="Our Vision" 
                    breadcrumbLinks={[
                        { label: "Home", href: "/" },
                        { label: "Vision", href: "/vision" },
                    ]} 
                    imgUrl={vision} 
                />
                <section className="w-full container py-5 dark:bg-gray-800">
                    {/* Hero Section */}
                    <div>
                        <div className="space-y-3 xl:text-left">
                            <h4 className="text-3xl font-bold">Vision Statement</h4>
                            <Separator />
                            {/* Core Pillars Section */}
                            <div className="mt-8">
                                <h3 className="text-md font-semibold">
                                    At Bharatiya Popular Party (BPP), our vision is to introduce an innovative,
                                    decentralized mechanism within the party's power structure. We believe that
                                    decision-making should be more inclusive, transparent, and closer to the people. By
                                    empowering local communities and leaders, we aim to create a system where power
                                    is distributed equitably, encouraging greater participation, and responsiveness. This
                                    will ensure that every individual has a voice in the decision-making process, leading
                                    to a more democratic, fair, and effective governance structure.
                                </h3>
                                <h3 className="text-md mt-3 font-semibold">
                                    We are driven by the belief that true democracy flourishes when governance is not
                                    centralized but shared across all levels, empowering local communities and
                                    respecting regional diversity.
                                </h3>
                                <h2 className="font-bold text-2xl mt-4 mb-6">
                                    Key Pillars of Our Vision:
                                </h2>
                                <Separator />
                                <div className="grid gap-6 my-4 md:grid-cols-1">
                                    {/* Pillar 1 */}
                                    <Card className="relative">
                                        <CardContent className="p-6">
                                            <div className="mb-4 flex items-center gap-2">
                                                <Share2 className="h-6 w-6 text-blue-600" />
                                                <h3 className="text-xl font-bold">Decentralization</h3>
                                            </div>
                                            <p className="text-gray-600 dark:text-gray-300">
                                                Party believes in <span className="font-bold">Decentralization</span> by shifting power from the center to the
                                                grassroots so that the decisions are made by those who are going to be
                                                affected the most and the policy making can be more relevant, effective, and
                                                responsive to local needs.
                                            </p>
                                        </CardContent>
                                    </Card>

                                    {/* Pillar 2 */}
                                    <Card className="relative">
                                        <CardContent className="p-6">
                                            <div className="mb-4 flex items-center gap-2">
                                                <Globe className="h-6 w-6 text-green-600" />
                                                <h3 className="text-xl font-bold">Federalism</h3>
                                            </div>
                                            <p className="text-gray-600 dark:text-gray-300">
                                                Party is committed to <span className="font-bold">federalism</span> means recognizing and respecting the
                                                diversity of our nation. We value a system where regional and local
                                                governments have the authority to manage their affairs to best serve their
                                                communities, while still remaining united in our common national goals.
                                            </p>
                                        </CardContent>
                                    </Card>

                                    {/* Pillar 3 */}
                                    <Card className="relative">
                                        <CardContent className="p-6">
                                            <div className="mb-4 flex items-center gap-2">
                                                <Handshake className="h-6 w-6 text-red-600" />
                                                <h3 className="text-xl font-bold">Power-sharing</h3>
                                            </div>
                                            <p className="text-gray-600 dark:text-gray-300">
                                                Party’s idea of true <span className="font-bold">democracy</span> is about balance and cooperation. We strongly
                                                believe in power-sharing and this structure involves multiple stakeholders
                                                like, central, regional, and local governments and ensures that no single
                                                group holds all the power.
                                            </p>
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
}
