import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FormWrapper } from "./FormWrapper";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

type EducationalDetailsData = {
    qualification: string;
    profession: string;
    position: string;
};

type EducationalDetailsFormProps = EducationalDetailsData & {
    updateFields: (fields: Partial<EducationalDetailsData>) => void;
};

const EducationalDetailsForm: React.FC<EducationalDetailsFormProps> = ({
    qualification,
    profession,
    position,
    updateFields,
}) => {
    return (
        <FormWrapper title="Educational Details">
            <div className="grid gap-4">
                {/* Qualification */}
                <div>
                    <Label htmlFor="qualification">Qualification</Label>
                    <Input
                        id="qualification"
                        required
                        placeholder="Enter your qualification"
                        value={qualification}
                        onChange={(e) => updateFields({ qualification: e.target.value })}
                    />
                </div>

                {/* Profession */}
                <div>
                    <Label htmlFor="profession">Profession</Label>
                    <Select
                        required
                        onValueChange={(value) => updateFields({ profession: value })}
                        value={profession}
                    >
                        <SelectTrigger>
                            <SelectValue placeholder="Select profession" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Medical">Medical</SelectItem>
                            <SelectItem value="Legal">Legal</SelectItem>
                            <SelectItem value="Social">Social</SelectItem>
                            <SelectItem value="Other">Other</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                {/* Position */}
                <div>
                    <Label htmlFor="position">Position</Label>
                    <Input
                        id="position"
                        required
                        placeholder="Enter your position"
                        value={position}
                        onChange={(e) => updateFields({ position: e.target.value })}
                    />
                </div>
            </div>
        </FormWrapper>
    );
};

export default EducationalDetailsForm;
