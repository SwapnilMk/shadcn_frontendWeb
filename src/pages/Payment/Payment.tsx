import amazon from '@/assets/logo/amazon-pay.png'
import googlePay from '@/assets/logo/google-pay.png'
import paytm from '@/assets/logo/paytm.png'
import phonePe from '@/assets/logo/pngegg.png'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { AlertCircle, AlertCircleIcon, Check, Clock, QrCode, X } from "lucide-react"
import { useEffect, useState } from "react"
import { FaCcAmex, FaCcDiscover, FaCcMastercard, FaCcVisa } from "react-icons/fa"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";

export function Payment() {
    const [upiId, setUpiId] = useState('');
    const [isVerified, setIsVerified] = useState(false);
    const [timer, setTimer] = useState(300); // 5 minutes = 300 seconds
    const [isTimerActive, setIsTimerActive] = useState(false);
    const [isDialogOpen, setIsDialogOpen] = useState(false);



    // Timer effect
    useEffect(() => {
        let interval: string | number | NodeJS.Timeout | undefined;
        if (isTimerActive && timer > 0) {
            interval = setInterval(() => {
                setTimer((prevTimer) => prevTimer - 1);
            }, 1000);
        } else if (timer === 0) {
            setIsTimerActive(false);
        }

        return () => clearInterval(interval);
    }, [isTimerActive, timer]);

    // Format timer display
    const formatTimer = () => {
        const minutes = Math.floor(timer / 60);
        const seconds = timer % 60;
        return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    };

    // Verify UPI ID
    const handleVerifyUPI = () => {
        // Basic UPI ID validation
        const upiRegex = /^[a-zA-Z0-9.-]+@[a-zA-Z0-9]+$/;
        if (upiRegex.test(upiId)) {
            setIsVerified(true);
            setIsTimerActive(true);
        } else {
            setIsVerified(false);
            alert('Invalid UPI ID. Please enter a valid UPI ID.');
        }
    };

    return (
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto p-4 md:p-8">
            <div className="space-y-6">
                <Card>
                    <CardHeader>
                        <CardTitle className="flex justify-between items-center">
                            Pay with UPI
                            {isTimerActive && (
                                <div className="flex items-center text-red-500">
                                    <Clock className="mr-2" size={20} />
                                    {formatTimer()}
                                </div>
                            )}
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="grid gap-4">
                        <div className="flex flex-col items-center">
                            <QrCode
                                size={200}
                                className="text-primary rounded-md mb-4"
                            />
                            <p className="text-sm text-muted-foreground mb-4">
                                Scan the QR code with your UPI app to pay.
                            </p>
                        </div>

                        <div className="grid gap-4">
                            <div className="flex items-center space-x-2">
                                <Input
                                    placeholder="Enter UPI ID (e.g., username@upi)"
                                    value={upiId}
                                    onChange={(e) => setUpiId(e.target.value)}
                                    disabled={isVerified || isTimerActive}
                                />
                                <Button
                                    onClick={handleVerifyUPI}
                                    disabled={!upiId || isVerified || isTimerActive}
                                    variant={isVerified ? "outline" : "default"}
                                >
                                    {isVerified ? <Check className="text-green-500" /> : "Verify"}
                                </Button>
                            </div>

                            {isVerified && (
                                <div className="flex items-center space-x-2 text-green-600">
                                    <Check className="w-5 h-5" />
                                    <p>UPI ID Verified: {upiId}</p>
                                </div>
                            )}
                        </div>

                        {timer === 0 && (
                            <div className="flex items-center text-red-500 justify-center">
                                <X className="mr-2" />
                                <p>Verification Time Expired</p>
                            </div>
                        )}
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Supported UPI Apps</CardTitle>
                    </CardHeader>
                    <CardContent className="grid grid-cols-3 md:grid-cols-5 gap-4">
                        {[
                            { name: "Google Pay", icon: googlePay },
                            { name: "PhonePe", icon: phonePe },
                            { name: "Paytm", icon: paytm },
                            { name: "Amazon Pay", icon: amazon },
                        ].map((app) => (
                            <div key={app.name} className="flex flex-col items-center">
                                <img
                                    src={app.icon}
                                    alt={app.name}
                                    className="h-12 w-12 object-contain"
                                />
                                <p className="text-xs font-semibold mt-2">{app.name}</p>
                            </div>
                        ))}
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Pay with Card</CardTitle>
                    </CardHeader>
                    <CardContent className="grid gap-4">
                        <div className="grid gap-2 relative">
                            <Label htmlFor="card-number">Card Number</Label>
                            <div className="relative">
                                <Input
                                    id="card-number"
                                    type="text"
                                    placeholder="0000 0000 0000 0000"
                                    className="pr-16"
                                />
                                <div className="absolute inset-y-0 right-0 pr-3 flex items-center space-x-1">
                                    <FaCcVisa className="text-blue-800 w-5 h-5" />
                                    <FaCcMastercard className="text-red-500 w-5 h-5" />
                                    <FaCcAmex className="text-blue-400 w-5 h-5" />
                                    <FaCcDiscover className="text-orange-500 w-5 h-5" />
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="grid gap-2">
                                <Label htmlFor="expiry">Expiry Date</Label>
                                <Input id="expiry" type="text" placeholder="MM/YY" />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="cvv">CVV</Label>
                                <Input id="cvv" type="text" placeholder="123" />
                            </div>
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="cardholder-name">Cardholder Name</Label>
                            <Input id="cardholder-name" type="text" placeholder="John Doe" />
                        </div>
                    </CardContent>
                </Card>
            </div>
            <div className="space-y-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Payment Summary</CardTitle>
                    </CardHeader>
                    <CardContent className="grid gap-4">
                        <div className="flex items-center justify-between">
                            <p>Subtotal</p>
                            <p>Rs 5.00</p>
                        </div>
                        <div className="flex items-center justify-between">
                            <p>Tax</p>
                            <p>Rs 0.00</p>
                        </div>
                        <Separator />
                        <div className="flex items-center justify-between font-medium">
                            <p>Total</p>
                            <p>Rs 5.00</p>
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button
                            className="w-full"
                            variant={'destructive'}
                            onClick={() => setIsDialogOpen(true)}
                        >
                            <AlertCircle /> Pay Now
                        </Button>
                    </CardFooter>

                    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle className='text-2xl text-red-600 font-semibold flex gap-2 justify-center items-center'><AlertCircleIcon className='h-8 w-8' />Membership Fee Notice</DialogTitle>
                            </DialogHeader>
                            <div className="space-y-4">
                                <p>We will start accepting membership fees from <strong className='text-red-500 text-lg '>01.01.2025</strong>.</p>
                                <p>Please pay from this date to enjoy the benefits of Community Contribution.</p>
                            </div>
                            <DialogFooter>
                                <Button onClick={() => setIsDialogOpen(false)}>Close</Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                </Card>
            </div>
        </div>
    )
}
