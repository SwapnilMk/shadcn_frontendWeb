import { ContentLayout } from '@/components/admin-panel/content-layout'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import DashboardLayout from '@/layout/DashboardLayout'
import { Link } from 'react-router-dom'

const ProfilePage = () => {
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
                            <BreadcrumbPage>Profile</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
                <div>
                    <div className="px-4 space-y-6 md:px-6 mt-3">
                        <header className="space-y-1.5">
                            <div className="flex items-center space-x-4">
                                <Avatar>
                                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                    <AvatarFallback>SM</AvatarFallback>
                                </Avatar>
                                <div className="space-y-1.5">
                                    <h1 className="text-2xl font-bold">Swapnil Mahadik</h1>
                                    <p className="text-gray-500 dark:text-gray-400">Primary Member</p>
                                </div>
                            </div>
                        </header>
                        <div className="space-y-6">
                            <div className="space-y-2">
                                <h2 className="text-lg font-semibold">Personal Information</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <Label htmlFor="name">Name</Label>
                                        <Input id="name" placeholder="Enter your name" />
                                    </div>
                                    <div>
                                        <Label htmlFor="email">Email</Label>
                                        <Input id="email" placeholder="Enter your email" type="email" />
                                    </div>
                                    <div>
                                        <Label htmlFor="phone">Phone</Label>
                                        <Input id="phone" placeholder="Enter your phone" type="tel" />
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <h2 className="text-lg font-semibold">Change Password</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <Label htmlFor="current-password">Current Password</Label>
                                        <Input id="current-password" placeholder="Enter your current password" type="password" />
                                    </div>
                                    <div>
                                        <Label htmlFor="new-password">New Password</Label>
                                        <Input id="new-password" placeholder="Enter your new password" type="password" />
                                    </div>
                                    <div>
                                        <Label htmlFor="confirm-password">Confirm Password</Label>
                                        <Input id="confirm-password" placeholder="Confirm your new password" type="password" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8">
                            <Button size="lg">Save</Button>
                        </div>
                    </div>
                </div>
            </ContentLayout>
        </DashboardLayout>
    )
}

export default ProfilePage;