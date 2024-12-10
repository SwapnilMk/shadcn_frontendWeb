import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { FormWrapper } from "./FormWrapper";

type PersonalDetailData = {
    title: string;
    firstName: string;
    middleName: string;
    lastName: string;
    dateOfBirth: string;
    age: string;
    gender: string;
    phone: string;
};

type PersonalDetailFormProps = PersonalDetailData & {
    updateFields: (fields: Partial<PersonalDetailData>) => void;
};

export function PersonalDetailForm({
    title,
    firstName,
    middleName,
    lastName,
    dateOfBirth,
    age,
    gender,
    phone,
    updateFields,
}: PersonalDetailFormProps) {
    return (
        <FormWrapper title="User Details">
            <div className="grid gap-6">
                {/* Row 1: Name Fields */}
                <div className="grid grid-cols-3 gap-4">
                    <div>
                        <Label>Title</Label>
                        <Select
                            onValueChange={(value) => updateFields({ title: value })}
                            value={title}
                        >
                            <SelectTrigger>
                                <SelectValue placeholder="Select title" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Mr">Mr</SelectItem>
                                <SelectItem value="Ms">Ms</SelectItem>
                                <SelectItem value="Mrs">Mrs</SelectItem>
                                <SelectItem value="Dr">Dr</SelectItem>
                                <SelectItem value="CA">CA</SelectItem>
                                <SelectItem value="CS">CS</SelectItem>
                                <SelectItem value="Adv">Adv</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <div>
                        <Label>First Name</Label>
                        <Input
                            placeholder="First name"
                            value={firstName}
                            onChange={(e) => updateFields({ firstName: e.target.value })}
                        />
                    </div>
                    <div>
                        <Label>Middle Name</Label>
                        <Input
                            placeholder="Middle name"
                            value={middleName}
                            onChange={(e) => updateFields({ middleName: e.target.value })}
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-2">
                    <div>
                        <Label>Last Name</Label>
                        <Input
                            placeholder="Last name"
                            value={lastName}
                            onChange={(e) => updateFields({ lastName: e.target.value })}
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
                            onChange={(e) => updateFields({ dateOfBirth: e.target.value })}
                        />
                    </div>
                    <div>
                        <Label>Age</Label>
                        <Input
                            type="number"
                            placeholder="Age"
                            value={age}
                            onChange={(e) => updateFields({ age: e.target.value })}
                        />
                    </div>
                </div>

                {/* Row 3: Additional Fields */}
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <Label>Gender</Label>
                        <Select
                            onValueChange={(value) => updateFields({ gender: value })}
                            value={gender}
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
                            onChange={(e) => updateFields({ phone: e.target.value })}
                        />
                    </div>
                </div>
            </div>
        </FormWrapper>
    );
}
