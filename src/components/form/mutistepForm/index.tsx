import bpplogo from '@/assets/images/logos/Bpp.png';
import BottomGradient from '@/components/features/BottomGradient';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useMultiStepForm } from '@/hooks/useMultiStepForm';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import { IconBrandApple } from '@tabler/icons-react';
import { FormEvent, useState } from 'react';
import EmailForm from './EmailForm';
import OtpForm from './OtpForm';
import UserDetailsForm from './UserDetailsForm';
import AddressForm from './AddressForm';

type FormData = {
    firstName: string,
    middleName: string,
    lastName: string,
    email: string,
    phone: string,
    dateOfBirth: string,
    gender: string,
    addressLine1: string,
    addressLine2: string,
    cityOrVillage: string,
    taluka: string,
    district: string,
    state: string,
    pincode: string,
    username: string,
    password: string,
    aadharCard: string,
    age: string,
    voterId: string,
    pin: string,
    otp: string,
}

const INITIAL_DATA: FormData = {
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    gender: "",
    addressLine1: "",
    addressLine2: "",
    cityOrVillage: "",
    taluka: "",
    district: "",
    state: "",
    pincode: "",
    username: "",
    password: "",
    aadharCard: "",
    age: "",
    voterId: "",
    pin: "",
    otp: "",
}

const MultiStepForm = () => {
    const [data, setData] = useState(INITIAL_DATA);
    const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } = useMultiStepForm([
        <EmailForm
            email={data.email}
            setEmail={(email) => setData({ ...data, email })}
        />,
        <OtpForm {...data} />,
        <UserDetailsForm {...data} />,
        <AddressForm {...data} />,
        // Add more steps as needed
    ]);

    const handleSuccess = (credentialResponse: any) => {
        console.log("google login success", credentialResponse);
    };

    const handleError = () => {
        console.log("error while google auth");
    };

    function onSubmitHandler(e: FormEvent) {
        e.preventDefault();
        if (!isLastStep) {
            next();
        } else {
            console.log("Form submission data:", data);
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
                                {/* Conditional Button Rendering */}
                                {currentStepIndex === 1 && ( // Second Step: Only "Verify OTP"
                                    <Button type="submit" className="w-full">
                                        Verify OTP
                                    </Button>
                                )}

                                {currentStepIndex === 2 && ( // Third Step: "Back" and "Next" buttons side by side
                                    <div className="flex justify-between">
                                        <Button type="button" onClick={back}>
                                            Back
                                        </Button>
                                        <Button type="submit">
                                            Next
                                        </Button>
                                    </div>
                                )}

                                {isLastStep && ( // Last Step: Only "Finish" button
                                    <Button type="submit" className="w-full">
                                        Finish
                                    </Button>
                                )}

                                {!isFirstStep && currentStepIndex !== 1 && currentStepIndex !== 2 && !isLastStep && ( // Other Steps: "Back" and "Next"
                                    <>
                                        <Button type="button" onClick={back}>
                                            Back
                                        </Button>
                                        <Button type="submit">
                                            Next
                                        </Button>
                                    </>
                                )}

                                {isFirstStep && (
                                    <>
                                        {/* Divider for Social Login */}
                                        <div className="flex items-center">
                                            <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent h-[1px] w-full" />
                                            <span className="mx-4 text-neutral-500 dark:text-neutral-400">or</span>
                                            <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent h-[1px] w-full" />
                                        </div>

                                        {/* Social Login Buttons */}
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
                    </CardContent>
                </Card>
            </div>
        </section>
    );
};

export default MultiStepForm;
