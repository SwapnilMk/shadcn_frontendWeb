import vision from '@/assets/images/headerBanners/Vision.png';
import HeaderComponent from "@/components/HeaderComponent";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Layout from "@/layout/Layout";
import { GraduationCap, Shield, Users } from "lucide-react";

export default function Vision() {
    return (
        <>
            <Layout>
                <HeaderComponent heading="Our Vision" text="Our Vision" breadcrumbLinks={[
                    { label: "Home", href: "/" },
                    { label: "Vision", href: "/vision" },
                ]} imgUrl={vision} />
                <section className="w-full py-5 dark:bg-gray-800">
                    {/* Hero Section */}
                    <div>
                        <div className="space-y-3 xl:text-left">
                            {/* Core Pillars Section */}
                            <div className="container mt-8 px-4 md:px-6">
                            <h3 className="text-xl font-bold">
                                    At Bharatiya Popular Party (BPP), our vision is to build an equitable and prosperous society where power is distributed fairly, decisions are made closer to the people, and every voice is heard.
                        
                                    We are
                                    driven by the belief that true democracy flourishes when governance is not
                                    centralized but shared across all levels, empowering local communities and
                                    respecting regional diversity.
                                </h3>
                                <h2
                                    className="font-bold text-2xl mt-4 mb-6">
                                    Our vision is built on three core pillars
                                </h2>
                                <Separator />
                                <div className="grid gap-6 my-4 md:grid-cols-1">
                                    {/* Pillar 1 */}
                                    <Card className="relative ">
                                        <CardContent className="p-6">
                                            <div className="mb-4 flex items-center gap-2">
                                                <Users className="h-6 w-6 text-blue-600" />
                                                <h3 className="text-xl font-bold">Empowering the Underprivileged</h3>
                                            </div>

                                            <p className="text-gray-600 dark:text-gray-300">
                                                We are dedicated to improving the lives of the{" "}
                                                <span className="font-bold">socially and economically disadvantaged</span> sections of society. We believe that true development can only be achieved when everyone has access to the opportunities they deserve. Our focus is on:
                                            </p>
                                            <ul className="mt-2 space-y-2 text-gray-600 dark:text-gray-300">
                                                <li>Eradicating poverty by creating sustainable livelihood opportunities</li>
                                                <li>Expanding access to basic services such as education, healthcare, and housing</li>
                                                <li>Encouraging inclusive growth that leaves no one behind, ensuring every individual can fully realize their potential</li>
                                            </ul>

                                        </CardContent>
                                    </Card>

                                    {/* Pillar 2 */}
                                    <Card className="relative ">
                                        <CardContent className="p-6">
                                            <div className="mb-4 flex items-center gap-2">
                                                <GraduationCap className="h-6 w-6 text-green-600" />
                                                <h3 className="text-xl font-bold">Education, Health, and Security for All</h3>
                                            </div>
                                            <p className="text-gray-600 dark:text-gray-300">
                                                We recognize that the foundation of a prosperous society rests on the health, safety, and education of its people. Our commitment to these areas includes:
                                            </p>
                                            <ul className="mt-2 space-y-2 text-gray-600 dark:text-gray-300">
                                                <li>Building a world-class education system that equips our youth with the skills and knowledge to succeed in a globalized world</li>
                                                <li>Ensuring access to affordable, quality healthcare for all, regardless of income or location</li>
                                                <li>Strengthening our national security to create a stable and safe environment where citizens can live without fear</li>
                                            </ul>

                                        </CardContent>
                                    </Card>

                                    {/* Pillar 3 */}
                                    <Card className="relative ">
                                        <CardContent className="p-6">
                                            <div className="mb-4 flex items-center gap-2">
                                                <Shield className="h-6 w-6 text-red-600" />
                                                <h3 className="text-xl font-bold">Minimizing the Influence of Money and Muscle Power in Politics</h3>
                                            </div>
                                            <p className="text-gray-600 dark:text-gray-300">
                                                A strong democracy is built on transparency, integrity, and the active participation of its citizens. We are committed to:
                                            </p>
                                            <ul className="mt-2 space-y-2 text-gray-600 dark:text-gray-300">
                                                <li>Fighting corruption at every level of government</li>
                                                <li>Minimizing the influence of money and muscle power in politics, ensuring fair and free elections</li>
                                                <li>Creating an environment where public policy is driven by the needs and aspirations of the people, not by vested interests</li>
                                            </ul>
                                        </CardContent>
                                    </Card>
                                </div>
                                <p className="mt-4 text-gray-600 dark:text-gray-300">
                                    We believe that a nation can only progress when{" "}
                                    <span className="font-bold">everyone is given a fair chance</span>, when opportunity is not dictated by wealth, power, or birthright, but by talent, hard work, and determination. This vision for the future is rooted in the belief that our diversity is our strength, and our democracy is our most powerful tool for change.
                                    Together, we will{" "}
                                    <span className="font-bold">build a nation that works for all</span>, where dignity, justice, and opportunity are available to every citizen.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
}
