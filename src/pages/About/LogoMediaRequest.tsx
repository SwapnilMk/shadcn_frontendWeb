import HeaderComponent from '@/components/HeaderComponent';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Layout from '@/layout/Layout';
import { Clock, Shield } from "lucide-react";
import bppflag from '@/assets/images/headerBanners/community.png'

const LogoMediaRequest = () => {
    return (
        <Layout>
            <HeaderComponent heading="Logo & Media Request" text="" breadcrumbLinks={[
                { label: "Home", href: "/" },
                { label: "About", href: "/about" },
                { label: "Logo & Media Request", href: "/about/logo-media-request" }
            ]} imgUrl={bppflag} />
            <section className="py-8">
                <div className="container">
                    <div className="mx-auto flex max-w-5xl flex-col  gap-6">
                        <div className="my-3">
                            {/* Important Notices */}
                            <div className="grid gap-4 my-5 md:grid-cols-2">
                                <Alert variant="default" className="bg-blue-50 border-blue-200">
                                    <Clock className="h-4 w-4" />
                                    <AlertTitle>Media Request</AlertTitle>
                                    <AlertDescription>
                                        For media requests, images, details about Bharatiya Popular Party, please complete our Media Request Form. Please allow 24 to 48 hours for a response.
                                    </AlertDescription>
                                </Alert>

                                <Alert variant="default" className="bg-red-50 border-red-200">
                                    <Shield className="h-4 w-4" />
                                    <AlertTitle>Protected Content</AlertTitle>
                                    <AlertDescription>
                                        Use of all  Bharatiya Popular Party Symbols are protected, and only allowed with express written approval from  National President of Party. Thank you!
                                    </AlertDescription>
                                </Alert>
                            </div>
                            {/* Header Section */}
                            <Card className="border-none shadow-lg">
                                <CardHeader className="text-center bg-orange-100 rounded-t-lg">
                                    <CardTitle className="text-2xl md:text-3xl font-bold text-orange-800">
                                        Bharatiya Popular Party Media Request
                                    </CardTitle>
                                    <CardDescription className="text-orange-700 text-lg">
                                        Official Media Request Portal
                                    </CardDescription>
                                </CardHeader>
                            </Card>

                            {/* Main Content Card */}
                            <Card className="shadow-lg">
                                <CardHeader>
                                    <CardTitle className="text-xl">Media Request Form</CardTitle>
                                    <CardDescription>
                                        Please complete this form for any media-related inquiries or logo usage permissions.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent className="space-y-6">
                                    {/* Form Fields */}
                                    <div className="grid gap-4 md:grid-cols-2">
                                        <div className="space-y-2">
                                            <Label htmlFor="name">Full Name</Label>
                                            <Input id="name" placeholder="Enter your full name" />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="organization">Organization</Label>
                                            <Input id="organization" placeholder="Your organization name" />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="email">Email Address</Label>
                                            <Input id="email" type="email" placeholder="your@email.com" />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="phone">Phone Number</Label>
                                            <Input id="phone" placeholder="Your contact number" />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="request-type">Request Type</Label>
                                        <select id="request-type" className="w-full p-2 border rounded-md">
                                            <option value="">Select request type</option>
                                            <option value="logo">Logo Usage</option>
                                            <option value="media">Media Interview</option>
                                            <option value="press">Press Release</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="message">Request Details</Label>
                                        <Textarea
                                            id="message"
                                            placeholder="Please provide detailed information about your request..."
                                            className="min-h-[150px]"
                                        />
                                    </div>
                                </CardContent>
                                <CardFooter className="flex flex-col md:flex-row gap-4 justify-between items-center">
                                    <Button className="w-full md:w-auto bg-blue-600 hover:bg-blue-700">
                                        Submit Request
                                    </Button>
                                    <p className="text-sm text-gray-500">
                                        Please allow 24-48 hours for a response
                                    </p>
                                </CardFooter>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default LogoMediaRequest;