import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FormWrapper } from "./FormWrapper";
import { toast } from "sonner";
import { FileInput } from "@/components/FileInput";

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
                        <FileInput
                            id="aadhaarCard"
                            label="Aadhaar Card"
                            required
                            onChange={(file) => {
                                if (file && !['image/jpeg', 'application/pdf'].includes(file.type)) {
                                    toast.error('Please upload a valid file (JPEG or PDF)');
                                    return;
                                }
                                updateFields({ aadhaarCard: file });
                            }}
                        />

                    </div>

                    <div>
                        <FileInput
                            id="voterCard"
                            label="Voter / Electoral Card"
                            required
                            onChange={(file) => {
                                if (file && !['image/jpeg', 'application/pdf'].includes(file.type)) {
                                    toast.error('Please upload a valid file (JPEG or PDF)');
                                    return;
                                }
                                updateFields({ voterCard: file });
                            }}
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
