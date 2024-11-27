import { useState, useEffect } from 'react';
import confetti from "canvas-confetti";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';

const WelcomeDialog = () => {
    const navigate = useNavigate()
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        const end = Date.now() + 3 * 1000; // 3 seconds
        const colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1"];
        const frame = () => {
            if (Date.now() > end) return;

            confetti({
                particleCount: 2,
                angle: 60,
                spread: 55,
                startVelocity: 60,
                origin: { x: 0, y: 0.5 },
                colors: colors,
            });
            confetti({
                particleCount: 2,
                angle: 120,
                spread: 55,
                startVelocity: 60,
                origin: { x: 1, y: 0.5 },
                colors: colors,
            });

            requestAnimationFrame(frame);
        };

        frame();
    };

    useEffect(() => {
        // Open dialog automatically when component renders
        setIsOpen(true);
    }, []);

    useEffect(() => {
        // Trigger confetti when dialog opens
        if (isOpen) {
            handleClick();
        }
    }, [isOpen]);

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogContent className="sm:max-w-[475px]">
                <DialogHeader>
                    <DialogTitle className='text-3xl font-bold'>Congratulations!!!</DialogTitle>
                    <DialogDescription className='font-semibold text-lg'>
                        You have successfully joined the BPP platform.
                    </DialogDescription>
                </DialogHeader>
                <div className="py-2">
                    <p className="text-sm text-muted-foreground">
                        To become a primary member and unlock the access to our services, please pay the joining fee of <span className='font-bold'>Rs. 5/-.</span>  This will give you the access to the platform and enable you to avail membership benefits, including counselling on legal, professional, and educational matters.
                    </p>
                </div>

                <DialogFooter>
                    <Button
                        variant="outline"
                        onClick={() => setIsOpen(false)}
                    >
                        Cancel
                    </Button>
                    <Button
                        onClick={() => {
                            navigate('/dashboard/add-fund')
                            // alert('Payment processing');
                        }}
                    >
                        Pay Now
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

export default WelcomeDialog;