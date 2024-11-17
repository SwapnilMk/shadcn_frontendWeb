import HeaderComponent from "@/components/HeaderComponent";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Layout from '@/layout/Layout';


export default function Join() {
    return (
        <Layout>
           <HeaderComponent heading="Join BPP Membership" text="" breadcrumbLinks={[
                { label: "Membership", href: "/" },
                { label: "Join Now", href: "/" },
            ]}
                imgUrl={"null"}
            />

            <div className="container bg-background">
                {/* Hero Section */}
                <section className="relative container py-16 overflow-hidden">
                    <div className="absolute inset-0 " />
                    <div className="container relative z-10">
                        <div className="text-center max-w-3xl mx-auto space-y-4">
                            <Badge variant="secondary" className="mb-4">JOIN NOW !</Badge>
                            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
                            Become a Member of Bharatiya Popular Party Today!
                            </h1>
                            <p className="text-lg text-muted-foreground">
                            Take the first step toward building a nation with no discrimination, equal opportunities, interdependent services, and a growing community. 
                            </p>
                        </div>
                    </div>
                </section>
                <section className="py-4">
      <div className="container">
        <div className="flex w-full flex-col gap-16 overflow-hidden rounded-lg bg-accent p-8 md:rounded-xl lg:flex-row lg:items-center lg:p-10">
          <div className="flex-1">
            <h3 className="mb-3 text-2xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
              Join Now
            </h3>
            <p className="text-muted-foreground lg:text-sm">
            By joining, you gain access to essential resources and a network that is dedicated to meeting your needs. Whether it's access to priority services, education, health, employment, business opportunities, or community-driven support, BPP membership empowers you to stay informed and connected.
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
            <Button className="bg-blue-600">Join BPP Today</Button>
          </div>
        </div>
      </div>
      <div className="text-2xl py-3 md:text-2xl font-bold tracking-tight text-center">Join Now and Start Reaping the Benefits!
      </div>
    </section>
            </div>
        </Layout>
    );
}

