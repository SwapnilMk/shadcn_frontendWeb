import { Input } from "@/components/ui/input";
import React from "react";
import { FormWrapper } from "./FormWrapper";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

type UserDetailsFormProps = {
    firstName: string;
    middleName: string;
    lastName: string;
    dateOfBirth: string;
    age: string;
    gender: string;
    phone: string;
    voterId: string;
    aadharCard: string;
    setFieldValue: (field: string, value: string) => void;
};

const UserDetailsForm: React.FC<UserDetailsFormProps> = ({
    firstName,
    middleName,
    lastName,
    dateOfBirth,
    age,
    gender,
    phone,
    voterId,
    aadharCard,
    setFieldValue,
}) => {
    return (
        <FormWrapper title="User Details">
            <div className="grid gap-6">
                {/* Row 1: Name Fields */}
                <div className="grid grid-cols-3 gap-4">
                    <div>
                        <Label>First Name</Label>
                        <Input
                            placeholder="First name"
                            value={firstName}
                            onChange={(e) => setFieldValue("firstName", e.target.value)}
                        />
                    </div>
                    <div>
                        <Label>Middle Name</Label>
                        <Input
                            placeholder="Middle name"
                            value={middleName}
                            onChange={(e) => setFieldValue("middleName", e.target.value)}
                        />
                    </div>
                    <div>
                        <Label>Last Name</Label>
                        <Input
                            placeholder="Last name"
                            value={lastName}
                            onChange={(e) => setFieldValue("lastName", e.target.value)}
                        />
                    </div>
                </div>

                {/* Row 2: DOB and Age */}
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <Label>Date of Birth</Label>
                        <Input
                            type="date"
                            value={dateOfBirth}
                            onChange={(e) => setFieldValue("dateOfBirth", e.target.value)}
                        />
                    </div>
                    <div>
                        <Label>Age</Label>
                        <Input
                            type="number"
                            placeholder="Age"
                            value={age}
                            onChange={(e) => setFieldValue("age", e.target.value)}
                        />
                    </div>
                </div>

                {/* Row 3: Additional Fields */}
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <Label>Gender</Label>
                        <Select
                            onValueChange={(value) => setFieldValue("gender", value)}
                            defaultValue={gender}
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Select gender" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="male">Male</SelectItem>
                                <SelectItem value="female">Female</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div>
                        <Label>Phone Number</Label>
                        <Input
                            placeholder="Enter phone number"
                            value={phone}
                            onChange={(e) => setFieldValue("phone", e.target.value)}
                        />
                    </div>
                </div>

                {/* Row 4: IDs */}
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <Label>Voter ID</Label>
                        <Input
                            placeholder="Enter Voter ID"
                            value={voterId}
                            onChange={(e) => setFieldValue("voterId", e.target.value)}
                        />
                    </div>
                    <div>
                        <Label>Aadhar Number</Label>
                        <Input
                            placeholder="Enter Aadhar Number"
                            value={aadharCard}
                            onChange={(e) => setFieldValue("aadharCard", e.target.value)}
                        />
                    </div>
                </div>
            </div>
        </FormWrapper>
    );
};

export default UserDetailsForm;
