import { Checkbox } from "@/components/ui/checkbox";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { InfoIcon } from "lucide-react";
import { useState } from "react";
import { FormWrapper } from "./FormWrapper";
import { Link } from "react-router-dom";

type EmailData = {
    email: string;
    termsAccepted?: boolean;
    partyObjectivesAccepted?: boolean;
};

type EmailFormProps = EmailData & {
    updateFields: (fields: Partial<EmailData>) => void;
};

export function EmailForm({ email, updateFields }: EmailFormProps) {
    const [isTermsDialogOpen, setTermsDialogOpen] = useState(false);
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [partyObjectivesAccepted, setPartyObjectivesAccepted] = useState(false);

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
        <FormWrapper title="Email" >
            <div className="flex items-center">
                <Label className="mr-2">Email/Phone Number <span className="text-red-700">*</span></Label>
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <InfoIcon className="h-4 w-4 text-muted-foreground" />
                        </TooltipTrigger>
                        <TooltipContent side="right" align="center">
                            <p>The email or phone number</p>
                            <p>will be used for OTP verification.</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </div>
            <Input
                autoFocus
                type="text"
                value={email}
                placeholder="Email/Phone Number"
                onChange={(e) => updateFields({ email: e.target.value })} />
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
