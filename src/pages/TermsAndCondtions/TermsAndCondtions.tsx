import { Separator } from "@/components/ui/separator";
import Layout from '@/layout/Layout';
import { AlertTriangle, Book, CreditCard, FileText, Globe, Mail, Scale, Server, Shield, Users, LucideIcon } from "lucide-react";
import { Link } from 'react-router-dom';

interface SectionProps {
    icon: LucideIcon;
    title: string;
    children: React.ReactNode;
    highlight?: boolean;
}

const Section = ({ icon: Icon, title, children, highlight = false }: SectionProps) => (
    <section className={`py-8 ${highlight ? 'bg-primary/5 rounded-xl p-6' : ''}`}>
        <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-primary/10">
                <Icon className="w-6 h-6 text-primary" />
            </div>
            <h2 className="text-2xl font-bold">{title}</h2>
        </div>
        <div className="text-muted-foreground space-y-4 ml-12">
            {children}
        </div>
    </section>
);

const TermsOfService = () => {
    return (
        <Layout>
            <div className="min-h-screen bg-background">
                {/* Hero Section */}
                <div className="">
                    <div className="container mx-auto px-4 py-16 max-w-4xl">
                        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
                            BHARATIYA POPULAR PARTY
                        </h1>
                        <div className="flex justify-center items-center gap-2 mb-8">
                            <Scale className="w-6 h-6 text-primary" />
                            <h2 className="text-2xl md:text-3xl font-semibold">Terms of Service and Conditions</h2>
                        </div>
                        <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-6 mx-auto max-w-2xl">
                            <div className="flex gap-3">
                                <AlertTriangle className="w-6 h-6 text-yellow-500" />
                                <p className="text-muted-foreground">
                                    IMPORTANT – PLEASE READ CAREFULLY
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container mx-auto px-4 max-w-4xl">
                    <Section icon={Book} title="Introduction">
                        <p>
                            These Terms represent a legally binding agreement between you and the Bharatiya Popular Party regarding your use of the Party website. By using the website Service, you acknowledge that you have read, understood, and agree to comply with these Terms.
                        </p>
                        <p>
                            As a registered member of the website and/or as a visitor, you will get an insight on the updates and detailed information of the happenings and developments within and by the party.
                        </p>
                    </Section>

                    <Separator />

                    <Section icon={Users} title="Membership Registration" highlight={true}>
                        <p>To become a member of Bharatiya Popular Party, you may be required to provide:</p>
                        <div className="grid md:grid-cols-2 gap-4 mt-4">
                            <div className="space-y-2">
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Name and age</li>
                                    <li>Gender and address</li>
                                    <li>Mobile number</li>
                                    <li>Email address</li>
                                    <li>Profession</li>
                                </ul>
                            </div>
                            <div className="space-y-2">
                                <ul className="list-disc pl-6 space-y-2">
                                    <li>Constituency</li>
                                    <li>Village, block, district, state</li>
                                    <li>Language preference</li>
                                    <li>Voter ID</li>
                                    <li>Aadhar card</li>
                                </ul>
                            </div>
                        </div>
                    </Section>

                    <Separator />

                    <Section icon={CreditCard} title="Membership Fee">
                        <div className="bg-muted p-6 rounded-lg">
                            <p className="mb-4">
                                To become member of the Bharatiya Popular Party are required to pay a one-time membership fee of ₹5 through the platform.
                            </p>
                            <p>
                                Membership allows exclusive privileges, periodic updates and organizational developments.
                            </p>
                        </div>
                    </Section>

                    <Separator />

                    <Section icon={Users} title="Active Membership Access">
                        <div className="bg-primary/5 p-6 rounded-lg">
                            <p>
                                To obtain active membership status, members must enroll at least 10 new members through referrals. Once this requirement is met, users will gain access to additional features and benefits reserved for active members.
                            </p>
                        </div>
                    </Section>

                    <Separator />

                    <Section icon={Shield} title="Data Privacy" highlight={true}>
                        <p>
                            The Party is committed to user privacy and will handle personal data according to relevant laws. Information collected will only be used for legitimate purposes, such as:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 mt-4">
                            <li>Providing member updates</li>
                            <li>Enhancing engagement</li>
                            <li>Improving services</li>
                        </ul>
                        <p className="mt-4">
                            The Party will not share data to third party without consent unless legally required.
                        </p>
                    </Section>

                    <Separator />

                    <Section icon={FileText} title="Intellectual Property">
                        <p>
                            The content, design, logos, and all intellectual property on the Platform are owned by the Party. Unauthorized reproduction, distribution, or misuse of the content is strictly prohibited.
                        </p>
                    </Section>

                    <Separator />

                    <Section icon={Scale} title="Limitation of Liability">
                        <div className="bg-muted p-6 rounded-lg">
                            <p>
                                The Party is not liable for any indirect or incidental damages that may arise from Platform usage, including loss of data, interruption, or any technical issues. Users acknowledge that use of the Platform is at their own risk.
                            </p>
                        </div>
                    </Section>

                    <Separator />

                    <Section icon={Server} title="Service Availability">
                        <p>
                            While the Party aims to provide continuous and reliable service, it does not guarantee uninterrupted availability. Planned maintenance, updates, or unforeseen technical issues may cause temporary disruptions.
                        </p>
                    </Section>

                    <Separator />

                    <Section icon={Globe} title="Disclaimer" highlight={true}>
                        <p>
                            The Party is not responsible for any losses or damages arising from unauthorized access to or misuse of the Platform. While we strive to provide accurate information, the Party does not guarantee the reliability or completeness of any content on the Platform.
                        </p>
                    </Section>

                    {/* Contact Section */}
                    <section className="py-12">
                        <div className="bg-primary/5 rounded-xl p-8 text-center">
                            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                            <p className="text-muted-foreground mb-6">
                                If you have any questions about these terms of services & conditions or the website treatment of your personal information, please write to:
                            </p>
                            <div className="inline-flex items-center gap-2 bg-background px-6 py-3 rounded-lg shadow-sm">
                                <Mail className="w-5 h-5 text-primary" />
                                <Link to="mailto:bpp.headoffice@gmail.com" className="text-primary hover:underline">
                                    bpp.headoffice@gmail.com
                                </Link>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </Layout>
    );
};

export default TermsOfService;