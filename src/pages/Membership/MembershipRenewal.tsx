import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent,  CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';
import Layout from "@/layout/Layout";
import { ArrowRight, CircleCheck, Clock } from "lucide-react";
import { useState } from 'react';

export default function MembershipRenewal() {
    const [isYearly, setIsYearly] = useState(false);
    return (
        <Layout>
            <div className="min-h-screen bg-background">
                {/* Header Section */}
                <section className="py-16">
                    <div className="container">
                        <div className="max-w-3xl mx-auto text-center space-y-4">
                            <Badge variant="secondary" className="mb-4">Membership Renewal</Badge>
                            <h1 className="text-4xl font-bold tracking-tight">
                                Continue Your Journey with BPP
                            </h1>
                            <p className="text-lg text-muted-foreground">
                                Renew your membership today and keep making a difference in our shared vision for a better tomorrow.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="py-3">
                    <div className="container">
                        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 text-center">
                            {/* <h2 className="text-pretty text-4xl font-bold lg:text-6xl">
                                Pricing
                            </h2>
                            <p className="text-muted-foreground lg:text-xl">
                                Check out our affordable pricing plans
                            </p> */}
                            <div className="flex items-center gap-3 text-lg">
                                Monthly
                                <Switch
                                    onCheckedChange={() => setIsYearly(!isYearly)}
                                    checked={isYearly}
                                />
                                Yearly
                            </div>
                            <div className="flex flex-col items-stretch gap-6 md:flex-row">
                                <Card className="flex w-80 flex-col justify-between text-left">
                                    <CardHeader>
                                        <CardTitle>
                                            <p>Primary Membership</p>
                                        </CardTitle>
                                        <p className="text-sm text-muted-foreground">
                                            For Common People
                                        </p>
                                        <span className="text-4xl font-bold">
                                            {isYearly ? 'Rs 5' : 'Rs 50'}
                                        </span>
                                        <p className="text-muted-foreground">
                                            Billed {isYearly ? 'Rs 50' : 'Rs 100'} anually
                                        </p>
                                    </CardHeader>
                                    <CardContent>
                                        <Separator className="mb-6" />
                                        <ul className="space-y-4">
                                            <li className="flex items-center gap-2">
                                                <CircleCheck className="size-4" />
                                                <span>Lorem ipsum dolor sit.</span>
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <CircleCheck className="size-4" />
                                                <span>Lorem ipsum dolor sit.</span>
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <CircleCheck className="size-4" />
                                                <span>Lorem ipsum dolor sit.</span>
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <CircleCheck className="size-4" />
                                                <span>Lorem ipsum dolor sit.</span>
                                            </li>
                                        </ul>
                                    </CardContent>
                                    <CardFooter className="mt-auto">
                                        <Button className="w-full">
                                            Get Started
                                            <ArrowRight className="ml-2 size-4" />
                                        </Button>
                                    </CardFooter>
                                </Card>
                                <Card className="flex w-80 flex-col justify-between text-left">
                                    <CardHeader>
                                        <CardTitle>
                                            <p>Test Membership</p>
                                        </CardTitle>
                                        <p className="text-sm text-muted-foreground">
                                            For Business Community
                                        </p>
                                        <span className="text-4xl font-bold">
                                            {isYearly ? 'Rs 50' : 'Rs 100'}
                                        </span>
                                        <p className="text-muted-foreground">
                                            Billed  {isYearly ? 'Rs 50' : 'Rs 100'} anually
                                        </p>
                                    </CardHeader>
                                    <CardContent>
                                        <Separator className="mb-6" />
                                        <p className="mb-3 text-lg font-semibold">
                                            Everything in Plus, and:
                                        </p>
                                        <ul className="space-y-4">
                                            <li className="flex items-center gap-2">
                                                <CircleCheck className="size-4" />
                                                <span>Lorem ipsum dolor sit.</span>
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <CircleCheck className="size-4" />
                                                <span>Lorem ipsum dolor sit.</span>
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <CircleCheck className="size-4" />
                                                <span>Lorem ipsum dolor sit.</span>
                                            </li>
                                            <li className="flex items-center gap-2">
                                                <CircleCheck className="size-4" />
                                                <span>Lorem ipsum dolor sit.</span>
                                            </li>
                                        </ul>
                                    </CardContent>
                                    <CardFooter className="mt-auto">
                                        <Button className="w-full">
                                            Get Started
                                            <ArrowRight className="ml-2 size-4" />
                                        </Button>
                                    </CardFooter>
                                </Card>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Additional Information */}
                <section className="py-12 bg-muted/50">
                    <div className="container">
                        <div className="max-w-3xl mx-auto">
                            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
                            <Accordion type="single" collapsible className="w-full">
                                <AccordionItem value="item-1">
                                    <AccordionTrigger>When does my membership expire?</AccordionTrigger>
                                    <AccordionContent>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-2">
                                    <AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
                                    <AccordionContent>
                                        We accept all major credit cards, debit cards, and UPI payments. All transactions are secure and encrypted.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-3">
                                    <AccordionTrigger>Can I upgrade my membership later?</AccordionTrigger>
                                    <AccordionContent>
                                        Yes, you can upgrade your membership at any time. The price difference will be prorated for the remaining duration.
                                    </AccordionContent>
                                </AccordionItem>
                                <AccordionItem value="item-4">
                                    <AccordionTrigger>What happens if I miss the renewal date?</AccordionTrigger>
                                    <AccordionContent>
                                        Don't worry! We provide a 30-day grace period after your membership expires. During this time, you can renew without losing any benefits.
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>

                            <div className="mt-12 p-6 bg-background rounded-lg border">
                                <div className="flex items-start gap-4">
                                    <Clock className="h-6 w-6 text-primary mt-1" />
                                    <div>
                                        <h3 className="font-semibold mb-2">Need more time to decide?</h3>
                                        <p className="text-muted-foreground">
                                            Contact our membership support team at support@bpp.org or call us at +91 XXX XXX XXXX. We're here to help you make the best choice for your political journey.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
}
