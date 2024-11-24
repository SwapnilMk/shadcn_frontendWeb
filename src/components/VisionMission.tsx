import React from 'react';
import {
    ChevronRightIcon,
    GraduationCapIcon,
    Handshake,
    ShieldCheck,
    ShieldCheckIcon,
    Target,
    Users,
    UsersRound
} from "lucide-react";
import { Link } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

const VisionMission = () => {
    return (
        <section className="w-full bg-gradient-to-b from-background to-gray-50 dark:from-gray-800 dark:to-gray-900 py-8 md:py-10">
            <div className="container px-4 mx-auto">
                <Tabs defaultValue="vision" className="w-full mx-auto">
                    <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm shadow-lg rounded-lg p-1">
                        <TabsTrigger
                            value="vision"
                            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300"
                        >
                            Vision
                        </TabsTrigger>
                        <TabsTrigger
                            value="mission"
                            className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300"
                        >
                            Mission
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="vision" className="mt-8">
                        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                            <div className="order-2 lg:order-1">
                                <div>
                                    <span className="inline-block rounded-lg bg-gradient-to-r from-gray-900 to-gray-700 px-3 py-2 text-xs text-gray-50 dark:from-gray-50 dark:to-gray-200 dark:text-gray-900 shadow-md">
                                        Vision Statement
                                    </span>
                                    <h2 className="mt-4 scroll-m-20 font-bold border-b pb-4 text-3xl tracking-tight transition-colors first:mt-0 sm:text-4xl xl:text-5xl">
                                        Vision of{' '}
                                        <span className="block mt-2">
                                            <span className="text-red-500 animate-in fade-in duration-500">Bharatiya</span>{' '}
                                            <span className="text-blue-500 animate-in fade-in duration-700">Popular</span>{' '}
                                            <span className="animate-in fade-in duration-1000">Party</span>
                                        </span>
                                    </h2>
                                    <p className="mt-3 text-muted-foreground">
                                        At Bharatiya Popular Party (BPP), our vision is to introduce an innovative,
                                        decentralized mechanism within the party&#39;s power structure. We believe that
                                        decision-making should be more inclusive, transparent, and closer to the people. By
                                        empowering local communities and leaders, we aim to create a system where power
                                        is distributed equitably, encouraging greater participation, and responsiveness. This
                                        will ensure that every individual has a voice in the decision-making process, leading
                                        to a more democratic, fair, and effective governance structure.
                                    </p>
                                    <p className="mt-3 text-muted-foreground">
                                        We are driven by the belief that true democracy flourishes when governance is not
                                        centralized but shared across all levels, empowering local communities and
                                        respecting regional diversity.
                                    </p>
                                    <p className="mt-5">
                                        <Link
                                            className="inline-flex items-center gap-x-2 group font-medium hover:underline underline-offset-4 text-primary hover:text-primary/90"
                                            to="/vision"
                                        >
                                            learn more about our Vision
                                            <ChevronRightIcon className="flex-shrink-0 w-4 h-4 transition-all ease-in-out group-hover:translate-x-1" />
                                        </Link>
                                    </p>
                                </div>
                            </div>
                            {/* Vision features section */}
                            <div className="space-y-2 lg:space-y-2 order-1 lg:order-2">
                                {[
                                   {
                                    icon: <UsersRound />, // Represents grassroots and community
                                    title: "Decentralized Governance",
                                    description: "Party believes in decentralisation by shifting power from the center to the grassroots so that the decisions are made by those who are going to be affected the most and the policy making can be more relevant, effective, and responsive to local needs."
                                },
                                {
                                    icon: <GraduationCapIcon />, // Represents knowledge and federalism
                                    title: "Commitment to Federalism",
                                    description: "Party is committed to federalism means recognizing and respecting the diversity of our nation. We value a system where regional and local governments have the authority to manage their affairs to best serve their communities, while still remaining united in our common national goals."
                                },
                                {
                                    icon: <ShieldCheckIcon />, // Represents balance and integrity in governance
                                    title: "Balanced Democracy",
                                    description: "Party’s idea of true democracy is about balance and cooperation. We strongly believe in power-sharing and this structure involves multiple stakeholders like, central, regional, and local governments and ensures that no single group holds all the power."
                                }
                                
                                ].map((feature, index) => (
                                    <div
                                        key={index}
                                        className="flex p-4 rounded-xl hover:bg-white/50 dark:hover:bg-gray-800/50 transition-all duration-300 transform hover:-translate-y-1"
                                    >
                                        <span className="flex-shrink-0 inline-flex justify-center items-center w-[46px] h-[46px] rounded-full border bg-primary text-primary-foreground shadow-lg">
                                            {React.cloneElement(feature.icon, { className: "flex-shrink-0 w-5 h-5" })}
                                        </span>
                                        <div className="ms-5 sm:ms-8">
                                            <h3 className="text-base sm:text-lg font-semibold">
                                                {feature.title}
                                            </h3>
                                            <p className="mt-1 text-sm text-muted-foreground">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </TabsContent>

                    <TabsContent value="mission" className="mt-8">
                        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                            {/* Mission features section */}
                            <div className="space-y-2 lg:space-y-2">
                                {[
                                    {
                                        icon: <Users />, // Represents community or youth groups
                                        title: "Youth Empowerment",
                                        description: "Empowering the youth with education and employment opportunities, providing them with the tools, resources, and opportunities to shape the future of our nation."
                                    },
                                    {
                                        icon: <Target />, // Represents focus on education goals
                                        title: "Quality Education for All",
                                        description: "Engaging educationists who are eager to bring about a change in the system and providing quality education for every citizen so that no one is left behind due to any barriers."
                                    },
                                    {
                                        icon: <ShieldCheck />, // Represents integrity and protection against corruption
                                        title: "Political Integrity",
                                        description: "Eradicating the influence of muscle and money power in politics and governance, ensuring that merit, integrity, and community service drive decision-making."
                                    },
                                    {
                                        icon: <Handshake />, // Represents collaboration and equality
                                        title: "Gender Equality",
                                        description: "Promoting gender equality by empowering women and marginalized groups by providing equal opportunities, rights, and treatment for all genders in every aspect of life."
                                    }
                                ].map((feature, index) => (
                                    <div
                                        key={index}
                                        className="flex p-4 rounded-xl hover:bg-white/50 dark:hover:bg-gray-800/50 transition-all duration-300 transform hover:-translate-y-1"
                                    >
                                        <span className="flex-shrink-0 inline-flex justify-center items-center w-[46px] h-[46px] rounded-full border bg-primary text-primary-foreground shadow-lg">
                                            {React.cloneElement(feature.icon, { className: "flex-shrink-0 w-5 h-5" })}
                                        </span>
                                        <div className="ms-5 sm:ms-8">
                                            <h3 className="text-base sm:text-lg font-semibold">
                                                {feature.title}
                                            </h3>
                                            <p className="mt-1 text-sm text-muted-foreground">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            {/* Mission content */}
                            <div>
                                <span className="inline-block rounded-lg bg-gradient-to-r from-gray-900 to-gray-700 px-3 py-2 text-xs text-gray-50 dark:from-gray-50 dark:to-gray-200 dark:text-gray-900 shadow-md">
                                    Mission Statement
                                </span>
                                <h2 className="mt-4 scroll-m-20 font-bold border-b pb-4 text-3xl tracking-tight transition-colors first:mt-0 sm:text-4xl xl:text-5xl">
                                    Mission of{' '}
                                    <span className="block mt-2">
                                        <span className="text-red-500 animate-in fade-in duration-500">Bharatiya</span>{' '}
                                        <span className="text-blue-500 animate-in fade-in duration-700">Popular</span>{' '}
                                        <span className="animate-in fade-in duration-1000">Party</span>
                                    </span>
                                </h2>
                                <p className="mt-3 text-muted-foreground">
                                    Party’s mission is to reach the billions of Indians through the digital app by the end of 2025, enabling everyone to benefit from community contributions. The app will be launched in December 2024, with the goal of attracting the maximum number of people to join in its first year. This will ensure nationwide participation.
                                </p>
                                <p className="mt-3 text-muted-foreground">
                                    The mass download of the app will help start a movement of community contribution, benefiting people across India.
                                </p>
                                <p className="mt-3 text-muted-foreground">
                                    In the next five years, while working through the app we aim to reach to the masses and letting them support each other with mutual contributions. Under this we invite the expert professionals also to be the part and active contributor of the community-contribution.
                                </p>
                                <p className="mt-3 text-muted-foreground">
                                    Members identified as most involved to the community, can be the potential candidates to stand as candidates in elections.
                                </p>
                                <p className="mt-5">
                                    <Link
                                        className="inline-flex items-center gap-x-2 group font-medium hover:underline underline-offset-4 text-primary hover:text-primary/90"
                                        to="/mission"
                                    >
                                        learn more about our Mission
                                        <ChevronRightIcon className="flex-shrink-0 w-4 h-4 transition-all ease-in-out group-hover:translate-x-1" />
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </TabsContent>
                </Tabs>
            </div>
        </section>
    );
};

export default VisionMission;