import HeaderComponent from "@/components/HeaderComponent";
import Layout from "@/layout/Layout";
import { BookOpenCheck, Coins, Eye, HeartHandshake, Leaf } from "lucide-react";
import community from '@/assets/images/headerBanners/community.png'

const CommunityContribution = () => {
    return (
        <Layout>
            <HeaderComponent heading="Community Contribution" text="Community Contribution" breadcrumbLinks={[
                { label: "About", href: "/about" },
                { label: "Community Contribution", href: "/about/Community Contribution" }
            ]}
                imgUrl={community}
            />
            <section className="w-full py-8 dark:bg-gray-800">
                {/* Header Section */}
                <div className="container px-4 mx-auto">
                    <div className="flex items-center gap-3 mb-6">
                        <HeartHandshake className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl dark:text-white">
                            Community Contribution
                        </h1>
                    </div>

                    {/* Introduction */}
                    <div className="max-w-3xl mb-12 text-gray-700 dark:text-gray-300 space-y-4">
                        <p>
                            Community contributions are vital to uplifting socially and economically disadvantaged sections of society, promoting equal opportunities for all citizens. Each member voluntarily contributes, and this system is called <span className="font-bold">"Community Contribution."</span>
                        </p>
                    </div>

                    {/* Contribution Sections */}
                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        {/* Upliftment of Farmers */}
                        <div className="flex items-start gap-3">
                            <Leaf className="h-6 w-6 text-green-600 dark:text-green-400" />
                            <div>
                                <h2 className="text-2xl font-bold dark:text-white">Support for Farmers</h2>
                                <p className="text-gray-700 dark:text-gray-300">
                                    Contribute to the upliftment of farmers, ensuring that they receive the necessary support to thrive and improve their livelihoods.
                                </p>
                            </div>
                        </div>

                        {/* Quality Education */}
                        <div className="flex items-start gap-3">
                            <BookOpenCheck className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
                            <div>
                                <h2 className="text-2xl font-bold dark:text-white">Quality Education for All</h2>
                                <p className="text-gray-700 dark:text-gray-300">
                                    Help provide quality education to all citizens, promoting equal opportunities and a brighter future for everyone in the community.
                                </p>
                            </div>
                        </div>

                        {/* Health Services */}
                        <div className="flex items-start gap-3">
                            <HeartHandshake className="h-6 w-6 text-red-600 dark:text-red-400" />
                            <div>
                                <h2 className="text-2xl font-bold dark:text-white">Health Services for All</h2>
                                <p className="text-gray-700 dark:text-gray-300">
                                    Contribute to improving access to good health services for all, ensuring that every citizen can receive medical attention when needed.
                                </p>
                            </div>
                        </div>

                        {/* Transparency in Fund Usage */}
                        <div className="flex items-start gap-3">
                            <Eye className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                            <div>
                                <h2 className="text-2xl font-bold dark:text-white">Transparent Fund Management</h2>
                                <p className="text-gray-700 dark:text-gray-300">
                                    All funds are transparently maintained and used exclusively for initiatives that align with BPP's objectives. This ensures that every contribution is directed toward meaningful causes.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Public Ledger Section */}
                    <div className="mb-12">
                        <div className="flex items-start gap-3">
                            <Coins className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                            <div>
                                <h2 className="text-2xl font-bold dark:text-white">Public Ledger for Transparency</h2>
                                <p className="text-gray-700 dark:text-gray-300">
                                    A detailed contribution and public ledger for each initiative will be displayed on the BPP website, ensuring transparency in fund management and execution. This fosters community trust and involvement in BPP’s initiatives.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Conclusion */}
                    <div className="border-t pt-8 dark:border-gray-700">
                        <p className="text-gray-700 dark:text-gray-300 text-lg">
                            By adhering to this policy, BPP maintains transparency, ensures the efficient use of funds, and fosters a sense of community involvement in all initiatives.
                        </p>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default CommunityContribution;
