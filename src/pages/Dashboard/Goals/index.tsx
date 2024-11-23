import { ContentLayout } from "@/components/admin-panel/content-layout"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { HoverEffect } from "@/components/ui/card-hover-effect"
import DashboardLayout from "@/layout/DashboardLayout"
import { Link } from "react-router-dom"


export const projects =[
    {
      title: "GOAL 1",
      heading: "NATIONAL INTEGRITY",
      description: "UNITED AND STRONG",
      link: "https://stripe.com"
    },
    {
      title: "GOAL 2",
      heading: "EQUAL OPPORTUNITY",
      description: "EQUALITY FOR ALL",
      link: "https://netflix.com"
    },
    {
      title: "GOAL 3",
      heading: "GOOD HEALTH AND WELL-BEING",
      description: "HEALTHIER, HAPPIER LIVES",
      link: "https://google.com"
    },
    {
      title: "GOAL 4",
      heading: "AGAINST MUSCLE AND MONEY POWER",
      description: "STAND FOR TRUTH AND FAIRNESS",
      link: "https://meta.com"
    },
    {
      title: "GOAL 5",
      heading: "UPHOLD SECULARISM",
      description: "FREEDOM OF ALL FAITHS AND BELIEFS",
      link: "https://amazon.com"
    },
    {
      title: "GOAL 6",
      heading: "INDUSTRIAL DEVELOPMENT AND INFRASTRUCTURE",
      description: "BUILD FUTURE AND READY CITIES",
      link: "https://microsoft.com"
    },
    {
      title: "GOAL 7",
      heading: "EMPLOYMENT AND ECONOMIC GROWTH",
      description: "CREATE JOB FOR ALL",
      link: "https://stripe.com"
    },
    {
      title: "GOAL 8",
      heading: "JUSTICE, PEACE, CALM AND PROSPERITY",
      description: "PROSPEROUS AND PEACEFUL SOCIETY",
      link: "https://netflix.com"
    },
    {
      title: "GOAL 9",
      heading: "UPLIFTMENT OF FARMERS",
      description: "EMPOWER OUR FARMERS",
      link: "https://google.com"
    },
    {
      title: "GOAL 10",
      heading: "QUALITY EDUCATION",
      description: "OPEN SCHOOL TO EVERY CHILD",
      link: "https://meta.com"
    }
  ];
  

const GoalsPage = () => {
    return (
        <DashboardLayout>
            <ContentLayout title="Dashboard">
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink asChild>
                                <Link to="/">Dashboard</Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>Goals</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
                <section>
                    <div className="mx-auto px-8">
                        <HoverEffect items={projects} />
                    </div>
                </section>
            </ContentLayout>
        </DashboardLayout>
    )
}

export default GoalsPage