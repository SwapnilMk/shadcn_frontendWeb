import HeaderComponent from '@/components/HeaderComponent';
import Layout from '@/layout/Layout';
import { Users } from "lucide-react";

const MembershipPrivilege = () => {
    return (
        <Layout>
            <HeaderComponent
                heading="Membership Privilege"
                text="Rights and privileges of BPP members"
                breadcrumbLinks={[
                    { label: "Home", href: "/" },
                    { label: "Membership", href: "/membership" },
                    { label: "Membership Privilege", href: "/membership/privilege" }
                ]}
                imgUrl={"null"} // Placeholder for header image
            />

            <section className="py-8">
                <div className="container px-4 mx-auto">
                    <div className="flex items-center gap-3 mb-6">
                        <Users className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl dark:text-white">
                            Membership Privileges: Empowering Active Participation
                        </h1>
                    </div>

                    {/* Privileges Section */}
                    <div className="space-y-8">
                        <div className="border-b pb-4 mb-6">
                            <h2 className="text-2xl font-bold dark:text-white mb-2">1. Right to Vote</h2>
                            <p className="text-gray-700 dark:text-gray-300">
                                Every member shall have the right to vote in party elections. Voting rights are
                                applicable as per the rules outlined in the constitution, and each member is
                                entitled to one vote.
                            </p>
                        </div>

                        <div className="border-b pb-4 mb-6">
                            <h2 className="text-2xl font-bold dark:text-white mb-2">2. Right to Stand for Election</h2>
                            <p className="text-gray-700 dark:text-gray-300">
                                Members who fulfill the eligibility criteria specified in the BPP constitution
                                have the right to stand for election to any party position or office subject to
                                the party's bylaws and election processes.
                            </p>
                        </div>

                        <div className="border-b pb-4 mb-6">
                            <h2 className="text-2xl font-bold dark:text-white mb-2">3. Access to Party Information</h2>
                            <p className="text-gray-700 dark:text-gray-300">
                                Members shall have access to policies, meeting minutes, plans, and annual reports.
                            </p>
                        </div>

                        <div className="border-b pb-4 mb-6">
                            <h2 className="text-2xl font-bold dark:text-white mb-2">4. Participation in Party Activities</h2>
                            <p className="text-gray-700 dark:text-gray-300">
                                Members are encouraged to participate in all party activities, including
                                meetings, campaigns, seminars, and community outreach programs.
                            </p>
                        </div>

                        <div className="border-b pb-4 mb-6">
                            <h2 className="text-2xl font-bold dark:text-white mb-2">5. Right to Propose Resolutions and Amendments</h2>
                            <p className="text-gray-700 dark:text-gray-300">
                                Members may propose resolutions and amendments to the party’s policies,
                                organizational structures, and constitution.
                            </p>
                        </div>

                        <div className="border-b pb-4 mb-6">
                            <h2 className="text-2xl font-bold dark:text-white mb-2">6. Networking and Collaboration</h2>
                            <p className="text-gray-700 dark:text-gray-300">
                                Members shall have opportunities to network with professionals and organizations,
                                both locally and internationally, to promote the party’s vision, expand influence,
                                and foster collaborations.
                            </p>
                        </div>

                        <div className="border-b pb-4 mb-6">
                            <h2 className="text-2xl font-bold dark:text-white mb-2">7. Recognition and Rewards</h2>
                            <p className="text-gray-700 dark:text-gray-300">
                                Members who demonstrate outstanding dedication, leadership, or contribution to
                                the party’s activities shall be recognized through awards, titles, or other forms
                                of acknowledgment.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold dark:text-white mb-2">8. Access to Party Platforms</h2>
                            <p className="text-gray-700 dark:text-gray-300">
                                Members shall have access to platforms for voting, sharing views and ideas, and
                                contributing on key political, economic, and social issues.
                            </p>
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div className="mt-12 text-center">
                        <p className="text-gray-700 dark:text-gray-300 text-lg">
                            By exercising these privileges, you are shaping the future of the party and contributing
                            to its mission.
                        </p>
                        <button className="mt-6 px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-700 dark:bg-blue-400 dark:hover:bg-blue-500">
                            Join BPP Today
                        </button>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default MembershipPrivilege;
