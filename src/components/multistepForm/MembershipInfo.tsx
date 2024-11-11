import { PanelNavigation } from "@/components/section";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { languages } from "@/data/language";
import { state } from "@/data/states";
import {
  membershipSchema,
  type MembershipFormData,
} from "@/validation/signupFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

interface MembershipInfoProps {
  defaultState: {
    membershipInfo?: MembershipFormData;
  };
  updateInfo: (data: MembershipFormData) => void;
  onGoBack: () => void;
  onComplete: () => void;
}

const MembershipInfo: React.FC<MembershipInfoProps> = ({
  defaultState,
  updateInfo,
  onGoBack,
}) => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    trigger,
    formState: { errors, isValid },
  } = useForm<MembershipFormData>({
    resolver: zodResolver(membershipSchema),
    defaultValues: {
      ...defaultState.membershipInfo,
      termsAccepted: false,
    },
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const hasReferral = watch("hasReferral");

  const handleSelectChange = async (field: string, value: string) => {
    setValue(field as any, value, {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
    });
    await trigger(field as any);
  };

  const handleCheckboxChange = async (
    field: string,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setValue(field as any, e.target.checked, {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
    });
    await trigger(field as any);
  };

  return (
    <form onSubmit={handleSubmit(updateInfo)} className="space-y-6">
      <div className="space-y-4">
        <div>
          <Label htmlFor="state">State</Label>
          <Select
            onValueChange={(value) => handleSelectChange("state", value)}
            defaultValue={defaultState.membershipInfo?.state}
          >
            <SelectTrigger
              id="state"
              className={errors.state ? "border-red-500" : ""}
            >
              <SelectValue placeholder="Select a state" />
            </SelectTrigger>
            <SelectContent>
              {Object.entries(state).map(([code, name]) => (
                <SelectItem key={code} value={code}>
                  {name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.state && (
            <p className="text-sm text-red-500 mt-1">{errors.state.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="language">Language</Label>
          <Select
            onValueChange={(value) => handleSelectChange("language", value)}
            defaultValue={defaultState.membershipInfo?.language}
          >
            <SelectTrigger
              id="language"
              className={errors.language ? "border-red-500" : ""}
            >
              <SelectValue placeholder="Select a language" />
            </SelectTrigger>
            <SelectContent>
              {Object.entries(languages).map(([code, name]) => (
                <SelectItem key={code} value={code}>
                  {name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.language && (
            <p className="text-sm text-red-500 mt-1">
              {errors.language.message}
            </p>
          )}
        </div>

        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            {...register("hasReferral", {
              onChange: (e) => handleCheckboxChange("hasReferral", e),
            })}
            id="hasReferral"
            className="rounded border-gray-300"
          />
          <Label htmlFor="hasReferral">Do you have any referral?</Label>
        </div>

        {hasReferral && (
          <div>
            <Label htmlFor="referralCode">Referral Code</Label>
            <Input
              {...register("referralCode", {
                onChange: () => trigger("referralCode"),
              })}
              id="referralCode"
              type="text"
              placeholder="Enter referral code"
              className={errors.referralCode ? "border-red-500" : ""}
            />
            {errors.referralCode && (
              <p className="text-sm text-red-500 mt-1">
                {errors.referralCode.message}
              </p>
            )}
          </div>
        )}

        <div className="flex flex-col space-y-4 pt-4">
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              {...register("isOver18", {
                onChange: (e) => handleCheckboxChange("isOver18", e),
                required: "You must confirm you are 18 years or older.",
              })}
              id="isOver18"
              className="rounded border-gray-300"
            />
            <Label htmlFor="isOver18" className="flex items-center">
              I confirm that I am 18 years of age or older.
            </Label>
          </div>
          {errors.isOver18 && (
            <p className="text-sm text-red-500 mt-1">
              {errors.isOver18.message}
            </p>
          )}
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              {...register("termsAccepted", {
                onChange: (e) => handleCheckboxChange("termsAccepted", e),
                required: "You must agree to the Terms and Conditions.",
              })}
              id="termsAccepted"
              className="rounded border-gray-300"
            />
            <Label htmlFor="termsAccepted" className="flex items-center">
              I agree to the{" "}
              <a href="#" className="text-blue-600 hover:text-blue-800 mx-1">
                Terms and Conditions
              </a>
              .
            </Label>
          </div>
          {errors.termsAccepted && (
            <p className="text-sm text-red-500 mt-1">
              {errors.termsAccepted.message}
            </p>
          )}
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

export default MembershipInfo;
