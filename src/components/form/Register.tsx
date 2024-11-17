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
import { Input } from '@/components/ui/input';
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot
} from "@/components/ui/input-otp";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { zodResolver } from '@hookform/resolvers/zod';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import { IconBrandApple } from '@tabler/icons-react';
import React, { useEffect, useState } from 'react';
import { Control, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';
import { z } from 'zod';
import { CaptchaDialog } from '../dialogs/CaptchaDialog';
import { TermsDialog } from '../dialogs/TermsDialog';
import BottomGradient from '../features/BottomGradient';

// Form schemas for each step
const initialFormSchema = z.object({
    email: z.string().min(1, { message: 'Email or phone is required' }),
    terms: z.boolean().refine((val) => val === true, {
        message: 'You must accept the terms and conditions',
    }),
});

const otpFormSchema = z.object({
    otp: z.string().length(6, { message: 'OTP must be 6 digits' }),
});

const userDetailsSchema = z.object({
    firstName: z.string().min(2, { message: 'First name must be at least 2 characters' }),
    middleName: z.string().optional(),
    lastName: z.string().min(2, { message: 'Last name must be at least 2 characters' }),
    dob: z.string().min(1, { message: 'Date of birth is required' }),
    age: z.string().min(1, { message: 'Age is required' }),
    voterId: z.string().min(10, { message: 'Invalid voter ID' }),
    aadharNumber: z.string().length(12, { message: 'Aadhar number must be 12 digits' }),
    gender: z.string().min(1, { message: 'Gender is required' }),
    phone: z.string().min(10, { message: 'Invalid phone number' }),
    email: z.string().min(1, { message: 'Email or phone is required' }),
});

const addressSchema = z.object({
    addressLine1: z.string().min(5, { message: 'Address line 1 is required' }),
    addressLine2: z.string().optional(),
    cityVillage: z.string().min(2, { message: 'City/Village is required' }),
    taluka: z.string().min(2, { message: 'Taluka is required' }),
    district: z.string().min(2, { message: 'District is required' }),
    state: z.string().min(2, { message: 'State is required' }),
    pincode: z.string().length(6, { message: 'Invalid pincode' }),
});

const credentialsSchema = z.object({
    username: z.string().min(4, { message: 'Username must be at least 4 characters' }),
    password: z
        .string()
        .min(8, { message: 'Password must be at least 8 characters' })
        .regex(/[A-Z]/, { message: 'Password must contain at least one uppercase letter' })
        .regex(/[a-z]/, { message: 'Password must contain at least one lowercase letter' })
        .regex(/[0-9]/, { message: 'Password must contain at least one number' }),
    confirmPassword: z.string(),
    pin: z.string().length(4, { message: 'PIN must be exactly 4 digits' })
        .regex(/^\d+$/, { message: 'PIN must contain only numbers' }),
    confirmPin: z.string()
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
}).refine((data) => data.pin === data.confirmPin, {
    message: "PINs don't match",
    path: ["confirmPin"],
});


const Register = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({});
    const [showCaptcha, setShowCaptcha] = useState(false);
    const [contactType, setContactType] = useState('');
    const [maskedContact, setMaskedContact] = useState('');
    const [timer, setTimer] = useState(120); // 2 minutes in seconds
    const [showResend, setShowResend] = useState(false);

    // Initial form (Email + Terms)
    const initialForm = useForm<z.infer<typeof initialFormSchema>>({
        resolver: zodResolver(initialFormSchema),
        defaultValues: {
            email: '',
            terms: false,
        },
    });

    // OTP form
    const otpForm = useForm<z.infer<typeof otpFormSchema>>({
        resolver: zodResolver(otpFormSchema),
        defaultValues: {
            otp: '',
        },
    });

    const userDetailsForm = useForm<z.infer<typeof userDetailsSchema>>({
        resolver: zodResolver(userDetailsSchema),
        defaultValues: {
            firstName: '',
            middleName: '',
            lastName: '',
            dob: '',
            age: '',
            voterId: '',
            aadharNumber: '',
            gender: '',
            phone: '',
        },
    });

    const addressForm = useForm<z.infer<typeof addressSchema>>({
        resolver: zodResolver(addressSchema),
        defaultValues: {
            addressLine1: '',
            addressLine2: '',
            cityVillage: '',
            taluka: '',
            district: '',
            state: '',
            pincode: '',
        },
    });

    const credentialsForm = useForm<z.infer<typeof credentialsSchema>>({
        resolver: zodResolver(credentialsSchema),
        defaultValues: {
            username: '',
            password: '',
            confirmPassword: '',
            pin: '',
            confirmPin: ''
        },
    });


    const handleInitialSubmit = async (values: React.SetStateAction<{}>) => {
        setFormData({ ...formData, ...values });
        setStep(2);
        setShowCaptcha(true);
    };

    const handleCaptchaSuccess = () => {
        toast.success(`OTP sent to your ${contactType === 'phone' ? 'phone number' : 'email'}`);
    };


    const handleOtpSubmit = (values: z.infer<typeof otpFormSchema>) => {
        setFormData({ ...formData, ...values });
        setStep(3);
    };

    const handleUserDetailsSubmit = (values: z.infer<typeof userDetailsSchema>) => {
        setFormData({ ...formData, ...values });
        setStep(4);
    };

    const handleAddressSubmit = (values: z.infer<typeof addressSchema>) => {
        setFormData({ ...formData, ...values });
        setStep(5);
    };

    const handleCredentialsSubmit = (values: z.infer<typeof credentialsSchema>) => {
        const finalData = { ...formData, ...values };
        console.log('Final form data:', finalData);
        alert('error while submit data')
        toast.success('Registration successful!');
    };

    const handleSuccess = (credentialResponse: any) => {
        console.log("google login success", credentialResponse)
    }

    const handleError = () => {
        console.log("error while google auth")
    }


    useEffect(() => {
        let interval: string | number | NodeJS.Timeout | undefined;
        if (step === 2 && timer > 0) {
            interval = setInterval(() => {
                setTimer((prev) => prev - 1);
            }, 1000);
        } else if (timer === 0) {
            setShowResend(true);
        }
        return () => clearInterval(interval);
    }, [timer, step]);

    const formatTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
    };

    const handleResendOTP = () => {
        setTimer(120);
        setShowResend(false);
        toast.success('OTP resent successfully');
    };

    // Function to detect if input is email or phone
    const detectInputType = (value: string) => {
        const phoneRegex = /^[0-9]{10}$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (phoneRegex.test(value)) {
            setContactType('phone');
            setMaskedContact(value.replace(/(\d{2})(\d{4})(\d{4})/, 'XX-XXXX-$3'));
        } else if (emailRegex.test(value)) {
            setContactType('email');
            const [username, domain] = value.split('@');
            setMaskedContact(`${username.charAt(0)}${'*'.repeat(username.length - 2)}${username.charAt(username.length - 1)}@${domain}`);
        } else {
            setContactType('');
            setMaskedContact('');
        }
    };


    const renderStepContent = () => {
        switch (step) {
            case 1:
                return (
                    <Form {...initialForm}>
                        <form onSubmit={initialForm.handleSubmit(handleInitialSubmit)} className="space-y-8">
                            <div className="grid gap-4">
                                <FormField
                                    control={initialForm.control}
                                    name="email"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Email/Phone number</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder={contactType === 'phone' ? "Enter 10-digit mobile number" : "Email/Phone Number"}
                                                    {...field}
                                                    onChange={(e) => {
                                                        field.onChange(e);
                                                        detectInputType(e.target.value);
                                                    }}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                            {contactType && (
                                                <div className="text-sm text-green-600">
                                                    Detected: {contactType === 'phone' ? 'Phone Number' : 'Email Address'}
                                                </div>
                                            )}
                                        </FormItem>
                                    )}
                                />
                                <AgeFormField control={initialForm.control} />
                                <TermsFormField control={initialForm.control} />
                                <Button type="submit">Next</Button>
                                {step === 1 && (
                                    <>
                                        <div className="flex items-center">
                                            <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent h-[1px] w-full" />
                                            <span className="mx-4 text-neutral-500 dark:text-neutral-400">or</span>
                                            <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent h-[1px] w-full" />
                                        </div>

                                        <div className="flex flex-col space-y-2">
                                            <GoogleOAuthProvider
                                                clientId='40485041347-qnmoggj1apem94hdq55svkjmtk5706ku.apps.googleusercontent.com'>
                                                <GoogleLogin
                                                    onSuccess={handleSuccess}
                                                    onError={handleError}
                                                    theme="outline"
                                                    shape="rectangular"
                                                    size="large"
                                                />
                                            </GoogleOAuthProvider>
                                            <button className="relative group/btn flex items-center justify-center px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900">
                                                <IconBrandApple className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                                                <span className="ml-2 text-neutral-700 dark:text-neutral-300 text-sm">
                                                    Continue With Apple
                                                </span>
                                                <BottomGradient />
                                            </button>
                                        </div>
                                    </>
                                )}
                            </div>

                        </form>
                    </Form>
                );

            case 2:
                return (
                    <Form {...otpForm}>
                        <form onSubmit={otpForm.handleSubmit(handleOtpSubmit)} className="space-y-8">
                            <FormField
                                control={otpForm.control}
                                name="otp"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>
                                            Enter OTP sent to {contactType === 'phone' ? 'phone number' : 'email'}{' '}
                                            {maskedContact}
                                        </FormLabel>
                                        <FormControl>
                                            <div className="space-y-4">
                                                <InputOTP maxLength={6} {...field}>
                                                    <div className="flex justify-between w-full space-x-2">
                                                        <InputOTPGroup className="flex space-x-2 w-full">
                                                            <InputOTPSlot index={0} className="flex-1" />
                                                            <InputOTPSlot index={1} className="flex-1" />
                                                            <InputOTPSlot index={2} className="flex-1" />
                                                        </InputOTPGroup>
                                                        <InputOTPGroup className="flex space-x-2 w-full">
                                                            <InputOTPSlot index={3} className="flex-1" />
                                                            <InputOTPSlot index={4} className="flex-1" />
                                                            <InputOTPSlot index={5} className="flex-1" />
                                                        </InputOTPGroup>
                                                    </div>
                                                </InputOTP>
                                                <div className="text-sm text-gray-500 text-center">
                                                    Time remaining: {formatTime(timer)}
                                                </div>
                                                {showResend && (
                                                    <Button
                                                        type="button"
                                                        variant="link"
                                                        className="w-full text-blue-600"
                                                        onClick={handleResendOTP}
                                                    >
                                                        Resend OTP
                                                    </Button>
                                                )}
                                            </div>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button type="submit" className="w-full">
                                Verify OTP
                            </Button>
                        </form>
                    </Form>
                );

            case 3:
                return (
                    <Form {...userDetailsForm}>
                        <form onSubmit={userDetailsForm.handleSubmit(handleUserDetailsSubmit)} className="space-y-8">
                            <div className="grid gap-6">
                                {/* Row 1: Name Fields */}
                                <div className="grid grid-cols-3 gap-4">
                                    <FormField
                                        control={userDetailsForm.control}
                                        name="firstName"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>First Name</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="First name" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={userDetailsForm.control}
                                        name="middleName"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Middle Name</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Middle name" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={userDetailsForm.control}
                                        name="lastName"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Last Name</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Last name" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                {/* Row 2: DOB and Age */}
                                <div className="grid grid-cols-2 gap-4">
                                    <FormField
                                        control={userDetailsForm.control}
                                        name="dob"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Date of Birth</FormLabel>
                                                <FormControl>
                                                    <Input type="date" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={userDetailsForm.control}
                                        name="age"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Age</FormLabel>
                                                <FormControl>
                                                    <Input type="number" placeholder="Age" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                {/* Additional Fields */}
                                <div className="grid grid-cols-2 gap-4">
                                    <FormField
                                        control={userDetailsForm.control}
                                        name="gender"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Gender</FormLabel>
                                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                    <FormControl>
                                                        <SelectTrigger>
                                                            <SelectValue placeholder="Select gender" />
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent>
                                                        <SelectItem value="male">Male</SelectItem>
                                                        <SelectItem value="female">Female</SelectItem>
                                                        <SelectItem value="other">Other</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    {contactType === 'phone' ? (
                                        <FormField
                                            control={userDetailsForm.control}
                                            name="email"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Email Address</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="Enter email address" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    ) : (
                                        <FormField
                                            control={userDetailsForm.control}
                                            name="phone"
                                            render={({ field }) => (
                                                <FormItem>
                                                    <FormLabel>Phone Number</FormLabel>
                                                    <FormControl>
                                                        <Input placeholder="Enter phone number" {...field} />
                                                    </FormControl>
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />
                                    )}
                                </div>

                                {/* Row 3: Voter ID and Aadhar */}
                                <div className="grid grid-cols-2 gap-4">
                                    <FormField
                                        control={userDetailsForm.control}
                                        name="voterId"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Voter ID</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Enter Voter ID" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={userDetailsForm.control}
                                        name="aadharNumber"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Aadhar Number</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Enter Aadhar Number" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>


                                <Button type="submit">Next</Button>
                            </div>
                        </form>
                    </Form>
                );

            case 4:
                return (
                    <Form {...addressForm}>
                        <form onSubmit={addressForm.handleSubmit(handleAddressSubmit)} className="space-y-8">
                            <div className="grid gap-4">
                                {/* Address Line 1 */}
                                <FormField
                                    control={addressForm.control}
                                    name="addressLine1"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Address Line 1</FormLabel>
                                            <FormControl>
                                                <Input placeholder="House/Flat No., Building Name, Street" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                {/* Address Line 2 */}
                                <FormField
                                    control={addressForm.control}
                                    name="addressLine2"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Address Line 2</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Area, Landmark" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                {/* City/Village, Taluka, District Row */}
                                <div className="grid grid-cols-3 gap-4">
                                    <FormField
                                        control={addressForm.control}
                                        name="cityVillage"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>City/Village</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Enter city/village" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={addressForm.control}
                                        name="taluka"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Taluka</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Enter taluka" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={addressForm.control}
                                        name="district"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>District</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Enter district" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                {/* State and Pincode Row */}
                                <div className="grid grid-cols-2 gap-4">
                                    <FormField
                                        control={addressForm.control}
                                        name="state"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>State</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Enter state" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={addressForm.control}
                                        name="pincode"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Pincode</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Enter pincode" {...field} />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <Button type="submit">Next</Button>
                            </div>
                        </form>
                    </Form>
                );

            case 5:
                return (
                    <Form {...credentialsForm}>
                        <form onSubmit={credentialsForm.handleSubmit(handleCredentialsSubmit)} className="space-y-8">
                            <div className="grid gap-4">
                                <FormField
                                    control={credentialsForm.control}
                                    name="username"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Username</FormLabel>
                                            <FormControl>
                                                <Input placeholder="Choose a username" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                {/* Password and Confirm Password in same row */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <FormField
                                        control={credentialsForm.control}
                                        name="password"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Password</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        type="password"
                                                        placeholder="Create a password"
                                                        {...field}
                                                        value={field.value || ''}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={credentialsForm.control}
                                        name="confirmPassword"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Confirm Password</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        type="password"
                                                        placeholder="Confirm your password"
                                                        {...field}
                                                        value={field.value || ''}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                {/* Pin and Confirm Pin in same row */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <FormField
                                        control={credentialsForm.control}
                                        name="pin"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>PIN</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        type="password"
                                                        placeholder="Enter your PIN"
                                                        {...field}
                                                        value={field.value || ''}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                    <FormField
                                        control={credentialsForm.control}
                                        name="confirmPin"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormLabel>Confirm PIN</FormLabel>
                                                <FormControl>
                                                    <Input
                                                        type="password"
                                                        placeholder="Confirm your PIN"
                                                        {...field}
                                                        value={field.value || ''}
                                                    />
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <Button type="submit">Submit</Button>
                            </div>
                        </form>
                    </Form>
                );
        }
    };

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
                        {renderStepContent()}
                    </CardContent>
                </Card>

                <CaptchaDialog
                    isOpen={showCaptcha}
                    onOpenChange={setShowCaptcha}
                    onSuccess={handleCaptchaSuccess}
                />
            </div>
            <div className="flex justify-center mt-3 gap-1 text-sm">
                <Link to='/signup' className="underline font-semibold">sign up as a business</Link>{' '}
                <p>or</p>{' '}
                <Link to="/login" className="underline font-semibold">
                    log in
                </Link>
            </div>
        </section>
    );
};

