import { ContentLayout } from "@/components/admin-panel/content-layout";
import { Badge } from "@/components/ui/badge";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import DashboardLayout from "@/layout/DashboardLayout";
import React from 'react';
import { Link, useNavigate } from "react-router-dom";


const DonatePage = () => {
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
                            <BreadcrumbPage>Donate</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
                <main className="flex-1 bg-muted/40 py-8 px-4 md:px-6 lg:py-12">
                    <div className="container mx-auto ">
                        <div className="flex items-center justify-between mb-8">
                            <div>
                                <h1 className="text-2xl font-bold">Donor Dashboard</h1>
                                <p className="text-muted-foreground">View your donation history and manage your account.</p>
                            </div>
                            <Button variant="outline" onClick={() => navigate('/dashboard/add-donation')}>
                                <PlusIcon className="w-4 h-4 mr-2" />
                                Make a Donation
                            </Button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Total Donations</CardTitle>
                                </CardHeader>
                                <CardContent className="flex items-center justify-between">
                                    <div className="text-4xl font-bold">Rs 5,329</div>
                                    <div className="flex items-center gap-1 text-muted-foreground">
                                        <ArrowUpIcon className="w-4 h-4 text-green-500" />
                                        <span>+10%</span>
                                    </div>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle>Recurring Donations</CardTitle>
                                </CardHeader>
                                <CardContent className="flex items-center justify-between">
                                    <div className="text-4xl font-bold">Rs 1,200</div>
                                    <div className="flex items-center gap-1 text-muted-foreground">
                                        <ArrowUpIcon className="w-4 h-4 text-green-500" />
                                        <span>+5%</span>
                                    </div>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle>One-Time Donations</CardTitle>
                                </CardHeader>
                                <CardContent className="flex items-center justify-between">
                                    <div className="text-4xl font-bold">Rs 4,129</div>
                                    <div className="flex items-center gap-1 text-muted-foreground">
                                        <ArrowUpIcon className="w-4 h-4 text-green-500" />
                                        <span>+12%</span>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                        <div className="mt-8">
                            <h2 className="text-xl font-bold mb-4">Donation History</h2>
                            <Card>
                                <CardContent>
                                    <Table>
                                        <TableHeader>
                                            <TableRow>
                                                <TableHead>Date</TableHead>
                                                <TableHead>Amount</TableHead>
                                                <TableHead>Type</TableHead>
                                                <TableHead>Status</TableHead>
                                            </TableRow>
                                        </TableHeader>
                                        <TableBody>
                                            <TableRow>
                                                <TableCell>2023-06-15</TableCell>
                                                <TableCell>Rs 100</TableCell>
                                                <TableCell>One-Time</TableCell>
                                                <TableCell>
                                                    <Badge variant="secondary">Completed</Badge>
                                                </TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>2023-05-01</TableCell>
                                                <TableCell>Rs 50</TableCell>
                                                <TableCell>Recurring</TableCell>
                                                <TableCell>
                                                    <Badge variant="secondary">Completed</Badge>
                                                </TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>2023-04-01</TableCell>
                                                <TableCell>Rs 50</TableCell>
                                                <TableCell>Recurring</TableCell>
                                                <TableCell>
                                                    <Badge variant="secondary">Completed</Badge>
                                                </TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>2023-03-15</TableCell>
                                                <TableCell>Rs 75</TableCell>
                                                <TableCell>One-Time</TableCell>
                                                <TableCell>
                                                    <Badge variant="secondary">Completed</Badge>
                                                </TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell>2023-02-01</TableCell>
                                                <TableCell>Rs 50</TableCell>
                                                <TableCell>Recurring</TableCell>
                                                <TableCell>
                                                    <Badge variant="secondary">Completed</Badge>
                                                </TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </main>
            </ContentLayout>
        </DashboardLayout>
    )
}

export default DonatePage;




function ArrowUpIcon(props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m5 12 7-7 7 7" />
            <path d="M12 19V5" />
        </svg>
    )
}


function PlusIcon(props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M5 12h14" />
            <path d="M12 5v14" />
        </svg>
    )
}