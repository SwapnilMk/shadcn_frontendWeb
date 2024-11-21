// import mission from '@/assets/images/headerBanners/Mission.png';
import HeaderComponent from "@/components/HeaderComponent";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Layout from "@/layout/Layout";
import { Flag, Star, Users } from "lucide-react";

export default function Mission() {
    return (
        <>
            <Layout>
                <HeaderComponent
                    heading="Our Mission"
                    text="Our Mission"
                    breadcrumbLinks={[
                        { label: "Home", href: "/" },
                        { label: "Mission", href: "/mission" },
                    ]}
                    imgUrl={'null'}
            />
                <section className="w-full py-5 dark:bg-gray-800">
                    <div className="container mt-12 px-4 md:px-6">
                        <h2 className="font-bold text-3xl mb-6">
                            Bharatiya Popular Party's Mission
                        </h2>
                        <Separator />

                        <p className="mt-4 text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                            At Bharatiya Popular Party, our mission is to unite the maximum population of India in a collective drive of meaningful change. We believe that the strength of our democracy lies in the active involvement of every citizen. We aim to inspire and empower individuals to take leadership roles in their communities, all while working in alignment with the party's core objectives of support, decentralization, federalism, and power-sharing.
                        </p>

                        <div className="grid gap-6 my-8 md:grid-cols-1">
                            {/* Key Aspect 1: Mass Participation */}
                            <Card className="relative">
                                <CardContent className="p-6">
                                    <div className="mb-4 flex items-center gap-2">
                                        <Users className="h-6 w-6 text-blue-600" />
                                        <h3 className="text-xl font-bold">Mass Participation</h3>
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        We aim to engage millions of Indian citizens, ensuring that everyone, from villages to urban areas, becomes an integral part of our community. Through campaigns, outreach programs, and educational initiatives, we invite every citizen to join us in shaping the future.
                                    </p>
                                </CardContent>
                            </Card>

                            {/* Key Aspect 2: Alignment with Party Objectives */}
                            <Card className="relative">
                                <CardContent className="p-6">
                                    <div className="mb-4 flex items-center gap-2">
                                        <Flag className="h-6 w-6 text-green-600" />
                                        <h3 className="text-xl font-bold">Alignment with Party Objectives</h3>
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        Our mission is not just to seek support, but to ensure that every individual member works in harmony with the party's core values of equity, justice, and decentralization. Together, we will work on the policies that bring real change.
                                    </p>
                                </CardContent>
                            </Card>

                            {/* Key Aspect 3: Leadership at Every Level */}
                            <Card className="relative">
                                <CardContent className="p-6">
                                    <div className="mb-4 flex items-center gap-2">
                                        <Star className="h-6 w-6 text-red-600" />
                                        <h3 className="text-xl font-bold">Leadership at Every Level</h3>
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        We believe that leadership should not be confined to the top. Our mission is to empower citizens to take the lead in their communities, encouraging local leaders who work dedicatedly to solve problems and create opportunities for their peers. Whether through organizing local events, leading social initiatives, or advocating for change, everyone has to contribute to the community.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>

                        <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                            <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-200">Community Contribution</h3>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                Our vision is to promote a culture of service and active contribution. By creating a sense of responsibility and ownership, we encourage individuals to participate in community-driven efforts, like improving infrastructure, supporting education, or tackling social issues. For, the part, every contribution counts, and together, we can make a lasting impact.
                            </p>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
}