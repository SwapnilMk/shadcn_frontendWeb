import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FormWrapper } from "./FormWrapper";

type RegistrationData = {
    aadhaarNumber: string;
    voterId: string;
    aadhaarCard: File | null;
    voterCard: File | null;
};

type RegistrationFormProps = RegistrationData & {
    updateFields: (fields: Partial<RegistrationData>) => void;
};

export function RegistrationForm({
    aadhaarNumber,
    voterId,
    updateFields,
}: RegistrationFormProps) {
    // Handler to update file input
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, field: 'aadhaarCard' | 'voterCard') => {
        const file = e.target.files?.[0] || null;
        updateFields({ [field]: file });
    };



    return (
        <FormWrapper title="User Details">
            <div className="grid gap-6">
                {/* Row 1: Name Fields */}
                <div className="grid grid-cols-1 gap-4">
                    <div>
                        <Label htmlFor="voterId">Voter ID / Electoral Card <span className="text-red-700">*</span></Label>
                        <Input
                            id="voterId"
                            placeholder="Enter Voter ID"
                            value={voterId}
                            required
                            onChange={(e) => updateFields({ voterId: e.target.value })}
                        />
                    </div>
                    <div>
                        <Label htmlFor="aadhaarNumber">Aadhaar Number <span className="text-red-700">*</span></Label>
                        <Input
                            id="aadhaarNumber"
                            placeholder="Enter Aadhaar Number"
                            value={aadhaarNumber}
                            required
                            onChange={(e) => updateFields({ aadhaarNumber: e.target.value })}
                        />
                    </div>

                    <div>
                        <Label htmlFor="aadhaarCard">Aadhar Card <span className="text-red-700">*</span></Label>
                        <Input
                            type="file"
                            id="aadhaarCard"
                            required
                            onChange={(e) => handleFileChange(e, 'aadhaarCard')}
                        />
                    </div>

                    <div>
                        <Label htmlFor="voterCard">Voter / Electoral Card <span className="text-red-700">*</span></Label>
                        <Input
                            type="file"
                            id="voterCard"
                            required
                            onChange={(e) => handleFileChange(e, 'voterCard')}
                        />
                    </div>

                    <div>If you wish to serve a community as a professional?</div>
                    <div className="flex gap-4">
                        <Label>
                            <Checkbox
                                id="yes"
                            />
                            Yes
                        </Label>
                        <Label>
                            <Checkbox
                                id="no"
                            />
                            No
                        </Label>
                    </div>

                    <div className="text-xs text-center text-red-500 font-semibold">
                        * upload clear image of Aadhaar and voter ID
                    </div>
                </div>
            </div>
        </FormWrapper>
    );
}
