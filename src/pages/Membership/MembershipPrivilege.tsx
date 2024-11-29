import HeaderComponent from '@/components/HeaderComponent';
import Layout from '@/layout/Layout';
import { Users, Vote, UserPlus, FileText, Users2, ScrollText, Network, Award, Layout as LayoutIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const MembershipPrivilege = () => {
    const privileges = [
        {
            title: "Right to Vote",
            description: "Every member shall have the right to vote in party elections. Voting rights are applicable as per the rules outlined in the constitution, and each member is entitled to one vote.",
            icon: Vote
        },
        {
            title: "Right to Stand for Election",
            description: "Members who fulfill the eligibility criteria specified in the BPP constitution have the right to stand for election to any party position or office subject to the party's bylaws and election processes.",
            icon: UserPlus
        },
        {
            title: "Access to Party Information",
            description: "Members shall have access to policies, meeting minutes, plans, and annual reports.",
            icon: FileText
        },
        {
            title: "Participation in Party Activities",
            description: "Members are encouraged to participate in all party activities, including meetings, campaigns, seminars, and community outreach programs.",
            icon: Users2
        },
        {
            title: "Right to Propose Resolutions and Amendments",
            description: "Members may propose resolutions and amendments to the party's policies, organizational structures, and constitution.",
            icon: ScrollText
        },
        {
            title: "Networking and Collaboration",
            description: "Members shall have opportunities to network with professionals and organizations, both locally and internationally, to promote the party's vision, expand influence, and foster collaborations.",
            icon: Network
        },
        {
            title: "Recognition and Rewards",
            description: "Members who demonstrate outstanding dedication, leadership, or contribution to the party's activities shall be recognized through awards, titles, or other forms of acknowledgment.",
            icon: Award
        },
        {
            title: "Access to Party Platforms",
            description: "Members shall have access to platforms for voting, sharing views and ideas, and contributing on key political, economic, and social issues.",
            icon: LayoutIcon
        }
    ];

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
                imgUrl={"null"}
            />

            <section className="py-12 bg-background">
                <div className="container px-4 mx-auto max-w-7xl">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                            <Users className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                                Membership Privileges
                            </h1>
                            <p className="text-lg text-muted-foreground mt-1">
                                Empowering Active Participation
                            </p>
                        </div>
                    </div>

                    <Separator className="my-8" />

                    <div className="grid gap-6 md:grid-cols-2">
                        {privileges.map((privilege, index) => (
                            <Card key={index} className="transition-all duration-300 hover:shadow-lg">
                                <CardContent className="pt-6">
                                    <div className="flex gap-4">
                                        <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                                            <privilege.icon className="h-5 w-5 text-primary" />
                                        </div>
                                        <div className="space-y-2">
                                            <h2 className="text-xl font-semibold tracking-tight">
                                                {`${index + 1}. ${privilege.title}`}
                                            </h2>
                                            <p className="text-muted-foreground">
                                                {privilege.description}
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    <div className="mt-12 text-center space-y-6">
                        <div className="max-w-2xl mx-auto">
                            <p className="text-lg text-muted-foreground">
                                By exercising these privileges, you are shaping the future of the party and contributing
                                to its mission.
                            </p>
                        </div>
                        <Button size="lg" className="px-8">
                            Join BPP Today
                        </Button>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default MembershipPrivilege;