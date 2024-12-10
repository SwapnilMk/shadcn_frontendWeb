import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FormWrapper } from "./FormWrapper";

type AddressData = {
    addressLine1: string;
    addressLine2: string;
    cityOrVillage: string;
    taluka: string;
    district: string;
    state: string;
    pincode: string;
};

type AddressFormProps = AddressData & {
    updateFields: (fields: Partial<AddressData>) => void;
};

export function AddressForm({
    addressLine1,
    addressLine2,
    cityOrVillage,
    taluka,
    district,
    state,
    pincode,
    updateFields,
}: AddressFormProps) {
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
                        onChange={(e) => updateFields({ addressLine1: e.target.value })}
                    />
                </div>

                {/* Address Line 2 */}
                <div>
                    <Label htmlFor="addressLine2">Address Line 2</Label>
                    <Input
                        id="addressLine2"
                        placeholder="Area, Landmark"
                        value={addressLine2}
                        onChange={(e) => updateFields({ addressLine2: e.target.value })}
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
                            onChange={(e) => updateFields({ cityOrVillage: e.target.value })}
                        />
                    </div>
                    <div>
                        <Label htmlFor="taluka">Taluka/Block</Label>
                        <Input
                            id="taluka"
                            placeholder="Enter taluka"
                            value={taluka}
                            onChange={(e) => updateFields({ taluka: e.target.value })}
                        />
                    </div>
                    <div>
                        <Label htmlFor="district">District</Label>
                        <Input
                            id="district"
                            placeholder="Enter district"
                            value={district}
                            onChange={(e) => updateFields({ district: e.target.value })}
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
                            onChange={(e) => updateFields({ state: e.target.value })}
                        />
                    </div>
                    <div>
                        <Label htmlFor="pincode">Pincode</Label>
                        <Input
                            id="pincode"
                            placeholder="Enter pincode"
                            value={pincode}
                            onChange={(e) => updateFields({ pincode: e.target.value })}
                        />
                    </div>
                </div>
            </div>
        </FormWrapper>
    );
}
