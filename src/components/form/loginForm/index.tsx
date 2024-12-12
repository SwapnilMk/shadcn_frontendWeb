import bpplogo from '@/assets/images/logos/Bpp.png';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle
} from '@/components/ui/card';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { PasswordInput } from '@/components/ui/password-input';
import { Toaster } from '@/components/ui/sonner';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

const Login = () => {
    const navigate = useNavigate()
    const form = useForm({
        defaultValues: {
            email: '',
            password: '',
        },
    });

    // This function now just shows the toast
    async function onSubmit(values: { email: string; password: string }) {
        try {
            // Show success toast directly on form submit
            console.log(values);
            toast.success("Login Successful!", {
                description: "TuesDay, December 10, 2023 at 04:30 PM",
                action: {
                    label: "Close",
                    onClick: () => console.log("Undo"),
                },
            });

            // Wait for 5 seconds before navigating to the dashboard
            setTimeout(() => {
                navigate('/dashboard/home');
            }, 5000); // 5000 milliseconds = 5 seconds

        } catch (error) {
            console.error('Form submission error', error);
            toast.error('Failed to submit the form. Please try again.');
        }
    }

    return (
        <section className="py-20">
            <div className="container">
                <div className="flex flex-col gap-4">
                    <Card className="mx-auto w-full max-w-lg">
                        <CardHeader className="items-center">
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
                            <CardTitle className="text-xl">Log in with your email & phone</CardTitle>
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
                                        <FormField
                                            control={form.control}
                                            name="password"
                                            render={({ field }) => (
                                                <FormItem className="grid gap-2">
                                                    <div className="flex justify-between items-center">
                                                        <FormLabel htmlFor="password">Password</FormLabel>
                                                        <Link
                                                            to="/auth/forgot-password"
                                                            className="ml-auto inline-block text-sm underline"
                                                        >
                                                            Forgot your password?
                                                        </Link>
                                                    </div>
                                                    <FormControl>
                                                        <PasswordInput
                                                            id="password"
                                                            placeholder="******"
                                                            autoComplete="current-password"
                                                            {...field}
                                                        />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                        <Button type="submit" className="w-full">
                                            Login
                                        </Button>
                                    </div>
                                </form>
                            </Form>
                        </CardContent>
                    </Card>
                    <div className="mx-auto flex gap-1 text-sm">
                        <p>Don&apos;t have an account yet?</p>
                        <Link to="/auth/signup" className="underline">
                            Sign up
                        </Link>
                    </div>
                    <Toaster />
                </div>
            </div>
        </section>
    );
};

export default Login;
