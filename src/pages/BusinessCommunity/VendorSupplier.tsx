import HeaderComponent from '@/components/HeaderComponent';
import Layout from '@/layout/Layout';
import { ActivitySquare, Building2, HandshakeIcon, Medal, UserCheck } from "lucide-react";

const VendorSupplier = () => {
    return (
        <Layout>
            <HeaderComponent heading="Vendor & Suppliers" text="Vendor & Suppliers" breadcrumbLinks={[
                { label: "Home", href: "/" },
                { label: "Business Community", href: "/" },
                { label: "Vendor & Suppliers", href: "/business-community/vendor-suppliers" }
            ]}
                imgUrl={"null"}
            />

            <section className="py-8">
                <div className="container">
                    <div className="mx-auto">
                        <div className="container px-4 mx-auto">
                            <div className="flex items-center gap-3 mb-6">
                                <HandshakeIcon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl dark:text-white">
                                    Vendors and Suppliers: Essential Partners in BPP's Mission
                                </h1>
                            </div>

                            {/* Introduction */}
                            <div className="max-w-3xl mb-12 text-gray-700 dark:text-gray-300 space-y-4">
                                <p>
                                    At Bharatiya Popular Party, we are committed to create an <span className="font-bold">ecosystem of collaboration</span> where both members and vendors grow together. BPP is committed to facilitate an exchange of <span className="font-bold">needs and services</span>, benefiting both sides in meaningful ways.
                                </p>
                                <p>
                                    We at BPP, recognize that our vendors and suppliers are the backbone of our ability to support the community. These trusted partners play a critical role in ensuring that our members receive the services and assistance they need—quickly, efficiently, and at reasonable rates.
                                </p>
                                <p>
                                    In times of urgency, our registered vendors and suppliers are committed to provide priority service to our community members. Whether it's medical care, home services, or other essential needs, our vendors will be equipped to respond promptly and professionally.
                                </p>
                            </div>

                            {/* Medical Services Section */}
                            <div className="mb-12">
                                <div className="flex items-center gap-3 mb-4">
                                    <ActivitySquare className="h-6 w-6 text-red-600 dark:text-red-400" />
                                    <h2 className="text-2xl font-bold dark:text-white">Priority Medical Services</h2>
                                </div>
                                <p className="text-gray-700 dark:text-gray-300">
                                    One of the key areas where our vendors provide exceptional support is in medical services. In the event of a medical emergency or urgent health need, our registered medical service providers—including hospitals, clinics, and healthcare professionals—will give our members top priority.
                                </p>
                            </div>

                            {/* Advantages Sections */}
                            <div className="grid md:grid-cols-2 gap-8 mb-12">
                                {/* Vendor Advantages */}
                                <div>
                                    <div className="flex items-center gap-3 mb-4">
                                        <Building2 className="h-6 w-6 text-green-600 dark:text-green-400" />
                                        <h2 className="text-2xl font-bold dark:text-white">Advantage to our Vendors and Suppliers:</h2>
                                    </div>
                                    <p className="text-gray-700 dark:text-gray-300">
                                        As a registered vendor or supplier, you gain access to a dedicated network of members seeking your services. This creates a unique business opportunity—expanding your reach while helping the community. You'll have the chance to build trust with members and gain recognition and business both.
                                    </p>
                                </div>

                                {/* Member Advantages */}
                                <div>
                                    <div className="flex items-center gap-3 mb-4">
                                        <UserCheck className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                                        <h2 className="text-2xl font-bold dark:text-white">Advantage to our Members:</h2>
                                    </div>
                                    <p className="text-gray-700 dark:text-gray-300">
                                        When you join our community, you gain access to a network of trusted vendors and service providers who can fulfill your urgent needs. By being part of this ecosystem, you are guaranteed timely support and immediate fulfillment of your needs, all at reasonable rates.
                                    </p>
                                </div>
                            </div>

                            {/* Win-Win Section */}
                            <div className="mb-8">
                                <div className="flex items-center gap-3 mb-4">
                                    <Medal className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
                                    <h2 className="text-2xl font-bold dark:text-white">A Win-Win for All:</h2>
                                </div>
                                <ul className="list-none space-y-2 text-gray-700 dark:text-gray-300">
                                    <li>• <span className="font-bold">Members</span> get immediate access to urgent services from trusted providers.</li>
                                    <li>• <span className="font-bold">Vendors and suppliers</span> expand their business network and increase visibility within the community.</li>
                                </ul>
                            </div>

                            {/* Conclusion */}
                            <div className="border-t pt-8 dark:border-gray-700">
                                <p className="text-gray-700 dark:text-gray-300 text-lg">
                                    Together, we are building a community where <span className="font-bold">everyone benefits</span>—a place where needs are met, businesses grow, and community flourish.
                                </p>
                                <p className="text-gray-700 dark:text-gray-300 mt-4 font-medium">
                                    Join BPP in creating a stronger, more connected community.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default VendorSupplier;