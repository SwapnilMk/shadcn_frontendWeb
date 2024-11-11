import bpplogo from '@/assets/images/logos/Bpp.png';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardHeader
} from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox'; 
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { IconBrandApple, IconBrandGoogle } from '@tabler/icons-react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';
import { z } from 'zod';

// Update form schema to include terms agreement
const formSchema = z.object({
    email: z.string().email({ message: 'Invalid email address' }),
    password: z
        .string()
        .min(6, { message: 'Password must be at least 6 characters long' })
        .regex(/[a-zA-Z0-9]/, { message: 'Password must be alphanumeric' }),
    terms: z.boolean().refine((val) => val === true, { // Validation for terms
        message: 'You must accept the terms and conditions',
    }),
});

const Signupff = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: '',
            password: '',
            terms: false, // default for terms checkbox
        },
    });

    const handleSend = () => {
        alert("Error while getting chapcha")
    }

    async function onSubmit(values: z.infer<typeof formSchema>) {
        alert('Error while getting google capcha')
        try {
            console.log(values);
            toast(
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                    <code className="text-white">{JSON.stringify(values, null, 2)}</code>
                </pre>,
            );
        } catch (error) {
            console.error('Form submission error', error);
            toast.error('Failed to submit the form. Please try again.');
        }
    }

    return (
        <section className="max-w-lg w-full mx-auto rounded-none md:rounded-3xl md:p-8 py-14">
            <div className="flex flex-col gap-4">
                <Card className="mx-auto w-full p-4">
                    <CardHeader>
                        <div className="flex gap-2 items-center justify-center text-xl font-bold text-blue-800">
                            <img
                                src={bpplogo}
                                alt=""
                                className="w-[120px] object-contain rounded-lg"
                            />
                        </div>
                        <h2 className="font-black text-2xl my-2 text-neutral-800 text-center dark:text-neutral-200">
                            Welcome to <br /> <span style={{ color: '#79A5F2' }}>Bharatiya Popular Party</span>
                        </h2>
                    </CardHeader>
                    <CardContent>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                                <div className="grid gap-4">
                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem className="grid gap-2">
                                                <FormLabel htmlFor="email">Email/Phone number</FormLabel>
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

                                    {/* Checkbox for terms of service */}
                                    <FormField
                                        control={form.control}
                                        name="terms"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormControl>
                                                    <Checkbox
                                                        id="terms"
                                                        className="mr-2"
                                                        {...field}
                                                        checked={field.value}
                                                        onCheckedChange={field.onChange}
                                                    />
                                                </FormControl>
                                                <FormLabel htmlFor="terms" className="text-sm">
                                                    By creating an account, you agree to our Bharatiya Popular Party{' '}
                                                    {/* <Link to="/terms" className="underline">
                                                        Terms of Service
                                                    </Link>{' '}
                                                    and{' '}
                                                    <Link to="/privacy" className="underline">
                                                        Privacy Policy
                                                    </Link>. */}
                                                </FormLabel>
                                                <Dialog>
                                                    <DialogTrigger asChild>
                                                        <span className="underline cursor-pointer">
                                                            Terms of Service
                                                        </span>
                                                    </DialogTrigger>
                                                    <DialogContent>
                                                        <DialogHeader>
                                                            <DialogTitle className="text-lg font-semibold text-blue-700">Terms of Service</DialogTitle>
                                                        </DialogHeader>
                                                        <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
                                                            <p className="font-bold text-base text-gray-900">IMPORTANT – PLEASE READ CAREFULLY</p>
                                                            <p>
                                                                These Terms of Service and Conditions ("Terms") represent a legally binding agreement between you
                                                                and the <span className="font-semibold">Bharatiya Popular Party ("Party")</span> regarding your use of the Bharatiya Popular Party
                                                                website. By using the website, you acknowledge that you have read, understood, and agree to comply
                                                                with these Terms. <span className="font-semibold">If you do not agree, please do not use the Service.</span>
                                                            </p>
                                                            <p>
                                                                The Party may update these Terms periodically. Any changes to these Terms will be posted on the
                                                                Party’s official website, <a href="https://www.bppindia.com" className="text-blue-500 underline">www.bppindia.com</a>. If you do not agree with any updates, you may
                                                                discontinue use and uninstall the Service at any time. By continuing to use the Service after
                                                                changes are made, you acknowledge your acceptance of the revised Terms.
                                                            </p>
                                                        </div>
                                                    </DialogContent>

                                                </Dialog>

                                                {' '}   and{' '}
                                                <Dialog>
                                                    <DialogTrigger asChild>
                                                        <span className="underline cursor-pointer">
                                                            Privacy Policy
                                                        </span>
                                                    </DialogTrigger>
                                                    <DialogContent>
                                                        <DialogHeader>
                                                            <DialogTitle>Privacy Policy</DialogTitle>
                                                        </DialogHeader>
                                                        <p className="text-sm">
                                                            Here you can add the privacy policy content...
                                                        </p>
                                                    </DialogContent>
                                                </Dialog>.
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />


                                    <Button type="submit" onClick={handleSend} className="w-full">
                                        Next
                                    </Button>
                                    <div className="flex items-center my-4">
                                        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent h-[1px] w-full" />
                                        <span className="mx-4 text-neutral-500 dark:text-neutral-400">or</span>
                                        <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent h-[1px] w-full" />
                                    </div>

                                    <div className="flex flex-col space-y-2">
                                        <button
                                            className="relative group/btn flex items-center justify-center px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                                            type="submit"
                                        >
                                            <IconBrandGoogle className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                                            <span className="ml-2 text-neutral-700 dark:text-neutral-300 text-sm">
                                                Continue With Google
                                            </span>
                                            <BottomGradient />
                                        </button>
                                        <button
                                            className="relative group/btn flex items-center justify-center px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                                            type="submit"
                                        >
                                            <IconBrandApple className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                                            <span className="ml-2 text-neutral-700 dark:text-neutral-300 text-sm">
                                                Continue With Apple
                                            </span>
                                            <BottomGradient />
                                        </button>
                                    </div>

                                </div>
                            </form>
                        </Form>
                    </CardContent>
                </Card>
                <div className="mx-auto flex gap-1 text-sm">
                    <Link to='/signup' className="underline">sign up as a business</Link>
                    <p>or</p>
                    <Link to="/login" className="underline">
                        log in
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Signupff;

const BottomGradient = () => {
    return (
        <>
            <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
            <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        </>
    );
};

const LabelInputContainer = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn("flex flex-col space-y-2 w-full", className)}>
            {children}
        </div>
    );
};
