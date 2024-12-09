import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
import { FormWrapper } from "./FormWrapper";

type AddressFormProps = {
    addressLine1: string;
    addressLine2: string;
    cityOrVillage: string;
    taluka: string;
    district: string;
    state: string;
    pincode: string;
    setFieldValue: (field: string, value: string) => void;
};

const AddressForm: React.FC<AddressFormProps> = ({
    addressLine1,
    addressLine2,
    cityOrVillage,
    taluka,
    district,
    state,
    pincode,
    setFieldValue,
}) => {
    return (
        <FormWrapper title="Address Details">
            <div className="grid gap-4">
                {/* Address Line 1 */}
                <div>
                    <Label htmlFor="addressLine1">Address Line 1</Label>
                    <Input
                        id="addressLine1"
                        placeholder="House/Flat No., Building Name, Street"
                        value={addressLine1}
                        onChange={(e) => setFieldValue("addressLine1", e.target.value)}
                    />
                </div>

                {/* Address Line 2 */}
                <div>
                    <Label htmlFor="addressLine2">Address Line 2</Label>
                    <Input
                        id="addressLine2"
                        placeholder="Area, Landmark"
                        value={addressLine2}
                        onChange={(e) => setFieldValue("addressLine2", e.target.value)}
                    />
                </div>

                {/* City/Village, Taluka, District Row */}
                <div className="grid grid-cols-3 gap-4">
                    <div>
                        <Label htmlFor="cityOrVillage">City/Village</Label>
                        <Input
                            id="cityOrVillage"
                            placeholder="Enter city/village"
                            value={cityOrVillage}
                            onChange={(e) => setFieldValue("cityOrVillage", e.target.value)}
                        />
                    </div>
                    <div>
                        <Label htmlFor="taluka">Taluka</Label>
                        <Input
                            id="taluka"
                            placeholder="Enter taluka"
                            value={taluka}
                            onChange={(e) => setFieldValue("taluka", e.target.value)}
                        />
                    </div>
                    <div>
                        <Label htmlFor="district">District</Label>
                        <Input
                            id="district"
                            placeholder="Enter district"
                            value={district}
                            onChange={(e) => setFieldValue("district", e.target.value)}
                        />
                    </div>
                </div>

                {/* State and Pincode Row */}
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <Label htmlFor="state">State</Label>
                        <Input
                            id="state"
                            placeholder="Enter state"
                            value={state}
                            onChange={(e) => setFieldValue("state", e.target.value)}
                        />
                    </div>
                    <div>
                        <Label htmlFor="pincode">Pincode</Label>
                        <Input
                            id="pincode"
                            placeholder="Enter pincode"
                            value={pincode}
                            onChange={(e) => setFieldValue("pincode", e.target.value)}
                        />
                    </div>
                </div>
            </div>
        </FormWrapper>
    );
};

export default AddressForm;
