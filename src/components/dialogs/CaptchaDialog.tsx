import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import React from 'react';
import ReCAPTCHA from "react-google-recaptcha";

interface CaptchaDialogProps {
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
    onSuccess: () => void;
}

export const CaptchaDialog: React.FC<CaptchaDialogProps> = ({ isOpen, onOpenChange, onSuccess }) => {
    const handleCaptchaChange = (value: string | null) => {
        if (value) {
            onSuccess();
            onOpenChange(false);
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={onOpenChange}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Complete Captcha</DialogTitle>
                </DialogHeader>
                <div className="flex flex-col items-center space-y-4">
                    <ReCAPTCHA
                        sitekey={"6LfQIXwqAAAAALc3l8Yp1jdN8DzrxWRhCbzJW-6P"}
                        onChange={handleCaptchaChange}
                    />
                </div>
            </DialogContent>
        </Dialog>
    );
};