import bpplogo from '@/assets/images/logos/Bpp.png';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Toaster } from '@/components/ui/sonner';
import { useMultiStepForm } from '@/hooks/useMultiStepForm';
import { FormEvent, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { AddressForm } from './AddressForm';
import CredentialsForm from './CredentialsForm';
import EducationalDetailsForm from './EducationalDetails';
import { EmailForm } from './EmailForm';
import { OtpVerificationForm } from './OtpVerificationForm';
import { PersonalDetailForm } from './PersonalDetailForm';
import { RegistrationForm } from './RegistrationDetails';
import { useAuth } from "@/context/AuthContext";

type FormData = {

    termsAccepted?: boolean;
    partyObjectivesAccepted?: boolean;

    // Personal Details
    title: string;           // e.g., Mr., Ms., Dr.
    firstName: string;       // User's first name
    middleName: string;      // User's middle name (optional)
    lastName: string;        // User's last name
    email: string;           // User's email address
    phone: string;           // User's phone number
    dateOfBirth: string;     // Date of birth (format: YYYY-MM-DD)
    gender: string;          // Male, Female, Other
    age: string;             // User's age (can calculate from DOB)

    // OTP Verification
    otp: string;             // One-time password for verification email otp/ phone otp

    // Address Information
    addressLine1: string;    // First line of address
    addressLine2: string;    // Second line of address (optional)
    cityOrVillage: string;   // City or village name
    taluka: string;          // Taluka/Block name
    district: string;        // District name
    state: string;           // State name
    pincode: string;         // Postal code

    // Educational Details
    qualification: string;   // Highest qualification (e.g., Bachelor's)
    profession: string;      // Current profession (e.g., Engineer)
    position: string;        // Current position (e.g., Manager)

    // Registration Details
    aadhaarNumber: string;      // Aadhaar card number
    voterId: string;         // Voter ID number
    aadhaarCard: File | null;      // Aadhaar card file (File type)
    voterCard: File | null;         // Voter ID file (File type)


    // Credentials Information
    password: string;       //password 
    confirmPassword: string;  // Account password

    // referral Code 
    referralCode: string,    //optional field
};


const INITIAL_DATA: FormData = {

    termsAccepted: false,
    partyObjectivesAccepted: false,

    // Personal Details
    title: "",
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    gender: "",
    age: "",

    // OTP Verification
    otp: "",

    // Address Information
    addressLine1: "",
    addressLine2: "",
    cityOrVillage: "",
    taluka: "",
    district: "",
    state: "",
    pincode: "",

    // Educational Details
    qualification: "",
    profession: "",
    position: "",

    // Registration Details
    aadhaarNumber: "",
    voterId: "",
    aadhaarCard: null,  // Initialize as null
    voterCard: null,    // Initialize as null

    // Credentials Information
    password: "",
    confirmPassword: "",

    // referral Code 
    referralCode: "", //optional field
};


const MultiStepForm = () => {
    const [data, setData] = useState(INITIAL_DATA);
    const navigate = useNavigate();
    const { register, sendOtp, verifyOtp } = useAuth();

    //Function that update the fields inside FormData
    function updateFields(fields: Partial<FormData>) {
        setData(prev => {
            return { ...prev, ...fields }
        })
    }

    const { currentStepIndex, step, isFirstStep, isLastStep, back, next } =
        useMultiStepForm([
            <EmailForm {...data} updateFields={updateFields} />,
            <OtpVerificationForm {...data} updateFields={updateFields} />,
            <PersonalDetailForm {...data} updateFields={updateFields} />,
            <AddressForm {...data} updateFields={updateFields} />,
            <RegistrationForm {...data} updateFields={updateFields} />,
            <EducationalDetailsForm {...data} updateFields={updateFields} />,
            <CredentialsForm {...data} updateFields={updateFields} />,
        ])


    const onSubmitHandler = async (e: FormEvent) => {
        e.preventDefault();

        if (currentStepIndex === 0) {
            // Handle first step - Send OTP
            if (!data.termsAccepted || !data.partyObjectivesAccepted) {
                toast.error('Please accept all terms and conditions');
                return;
            }

            const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

            if (!data.email || !emailRegex.test(data.email)) {
                toast.error('Please enter a valid email');
                return;
            }

            try {
                await sendOtp(data.email); // Send OTP using AuthContext method
                toast.success('OTP sent successfully');
                next(); // Move to OTP verification step
            } catch (error) {
                toast.error('Failed to send OTP');
            }
        } else if (currentStepIndex === 1) {
            // Handle OTP verification
            if (data.otp.length !== 6) {
                toast.error('Please enter a valid 6-digit OTP');
                return;
            }

            try {
                await verifyOtp(data.email, data.otp); // Verify OTP using AuthContext method
                toast.success('OTP verified successfully');
                next(); // Proceed to the next step after verification
            } catch (error) {
                toast.error('OTP validation failed');
            }
        }

        else if (currentStepIndex === 2) {
            // Add validation for personal details
            const requiredFields = [
                'firstName', 'lastName', 'dateOfBirth',
                'gender', 'phone'
            ];

            const missingFields = requiredFields.filter(field => !((data as any)[field]));

            if (missingFields.length > 0) {
                toast.error(`Please fill in the following fields: ${missingFields.join(', ')}`);
                return;
            }

            next(); // Move to next step or final submission
        }

        // Final step - Submit entire form
        else if (isLastStep) {
            console.log(data)

            register(data)
                .then(() => {
                    toast.success("Registration Successful! Redirecting to the dashboard...");
                    setTimeout(() => {
                        navigate('/dashboard/home');
                    }, 3000);
                })
                .catch((error) => {
                    console.error("Registration failed:", error);
                    toast.error("Registration failed. Please try again.");
                });

            return;
        }

        // For steps without special handling, just move to next step
        else if (!isLastStep) {
            console.log(data)
            return next();
        }
    }


    return (
        <section className="flex items-center w-full h-screen max-w-xl mx-auto rounded-none md:rounded-3xl md:p-8 py-14">
            <div className="flex flex-col gap-4">
                <Card className="w-full p-4 mx-auto">
                    <CardHeader>
                        <div className="flex items-center justify-center gap-2 text-xl font-bold text-blue-800">
                            <img
                                src={bpplogo}
                                alt=""
                                className="w-[120px] object-contain rounded-lg"
                            />
                        </div>
                        <h2 className="my-2 text-2xl font-black text-center text-neutral-800 dark:text-neutral-200">
                            Welcome to <br /> <span style={{ color: '#79A5F2' }}>Bharatiya Popular Party</span>
                        </h2>
                    </CardHeader>
                    <CardContent>
                        <form className="space-y-8" onSubmit={onSubmitHandler}>
                            <div className="grid gap-4">
                                {step}

                                {isFirstStep && (
                                    <Button type="submit">
                                        Next
                                    </Button>
                                )}
                                {currentStepIndex === 1 && (
                                    <Button type="submit" className="w-full">
                                        Verify OTP
                                    </Button>
                                )}

                                {currentStepIndex === 2 && (
                                    <div className="flex justify-between gap-2">
                                        <Button type="button" className='w-full' onClick={back}>
                                            Back
                                        </Button>
                                        <Button type="submit" className='w-full'>
                                            Next
                                        </Button>
                                    </div>
                                )}

                                {isLastStep && (
                                    <div className="flex justify-between gap-2">
                                        <Button type="button" className='w-full' onClick={back}>
                                            Back
                                        </Button>
                                        <Button type="submit" className="w-full">
                                            Finish
                                        </Button>
                                    </div>
                                )}
                                {!isFirstStep && currentStepIndex !== 1 && currentStepIndex !== 2 && !isLastStep && (
                                    <>
                                        <div className="flex justify-between gap-2">
                                            <Button type="button" className='w-full' onClick={back}>
                                                Back
                                            </Button>
                                            <Button type="submit" className='w-full'>
                                                Next
                                            </Button>
                                        </div>
                                    </>
                                )}
                            </div>
                        </form>
                    </CardContent>
                </Card>
                <div className="flex justify-center gap-1 text-sm">
                    <Link to='/auth/signup' className="font-semibold underline">sign up as a business</Link>{' '}
                    <p>or</p>{' '}
                    <Link to="/auth/login" className="font-semibold underline">
                        log in
                    </Link>
                </div>
                <Toaster />
            </div>
        </section>
    );
};

export default MultiStepForm;
