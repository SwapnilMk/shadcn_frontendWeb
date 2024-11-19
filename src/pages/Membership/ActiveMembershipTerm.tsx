import HeaderComponent from '@/components/HeaderComponent';
import Layout from '@/layout/Layout';
import { UserPlus, CheckCircle, Calendar, AlertTriangle } from "lucide-react";
import { FaRupeeSign } from 'react-icons/fa';

const ActiveMembershipTerm = () => {
    return (
        <Layout>
            <HeaderComponent
                heading="Active Membership Term"
                text="Guidelines for Maintaining Active Membership"
                breadcrumbLinks={[
                    { label: "Home", href: "/" },
                    { label: "Membership", href: "/membership" },
                    { label: "Active Membership Term", href: "/membership/active-term" }
                ]}
                imgUrl={"null"} // Placeholder for header image
            />

            <section className="py-8">
                <div className="container px-4 mx-auto">
                    <div className="flex items-center gap-3 mb-6">
                        <CheckCircle className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl dark:text-white">
                            Active Membership Term
                        </h1>
                    </div>

                    <div className="space-y-8">
                        {/* Enroll New Members */}
                        <div className="border-b pb-4 mb-6">
                            <div className="flex items-center gap-3 mb-2">
                                <UserPlus className="h-6 w-6 text-green-600 dark:text-green-400" />
                                <h2 className="text-2xl font-bold dark:text-white">Enroll New Members</h2>
                            </div>
                            <p className="text-gray-700 dark:text-gray-300">
                                Actively enroll at least 10 new members into the party.
                            </p>
                        </div>

                        {/* Alignment with Party Values */}
                        <div className="border-b pb-4 mb-6">
                            <div className="flex items-center gap-3 mb-2">
                                <CheckCircle className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                                <h2 className="text-2xl font-bold dark:text-white">Alignment with Party Values</h2>
                            </div>
                            <p className="text-gray-700 dark:text-gray-300">
                                Align with and support the party’s vision, values, and objectives.
                            </p>
                        </div>

                        {/* Biennial Payment */}
                        <div className="border-b pb-4 mb-6">
                            <div className="flex items-center gap-3 mb-2">
                                <FaRupeeSign className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
                                <h2 className="text-2xl font-bold dark:text-white">Biennial Payment</h2>
                            </div>
                            <p className="text-gray-700 dark:text-gray-300">
                                A nominal fee of ₹250/- is required every year to maintain active membership status.
                            </p>
                        </div>

                        {/* Term Duration */}
                        <div className="border-b pb-4 mb-6">
                            <div className="flex items-center gap-3 mb-2">
                                <Calendar className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                                <h2 className="text-2xl font-bold dark:text-white">Term Duration</h2>
                            </div>
                            <p className="text-gray-700 dark:text-gray-300">
                                The active membership term is valid for one year, after which renewal is required.
                            </p>
                        </div>

                        {/* Membership Termination */}
                        <div>
                            <div className="flex items-center gap-3 mb-2">
                                <AlertTriangle className="h-6 w-6 text-red-600 dark:text-red-400" />
                                <h2 className="text-2xl font-bold dark:text-white">Membership Termination</h2>
                            </div>
                            <p className="text-gray-700 dark:text-gray-300">
                                Active membership will cease in the event of:
                            </p>
                            <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300 space-y-2">
                                <li>Death of the member.</li>
                                <li>Resignation from the party.</li>
                                <li>Non-payment of the membership fee within the prescribed period.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Conclusion */}
                    <div className="mt-12 text-center">
                        <p className="text-gray-700 dark:text-gray-300 text-lg">
                            We encourage all members to actively engage with the party’s initiatives and contribute to its success.
                        </p>
                        <button className="mt-6 px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 dark:bg-blue-400 dark:hover:bg-blue-500">
                            Renew Membership
                        </button>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default ActiveMembershipTerm;
