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
                <div className="text-xs text-center text-muted-foreground font-semibold">
                    * Providing your Aadhar card details is mandatory for completing this process.
                </div>
                <div className="grid grid-cols-2 gap-4">
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
                </div>
                <div className="flex items-center">
                    <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent h-[1px] w-full" />
                    <span className="mx-4 text-neutral-500 dark:text-neutral-400">or</span>
                    <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent h-[1px] w-full" />
                </div>
                <div className="text-xs text-center text-muted-foreground font-semibold">
                    * Providing your Voter ID card details is optional.
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <Label htmlFor="voterId">Voter ID / Electoral Card </Label>
                        <Input
                            id="voterId"
                            placeholder="Enter Voter ID"
                            value={voterId}
                            onChange={(e) => updateFields({ voterId: e.target.value })}
                        />
                    </div>
                    <div>
                        <FileInput
                            id="voterCard"
                            label="Voter / Electoral Card"
                            onChange={(file) => {
                                if (file && !['image/jpeg', 'application/pdf'].includes(file.type)) {
                                    toast.error('Please upload a valid file (JPEG or PDF)');
                                    return;
                                }
                                updateFields({ voterCard: file });
                            }}
                        />
                    </div>
                </div>
                <div>If you wish to serve the community as a professional?</div>
                <div className="flex gap-4">
                    <Label>
                        <Checkbox
                            id="yes"
                            className="mx-2"
                        />
                        Yes
                    </Label>
                    <Label>
                        <Checkbox
                            id="no"
                            className="mx-2"
                        />
                        No
                    </Label>
                </div>
                <div className="text-xs text-center text-red-500 font-semibold">
                    * upload clear image of Aadhaar and voter ID
                </div>
            </div>
        </FormWrapper>
    );
}
