import HeaderComponent from '@/components/HeaderComponent';
import { Separator } from '@/components/ui/separator';
import Layout from '@/layout/Layout';

const CommitmentToProgress = () => {
    return (
        <Layout>
            <HeaderComponent heading="Commitment to Progress" text="Commitment to Progress" breadcrumbLinks={[
                { label: "About", href: "/about" },
                { label: "Commitment to Progress", href: "/about/Commitment to Progress" }
            ]}
                imgUrl={"null"}
            />
            <section className="w-full py-8 dark:bg-gray-800">
                {/* Header Section */}
                <div className="container px-4 mx-auto">
                    <div className="flex items-center gap-3 mb-6">
                        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl dark:text-white">
                            Commitment to Progress
                        </h1>
                    </div>
                    <Separator className='my-5' />
                    {/* Progress Points */}
                    <div className="grid md:grid-cols-2 gap-8 mb-12">
                        {/* Industrial Development */}
                        <div className="flex items-start gap-3">
                            <div>
                                <h2 className="text-2xl font-bold dark:text-white">Industrial Development & Employment</h2>
                                <p className="text-gray-700 dark:text-gray-300">
                                    The BPP supports industrial development, employment opportunities, and business promotion.
                                </p>
                            </div>
                        </div>

                        {/* Secularism, Democracy, Socialism */}
                        <div className="flex items-start gap-3">
                            <div>
                                <h2 className="text-2xl font-bold dark:text-white">Secularism, Democracy, and Socialism</h2>
                                <p className="text-gray-700 dark:text-gray-300">
                                    It upholds principles of secularism, democracy, and socialism, avoiding practices that harm societal harmony.
                                </p>
                            </div>
                        </div>

                        {/* Non-violence and Peaceful Protests */}
                        <div className="flex items-start gap-3">
                            <div>
                                <h2 className="text-2xl font-bold dark:text-white">Non-violence & Peaceful Campaigns</h2>
                                <p className="text-gray-700 dark:text-gray-300">
                                    Disciplinary rules emphasize non-violence, promoting peaceful campaigns and democratic forms of protests.
                                </p>
                            </div>
                        </div>

                        {/* Healthcare Accessibility */}
                        <div className="flex items-start gap-3">
                            <div>
                                <h2 className="text-2xl font-bold dark:text-white">Improving Healthcare Accessibility</h2>
                                <p className="text-gray-700 dark:text-gray-300">
                                    Works towards improving healthcare accessibility to the public, ensuring the health sector adopts sustainable practices.
                                </p>
                            </div>
                        </div>

                        {/* Citizen Education */}
                        <div className="flex items-start gap-3">
                            <div>
                                <h2 className="text-2xl font-bold dark:text-white">Citizen Rights & Responsibilities</h2>
                                <p className="text-gray-700 dark:text-gray-300">
                                    Develop programs to educate citizens about their rights and responsibilities and encourage active participation in democratic processes.
                                </p>
                            </div>
                        </div>

                        {/* Transparency & Ethical Governance */}
                        <div className="flex items-start gap-3">
                            <div>
                                <h2 className="text-2xl font-bold dark:text-white">Transparency & Ethical Governance</h2>
                                <p className="text-gray-700 dark:text-gray-300">
                                    Focus on promoting transparency, accountability, and ethical governance, ensuring that citizens are informed and empowered to participate in decision-making processes at all levels of government.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default CommitmentToProgress;
