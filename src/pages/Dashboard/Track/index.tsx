import { ContentLayout } from '@/components/admin-panel/content-layout'
import { Badge } from "@/components/ui/badge"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from '@/components/ui/input'
import DashboardLayout from '@/layout/DashboardLayout'
import { Link, PlusIcon } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const Track = () => {
    const navigate = useNavigate()
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
                            <BreadcrumbLink asChild>
                                <Link to="/dashboard/track">Track</Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
                <div className="max-w-2xl mx-auto p-6 sm:p-8 md:p-10">
                    <div className="flex flex-col items-center justify-center space-y-6">
                        <div className="space-y-2 text-center">
                            <h1 className="text-3xl font-bold">Track Your Voting</h1>
                            <p className="text-muted-foreground">
                                Enter your Ticket number to see the current status of your Vote.
                            </p>
                        </div>
                        <div className="w-full max-w-md space-y-4">
                            <form className="flex gap-2">
                                <Input type="text" placeholder="Enter Ticket number" className="flex-1" />
                                <Button onClick={() => navigate('/dashboard/track-details')}>Track</Button>
                            </form>
                        </div>
                    </div>
                </div>
                <main className="flex-1  bg-muted/40">
                    <div className="p-6">
                        <div className="grid gap-6">
                            <div className="grid gap-4">
                                <div className="flex items-center justify-between">
                                    <h2 className="text-2xl font-bold">Your Votes</h2>
                                    <Button size="sm" variant="outline">
                                        <PlusIcon className="w-4 h-4 mr-2" />
                                        New Voting
                                    </Button>
                                </div>
                                <div className="grid gap-4">
                                    <Card>
                                        <CardHeader className="flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <div className="bg-primary rounded-full w-8 h-8 flex items-center justify-center text-primary-foreground font-semibold">
                                                    #
                                                </div>
                                                <div>
                                                    <div className="font-semibold">Ticket #12345</div>
                                                    <div className="text-sm text-muted-foreground">Voted on June 15, 2023</div>
                                                </div>
                                            </div>
                                            <Badge variant="secondary" className="text-xs">
                                                Processing
                                            </Badge>
                                        </CardHeader>
                                        <CardContent className="grid grid-cols-[1fr_auto] gap-4">
                                            <div className="grid gap-1">
                                                <div className="text-sm text-muted-foreground">Estimated</div>
                                                <div>June 20, 2023</div>
                                            </div>
                                            <div className="text-right">
                                                <div className="text-sm text-muted-foreground">Total Amount</div>
                                                <div className="font-semibold">Rs 1</div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                    <Card>
                                        <CardHeader className="flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <div className="bg-primary rounded-full w-8 h-8 flex items-center justify-center text-primary-foreground font-semibold">
                                                    #
                                                </div>
                                                <div>
                                                    <div className="font-semibold">Ticket #54321</div>
                                                    <div className="text-sm text-muted-foreground">Vote on May 30, 2023</div>
                                                </div>
                                            </div>
                                            <Badge variant="outline" className="text-xs">
                                                Approved
                                            </Badge>
                                        </CardHeader>
                                        <CardContent className="grid grid-cols-[1fr_auto] gap-4">
                                            <div className="grid gap-1">
                                                <div className="text-sm text-muted-foreground">Estimated</div>
                                                <div>June 5, 2023</div>
                                            </div>
                                            <div className="text-right">
                                                <div className="text-sm text-muted-foreground">Total Amount</div>
                                                <div className="font-semibold">Rs 1</div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                    <Card>
                                        <CardHeader className="flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <div className="bg-primary rounded-full w-8 h-8 flex items-center justify-center text-primary-foreground font-semibold">
                                                    #
                                                </div>
                                                <div>
                                                    <div className="font-semibold">Ticket #67890</div>
                                                    <div className="text-sm text-muted-foreground">Placed on April 20, 2023</div>
                                                </div>
                                            </div>
                                            <Badge variant="secondary" className="text-xs">
                                                Pending
                                            </Badge>
                                        </CardHeader>
                                        <CardContent className="grid grid-cols-[1fr_auto] gap-4">
                                            <div className="grid gap-1">
                                                <div className="text-sm text-muted-foreground">Approved on</div>
                                                <div>April 25, 2023</div>
                                            </div>
                                            <div className="text-right">
                                                <div className="text-sm text-muted-foreground">Total Amount</div>
                                                <div className="font-semibold">Rs 1</div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </ContentLayout>
        </DashboardLayout>
    )
}

export default Track