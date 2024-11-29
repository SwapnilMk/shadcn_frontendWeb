import HeaderComponent from '@/components/HeaderComponent';
import { Separator } from '@/components/ui/separator';
import Layout from '@/layout/Layout';
import commitment from '@/assets/images/headerBanners/commitment.png'
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Check } from 'lucide-react';

const CommitmentToProgress = () => {
    const commitmentPoints = [
        {
            title: "Industrial Development & Employment",
            description: "The BPP supports industrial development, employment opportunities, and business promotion."
        },
        {
            title: "Secularism, Democracy, and Socialism",
            description: "It upholds principles of secularism, democracy, and socialism, avoiding practices that harm societal harmony."
        },
        {
            title: "Non-violence & Peaceful Campaigns",
            description: "Disciplinary rules emphasize non-violence, promoting peaceful campaigns and democratic forms of protests."
        },
        {
            title: "Improving Healthcare Accessibility",
            description: "Works towards improving healthcare accessibility to the public, ensuring the health sector adopts sustainable practices."
        },
        {
            title: "Citizen Rights & Responsibilities",
            description: "Develop programs to educate citizens about their rights and responsibilities and encourage active participation in democratic processes."
        },
        {
            title: "Transparency & Ethical Governance",
            description: "Focus on promoting transparency, accountability, and ethical governance, ensuring that citizens are informed and empowered to participate in decision-making processes at all levels of government."
        }
    ];

    return (
        <Layout>
            <HeaderComponent heading="Commitment to Progress" text="Commitment to Progress" breadcrumbLinks={[
                { label: "Home", href: "/" },
                { label: "Commitment to Progress", href: "/about/commitment-progress" }
            ]}
                imgUrl={commitment}
            />
            <section className="w-full py-12 bg-background">
                <div className="container px-4 mx-auto">
                    <div className="space-y-4">
                        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-foreground">
                            Commitment to Progress
                        </h1>
                        <p className="text-lg text-muted-foreground">
                            Our dedication to fostering positive change and sustainable development
                        </p>
                    </div>

                    <Separator className="my-8" />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {commitmentPoints.map((point, index) => (
                            <Card key={index} className="transition-all duration-300 hover:shadow-lg">
                                <CardHeader className="flex flex-row items-center gap-4">
                                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                                        <Check className="h-4 w-4 text-primary" />
                                    </div>
                                    <h2 className="text-xl font-semibold tracking-tight">
                                        {point.title}
                                    </h2>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">
                                        {point.description}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default CommitmentToProgress;
