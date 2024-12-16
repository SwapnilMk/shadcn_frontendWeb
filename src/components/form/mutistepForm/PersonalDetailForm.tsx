import { DatePicker } from "@/components/DatePicker";
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
    phoneNumber: string;
    email: string;
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
    phoneNumber,
    email,
    updateFields,
}: PersonalDetailFormProps) {

    const calculateAge = (dob: Date | undefined): string => {
        if (!dob) return "";
        const today = new Date();
        const birthDate = new Date(dob);
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDifference = today.getMonth() - birthDate.getMonth();
        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age.toString();
    };

    return (
        <FormWrapper title="User Details">
            <div className="grid gap-6">
                {/* Row 1: Name Fields */}
                <div className="text-center text-xs text-muted-foreground text-semibold">* Enter your details exactly given in Aadhaar Card</div>
                <div className="grid grid-cols-3 gap-4">
                    <div>
                        <Label>Title <span className="text-red-700">*</span></Label>
                        <Select
                            required
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
                        <Label>First Name <span className="text-red-700">*</span></Label>
                        <Input
                            placeholder="First name"
                            required
                            value={firstName}
                            onChange={(e) => updateFields({ firstName: e.target.value })}
                        />
                    </div>
                    <div>
                        <Label>Middle Name <span className="text-red-700">*</span></Label>
                        <Input
                            placeholder="Middle name"
                            required
                            value={middleName}
                            onChange={(e) => updateFields({ middleName: e.target.value })}
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-2">
                    <div>
                        <Label>Last Name <span className="text-red-700">*</span></Label>
                        <Input
                            placeholder="Last name"
                            required
                            value={lastName}
                            onChange={(e) => updateFields({ lastName: e.target.value })}
                        />
                    </div>
                </div>


                {/* Row 2: DOB and Age */}
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <Label>Date of Birth <span className="text-red-700">*</span></Label>
                        <DatePicker
                            date={dateOfBirth ? new Date(dateOfBirth) : undefined}
                            setDate={(date) => {
                                updateFields({ dateOfBirth: date ? date.toISOString().split('T')[0] : undefined });
                                updateFields({ age: calculateAge(date) }); // Update age
                            }}
                            endYear={2090}
                        />
                    </div>
                    <div>
                        <Label>Age <span className="text-red-700">*</span></Label>
                        <Input
                            type="number"
                            placeholder="Age"
                            value={age}
                            required
                            readOnly
                        />
                    </div>
                </div>

                {/* Row 3: Additional Fields */}
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <Label>Gender <span className="text-red-700">*</span></Label>
                        <Select
                            onValueChange={(value) => updateFields({ gender: value })}
                            value={gender}
                            required
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
                        {email && (
                            <div>
                                <Label>Phone Number <span className="text-red-700">*</span></Label>
                                <Input
                                    placeholder="Enter phone number"
                                    value={phoneNumber}
                                    required
                                    onChange={(e) => updateFields({ phoneNumber: e.target.value })}
                                />
                            </div>
                        )}
                        {phoneNumber && (
                            <div>
                                <Label>Email Address <span className="text-red-700">*</span></Label>
                                <Input
                                    placeholder="Enter email address"
                                    value={email}
                                    required
                                    onChange={(e) => updateFields({ email: e.target.value })}
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </FormWrapper>
    );
}
