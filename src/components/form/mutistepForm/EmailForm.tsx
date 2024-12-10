import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FormWrapper } from "./FormWrapper";

type EmailData = {
    email: string;
};

type EmailFormProps = EmailData & {
    updateFields: (fields: Partial<EmailData>) => void;
};

export function EmailForm({ email, updateFields }: EmailFormProps) {
    return (
        <FormWrapper title="Email">
            <Label>Email/Phone Number</Label>
            <Input
                autoFocus
                required
                type="text"
                value={email}
                placeholder="Email/Phone Number"
                onChange={(e) => updateFields({ email: e.target.value })} />
            <div className="flex flex-row items-center space-x-3 space-y-0">
                <Checkbox />
                <div className="leading-none">
                    <Label className="text-sm">
                        I accept the Bharatiya Popular Party's Membership,{" "}
                        <span className="underline cursor-pointer text-blue-600">
                            Terms & Conditions
                        </span>{" "}
                       & Constitution and also confirm that I am 18+ and not a member of any other political party.
                    </Label>
                </div>
            </div>
            <div className="flex flex-row items-center space-x-3 space-y-0">
                <Checkbox />
                <div className="leading-none">
                    <Label className="text-sm">
                        I wish to enroll as a Primary Member of the Bharatiya Popular Party and accept Article 2 (Objectives) of its Constitution.
                    </Label>
                </div>
            </div>

        </FormWrapper>
    );
}
