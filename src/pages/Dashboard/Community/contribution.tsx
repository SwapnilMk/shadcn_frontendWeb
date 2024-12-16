import { ContentLayout } from "@/components/admin-panel/content-layout"
import MarqueNews from "@/components/features/MarqueNews"
// import PayDialog from "@/components/dialogs/PayDialog"
import MapChart from "@/components/maps/mapChart"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import DashboardLayout from "@/layout/DashboardLayout"
import { ActivityIcon, PlusIcon, User2Icon, UsersIcon } from "lucide-react"
import { Link, useNavigate } from "react-router-dom"

const Contribution = () => {
    return (
        <DashboardLayout>
            <ContentLayout title="Dashboard">
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink asChild>
                                <Link to="/">Home</Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>Dashboard</BreadcrumbPage>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink>
                                <Link to="/dashboard/community-contribution">Community Contribution</Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
                <div>
                    <MarqueNews />
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 my-3 gap-4 w-full">
                    <Card className="w-full h-[500px] p-4">

                        <CardContent className="h-[calc(500px-4rem)]">
                            <MapChart SelectedTab='state' state='maharashtra' dist='raigarh' />
                        </CardContent>
                    </Card>
                    <Card className="h-full overflow-hidden">
                        <CardHeader>
                            <CardTitle className="text-xl font-semibold">Community Contribution</CardTitle>
                        </CardHeader>
                        <CardContent className="p-5 h-[calc(100%-4rem)] overflow-auto">
                            <CommunityContribution />
                        </CardContent>
                    </Card>
                </div>
                <div className="grid grid-cols-2 my-3 gap-4 w-full">
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-2xl font-bold">Maharashtra</CardTitle>
                        </CardHeader>
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 lg:grid-cols-2 p-5">
                            {/* Total Members */}
                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between pb-2">
                                    <CardTitle className="text-sm font-medium">Total Members</CardTitle>
                                    <UsersIcon className="h-6 w-6 text-muted-foreground" /> {/* Icon for Total Members */}
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold">5329</div>
                                    <p className="text-xs text-muted-foreground">+20.1% from last month</p>
                                </CardContent>
                            </Card>

                            {/* Active Members */}
                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between pb-2">
                                    <CardTitle className="text-sm font-medium">Primary Members</CardTitle>
                                    <ActivityIcon className="h-6 w-6 text-muted-foreground" /> {/* Icon for Active Members */}
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold">+2350</div>
                                    <p className="text-xs text-muted-foreground">+180.1% from last month</p>
                                </CardContent>
                            </Card>

                            {/* New Members This Month */}
                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between pb-2">
                                    <CardTitle className="text-sm font-medium">New Members This Month</CardTitle>
                                    <PlusIcon className="h-6 w-6 text-muted-foreground" /> {/* Icon for New Members */}
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold">+12,234</div>
                                    <p className="text-xs text-muted-foreground">+19% from last month</p>
                                </CardContent>
                            </Card>

                            {/* Active Now */}
                            <Card>
                                <CardHeader className="flex flex-row items-center justify-between pb-2">
                                    <CardTitle className="text-sm font-medium">Active Now</CardTitle>
                                    <User2Icon className="h-6 w-6 text-muted-foreground" /> {/* Icon for Active Now */}
                                </CardHeader>
                                <CardContent>
                                    <div className="text-2xl font-bold">+573</div>
                                    <p className="text-xs text-muted-foreground">+201 since last hour</p>
                                </CardContent>
                            </Card>
                        </div>
                    </Card>
                    <div>
                    </div>
                </div>
            </ContentLayout>
            {/* <PayDialog /> */}
        </DashboardLayout>
    )
}

export default Contribution;




const CommunityContribution = () => {
    const navigate = useNavigate()
    const steps = [
        "Raise Your Query",
        "Review & Approval",
        "Votes",
        "Results",
        "Executions"
    ];

    const currentStep = 0;

    return (
        <div className="space-y-4">
            {/* Stepper */}
            <div className="relative space-y-4">
                {/* Progress Bar */}
                <div className="relative h-3 bg-gray-200 rounded-full">
                    <div
                        className="absolute h-full bg-primary rounded-full transition-all"
                        style={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
                    ></div>
                    {/* Overlay Numbers */}
                    <div className="absolute inset-0 flex justify-between">
                        {steps.map((step, index) => (
                            <div
                                key={step}
                                className="relative flex items-center justify-center w-8 h-8 bg-white rounded-full shadow-lg"
                                style={{
                                    left: '30px',
                                    transform: "translateY(-30%) translateX(-90%)",
                                }}
                            >
                                <div
                                    className={`w-full h-full flex items-center justify-center rounded-full font-medium ${index <= currentStep
                                        ? "bg-primary text-white"
                                        : "bg-gray-300 text-gray-600"
                                        }`}
                                >
                                    {index + 1}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Step Labels */}
                <div className="flex justify-between">
                    {steps.map((step) => (
                        <span key={step} className="text-sm font-medium max-w-[100px]">
                            {step}
                        </span>
                    ))}
                </div>
            </div>

            <div className="mt-6 p-4 bg-gray-100 rounded-lg shadow-md">
                <h3 className="text-lg font-bold text-gray-800">
                    Community Contribution Launch Announcement
                </h3>
                <p className="text-sm text-gray-700 mt-2">
                    Community Contribution is designed to help members share their support and expertise with each other.
                </p>
                <p className="text-sm text-gray-700 mt-2">
                    The Community Contribution App Services will be operational on  <strong>01.01.2026</strong>, allowing a large number of citizens to join the party in this one year and to become part of the movement.
                </p>
                <p className="text-sm text-gray-700 mt-2">
                    By joining, you will gain access to social, legal, and health services. The app will start accepting the payments also soon.
                </p>
            </div>

            {/* Action Button */}
            <Button
                className="w-full mt-4"
                disabled
                onClick={() => {
                    navigate('/dashboard/register-case')
                }}
            >
                Get Started
            </Button>
        </div>
    );
};