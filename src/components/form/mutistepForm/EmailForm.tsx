import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { InfoIcon, Mail, Phone } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FormWrapper } from "./FormWrapper";

type EmailData = {
    email?: string;
    phoneNumber?: string;
    termsAccepted?: boolean;
    partyObjectivesAccepted?: boolean;
};

type EmailFormProps = EmailData & {
    updateFields: (fields: Partial<EmailData>) => void;
};

export function EmailForm({ email, phoneNumber, updateFields }: EmailFormProps) {
    const [isTermsDialogOpen, setTermsDialogOpen] = useState(false);
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [partyObjectivesAccepted, setPartyObjectivesAccepted] = useState(false);

    const [inputValue, setInputValue] = useState(email || phoneNumber || '');

    const handleInputChange = (value: string) => {
        // Regular expressions for validation
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        const phoneRegex = /^[6-9]\d{9}$/; // Indian mobile number format

        // Update local input state
        setInputValue(value);

        // Detect input type
        if (emailRegex.test(value)) {
            updateFields({ email: value, phoneNumber: "" });
        } else if (phoneRegex.test(value)) {
            // Automatically prepend +91 if not already present
            const formattedPhoneNumber = value.startsWith("+91") ? value : `+91${value}`;
            setInputValue(formattedPhoneNumber); // Update local input state with +91
            updateFields({ phoneNumber: formattedPhoneNumber, email: "" });
        } else {
            updateFields({ email: "", phoneNumber: "" });
        }
    };

    const handleTermsClick = () => {
        setTermsDialogOpen(true);
    };

    const handleTermsAcceptance = (checked: boolean) => {
        setTermsAccepted(checked);
        updateFields({ termsAccepted: checked });
    };

    const handlePartyObjectivesAcceptance = (checked: boolean) => {
        setPartyObjectivesAccepted(checked);
        updateFields({ partyObjectivesAccepted: checked });
    };

    return (
        <FormWrapper title="Contact Information">
            <div className="flex items-center">
                <Label className="mr-2">Email/Phone Number <span className="text-red-700">*</span></Label>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <InfoIcon className="h-4 w-4 text-muted-foreground" />
                        </TooltipTrigger>
                        <TooltipContent side="right" align="center">
                            <p>Enter either your email or phone number</p>
                            <p>for OTP verification.</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </div>
            <div className="relative">
                <Input
                    autoFocus
                    type="text"
                    value={inputValue}
                    placeholder="Email or Phone Number"
                    onChange={(e) => handleInputChange(e.target.value)}
                />
                <div className="pointer-events-none absolute inset-y-0 end-0 flex items-center justify-center pe-3 text-muted-foreground/80 peer-disabled:opacity-50">
                    {email && <Mail size={16} strokeWidth={2} aria-hidden="true" />}
                    {phoneNumber && <Phone size={16} strokeWidth={2} aria-hidden="true" />}
                </div>
            </div>
            <div className="flex flex-row items-center space-x-3 space-y-0">
                <Checkbox
                    checked={termsAccepted}
                    onCheckedChange={handleTermsAcceptance}
                />
                <div className="leading-none">
                    <Label className="text-sm">
                        I accept the Bharatiya Popular Party's Membership,{" "}
                        <span
                            className="underline cursor-pointer text-blue-600"
                            onClick={handleTermsClick}>
                            Terms & Conditions
                        </span>{" "}
                        & Constitution and also confirm that I am 18+ and not a member of any other political party.
                    </Label>
                </div>
            </div>
            <div className="flex flex-row items-center space-x-3 space-y-0">
                <Checkbox
                    checked={partyObjectivesAccepted}
                    onCheckedChange={handlePartyObjectivesAcceptance}
                />
                <div className="leading-none">
                    <Label className="text-sm">
                        I wish to enroll as a Primary Member of the Bharatiya Popular Party and accept  <Link to='/about/bpp-goals' target="_blank" className="underline cursor-pointer text-blue-600">Party's Objectives.</Link>
                    </Label>
                </div>
            </div>

            <div className="text-xs text-center text-red-500 font-semibold">* Keep your Aadhaar & Voter Id handy, before Proceeding</div>
            <TermsDialog isOpen={isTermsDialogOpen} onOpenChange={setTermsDialogOpen} />
        </FormWrapper>
    );
}

interface TermsDialogProps {
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
}

const TermsDialog: React.FC<TermsDialogProps> = ({ isOpen, onOpenChange }) => {
    return (
        <Dialog open={isOpen} onOpenChange={onOpenChange}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="text-3xl font-semibold text-blue-700">
                        Terms & conditions
                    </DialogTitle>
                </DialogHeader>
                <div className="space-y-4 text-sm text-neutral-700 leading-relaxed">
                    <p className="font-bold text-base text-gray-900"> IMPORTANT – PLEASE READ CAREFULLY</p>
                    <p>
                        These Terms of Service and Conditions ("Terms") represent a legally binding agreement between you
                        and the <span className="font-semibold">Bharatiya Popular Party ("Party")</span> regarding your use of the Bharatiya Popular Party
                        website. By using the website, you acknowledge that you have read, understood, and agree to comply
                        with these Terms. <span className="font-semibold">If you do not agree, please do not use the Service.</span>
                    </p>
                    <p>
                        The Party may update these Terms periodically. Any changes to these Terms will be posted on the
                        Party's official website, <a target="_blank" href="https://www.bppindia.com" className="text-blue-500 underline">www.bppindia.com</a>. If you do not agree with any updates, you may
                        discontinue use and uninstall the Service at any time. By continuing to use the Service after
                        changes are made, you acknowledge your acceptance of the revised Terms.
                    </p>
                </div>
            </DialogContent>
        </Dialog>
    )

}
