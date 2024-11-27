import { ContentLayout } from '@/components/admin-panel/content-layout'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import DashboardLayout from '@/layout/DashboardLayout'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const CaseRegistrationForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        membershipId: '',
        emailAddress: '',
        phoneNumber: '',
        issueTitle: '',
        issueDescription: '',
        supportTypes: [],
        otherSupportType: '',
        supportDescription: '',
        previousSupport: '',
        consent: false
    });

    // const [errors, setErrors] = useState({});
    // const [submitted, setSubmitted] = useState(false);

    const supportTypeOptions = [
        { value: 'financial', label: 'Financial Assistance' },
        { value: 'resources', label: 'Resources (e.g., food, clothes, books, wheelchairs)' },
        { value: 'counselling', label: 'Counselling (psychological)' },
        { value: 'advocacy', label: 'Advocacy or Legal Support' },
        { value: 'social', label: 'Social Assistance (Marriage, House, etc)' },
        { value: 'education', label: 'Education (Scholarship, Higher Studies, Admissions)' },
        { value: 'other', label: 'Other' }
    ];

    // const validateForm = () => {
    //     const newErrors = {};

    //     if (!formData.fullName.trim()) {
    //         newErrors.fullName = 'Full Name is required';
    //     }

    //     if (!formData.emailAddress.trim()) {
    //         newErrors.emailAddress = 'Email Address is required';
    //     } else if (!/\S+@\S+\.\S+/.test(formData.emailAddress)) {
    //         newErrors.emailAddress = 'Email Address is invalid';
    //     }

    //     if (!formData.phoneNumber.trim()) {
    //         newErrors.phoneNumber = 'Phone Number is required';
    //     } else if (!/^\+?[0-9]{10,14}$/.test(formData.phoneNumber)) {
    //         newErrors.phoneNumber = 'Phone Number is invalid';
    //     }

    //     if (!formData.issueTitle) {
    //         newErrors.issueTitle = 'Issue Title is required';
    //     }

    //     if (!formData.issueDescription.trim()) {
    //         newErrors.issueDescription = 'Issue Description is required';
    //     }

    //     if (formData.supportTypes.length === 0) {
    //         newErrors.supportTypes = 'Please select at least one support type';
    //     }

    //     if (formData.supportTypes.includes('other') && !formData.otherSupportType.trim()) {
    //         newErrors.otherSupportType = 'Please specify the other support type';
    //     }

    //     if (!formData.supportDescription.trim()) {
    //         newErrors.supportDescription = 'Support Description is required';
    //     }

    //     if (!formData.consent) {
    //         newErrors.consent = 'You must provide consent to submit the form';
    //     }

    //     setErrors(newErrors);
    //     return Object.keys(newErrors).length === 0;
    // };

    const handleSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        // if (validateForm()) {
        //     // Here you would typically send the form data to a backend service
        //     console.log('Form submitted:', formData);
        //     setSubmitted(true);
        // }
    };

    const handleChange = (e: { target: { name: any; value: any } }) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSupportTypeChange = (_type: string) => {
        // setFormData(prevState => {
        //     const currentTypes = prevState.supportTypes;
        //     const newTypes = currentTypes.includes(type)
        //         ? currentTypes.filter(t => t !== type)
        //         : [...currentTypes, type];
        //     return { ...prevState, supportTypes: newTypes };
        // });
    };

    // if (submitted) {
    //     return (
    //         <ContentLayout title="Case Registration">
    //             <div className="max-w-2xl mx-auto mt-8">
    //                 <Alert variant="default">
    //                     <AlertCircle className="h-4 w-4" />
    //                     <AlertTitle>Form Submitted Successfully</AlertTitle>
    //                     <AlertDescription>
    //                         Thank you for submitting your case. Our community will review your request and get back to you soon.
    //                     </AlertDescription>
    //                 </Alert>
    //             </div>
    //         </ContentLayout>
    //     );
    // }

    return (
        <DashboardLayout>
        <ContentLayout title="Dashboard">
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink asChild>
                            <Link to="/">Dashboard</Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbLink asChild>
                            <Link to="/dashboard/donate">Community Contribution</Link>
                        </BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage>Register case</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
            <div className="max-w-2xl mx-auto mt-8">
                <Card>
                    <CardHeader>
                        <CardTitle>Community Contribution: Case Registration</CardTitle>
                        <CardDescription>
                            Please provide detailed information about the issue you are facing and the support you are seeking.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-4">
                                <h3 className="text-lg font-semibold">1. Personal Information</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <Label htmlFor="fullName">Full Name</Label>
                                        <Input 
                                            id="fullName" 
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            placeholder="Enter your full name"
                                        />
                                        {/* {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>} */}
                                    </div>
                                    <div>
                                        <Label htmlFor="membershipId">Membership ID (optional)</Label>
                                        <Input 
                                            id="membershipId" 
                                            name="membershipId"
                                            value={formData.membershipId}
                                            onChange={handleChange}
                                            placeholder="Enter membership ID"
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <Label htmlFor="emailAddress">Email Address</Label>
                                        <Input 
                                            id="emailAddress" 
                                            type="email"
                                            name="emailAddress"
                                            value={formData.emailAddress}
                                            onChange={handleChange}
                                            placeholder="Enter your email"
                                        />
                                        {/* {errors.emailAddress && <p className="text-red-500 text-sm mt-1">{errors.emailAddress}</p>} */}
                                    </div>
                                    <div>
                                        <Label htmlFor="phoneNumber">Phone Number</Label>
                                        <Input 
                                            id="phoneNumber" 
                                            type="tel"
                                            name="phoneNumber"
                                            value={formData.phoneNumber}
                                            onChange={handleChange}
                                            placeholder="Enter your phone number"
                                        />
                                        {/* {errors.phoneNumber && <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>} */}
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-lg font-semibold">2. Case Details</h3>
                                <div>
                                    <Label htmlFor="issueTitle">Title of the Issue</Label>
                                    <Select
                                        name="issueTitle"
                                        onValueChange={(value) => setFormData(prev => ({...prev, issueTitle: value}))}
                                    >
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select issue category" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="medical">Medical</SelectItem>
                                            <SelectItem value="legal">Legal</SelectItem>
                                            <SelectItem value="educational">Educational</SelectItem>
                                            <SelectItem value="social">Social</SelectItem>
                                            <SelectItem value="other">Other</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    {/* {errors.issueTitle && <p className="text-red-500 text-sm mt-1">{errors.issueTitle}</p>} */}
                                </div>
                                <div>
                                    <Label htmlFor="issueDescription">Detailed Description of the Issue</Label>
                                    <Textarea 
                                        id="issueDescription"
                                        name="issueDescription"
                                        value={formData.issueDescription}
                                        onChange={handleChange}
                                        placeholder="Provide a detailed description of the issue you are facing"
                                        rows={4}
                                    />
                                    {/* {errors.issueDescription && <p className="text-red-500 text-sm mt-1">{errors.issueDescription}</p>} */}
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-lg font-semibold">3. Type of Support Needed</h3>
                                <div>
                                    <Label>Select Support Types</Label>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
                                        {supportTypeOptions.map(option => (
                                            <div key={option.value} className="flex items-center space-x-2">
                                                <Checkbox
                                                    id={option.value}
                                                    // checked={formData.supportTypes.includes(option.value)}
                                                    onCheckedChange={() => handleSupportTypeChange(option.value)}
                                                />
                                                <Label htmlFor={option.value} className="text-sm">{option.label}</Label>
                                            </div>
                                        ))}
                                    </div>
                                    {/* {errors.supportTypes && <p className="text-red-500 text-sm mt-1">{errors.supportTypes}</p>} */}

                                    {/* {formData.supportTypes.includes('other') && ( */}
                                        <div className="mt-4">
                                            <Label htmlFor="otherSupportType">Specify Other Support Type</Label>
                                            <Input 
                                                id="otherSupportType"
                                                name="otherSupportType"
                                                value={formData.otherSupportType}
                                                onChange={handleChange}
                                                placeholder="Enter other support type"
                                            />
                                            {/* {errors.otherSupportType && <p className="text-red-500 text-sm mt-1">{errors.otherSupportType}</p>} */}
                                        </div>
                                    {/* )} */}
                                </div>
                                <div>
                                    <Label htmlFor="supportDescription">Describe Support Needed</Label>
                                    <Textarea 
                                        id="supportDescription"
                                        name="supportDescription"
                                        value={formData.supportDescription}
                                        onChange={handleChange}
                                        placeholder="Provide more information about how the community can assist you"
                                        rows={4}
                                    />
                                    {/* {errors.supportDescription && <p className="text-red-500 text-sm mt-1">{errors.supportDescription}</p>} */}
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-lg font-semibold">4. Additional Information</h3>
                                <div>
                                    <Label htmlFor="previousSupport">Previous Support Received</Label>
                                    <Textarea 
                                        id="previousSupport"
                                        name="previousSupport"
                                        value={formData.previousSupport}
                                        onChange={handleChange}
                                        placeholder="Have you received support from any other individual or institution?"
                                        rows={3}
                                    />
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h3 className="text-lg font-semibold">5. Consent</h3>
                                <div className="flex items-center space-x-2">
                                    <Checkbox
                                        id="consent"
                                        // checked={formData.consent}
                                        // onCheckedChange={(checked) => setFormData(prev => ({...prev, consent: checked}))}
                                    />
                                    <Label 
                                        htmlFor="consent" 
                                        className="text-sm font-normal cursor-pointer"
                                    >
                                        I give my consent for my case to be reviewed and for relevant community members to be informed.
                                    </Label>
                                </div>
                                {/* {errors.consent && <p className="text-red-500 text-sm mt-1">{errors.consent}</p>} */}
                            </div>

                            <div>
                                <Button type="submit" className="w-full">Submit Case</Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </ContentLayout>
        </DashboardLayout>
    )
}

export default CaseRegistrationForm;