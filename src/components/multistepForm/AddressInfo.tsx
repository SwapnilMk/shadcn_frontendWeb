import { PanelNavigation } from "@/components/section";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  addressSchema,
  type AddressFormData,
} from "@/validation/signupFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

interface AddressInfoProps {
  defaultState: {
    address?: AddressFormData;
  };
  updateInfo: (data: AddressFormData) => void;
  onGoBack: () => void;
}

const AddressInfo: React.FC<AddressInfoProps> = ({
  defaultState,
  updateInfo,
  onGoBack,
}) => {
  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    formState: { errors, isValid },
  } = useForm<AddressFormData>({
    resolver: zodResolver(addressSchema),
    defaultValues: defaultState.address,
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const handleInputChange = async (
    field: keyof AddressFormData,
    value: string
  ) => {
    setValue(field, value, { shouldValidate: true, shouldDirty: true });
    await trigger(field);
  };

  return (
    <form onSubmit={handleSubmit(updateInfo)} className="space-y-6">
      <div className="space-y-4">
        <div>
          <Label htmlFor="addressLine1">Address Line 1</Label>
          <Input
            {...register("addressLine1", {
              onChange: (e) =>
                handleInputChange("addressLine1", e.target.value),
            })}
            id="addressLine1"
            placeholder="Enter your street address"
            className={errors.addressLine1 ? "border-red-500" : ""}
          />
          {errors.addressLine1 && (
            <p className="text-sm text-red-500 mt-1">
              {errors.addressLine1?.message}
            </p>
          )}
        </div>

        <div>
          <Label htmlFor="addressLine2">Address Line 2</Label>
          <Input
            {...register("addressLine2", {
              onChange: (e) =>
                handleInputChange("addressLine2", e.target.value),
            })}
            id="addressLine2"
            placeholder="Apartment, suite, etc. (optional)"
          />
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div>
            <Label htmlFor="city">City</Label>
            <Input
              {...register("city", {
                onChange: (e) => handleInputChange("city", e.target.value),
              })}
              id="city"
              placeholder="Enter city"
              className={errors.city ? "border-red-500" : ""}
            />
            {errors.city && (
              <p className="text-sm text-red-500 mt-1">
                {errors.city?.message}
              </p>
            )}
          </div>

          <div>
            <Label htmlFor="taluka">Taluka/Block</Label>
            <Input
              {...register("taluka", {
                onChange: (e) => handleInputChange("taluka", e.target.value),
              })}
              id="taluka"
              placeholder="Enter taluka/block"
              className={errors.taluka ? "border-red-500" : ""}
            />
            {errors.taluka && (
              <p className="text-sm text-red-500 mt-1">
                {errors.taluka?.message}
              </p>
            )}
          </div>

          <div>
            <Label htmlFor="village">Village</Label>
            <Input
              {...register("village", {
                onChange: (e) => handleInputChange("village", e.target.value),
              })}
              id="village"
              placeholder="Enter village"
              className={errors.village ? "border-red-500" : ""}
            />
            {errors.village && (
              <p className="text-sm text-red-500 mt-1">
                {errors.village?.message}
              </p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div>
            <Label htmlFor="district">District</Label>
            <Input
              {...register("district", {
                onChange: (e) => handleInputChange("district", e.target.value),
              })}
              id="district"
              placeholder="Enter district"
              className={errors.district ? "border-red-500" : ""}
            />
            {errors.district && (
              <p className="text-sm text-red-500 mt-1">
                {errors.district?.message}
              </p>
            )}
          </div>
          <div>
            <Label htmlFor="state">State</Label>
            <Input
              {...register("state", {
                onChange: (e) => handleInputChange("state", e.target.value),
              })}
              id="state"
              placeholder="Enter state"
              className={errors.state ? "border-red-500" : ""}
            />
            {errors.state && (
              <p className="text-sm text-red-500 mt-1">
                {errors.state?.message}
              </p>
            )}
          </div>

          <div>
            <Label htmlFor="zipcode">Zipcode</Label>
            <Input
              {...register("zipcode", {
                onChange: (e) => handleInputChange("zipcode", e.target.value),
              })}
              id="zipcode"
              placeholder="Enter zipcode"
              maxLength={6}
              className={errors.zipcode ? "border-red-500" : ""}
            />
            {errors.zipcode && (
              <p className="text-sm text-red-500 mt-1">
                {errors.zipcode?.message}
              </p>
            )}
          </div>
        </div>
      </div>

      <PanelNavigation
        panelCompletionStatus={0.33} // Adjust this value for each step
        onGoBack={onGoBack}
        isValid={isValid}
        onNext={undefined}
        onComplete={undefined}
      />
    </form>
  );
};

export default AddressInfo;
