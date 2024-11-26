import { ContentLayout } from '@/components/admin-panel/content-layout';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import DashboardLayout from '@/layout/DashboardLayout';
import { Lock } from 'lucide-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const DonationPage: React.FC = () => {
    const [donationAmount, setDonationAmount] = useState(20);
    const [coverFees, setCoverFees] = useState(true);

    const handleDonationAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDonationAmount(parseInt(e.target.value));
    };

    const totalDonation = donationAmount + (coverFees ? 0.6 : 0);

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
                    <div className="container mx-auto">
                        <div className="flex items-center justify-between mb-6">
                            <div>
                                <h1 className="text-2xl font-bold">Change begins. Donate today.</h1>
                                <p className="text-muted-foreground">Change begins. Donate today.</p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-3">
                            <Card className="w-full mx-auto">
                                <CardHeader>
                                    <CardTitle className="text-3xl font-bold">Change begins. Donate today.</CardTitle>
                                </CardHeader>
                                <CardContent className="flex items-center justify-between">
                                    <img
                                        src="https://placehold.co/800x560"
                                        className="w-[300px] md:w-[500px] lg:w-full object-contain"
                                        alt="Implementation process"
                                    />
                                </CardContent>
                            </Card>
                            <Card className="w-full mx-auto">
                                <CardHeader>
                                    <CardTitle>Change begins. Donate today.</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <Tabs defaultValue="donateOnce" className="w-full">
                                        <div className="space-y-4">
                                            <div>
                                                <TabsList className="grid w-full grid-cols-2">
                                                    <TabsTrigger value="donateOnce">Donate Once</TabsTrigger>
                                                    <TabsTrigger value="donateMonthly">Donate Monthly</TabsTrigger>
                                                </TabsList>
                                                <div className="grid grid-cols-3 my-3 gap-4">
                                                    <button
                                                        className={`px-4 py-2 rounded-md transition-colors ${donationAmount === 10 ? 'bg-gray-500 text-white' : 'hover:bg-gray-100'
                                                            }`}
                                                        onClick={() => setDonationAmount(10)}
                                                    >
                                                        Rs 10
                                                    </button>
                                                    <button
                                                        className={`px-4 py-2 rounded-md transition-colors ${donationAmount === 20 ? 'bg-gray-500 text-white' : 'hover:bg-gray-100'
                                                            }`}
                                                        onClick={() => setDonationAmount(20)}
                                                    >
                                                        Rs 20
                                                    </button>
                                                    <button
                                                        className={`px-4 py-2 rounded-md transition-colors ${donationAmount === 50 ? 'bg-gray-500 text-white' : 'hover:bg-gray-100'
                                                            }`}
                                                        onClick={() => setDonationAmount(50)}
                                                    >
                                                        Rs 50
                                                    </button>
                                                    <button
                                                        className={`px-4 py-2 rounded-md transition-colors ${donationAmount === 100 ? 'bg-gray-500 text-white' : 'hover:bg-gray-100'
                                                            }`}
                                                        onClick={() => setDonationAmount(100)}
                                                    >
                                                        Rs 100
                                                    </button>
                                                    <button
                                                        className={`px-4 py-2 rounded-md transition-colors ${donationAmount === 200 ? 'bg-gray-500 text-white' : 'hover:bg-gray-100'
                                                            }`}
                                                        onClick={() => setDonationAmount(200)}
                                                    >
                                                        Rs 200
                                                    </button>
                                                    <button
                                                        className={`px-4 py-2 rounded-md transition-colors ${donationAmount === 500 ? 'bg-gray-500 text-white' : 'hover:bg-gray-100'
                                                            }`}
                                                        onClick={() => setDonationAmount(500)}
                                                    >
                                                        Rs 500
                                                    </button>
                                                </div>
                                                <Input
                                                    type="number"
                                                    placeholder="Other amount"
                                                    value={donationAmount}
                                                    onChange={handleDonationAmountChange}
                                                    className="mt-4 w-full"
                                                />
                                            </div>
                                            <div>
                                                <div className="flex items-center space-x-2">
                                                    <Checkbox 
                                                        id="terms" 
                                                        checked={coverFees}
                                                        onCheckedChange={(checked) => setCoverFees(!!checked)}
                                                    />
                                                    <label
                                                        htmlFor="terms"
                                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                                    >
                                                        I would like to cover the transaction fees for this donation
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </Tabs>
                                </CardContent>
                                <CardFooter className="flex flex-col items-center justify-between space-y-4">
                                    <div className="w-full">
                                        <div>My grand total will be Rs {totalDonation.toFixed(2)}</div>
                                        <Button className="w-full mt-4">Next</Button>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                        <Lock className="h-4 w-4" />
                                        <span>Secure donation</span>
                                    </div>
                                </CardFooter>
                            </Card>
                        </div>
                    </div>
                </main>
            </ContentLayout>
        </DashboardLayout>
    );
};

export default DonationPage;