import { Button } from "@/components/ui/button";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { FormWrapper } from "./FormWrapper";

type OtpVerificationData = {
    otp: string;
    email: string;
};

type OtpVerificationProps = OtpVerificationData & {
    updateFields: (fields: Partial<OtpVerificationData>) => void;
};

export function OtpVerificationForm({ otp, email, updateFields }: OtpVerificationProps) {
    const [timer, setTimer] = useState(120);
    const [showResend, setShowResend] = useState(false);

    const handleResendOTP = () => {
        setTimer(120);
        setShowResend(false);
        toast.success("OTP resent successfully");
    };

    useEffect(() => {
        let interval: NodeJS.Timeout | undefined;
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
        return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
    };

    const handleOtpComplete = (value: string) => {
        updateFields({ otp: value });
    };

    function maskEmail(email: string): string {
        const [username, domain] = email.split('@');
        if (!username || !domain) return email;
        return `${username.charAt(0)}${'*'.repeat(username.length - 2)}${username.charAt(username.length - 1)}@${domain}`;
    }

    return (
        <FormWrapper title="OTP Verification">
            {email && (
                <Label className="text-center">
                    Enter OTP sent to your email:{" "}
                    {maskEmail(email)}
                </Label>
            )}
            <div className="space-y-4">
                <InputOTP
                    maxLength={6}
                    value={otp}
                    onChange={handleOtpComplete}
                    required
                >
                    <InputOTPGroup className="flex justify-between w-full space-x-2">
                        {Array.from({ length: 6 }).map((_, index) => (
                            <InputOTPSlot key={index} index={index} />
                        ))}
                    </InputOTPGroup>
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
    );
}