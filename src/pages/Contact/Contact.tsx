'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import Layout from "../../layout/Layout"


// Schema for contact form validation
const formSchema = z.object({
    name: z
        .string()
        .min(2, { message: 'Name must be at least 2 characters long' }),
    email: z.string().email({ message: 'Invalid email address' }),
    message: z
        .string()
        .min(10, { message: 'Message must be at least 10 characters long' }),
})


const Contact = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            email: '',
            message: '',
        },
    })

    async function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            // Simulate a successful contact form submission
            console.log(values)
            toast.success('Your message has been sent successfully!')
        } catch (error) {
            console.error('Error submitting contact form', error)
            toast.error('Failed to send your message. Please try again.')
        }
    }

    return (
        <Layout>
            <section className="py-14">
                <div className="container">
                    <div className="mx-auto flex max-w-screen-xl flex-col justify-between gap-10 lg:flex-row lg:gap-20">
                        <div className="mx-auto flex max-w-sm flex-col justify-between gap-10">
                            <div className="text-center lg:text-left">
                                <h1 className="mb-2 text-5xl font-semibold lg:mb-1 lg:text-6xl">
                                    Contact Us
                                </h1>
                                <p className="text-muted-foreground">
                                    We are available for questions, feedback, or collaboration
                                    opportunities. Let us know how we can help!
                                </p>
                            </div>
                            <div className="mx-auto w-fit lg:mx-0">
                                <h3 className="mb-6 text-center text-2xl font-semibold lg:text-left">
                                    Contact Details
                                </h3>
                                <ul className="ml-4 list-disc">
                                    <li>
                                        <span className="font-bold">Phone: </span>
                                        (91) 9xxxxxxxx
                                    </li>
                                    <li>
                                        <span className="font-bold">Email: </span>
                                        <a href="" className="underline">
                                            bpp.headoffice@gmail.com
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="mx-auto flex max-w-screen-md flex-col gap-6 rounded-lg">
                            <Card className="mx-auto max-w-3xl">
                                <CardHeader>
                                    <CardTitle className="text-2xl">Contact Us</CardTitle>
                                    <CardDescription>
                                        Please fill out the form below and we will get back to you shortly.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <Form {...form}>
                                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                                            <div className="grid gap-4">
                                                {/* Name Field */}
                                                <FormField
                                                    control={form.control}
                                                    name="name"
                                                    render={({ field }) => (
                                                        <FormItem className="grid gap-2">
                                                            <FormLabel htmlFor="name">Name</FormLabel>
                                                            <FormControl>
                                                                <Input
                                                                    id="name"
                                                                    placeholder="John Doe"
                                                                    type="text"
                                                                    autoComplete="name"
                                                                    {...field}
                                                                />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />

                                                {/* Email Field */}
                                                <FormField
                                                    control={form.control}
                                                    name="email"
                                                    render={({ field }) => (
                                                        <FormItem className="grid gap-2">
                                                            <FormLabel htmlFor="email">Email</FormLabel>
                                                            <FormControl>
                                                                <Input
                                                                    id="email"
                                                                    placeholder="johndoe@mail.com"
                                                                    type="email"
                                                                    autoComplete="email"
                                                                    {...field}
                                                                />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />

                                                {/* Message Field */}
                                                <FormField
                                                    control={form.control}
                                                    name="message"
                                                    render={({ field }) => (
                                                        <FormItem className="grid gap-2">
                                                            <FormLabel htmlFor="message">Message</FormLabel>
                                                            <FormControl>
                                                                <Textarea
                                                                    id="message"
                                                                    placeholder="Your message..."
                                                                    autoComplete="off"
                                                                    {...field}
                                                                />
                                                            </FormControl>
                                                            <FormMessage />
                                                        </FormItem>
                                                    )}
                                                />

                                                <Button type="submit" className="w-full">
                                                    Send Message
                                                </Button>
                                            </div>
                                        </form>
                                    </Form>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Contact;
