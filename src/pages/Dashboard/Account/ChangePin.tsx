import { ContentLayout } from '@/components/admin-panel/content-layout'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import DashboardLayout from '@/layout/DashboardLayout'
import { Link } from 'react-router-dom'

const ChangePin = () => {
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
                                <Link to="/dashboard/donate">Donate</Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage>Make Donation</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
                <main className="flex-1 py-6 px-4 md:px-6 lg:py-8">
                    <div className="flex items-center justify-between mb-6">
                        <div>
                            <h1 className="text-2xl font-bold">Change Pin</h1>
                            <p className="text-muted-foreground">change your pin </p>
                        </div>
                    </div>
                    <section>
                        <div className="grid md:grid-cols-2 gap-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Change Pin</CardTitle>
                                </CardHeader>
                                <CardContent className="grid gap-4">
                                    <div>
                                        <Label htmlFor="current-pin">Current Pin</Label>
                                        <Input id="current-pin" placeholder="Enter your current pin" type="pin" />
                                    </div>
                                    <div>
                                        <Label htmlFor="new-pin">New Pin</Label>
                                        <Input id="new-pin" placeholder="Enter your new pin" type="pin" />
                                    </div>
                                    <div>
                                        <Label htmlFor="confirm-pin">Confirm Pin</Label>
                                        <Input id="confirm-pin" placeholder="Confirm your new pin" type="pin" />
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <Button className="ml-auto">Save Changes</Button>
                                </CardFooter>
                            </Card>
                        </div>
                    </section>
                </main>
            </ContentLayout>
        </DashboardLayout>
    )
}

export default ChangePin