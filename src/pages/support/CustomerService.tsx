import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Layout from "@/layout/Layout";
import { Mail, Phone, MessageSquare, HelpCircle } from "lucide-react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";

export default function CustomerService() {
    return (
        <Layout>
            {/* Hero Section with Search */}
            <section className="py-8 container">
                <div className="container px-4">
                    <div className="text-center space-y-4 max-w-3xl mx-auto ">
                        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                            How can we help you?
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Search our knowledge base or get in touch with our support team for assistance
                        </p>
                    </div>
                    {/* <div className="max-w-2xl mx-auto relative">
                        <div className="relative flex items-center">
                            <Search className="absolute left-3 h-5 w-5 text-muted-foreground" />
                            <Input
                                type="search"
                                placeholder="Search for answers..."
                                className="pl-10 pr-20 py-6 text-lg w-full"
                            />
                            <Button className="absolute right-1 px-6" size="lg">
                                Search
                            </Button>
                        </div>
                    </div> */}
                </div>
            </section>

            {/* Quick Contact Cards */}
            <section className="py-12 container px-4">
                <div className="grid md:grid-cols-3 gap-6">
                    <Card className="hover:border-primary transition-colors">
                        <CardContent className="p-6 text-center space-y-4">
                            <Phone className="h-8 w-8 mx-auto text-primary" />
                            <h3 className="font-semibold text-lg">Call Us</h3>
                            <p className="text-muted-foreground">Available Mon-Fri, 9am-6pm</p>
                            <Button variant="outline" className="w-full">
                                +91 XXX XXX XXXX
                            </Button>
                        </CardContent>
                    </Card>
                    <Card className="hover:border-primary transition-colors">
                        <CardContent className="p-6 text-center space-y-4">
                            <Mail className="h-8 w-8 mx-auto text-primary" />
                            <h3 className="font-semibold text-lg">Email Support</h3>
                            <p className="text-muted-foreground">Get response within 24 hours</p>
                            <Button variant="outline" className="w-full">
                                bppheadoffice@gmail.com
                            </Button>
                        </CardContent>
                    </Card>
                    <Card className="hover:border-primary transition-colors">
                        <CardContent className="p-6 text-center space-y-4">
                            <MessageSquare className="h-8 w-8 mx-auto text-primary" />
                            <h3 className="font-semibold text-lg">Live Chat</h3>
                            <p className="text-muted-foreground">Chat with our support team</p>
                            <Button variant="outline" className="w-full">
                                Start Chat
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-12 bg-muted/50">
                <div className="container px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
                        <p className="text-muted-foreground mt-2">Find quick answers to common questions</p>
                    </div>
                    <div className="max-w-3xl mx-auto">
                        <Accordion type="single" collapsible className="w-full space-y-4">
                            <AccordionItem value="item-1" className="bg-background rounded-lg border">
                                <AccordionTrigger className="px-4 hover:no-underline">
                                    <span>How do I deploy my app to the web?</span>
                                </AccordionTrigger>
                                <AccordionContent className="px-4 pb-4">
                                    To deploy your app to the web, sign in to your Vercel account, import your project,
                                    and push your code to the associated Git repository. Your app will be automatically
                                    deployed with the default configuration.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-2" className="bg-background rounded-lg border">
                                <AccordionTrigger className="px-4 hover:no-underline">
                                    <span>How do I add a custom domain to my project?</span>
                                </AccordionTrigger>
                                <AccordionContent className="px-4 pb-4">
                                    You can add a custom domain to your project by accessing the Domains section in your
                                    project settings on the Vercel platform. Add your domain, verify ownership, and
                                    configure the desired settings such as SSL and redirects.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="item-3" className="bg-background rounded-lg border">
                                <AccordionTrigger className="px-4 hover:no-underline">
                                    <span>How do I set up environment variables for my app?</span>
                                </AccordionTrigger>
                                <AccordionContent className="px-4 pb-4">
                                    You can set up environment variables for your app by defining them in your project
                                    settings on the Vercel platform. These variables will be securely injected into your
                                    app at build time, allowing you to manage sensitive configuration across different environments.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section className="py-16 container px-4">
                <div className="max-w-2xl mx-auto">
                    <div className="text-center mb-12">
                        <HelpCircle className="h-12 w-12 mx-auto text-primary mb-4" />
                        <h2 className="text-3xl font-bold">Still Need Help?</h2>
                        <p className="text-muted-foreground mt-2">
                            Fill out the form below and we'll get back to you as soon as possible
                        </p>
                    </div>
                    <Card>
                        <CardContent className="p-6">
                            <form className="space-y-6">
                                <div className="grid sm:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="name">Name</Label>
                                        <Input id="name" required placeholder="Enter your name" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email</Label>
                                        <Input id="email" type="email" required placeholder="Enter your email" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="subject">Subject</Label>
                                    <Input id="subject" required placeholder="Enter the subject of your question" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="message">Message</Label>
                                    <Textarea
                                        id="message"
                                        required
                                        placeholder="Enter your question or issue"
                                        className="min-h-[150px]"
                                    />
                                </div>
                                <Button type="submit" className="w-full" size="lg">
                                    Send Message
                                </Button>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </section>
        </Layout>
    );
}