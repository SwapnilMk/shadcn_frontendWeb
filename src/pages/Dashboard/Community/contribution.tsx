import { ContentLayout } from "@/components/admin-panel/content-layout"
import PayDialog from "@/components/dialogs/PayDialog"
import MapChart from "@/components/maps/mapChart"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import DashboardLayout from "@/layout/DashboardLayout"
import { CalendarIcon } from "lucide-react"
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
            </ContentLayout>
            <PayDialog />
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

            {/* Services Launch Alert */}
            <Alert variant="destructive" className="mt-6">
                <CalendarIcon className="h-5 w-5 text-red-500" />
                <AlertDescription className="text-red-600 font-semibold">
                    All services will start after December 25th
                </AlertDescription>
            </Alert>

            {/* Action Button */}
            <Button
                className="w-full mt-4"
                onClick={() => {
                    navigate('/dashboard/register-case')
                }}
            >
                Get Started
            </Button>
        </div>
    );
};