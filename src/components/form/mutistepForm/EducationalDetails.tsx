import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FormWrapper } from "./FormWrapper";

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
                        placeholder="Enter your qualification"
                        value={qualification}
                        onChange={(e) => updateFields({ qualification: e.target.value })}
                    />
                </div>

                {/* Profession */}
                <div>
                    <Label htmlFor="profession">Profession</Label>
                    <Input
                        id="profession"
                        placeholder="Enter your profession"
                        value={profession}
                        onChange={(e) => updateFields({ profession: e.target.value })}
                    />
                </div>

                {/* Position */}
                <div>
                    <Label htmlFor="position">Position</Label>
                    <Input
                        id="position"
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
