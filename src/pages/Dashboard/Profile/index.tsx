import { ContentLayout } from '@/components/admin-panel/content-layout'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { Textarea } from '@/components/ui/textarea'
import DashboardLayout from '@/layout/DashboardLayout'
import { Camera } from 'lucide-react'
import { Link } from 'react-router-dom'

const ProfilePage = () => {
    // const [profileImage, setProfileImage] = useState("https://github.com/shadcn.png");
    const profileImage = "https://github.com/shadcn.png"

    // const handleImageChange = (event: { target: { files: any[] } }) => {
    //     const file = event.target.files[0];
    //     if (file) {
    //         const reader = new FileReader();
    //         reader.onloadend = () => {
    //             setProfileImage(profileImage);
    //         };
    //         reader.readAsDataURL(file);
    //     }
    // };

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
                <div className="px-4 space-y-6 md:px-6 mt-3">
                    <header className="space-y-1.5">
                        <div className="flex items-center space-x-4">
                            <div className="relative">
                                <Avatar className="w-24 h-24">
                                    <AvatarImage src={profileImage} alt="Profile" />
                                    <AvatarFallback>SM</AvatarFallback>
                                </Avatar>
                                <label 
                                    htmlFor="profile-image-upload" 
                                    className="absolute bottom-0 right-0 bg-primary text-white rounded-full p-1 cursor-pointer"
                                >
                                    <Camera size={16} />
                                    <input 
                                        type="file" 
                                        id="profile-image-upload" 
                                        className="hidden" 
                                        accept="image/*"
                                        // onChange={handleImageChange}
                                    />
                                </label>
                            </div>
                            <div className="space-y-1.5">
                                <h1 className="text-2xl font-bold">Swapnil Mahadik</h1>
                                <p className="text-gray-500 dark:text-gray-400">Primary Member</p>
                            </div>
                        </div>
                    </header>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2">
                        {/* Existing Profile Information Card */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Profile Information</CardTitle>
                                <CardDescription>Update your account's profile information.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form className="grid gap-4">
                                    <div className="grid gap-2">
                                        <Label htmlFor="name">Name</Label>
                                        <Input id="name" defaultValue="John Doe" />
                                    </div>
                                    <div className="grid gap-2">
                                        <Label htmlFor="email">Email</Label>
                                        <Input id="email" type="email" defaultValue="john@example.com" />
                                    </div>
                                    <div className="grid gap-2">
                                        <Label htmlFor="bio">Bio</Label>
                                        <Textarea id="bio" rows={3} defaultValue="I'm a software engineer at Acme Inc." />
                                    </div>
                                </form>
                            </CardContent>
                            <CardFooter className="border-t p-6">
                                <Button>Save Changes</Button>
                            </CardFooter>
                        </Card>

                        {/* Existing Notification Settings Card */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Notification Settings</CardTitle>
                                <CardDescription>Manage your account's notification preferences.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form className="grid gap-4">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="font-medium">Email Notifications</p>
                                            <p className="text-sm text-muted-foreground">
                                                Receive email notifications for important updates.
                                            </p>
                                        </div>
                                        <Switch id="email-notifications" defaultChecked />
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="font-medium">Push Notifications</p>
                                            <p className="text-sm text-muted-foreground">
                                                Receive push notifications for real-time updates.
                                            </p>
                                        </div>
                                        <Switch id="push-notifications" />
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <p className="font-medium">SMS Notifications</p>
                                            <p className="text-sm text-muted-foreground">Receive SMS notifications for critical alerts.</p>
                                        </div>
                                        <Switch id="sms-notifications" />
                                    </div>
                                </form>
                            </CardContent>
                            <CardFooter className="border-t p-6">
                                <Button>Save Changes</Button>
                            </CardFooter>
                        </Card>

                        {/* New Address Update Card */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Address Information</CardTitle>
                                <CardDescription>Update your current residential address.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form className="grid gap-4">
                                    <div className="grid gap-2">
                                        <Label htmlFor="street-address">Street Address</Label>
                                        <Input id="street-address" placeholder="123 Main Street" />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="grid gap-2">
                                            <Label htmlFor="city">City</Label>
                                            <Input id="city" placeholder="Mumbai" />
                                        </div>
                                        <div className="grid gap-2">
                                            <Label htmlFor="state">State</Label>
                                            <Input id="state" placeholder="Maharashtra" />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="grid gap-2">
                                            <Label htmlFor="postal-code">Postal Code</Label>
                                            <Input id="postal-code" placeholder="400001" />
                                        </div>
                                        <div className="grid gap-2">
                                            <Label htmlFor="country">Country</Label>
                                            <Input id="country" placeholder="India" />
                                        </div>
                                    </div>
                                </form>
                            </CardContent>
                            <CardFooter className="border-t p-6">
                                <Button>Update Address</Button>
                            </CardFooter>
                        </Card>

                        {/* New Voter ID and Aadhar Number Update Card */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Government IDs</CardTitle>
                                <CardDescription>Update your Voter ID and Aadhar number.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form className="grid gap-4">
                                    <div className="grid gap-2">
                                        <Label htmlFor="voter-id">Voter ID Number</Label>
                                        <Input 
                                            id="voter-id" 
                                            placeholder="Enter your Voter ID" 
                                            pattern="[A-Z]{3}[0-9]{7}"
                                        />
                                    </div>
                                    <div className="grid gap-2">
                                        <Label htmlFor="aadhar-number">Aadhar Number</Label>
                                        <Input 
                                            id="aadhar-number" 
                                            placeholder="Enter your 12-digit Aadhar number" 
                                            pattern="[0-9]{12}"
                                        />
                                    </div>
                                </form>
                            </CardContent>
                            <CardFooter className="border-t p-6">
                                <Button>Update IDs</Button>
                            </CardFooter>
                        </Card>

                        {/* New Contact Update Card */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Contact Information</CardTitle>
                                <CardDescription>Update your email and phone number.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form className="grid gap-4">
                                    <div className="grid gap-2">
                                        <Label htmlFor="contact-email">Email Address</Label>
                                        <Input 
                                            id="contact-email" 
                                            type="email" 
                                            placeholder="john.doe@example.com" 
                                        />
                                    </div>
                                    <div className="grid gap-2">
                                        <Label htmlFor="phone-number">Phone Number</Label>
                                        <div className="flex items-center">
                                            <Input 
                                                id="country-code" 
                                                defaultValue="+91" 
                                                className="w-20 mr-2" 
                                            />
                                            <Input 
                                                id="phone-number" 
                                                type="tel" 
                                                placeholder="Enter your phone number" 
                                                className="flex-1" 
                                            />
                                        </div>
                                    </div>
                                </form>
                            </CardContent>
                            <CardFooter className="border-t p-6">
                                <Button>Update Contact</Button>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </ContentLayout>
        </DashboardLayout>
    )
}

export default ProfilePage;