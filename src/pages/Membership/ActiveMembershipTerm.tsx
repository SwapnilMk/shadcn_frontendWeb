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

            <section className="py-12">
                <div className="container px-4 mx-auto">
                    <div className="flex flex-col items-center gap-3 mb-10">
                        <CheckCircle className="h-10 w-10 text-blue-600 dark:text-blue-400" />
                        <h1 className="text-4xl font-extrabold tracking-tight text-center text-gray-900 sm:text-5xl dark:text-white">
                            Active Membership Term
                        </h1>
                        <p className="max-w-2xl text-center text-lg text-gray-600 dark:text-gray-400">
                            Explore the guidelines and steps to maintain your active membership.
                        </p>
                    </div>

                    <div className="space-y-12">
                        {/* Enroll New Members */}
                        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 border-b pb-6">
                            <UserPlus className="h-10 w-10 text-green-600 dark:text-green-400" />
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                                    Enroll New Members
                                </h2>
                                <p className="text-lg text-gray-700 dark:text-gray-300">
                                    Actively enroll at least 10 new members into the party.
                                </p>
                            </div>
                        </div>

                        {/* Alignment with Party Values */}
                        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 border-b pb-6">
                            <CheckCircle className="h-10 w-10 text-purple-600 dark:text-purple-400" />
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                                    Alignment with Party Values
                                </h2>
                                <p className="text-lg text-gray-700 dark:text-gray-300">
                                    Align with and support the party’s vision, values, and objectives.
                                </p>
                            </div>
                        </div>

                        {/* Biennial Payment */}
                        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 border-b pb-6">
                            <FaRupeeSign className="h-10 w-10 text-yellow-600 dark:text-yellow-400" />
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                                    Biennial Payment
                                </h2>
                                <p className="text-lg text-gray-700 dark:text-gray-300">
                                    A nominal fee of ₹250/- is required every year to maintain active membership status.
                                </p>
                            </div>
                        </div>

                        {/* Term Duration */}
                        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 border-b pb-6">
                            <Calendar className="h-10 w-10 text-blue-600 dark:text-blue-400" />
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                                    Term Duration
                                </h2>
                                <p className="text-lg text-gray-700 dark:text-gray-300">
                                    The active membership term is valid for one year, after which renewal is required.
                                </p>
                            </div>
                        </div>

                        {/* Membership Termination */}
                        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                            <AlertTriangle className="h-10 w-10 text-red-600 dark:text-red-400" />
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                                    Membership Termination
                                </h2>
                                <p className="text-lg text-gray-700 dark:text-gray-300">
                                    Active membership will cease in the event of:
                                </p>
                                <ul className="list-disc pl-6 mt-2 space-y-2 text-gray-700 dark:text-gray-300">
                                    <li>Death of the member.</li>
                                    <li>Resignation from the party.</li>
                                    <li>Non-payment of the membership fee within the prescribed period.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Conclusion */}
                    <div className="mt-16 text-center">
                        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                            We encourage all members to actively engage with the party’s initiatives and contribute to its success.
                        </p>
                        <button className="mt-8 px-8 py-4 text-white bg-blue-600 rounded-full text-lg font-semibold shadow-lg hover:bg-blue-700 dark:bg-blue-400 dark:hover:bg-blue-500 transition-all">
                            Renew Membership
                        </button>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default ActiveMembershipTerm;
