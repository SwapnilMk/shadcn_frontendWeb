// import mission from '@/assets/images/headerBanners/Mission.png';
import HeaderComponent from "@/components/HeaderComponent";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Layout from "@/layout/Layout";
import { Flag, Handshake, Star, Users } from "lucide-react";
import mission from '@/assets/images/headerBanners/mission.jpg'

export default function Mission() {
    return (
        <>
            <Layout>
                <HeaderComponent
                    heading="Mission Statement"
                    text="Our Mission"
                    breadcrumbLinks={[
                        { label: "Home", href: "/" },
                        { label: "Mission", href: "/mission" },
                    ]}
                    imgUrl={mission}
                />
                <section className="w-full container py-5 dark:bg-gray-800">
                    <h4 className="text-3xl mb-3 font-bold">Mission Statement</h4>
                    <div>
                        <div className="space-y-3 xl:text-left">
                            <Separator />
                            <div className="mt-8">
                                <h3 className="text-md my-2 font-semibold">
                                    Party’s mission is to reach the billions of Indians through the digital app by the end of 2025, enabling everyone to benefit from community contributions. The app will be operational in December 2024 and will start with registrations in January-2025, with the goal of attracting the maximum number of people to join in its first year. This will ensure nationwide participation.
                                </h3>

                                <h3 className="text-md my-2 font-semibold">
                                    The mass download of the app will help start a movement of community contribution,
                                    benefiting people across India.
                                </h3>
                                <h3 className="text-md my-2 font-semibold">
                                    In the next five years, while working through the app we aim to reach to the masses
                                    and letting them support each other with mutual contributions. Under this we invite
                                    the expert professionals also to be the part and active contributor of the community-
                                    contribution.
                                </h3>
                                <h3 className="text-md font-semibold">
                                    Members identified as most involved to the community, can be the potential
                                    candidates to stand as candidates in elections.
                                </h3>
                                <h2 className="font-bold text-2xl mt-4 mb-6">
                                    Our priorities include:
                                </h2>
                                <Separator />
                                <div className="grid gap-6 my-8 md:grid-cols-1">
                                    {/* Key Aspect 1: Mass Participation */}
                                    <Card className="relative">
                                        <CardContent className="p-6">
                                            <div className="mb-4 flex items-center gap-2">
                                                <Users className="h-6 w-6 text-blue-600" />
                                                <h3 className="text-xl font-bold">Youth Empowerment</h3>
                                            </div>
                                            <p className="text-gray-600 dark:text-gray-300">
                                                Empowering the youth with education and employment opportunities,
                                                providing them with the tools, resources, and opportunities to shape the future
                                                of our nation.
                                            </p>
                                        </CardContent>
                                    </Card>

                                    {/* Key Aspect 2: Alignment with Party Objectives */}
                                    <Card className="relative">
                                        <CardContent className="p-6">
                                            <div className="mb-4 flex items-center gap-2">
                                                <Flag className="h-6 w-6 text-green-600" />
                                                <h3 className="text-xl font-bold">Quality Education for All</h3>
                                            </div>
                                            <p className="text-gray-600 dark:text-gray-300">
                                                Engaging educationists who are eager to bring about a change in the system
                                                and providing quality education for every citizen so that no one is left behind
                                                due to any barriers.
                                            </p>
                                        </CardContent>
                                    </Card>

                                    {/* Key Aspect 3: Leadership at Every Level */}
                                    <Card className="relative">
                                        <CardContent className="p-6">
                                            <div className="mb-4 flex items-center gap-2">
                                                <Star className="h-6 w-6 text-red-600" />
                                                <h3 className="text-xl font-bold">Political Integrity</h3>
                                            </div>
                                            <p className="text-gray-600 dark:text-gray-300">
                                                Eradicating the influence of muscle and money power in politics and
                                                governance, ensuring that merit, integrity, and community service drive
                                                decision-making.
                                            </p>
                                        </CardContent>
                                    </Card>

                                    <Card className="relative">
                                        <CardContent className="p-6">
                                            <div className="mb-4 flex items-center gap-2">
                                                <Handshake className="h-6 w-6 text-red-600" />
                                                <h3 className="text-xl font-bold">Gender Equality</h3>
                                            </div>
                                            <p className="text-gray-600 dark:text-gray-300">
                                                Through this app we are committed to creating a platform where merit and
                                                community contribution drive the change, ensuring a brighter future for all.
                                            </p>
                                        </CardContent>
                                    </Card>
                                </div>

                                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                        Promoting gender equality by , empowering women and marginalized groups
                                        .by providing equal opportunities, rights, and treatment for all genders in every
                                        aspect of life.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    );
}