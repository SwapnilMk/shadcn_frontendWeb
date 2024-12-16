import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle
} from "@/components/ui/dialog";
import { useNavigate } from 'react-router-dom';

const PayDialog = () => {
    const navigate = useNavigate();

    return (
        <Dialog open={true}>
            <DialogContent className="sm:max-w-[575px] p-6">
                <DialogHeader>
                    <DialogTitle className="text-3xl font-bold text-center">Pay Now to use Our services</DialogTitle>
                    <DialogDescription className="font-semibold text-lg text-center mb-4">
                        You have successfully joined the BPP platform.
                    </DialogDescription>
                </DialogHeader>
                <div className="py-4">
                    <p className="text-lg text-muted-foreground leading-relaxed">
                        Bharatiya Public Party is committed to provide you with the benefits of Community Contribution. 
                        By paying this nominal fee of ₹5, you will gain access to valuable services like counselling and 
                        support on medical, legal, educational and social issues.
                    </p>
                </div>

                <DialogFooter className="space-x-4">
                    <Button
                        onClick={() => {
                            navigate('/dashboard/add-fund');
                        }}
                        className="w-full sm:w-auto"
                    >
                        Pay Now
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}

export default PayDialog;
