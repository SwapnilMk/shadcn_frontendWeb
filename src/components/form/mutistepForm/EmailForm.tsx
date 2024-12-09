import { TermsDialog } from "@/components/dialogs/TermsDialog";
import { Checkbox } from "@/components/ui/checkbox";
import { FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";
import { FormWrapper } from "./FormWrapper";

type EmailFormProps = {
    email: string;
    setEmail: (email: string) => void;
};

const EmailForm: React.FC<EmailFormProps> = ({ email, setEmail }) => {
    const [isChecked, setIsChecked] = useState(false);

    return (
        <FormWrapper title="Email">
            <Label>Email/Phone Number</Label>
            <Input
                placeholder="Email/Phone Number"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <div className="flex flex-row items-start space-x-3 space-y-0">
                <Checkbox />
                <div className="space-y-1 leading-none">
                    <Label className="text-sm">
                        By creating an account, I agree to Bharatiya Popular Party{" "}
                        <span
                            className="underline cursor-pointer text-blue-600"
                        // onClick={() => setTermsDialog("terms")}
                        >
                            Terms of Service
                        </span>{" "}
                        and{" "}
                        <span
                            className="underline cursor-pointer text-blue-600"
                        // onClick={() => setTermsDialog("privacy")}
                        >
                            Privacy Policy
                        </span>
                    </Label>
                </div>
            </div>
            <div className="flex flex-row items-start space-x-3 space-y-0">

                <Checkbox />
                <div className="space-y-1 leading-none">
                    <Label className="text-sm">
                        Eligible for individuals 18 years and above.
                    </Label>
                </div>
            </div>
        </FormWrapper>
    );
};

export default EmailForm;

const TermsFormField: React.FC = () => {
    const [termsDialog, setTermsDialog] = React.useState<"terms" | "privacy" | null>(null);

    return (
        <>
            <div className="flex flex-row items-start space-x-3 space-y-0">
                <Checkbox />
                <div className="space-y-1 leading-none">
                    <Label className="text-sm">
                        By creating an account, I agree to Bharatiya Popular Party{" "}
                        <span
                            className="underline cursor-pointer text-blue-600"
                            onClick={() => setTermsDialog("terms")}
                        >
                            Terms of Service
                        </span>{" "}
                        and{" "}
                        <span
                            className="underline cursor-pointer text-blue-600"
                            onClick={() => setTermsDialog("privacy")}
                        >
                            Privacy Policy
                        </span>
                    </Label>
                </div>
            </div>
            <TermsDialog
                isOpen={!!termsDialog}
                onOpenChange={(open) => setTermsDialog(open ? termsDialog : null)}
                type={termsDialog || "terms"}
            />
        </>
    );
};

type AgeFormFieldProps = {
    isChecked: boolean;
    setIsChecked: (checked: boolean) => void;
};

const AgeFormField: React.FC<AgeFormFieldProps> = ({ isChecked, setIsChecked }) => {
    return (
        <FormField
            name="age"
            render={() => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl className="mt-1">
                        <Checkbox checked={isChecked} onCheckedChange={setIsChecked} />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                        <FormLabel className="text-sm">
                            Eligible for individuals 18 years and above.
                        </FormLabel>
                    </div>
                </FormItem>
            )}
        />
    );
};
