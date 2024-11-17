import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

export default function ForgetPin() {
    const [input, setInput] = useState('');
    const [isLinkSent, setIsLinkSent] = useState(false);
    const [timeLeft, setTimeLeft] = useState(120); // 2 minutes in seconds
    const [isTimerActive, setIsTimerActive] = useState(false);

    // Determine if input is email or phone
    const isEmail = (value: string | string[]) => {
        return value.includes('@');
    };

    // Format time left into minutes and seconds
    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
    };

    // Timer effect
    useEffect(() => {
        let timer: string | number | NodeJS.Timeout | undefined;
        if (isTimerActive && timeLeft > 0) {
            timer = setInterval(() => {
                setTimeLeft(prev => prev - 1);
            }, 1000);
        } else if (timeLeft === 0) {
            setIsTimerActive(false);
        }
        
        return () => clearInterval(timer);
    }, [isTimerActive, timeLeft]);

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        if (input) {
            setIsLinkSent(true);
            setIsTimerActive(true);
        }
    };

    const handleResend = () => {
        setTimeLeft(120);
        setIsTimerActive(true);
    };

    return (
        <section className="py-28">
            <div className="container">
                <Card className="mx-auto max-w-sm">
                    <CardHeader className="space-y-1">
                        <CardTitle className="text-2xl font-bold">Forgot Your Pin</CardTitle>
                        <CardDescription>
                            Enter your email or phone number below to receive a Pin reset link
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="input">Email/Phone Number</Label>
                                <Input
                                    id="input"
                                    type="text"
                                    placeholder="Email/Phone Number"
                                    required
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                />
                            </div>

                            {isLinkSent && (
                                <Alert className="mt-4">
                                    <AlertDescription>
                                        Reset link sent to your {isEmail(input) ? 'email' : 'phone number'}{' '}
                                        {input}
                                        {isTimerActive && (
                                            <div className="mt-2">
                                                Time remaining: {formatTime(timeLeft)}
                                            </div>
                                        )}
                                        {!isTimerActive && timeLeft === 0 && (
                                            <div className="mt-2">
                                                Didn't receive the link?{' '}
                                                <button
                                                    onClick={handleResend}
                                                    className="text-blue-500 hover:underline"
                                                >
                                                    Resend
                                                </button>
                                            </div>
                                        )}
                                    </AlertDescription>
                                </Alert>
                            )}

                            <Button 
                                type="submit" 
                                className="w-full"
                                disabled={isLinkSent && isTimerActive}
                            >
                                {isLinkSent && isTimerActive ? 'Link Sent' : 'Send Reset Link'}
                            </Button>
                        </form>

                        <div className="mt-4 text-center text-sm">
                            Remembered your Pin?{" "}
                            <Link to="/" className="text-blue-500 hover:underline">
                                Go back
                            </Link>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}