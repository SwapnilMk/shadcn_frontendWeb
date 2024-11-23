import community from '@/assets/images/headerBanners/community.png';
import HeaderComponent from "@/components/HeaderComponent";
import Layout from "@/layout/Layout";
import { Separator } from '@radix-ui/react-select';
import { HeartHandshake, Leaf } from "lucide-react";

const CommunityContribution = () => {
    return (
        <Layout>
            <HeaderComponent
                heading="Community Contribution"
                text="Community Contribution"
                breadcrumbLinks={[
                    { label: "About", href: "/about" },
                    { label: "Community Contribution", href: "/about/Community Contribution" }
                ]}
                imgUrl={community}
            />
            <section className="w-full py-8 dark:bg-gray-800">
                <div className="container px-4 mx-auto">
                    <div className="flex items-center gap-3 mb-6">
                        <HeartHandshake className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl dark:text-white">
                            Community Contribution
                        </h1>
                    </div>
                    <div className="mb-12 text-gray-700 dark:text-gray-300 space-y-4">
                        <p>
                            Bharatiya Popular Party Any Indian citizen, irrespective of caste, religion, or any other discrimination, who has attained the age of 18 and is willing to contribute to the community, is welcome to join us as a member
                        </p>
                    </div>
                    <Separator className="mb-8" />

                    {/* Section: Diverse Group */}
                    <div className="grid container md:grid-cols-2 gap-8 items-center mb-12">
                        <div className="relative">
                            <img
                                className="w-full rounded-md"
                                src="https://placehold.co/800x700"
                                alt="Image Description"
                            />
                        </div>
                        <div>
                            <h2 className="text-4xl font-extrabold tracking-tight lg:text-3xl">
                                Party’s community is made up of a diverse group of individuals:
                            </h2>
                            <p className="mt-3 text-xl text-muted-foreground">
                                Common citizens, professionals, and business leaders, each one of them playing a vital role in driving party’s mission forward.
                            </p>
                            <div className="mt-6 lg:mt-10 space-y-8">
                                <div className="flex items-start gap-4">
                                    <Leaf className="h-20 w-20 text-green-600 dark:text-green-400" />
                                    <div>
                                        <h3 className="text-2xl font-bold dark:text-white">The Common Man</h3>
                                        <p className="text-gray-700 dark:text-gray-300">
                                            The backbone of the party, the common man is the primary beneficiary of the party’s efforts. It is for you that we fight for equitable development and opportunities. Your challenges and aspirations guide our mission, and together, we work to create a better future.
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <Leaf className="h-20 w-20 text-green-600 dark:text-green-400" />
                                    <div>
                                        <h3 className="text-2xl font-bold dark:text-white">Professionals</h3>
                                        <p className="text-gray-700 dark:text-gray-300">
                                            Among the common people, there are people with specialized expertise in various sectors and a passion to serve the community. These professionals step forward to contribute their knowledge, skills, and leadership to support the party’s objectives.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <Leaf className="h-20 w-20 text-green-600 dark:text-green-400" />
                                <div>
                                    <h3 className="text-2xl font-bold dark:text-white">Business Leaders</h3>
                                    <p className="text-gray-700 dark:text-gray-300">
                                        Business members including entrepreneurs and institutional leaders, must be registered with the party and shall be committed to supporting the community by providing products and services at reasonable prices.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <Leaf className="h-20 w-20 text-green-600 dark:text-green-400" />
                                <div>
                                    <h3 className="text-2xl font-bold dark:text-white">The Blockheads</h3>
                                    <p className="text-gray-700 dark:text-gray-300">
                                        Above all, we have the Blockheads, exceptional individuals who go above and beyond in their service to the community. They are selected based on their active involvement and commitment to the party's values.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <img
                                className="w-full rounded-md"
                                src="https://placehold.co/800x700"
                                alt="Image Description"
                            />
                        </div>
                    </div>

                    <div className="border-t pt-8 dark:border-gray-700">
                        <p className="text-gray-700 dark:text-gray-300 text-lg">
                            Party’s people; are all those who share a common desire to serve the communities and contribute to the betterment. This is how we are not just a party; we are better known as Community Contributors, a united force, committed to positive change, driven by service, and focused on creating a better future for all.
                        </p>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default CommunityContribution;
