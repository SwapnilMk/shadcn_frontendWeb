import HeaderComponent from "@/components/HeaderComponent";
import Layout from "@/layout/Layout";
import { CheckCircle, ClipboardCheck, DollarSign, HandshakeIcon, Heart, Smile } from "lucide-react";

const EthicsVendorsSuppliers = () => {
    return (
        <Layout>
            <HeaderComponent heading="Ethics of Vendors and Suppliers" text="Ethics of Vendors and Suppliers" breadcrumbLinks={[
                { label: "Business Community", href: "/" },
                { label: "Ethics & Vendor Suppliers", href: "/business-community/ethics" }
            ]}
                imgUrl={"null"}
            />
            <section className="w-full py-8 dark:bg-gray-800">
                {/* Header Section */}
                <div className="container px-4 mx-auto">
                    <div className="flex items-center gap-3 mb-6">
                        <HandshakeIcon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl dark:text-white">
                            Ethics of Vendors and Suppliers
                        </h1>
                    </div>

                    {/* Introduction */}
                    <div className="max-w-3xl mb-12 text-gray-700 dark:text-gray-300 space-y-4">
                        <p>
                            At Bharatiya Public Party, we believe that our vendors and suppliers play a crucial role in building a supportive and compassionate community. To ensure the well-being of our members and society, we uphold the highest ethical standards and trust that all our partners will act with integrity, fairness, and respect.
                        </p>
                    </div>

                    {/* Ethical Principles Section */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-bold dark:text-white mb-4">
                            Ethical Principles for Vendors and Suppliers
                        </h2>
                        <div className="space-y-8">
                            {/* Reasonable Pricing */}
                            <div className="flex items-start gap-3">
                                <DollarSign className="h-6 w-6 text-green-600 dark:text-green-400" />
                                <div>
                                    <h3 className="text-xl font-semibold dark:text-white">Reasonable Pricing</h3>
                                    <p className="text-gray-700 dark:text-gray-300">
                                        We trust that all vendors will charge fair and reasonable rates for their services, ensuring that our members have access to affordable solutions without financial burdens.
                                    </p>
                                </div>
                            </div>

                            {/* Honesty and Transparency */}
                            <div className="flex items-start gap-3">
                                <CheckCircle className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
                                <div>
                                    <h3 className="text-xl font-semibold dark:text-white">Honesty and Transparency</h3>
                                    <p className="text-gray-700 dark:text-gray-300">
                                        Vendors should always be truthful regarding their commitments and capabilities, maintaining clear communication about services, pricing, and timelines to build trust and credibility.
                                    </p>
                                </div>
                            </div>

                            {/* Sincerity in Service */}
                            <div className="flex items-start gap-3">
                                <ClipboardCheck className="h-6 w-6 text-red-600 dark:text-red-400" />
                                <div>
                                    <h3 className="text-xl font-semibold dark:text-white">Sincerity in Service</h3>
                                    <p className="text-gray-700 dark:text-gray-300">
                                        BPP vendors must be dedicated to providing the best possible services with professionalism and care, ensuring that members' needs are met diligently.
                                    </p>
                                </div>
                            </div>

                            {/* Cordial and Understanding Approach */}
                            <div className="flex items-start gap-3">
                                <Smile className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                                <div>
                                    <h3 className="text-xl font-semibold dark:text-white">Cordial and Understanding Approach</h3>
                                    <p className="text-gray-700 dark:text-gray-300">
                                        Vendors are encouraged to maintain a respectful and understanding approach with members, helping create a supportive environment.
                                    </p>
                                </div>
                            </div>

                            {/* Sympathy and Compassion */}
                            <div className="flex items-start gap-3">
                                <Heart className="h-6 w-6 text-pink-600 dark:text-pink-400" />
                                <div>
                                    <h3 className="text-xl font-semibold dark:text-white">Sympathy and Compassion</h3>
                                    <p className="text-gray-700 dark:text-gray-300">
                                        Vendors should show empathy and compassion, especially when assisting members facing challenging situations, creating a community of care and support.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Conclusion */}
                    <div className="border-t pt-8 dark:border-gray-700">
                        <p className="text-gray-700 dark:text-gray-300 text-lg">
                            By adhering to these ethical guidelines, BPP vendors and suppliers help create a compassionate community that benefits both businesses and individuals alike.
                        </p>
                        <p className="text-gray-700 dark:text-gray-300 mt-4 font-medium">
                            Together, we can ensure that everyone in our network receives the support and care they deserve.
                        </p>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default EthicsVendorsSuppliers;
