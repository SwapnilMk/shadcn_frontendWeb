import { ContentLayout } from "@/components/admin-panel/content-layout"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { Card, CardContent } from "@/components/ui/card"
import DashboardLayout from "@/layout/DashboardLayout"
import { Link } from "react-router-dom"
import { Building2, Users, Heart, Sword, Church, Factory, BadgeDollarSign, Scale, Wheat, GraduationCap } from 'lucide-react';

const goals = [
  {
    number: "1",
    title: "NATIONAL INTEGRITY",
    description: "UNITED AND STRONG",
    icon: Building2,
    bgColor: "bg-[#E5243B]",
    iconColor: "white"
  },
  {
    number: "2",
    title: "EQUAL OPPORTUNITY",
    description: "EQUALITY FOR ALL",
    icon: Users,
    bgColor: "bg-[#DDA63A]",
    iconColor: "white"
  },
  {
    number: "3",
    title: "GOOD HEALTH AND WELL-BEING",
    description: "HEALTHIER, HAPPIER LIVES",
    icon: Heart,
    bgColor: "bg-[#4C9F38]",
    iconColor: "white"
  },
  {
    number: "4",
    title: "AGAINST MUSCLE AND MONEY POWER",
    description: "STAND FOR TRUTH AND FAIRNESS",
    icon: Sword,
    bgColor: "bg-[#C5192D]",
    iconColor: "white"
  },
  {
    number: "5",
    title: "UPHOLD SECULARISM",
    description: "FREEDOM OF ALL FAITHS AND BELIEFS",
    icon: Church,
    bgColor: "bg-[#FF3A21]",
    iconColor: "white"
  },
  {
    number: "6",
    title: "INDUSTRIAL DEVELOPMENT",
    description: "BUILD FUTURE READY CITIES",
    icon: Factory,
    bgColor: "bg-[#26BDE2]",
    iconColor: "white"
  },
  {
    number: "7",
    title: "EMPLOYMENT AND GROWTH",
    description: "CREATE JOBS FOR ALL",
    icon: BadgeDollarSign,
    bgColor: "bg-[#FCC30B]",
    iconColor: "white"
  },
  {
    number: "8",
    title: "JUSTICE AND PEACE",
    description: "PROSPEROUS SOCIETY",
    icon: Scale,
    bgColor: "bg-[#A21942]",
    iconColor: "white"
  },
  {
    number: "9",
    title: "UPLIFTMENT OF FARMERS",
    description: "EMPOWER OUR FARMERS",
    icon: Wheat,
    bgColor: "bg-[#FD6925]",
    iconColor: "white"
  },
  {
    number: "10",
    title: "QUALITY EDUCATION",
    description: "OPEN SCHOOL TO EVERY CHILD",
    icon: GraduationCap,
    bgColor: "bg-[#DD1367]",
    iconColor: "white"
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
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-6">
            {goals.map((goal) => (
              <Card
                key={goal.number}
                className={`${goal.bgColor} text-white hover:scale-105 transition-transform duration-200 cursor-pointer overflow-hidden`}
              >
                <CardContent className="p-0">
                  <div className="flex flex-col h-full">
                    {/* Header with number */}
                    <div className="flex items-center p-3">
                      <span className="text-2xl font-bold mr-2">{goal.number}</span>
                    </div>
                    
                    {/* Icon and content */}
                    <div className="p-4 flex flex-col items-center text-center">
                      <div className="mb-3">
                        <goal.icon size={40} color={goal.iconColor} />
                      </div>
                      <h3 className="text-sm font-bold mb-2 leading-tight">
                        {goal.title}
                      </h3>
                      <p className="text-xs opacity-90">
                        {goal.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </ContentLayout>
    </DashboardLayout>
  )
}

export default GoalsPage