export default Register;





const TermsFormField: React.FC<{ control: Control<any> }> = ({ control }) => {
    const [termsDialog, setTermsDialog] = React.useState<'terms' | 'privacy' | null>(null);

    return (
        <>
            <FormField
                control={control}
                name="terms"
                render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl className='mt-1'>
                            <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                            />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                            <FormLabel className="text-sm">
                                By creating an account, I agree to Bharatiya Popular Party{' '}
                                <span
                                    className="underline cursor-pointer text-blue-600"
                                    onClick={() => setTermsDialog('terms')}
                                >
                                    Terms of Service
                                </span>
                                {' '}and{' '}
                                <span
                                    className="underline cursor-pointer text-blue-600"
                                    onClick={() => setTermsDialog('privacy')}
                                >
                                    Privacy Policy
                                </span>
                            </FormLabel>
                        </div>
                    </FormItem>
                )}
            />
            <TermsDialog
                isOpen={!!termsDialog}
                onOpenChange={() => setTermsDialog(null)}
                type={termsDialog || 'terms'}
            />
        </>
    );
};



const AgeFormField: React.FC<{ control: Control<any> }> = ({ control }) => {
    return (
        <>
            <FormField
                control={control}
                name="age"
                render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl className='mt-1'>
                            <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                            />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                            <FormLabel className="text-sm">
                                Eligible for individuals 18 Years and above.{' '}
                            </FormLabel>
                        </div>
                    </FormItem>
                )}
            />
        </>
    );
};