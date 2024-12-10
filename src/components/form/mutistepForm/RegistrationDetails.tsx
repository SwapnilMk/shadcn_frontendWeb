import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FormWrapper } from "./FormWrapper";

type RegistrationData = {
    aadharCard: string;
    constituency: string;
    voterId: string;
};

type RegistrationFormProps = RegistrationData & {
    updateFields: (fields: Partial<RegistrationData>) => void;
};

export function RegistrationForm({
    aadharCard,
    constituency,
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
                            <Label htmlFor="voterId">Voter ID</Label>
                            <Input
                                id="voterId"
                                placeholder="Enter Voter ID"
                                value={voterId}
                                onChange={(e) => updateFields({ voterId: e.target.value })}
                            />
                        </div>
                        <div>
                            <Label htmlFor="aadharCard">Aadhar Number</Label>
                            <Input
                                id="aadharCard"
                                placeholder="Enter Aadhar Number"
                                value={aadharCard}
                                onChange={(e) => updateFields({ aadharCard: e.target.value })}
                            />
                        </div>
                    </div>
                </div>

                {/* Row 2: Constituency */}
                <div>
                    <Label htmlFor="constituency">Constituency</Label>
                    <Input
                        id="constituency"
                        placeholder="Enter Constituency"
                        value={constituency}
                        onChange={(e) => updateFields({ constituency: e.target.value })}
                    />
                </div>
            </div>
        </FormWrapper>
    );
}
