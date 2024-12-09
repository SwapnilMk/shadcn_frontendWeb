import { Button } from "@/components/ui/button"
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp"
import { Label } from "@/components/ui/label"
import { useEffect, useState } from "react"
import { toast } from "sonner"
import { FormWrapper } from "./FormWrapper"

type OtpFormProps = {
    otp: string,
}


const OtpForm = ({ otp }: OtpFormProps) => {
    const [timer, setTimer] = useState(120); // 2 minutes in seconds
    const [showResend, setShowResend] = useState(false);


    const handleResendOTP = () => {
        setTimer(120);
        setShowResend(false);
        toast.success('OTP resent successfully');
    };

    useEffect(() => {
        let interval: string | number | NodeJS.Timeout | undefined;
        if (timer > 0) {
            interval = setInterval(() => {
                setTimer((prev) => prev - 1);
            }, 1000);
        } else if (timer === 0) {
            setShowResend(true);
        }
        return () => clearInterval(interval);
    }, [timer]);

    const formatTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
    };

    return (
        <>
            <FormWrapper title={"otp form"}>
                <Label>
                    Enter OTP sent to email
                </Label>
                <div className="space-y-4">
                    <InputOTP maxLength={6} >
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
            </FormWrapper>
        </>
    )
}
export default OtpForm