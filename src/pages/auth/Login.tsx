// import { Button } from '@/components/ui/button';
// import {
//     Card,
//     CardContent,
//     CardDescription,
//     CardHeader,
//     CardTitle,
// } from '@/components/ui/card';
// import {
//     Form,
//     FormControl,
//     FormField,
//     FormItem,
//     FormLabel,
//     FormMessage,
// } from '@/components/ui/form';
// import { Input } from '@/components/ui/input';
// import { PasswordInput } from '@/components/ui/password-input';
// import { zodResolver } from '@hookform/resolvers/zod';
// import { UserRound } from 'lucide-react';
// import { useForm } from 'react-hook-form';
// import { Link } from 'react-router-dom';
// import { toast } from 'sonner';
// import { z } from 'zod';


// const formSchema = z.object({
//     email: z.string().email({ message: 'Invalid email address' }),
//     password: z
//         .string()
//         .min(6, { message: 'Password must be at least 6 characters long' })
//         .regex(/[a-zA-Z0-9]/, { message: 'Password must be alphanumeric' }),
// })


// const Login = () => {
//     const form = useForm<z.infer<typeof formSchema>>({
//         resolver: zodResolver(formSchema),
//         defaultValues: {
//             email: '',
//             password: '',
//         },
//     })


//     async function onSubmit(values: z.infer<typeof formSchema>) {
//         try {
//             // Assuming an async login function
//             console.log(values)
//             toast(
//                 <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
//                     <code className="text-white">{JSON.stringify(values, null, 2)}</code>
//                 </pre>,
//             )
//         } catch (error) {
//             console.error('Form submission error', error)
//             toast.error('Failed to submit the form. Please try again.')
//         }
//     }

//     return (
//         <section className="py-20">
//             <div className="container">
//                 <div className="flex flex-col gap-4">
//                     {/* <img
//                         src="https://www.shadcnblocks.com/images/block/logos/shadcn-ui.svg"
//                         alt="logo"
//                         className="h-8"
//                     /> */}
//                     <Card className="mx-auto w-full max-w-md">
//                         <CardHeader className="items-center">
//                             <UserRound className="size-10 rounded-full bg-accent p-2.5 text-muted-foreground" />
//                             <CardTitle className="text-xl">Log in with your email phone & username</CardTitle>
//                             <CardDescription>Enter your information to login</CardDescription>
//                         </CardHeader>
//                         <CardContent>
//                             <Form {...form}>
//                                 <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
//                                     <div className="grid gap-4">
//                                         <FormField
//                                             control={form.control}
//                                             name="email"
//                                             render={({ field }) => (
//                                                 <FormItem className="grid gap-2">
//                                                     <FormLabel htmlFor="email">Email/Phone number</FormLabel>
//                                                     <FormControl>
//                                                         <Input
//                                                             id="email"
//                                                             placeholder="johndoe@mail.com"
//                                                             type="email"
//                                                             autoComplete="email"
//                                                             {...field}
//                                                         />
//                                                     </FormControl>
//                                                     <FormMessage />
//                                                 </FormItem>
//                                             )}
//                                         />
//                                         <FormField
//                                             control={form.control}
//                                             name="password"
//                                             render={({ field }) => (
//                                                 <FormItem className="grid gap-2">
//                                                     <div className="flex justify-between items-center">
//                                                         <FormLabel htmlFor="password">Password</FormLabel>
//                                                         <Link
//                                                             to="/auth/forgot-password"
//                                                             className="ml-auto inline-block text-sm underline"
//                                                         >
//                                                             Forgot your password?
//                                                         </Link>
//                                                     </div>
//                                                     <FormControl>
//                                                         <PasswordInput
//                                                             id="password"
//                                                             placeholder="******"
//                                                             autoComplete="current-password"
//                                                             {...field}
//                                                         />
//                                                     </FormControl>
//                                                     <FormMessage />
//                                                 </FormItem>
//                                             )}
//                                         />
//                                         <Button type="submit" className="w-full">
//                                             Login
//                                         </Button>
//                                         <Button variant="outline" className="w-full">
//                                             Login with Google
//                                         </Button>
//                                     </div>
//                                 </form>
//                             </Form>
//                         </CardContent>
//                     </Card>
//                     <div className="mx-auto flex gap-1 text-sm">
//                         <p>Don&apos;t have an account yet?</p>
//                         <Link to="/auth/signup" className="underline">
//                             Sign up
//                         </Link>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Login;
