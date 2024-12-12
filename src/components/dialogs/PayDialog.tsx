import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle
} from "@/components/ui/dialog";
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PayDialog = () => {
    const navigate = useNavigate()
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Open dialog automatically when component renders
        setIsOpen(true);
    }, []);

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogContent className="sm:max-w-[575px]">
                <DialogHeader>
                    <DialogTitle className='text-3xl font-bold'>Pay Now to use Our services</DialogTitle>
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
                        }}
                    >
                        Pay Now
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

export default PayDialog;