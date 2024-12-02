import { ContentLayout } from "@/components/admin-panel/content-layout";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import DashboardLayout from "@/layout/DashboardLayout";
import { QrCode } from "lucide-react";
import { Link } from "react-router-dom";
import bppcard from '@/assets/images/BPPcard.png'

const MembershipCertificate = () => {
    const certificateUrl = bppcard;
    const certificatePreviewUrl = bppcard;

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
                            <BreadcrumbPage>Membership Certificate</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
                <section>
                    <div className="flex items-center justify-between mb-6">
                        <div className="my-4">
                            <h1 className="text-2xl font-bold">Membership Certificate</h1>
                            <p className="text-muted-foreground">View your membership certificate</p>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6">
                        <Card className="w-full">
                            <CardHeader>
                                <CardTitle>Scan QR Code</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-col items-center justify-center space-y-4">
                                    <QrCode className="h-24 w-24" />
                                    <p>Scan the QR code to access your membership certificate.</p>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="w-full">
                            <CardHeader>
                                <CardTitle>Certificate Preview</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-col items-center justify-center space-y-4">
                                    <Dialog>
                                        <DialogTrigger asChild>
                                            <img
                                                src={certificatePreviewUrl}
                                                alt="Certificate Preview"
                                                className="w-full h-[300px] object-contain rounded-md blur-sm hover:blur-none cursor-pointer transition-all"
                                            />
                                        </DialogTrigger>
                                        <DialogContent className="sm:max-w-[600px]">
                                            <DialogHeader>
                                                <DialogTitle>Your Membership Certificate</DialogTitle>
                                                <DialogDescription>
                                                    <img
                                                        src={certificatePreviewUrl}
                                                        alt="Certificate Preview"
                                                        className="w-full h-[400px] object-contain rounded-md"
                                                    />
                                                </DialogDescription>
                                            </DialogHeader>
                                            <div className="flex justify-end space-x-2">
                                                <Button variant="secondary">
                                                    <a href={certificateUrl} target="_blank" rel="noopener noreferrer">
                                                        Download
                                                    </a>
                                                </Button>
                                                <Button variant="destructive">Close</Button>
                                            </div>
                                        </DialogContent>
                                    </Dialog>
                                    <p>Click the image to preview your certificate.</p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </section>
            </ContentLayout>
        </DashboardLayout>
    );
};

export default MembershipCertificate;