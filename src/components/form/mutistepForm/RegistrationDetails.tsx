import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FormWrapper } from "./FormWrapper";
import { Checkbox } from "@/components/ui/checkbox";

type RegistrationData = {
    aadharCard: string;
    voterId: string;
};

type RegistrationFormProps = RegistrationData & {
    updateFields: (fields: Partial<RegistrationData>) => void;
};

export function RegistrationForm({
    aadharCard,
    voterId,
    updateFields,
}: RegistrationFormProps) {
    return (
        <FormWrapper title="User Details">
            <div className="grid gap-6">
                {/* Row 1: Name Fields */}
                <div className="grid grid-cols-1 gap-4">
                    <div className="grid grid-cols-1 gap-4">
                        <div>
                            <Label htmlFor="voterId">Voter ID / Electoral Card <span className="text-red-700">*</span></Label>
                            <Input
                                id="voterId"
                                placeholder="Enter Voter ID"
                                value={voterId}
                                onChange={(e) => updateFields({ voterId: e.target.value })}
                            />
                        </div>
                        <div>
                            <Label htmlFor="aadharCard">Aadhar Number <span className="text-red-700">*</span></Label>
                            <Input
                                id="aadharCard"
                                placeholder="Enter Aadhar Number"
                                value={aadharCard}
                                onChange={(e) => updateFields({ aadharCard: e.target.value })}
                            />
                        </div>

                        <div>
                            <Label htmlFor="aadharCard">Aadhar Card <span className="text-red-700">*</span></Label>
                            <Input
                                type="file"
                            />
                        </div>

                        <div>
                            <Label htmlFor="aadharCard">Voter / Electoral Card <span className="text-red-700">*</span></Label>
                            <Input
                                type="file"
                            />
                        </div>

                        <div>If you wish to serve a community as a professional?</div>
                        <div className="flex gap-4">
                            <Label>
                                <Checkbox id="yes" />
                                Yes
                            </Label>
                            <Label>
                                <Checkbox id="no" />
                                No
                            </Label>
                        </div>

                        <div className="text-xs text-center text-red-500 font-semibold">* upload clear image of Aadhaar and voter id</div>
                    </div>
                </div>

            </div>
        </FormWrapper>
    );
}
