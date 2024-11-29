import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter
} from "@/components/ui/card";
import {
    Table,
    TableHeader,
    TableRow,
    TableHead,
    TableBody,
    TableCell
} from "@/components/ui/table";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { User, Building2, FileText, CreditCard } from "lucide-react";
import DashboardLayout from "@/layout/DashboardLayout";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator
} from "@/components/ui/breadcrumb";

interface Voter {
    name: string;
    block: string;
    votes: number;
    percentage: number;
    voterId: string;
    membershipNo: string;
    membershipType: "Active" | "Primary";
    industry: string;
    address: string;
}

interface VoterDetailsDialogProps {
    voter: Voter;
}

const VoterDetailsDialog: React.FC<VoterDetailsDialogProps> = ({ voter }) => (
    <Dialog>
        <DialogTrigger asChild>
            <Button variant="outline" size="sm">View Details</Button>
        </DialogTrigger>
        <DialogContent className="max-w-2xl">
            <DialogHeader>
                <DialogTitle>Voter Details</DialogTitle>
                <DialogDescription>
                    Comprehensive information about the voter and their contribution
                </DialogDescription>
            </DialogHeader>
            <ScrollArea className="max-h-[70vh] pr-4">
                <div className="grid gap-6">
                    {/* Personal Information */}
                    <Card>
                        <CardHeader>
                            <div className="flex items-center gap-2">
                                <User className="w-5 h-5 text-primary" />
                                <CardTitle className="text-lg">Personal Information</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent className="grid gap-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <p className="text-sm text-muted-foreground">Voter Name</p>
                                    <p className="font-medium">{voter.name}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">Voter ID</p>
                                    <p className="font-medium">{voter.voterId}</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Membership Details */}
                    <Card>
                        <CardHeader>
                            <div className="flex items-center gap-2">
                                <CreditCard className="w-5 h-5 text-primary" />
                                <CardTitle className="text-lg">Membership Information</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent className="grid gap-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <p className="text-sm text-muted-foreground">Membership No</p>
                                    <p className="font-medium">{voter.membershipNo}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">Membership Type</p>
                                    <Badge variant={voter.membershipType === "Active" ? "default" : "secondary"}>
                                        {voter.membershipType}
                                    </Badge>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Industry & Location */}
                    <Card>
                        <CardHeader>
                            <div className="flex items-center gap-2">
                                <Building2 className="w-5 h-5 text-primary" />
                                <CardTitle className="text-lg">Industry & Location</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent className="grid gap-4">
                            <div>
                                <p className="text-sm text-muted-foreground">Industry Focus</p>
                                <p className="font-medium">{voter.industry}</p>
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground">Block Name</p>
                                <p className="font-medium">{voter.block}</p>
                            </div>
                            <div>
                                <p className="text-sm text-muted-foreground">Address</p>
                                <p className="font-medium">{voter.address}</p>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Voting Statistics */}
                    <Card>
                        <CardHeader>
                            <div className="flex items-center gap-2">
                                <FileText className="w-5 h-5 text-primary" />
                                <CardTitle className="text-lg">Voting Statistics</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent className="grid gap-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <p className="text-sm text-muted-foreground">Total Votes Received</p>
                                    <p className="font-medium">{voter.votes.toLocaleString()}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">Vote Percentage</p>
                                    <p className="font-medium">{voter.percentage}%</p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </ScrollArea>
        </DialogContent>
    </Dialog>
);

const Voting: React.FC = () => {
    const votersData: Voter[] = [
        {
            name: "Swapnil M",
            block: "Panvel",
            votes: 5678,
            percentage: 46,
            voterId: "VOT78945612",
            membershipNo: "MEM123456",
            membershipType: "Active",
            industry: "Information Technology",
            address: "123 Tech Park, Sector 5, Panvel, Maharashtra 410206",
        },
        {
            name: "Test Name",
            block: "Belapur",
            votes: 6789,
            percentage: 54,
            voterId: "VOT45612378",
            membershipNo: "MEM789012",
            membershipType: "Primary",
            industry: "Manufacturing",
            address: "456 Industrial Estate, Sector 3, Belapur, Maharashtra 410210",
        },
        // ... other voters data
    ];

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
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbLink>
                                <Link to="/dashboard/voting">Votes</Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
                <main className="flex-1 p-4 md:p-6">
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        <Card>
                            <CardHeader>
                                <CardTitle>Total Votes</CardTitle>
                                <CardDescription>The total number of votes cast</CardDescription>
                            </CardHeader>
                            <CardContent className="flex items-center justify-center">
                                <div className="text-4xl font-bold">12,345</div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Active Polls</CardTitle>
                                <CardDescription>The number of currently active polls</CardDescription>
                            </CardHeader>
                            <CardContent className="flex items-center justify-center">
                                <div className="text-4xl font-bold">27</div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Voter Turnout</CardTitle>
                                <CardDescription>The percentage of eligible voters</CardDescription>
                            </CardHeader>
                            <CardContent className="flex items-center justify-center">
                                <div className="text-4xl font-bold">78%</div>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="mt-6">
                        <div className="flex items-center justify-between">
                            <h2 className="text-lg font-bold">Active Polls</h2>
                            <Button size="sm">Create Poll</Button>
                        </div>
                        <div className="mt-4 grid gap-4">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Voter Information</CardTitle>
                                    <CardDescription>Details of all active voters</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ScrollArea className="max-h-[400px]">
                                        <Table>
                                            <TableHeader>
                                                <TableRow>
                                                    <TableHead>Name</TableHead>
                                                    <TableHead>Block</TableHead>
                                                    <TableHead>Votes</TableHead>
                                                    <TableHead>Vote %</TableHead>
                                                    <TableHead>Details</TableHead>
                                                </TableRow>
                                            </TableHeader>
                                            <TableBody>
                                                {votersData.map((voter, idx) => (
                                                    <TableRow key={idx}>
                                                        <TableCell>{voter.name}</TableCell>
                                                        <TableCell>{voter.block}</TableCell>
                                                        <TableCell>{voter.votes.toLocaleString()}</TableCell>
                                                        <TableCell>{voter.percentage}%</TableCell>
                                                        <TableCell>
                                                            <VoterDetailsDialog voter={voter} />
                                                        </TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </ScrollArea>
                                </CardContent>
                                <CardFooter>
                                    <div className="text-muted-foreground">Total Voters: {votersData.length}</div>
                                </CardFooter>
                            </Card>
                        </div>
                    </div>
                </main>
            </ContentLayout>
        </DashboardLayout>
    );
};

export default Voting;
