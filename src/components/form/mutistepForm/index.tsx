import bpplogo from '@/assets/images/logos/Bpp.png';
import BottomGradient from '@/components/features/BottomGradient';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useMultiStepForm } from '@/hooks/useMultiStepForm';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import { IconBrandApple } from '@tabler/icons-react';
import axios from 'axios';
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
import { Toaster } from '@/components/ui/sonner';

type FormData = {
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

    // referral Code 
    referralCode: string,

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
    aadharCard: string;      // Aadhaar card number
    constituency: string;    // Voter's constituency
    voterId: string;         // Voter ID number

    // Credentials Information
    username: string;        // Account username
    password: string;
    confirmPassword: string;       // Account password
    pin: string;             // Security PIN
    confirmPin: string;             // Security PIN
};


const INITIAL_DATA: FormData = {
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
    aadharCard: "",
    constituency: "",
    voterId: "",

    // Credentials Information
    username: "",
    password: "",
    confirmPassword: "",
    pin: "",
    confirmPin: "",
};


const MultiStepForm = () => {
    const [data, setData] = useState(INITIAL_DATA);
    const navigate = useNavigate();

    //Function that update the fields inside FormData
    function updateFields(fields: Partial<FormData>) {
        setData(prev => {
            return { ...prev, ...fields }
        })
    }

    const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
        useMultiStepForm([
            <EmailForm {...data} updateFields={updateFields} />,
            <OtpVerificationForm {...data} updateFields={updateFields} />,
            <PersonalDetailForm {...data} updateFields={updateFields} />,
            <AddressForm {...data} updateFields={updateFields} />,
            <RegistrationForm {...data} updateFields={updateFields} />,
            <EducationalDetailsForm {...data} updateFields={updateFields} />,
            <CredentialsForm {...data} updateFields={updateFields} />,
        ])


    const BASE_URL = 'http://ec2-13-232-238-37.ap-south-1.compute.amazonaws.com:8080/api/v1';

    function onSubmitHandler(e: FormEvent) {
        e.preventDefault();

        // Handle first step - Send OTP
        if (currentStepIndex === 0) {
            next()
            return
            // Validate email/phone before sending OTP
            if (!data.email) {
                toast.error('Please enter a valid email or phone number');
                return;
            }

            // Send OTP API Call
            axios.post(`${BASE_URL}/send-otp`, {
                email: data.email
            })
                .then(response => {
                    toast.success('OTP sent successfully');
                    next(); // Move to OTP verification step
                })
                .catch(error => {
                    toast.error(error.response?.data?.message || 'Failed to send OTP');
                });
        }

        // Handle OTP Verification step
        else if (currentStepIndex === 1) {
            next();
            return

            // Validate OTP
            if (data.otp.length !== 6) {
                toast.error('Please enter a valid 6-digit OTP');
                return;
            }

            // Validate OTP API Call
            axios.post(`${BASE_URL}/validate-otp`, {
                email: data.email,
                otp: data.otp
            })
                .then(response => {
                    toast.success('OTP verified successfully');
                    next(); // Move to Personal Details step
                })
                .catch(error => {
                    toast.error(error.response?.data?.message || 'OTP validation failed');
                });
        }

        // Handle Personal Details step
        else if (currentStepIndex === 2) {
            // Add validation for personal details
            const requiredFields = [
                'firstName', 'lastName', 'dateOfBirth',
                'gender', 'phone'
            ];

            const missingFields = requiredFields.filter(field => !data[field]);

            if (missingFields.length > 0) {
                toast.error(`Please fill in the following fields: ${missingFields.join(', ')}`);
                return;
            }

            next(); // Move to next step or final submission
        }

        // Final step - Submit entire form
        else if (isLastStep) {

            toast.success("Registration Successful!", {
                description: "Sunday, December 07, 2023 at 9:00 AM",
                action: {
                    label: "Close",
                    onClick: () => console.log("Undo"),
                },
            });


            // Wait for 5 seconds before navigating to the dashboard
            setTimeout(() => {
                navigate('/dashboard/home');
            }, 5000); // 5000 milliseconds = 5 seconds

            return

            // Final form submission API call
            axios.post(`${BASE_URL}/register`, data)
                .then(response => {
                    toast.success('Account created successfully');
                    // Optional: Reset form or redirect
                })
                .catch(error => {
                    toast.error(error.response?.data?.message || 'Registration failed');
                });
        }

        // For steps without special handling, just move to next step
        else if (!isLastStep) {
            return next();
        }
    }

    return (
        <section className="max-w-xl w-full mx-auto rounded-none md:rounded-3xl md:p-8 py-14">
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
                <div className="flex justify-center mt-3 gap-1 text-sm">
                    <Link to='/signup' className="underline font-semibold">sign up as a business</Link>{' '}
                    <p>or</p>{' '}
                    <Link to="/login" className="underline font-semibold">
                        log in
                    </Link>
                </div>
                <Toaster />
            </div>
        </section>
    );
};

export default MultiStepForm;
