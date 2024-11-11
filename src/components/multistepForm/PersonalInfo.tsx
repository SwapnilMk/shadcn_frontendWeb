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
import {
  personalSchema,
  type PersonalFormData,
} from "@/validation/signupFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { DatePicker } from "../DatePicker";

interface PersonalInfoProps {
  defaultState: {
    personal?: PersonalFormData;
  };
  updateInfo: (data: PersonalFormData) => void;
  onGoBack: () => void;
}

const PersonalInfo: React.FC<PersonalInfoProps> = ({
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
  } = useForm<PersonalFormData>({
    resolver: zodResolver(personalSchema),
    defaultValues: defaultState.personal,
    mode: "onChange", // Validate on change
    reValidateMode: "onChange",
  });

  const handleSelectChange = async (field: string, value: string) => {
    setValue(field as any, value, {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
    });
    await trigger(field as any);
  };

  return (
    <form onSubmit={handleSubmit(updateInfo)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <Label htmlFor="firstName">First Name</Label>
          <Input
            {...register("firstName")}
            id="firstName"
            placeholder="First Name"
            className={errors.firstName ? "border-red-500" : ""}
          />
          {errors.firstName && (
            <p className="text-sm text-red-500 mt-1">
              {errors.firstName.message}
            </p>
          )}
        </div>

        <div>
          <Label htmlFor="middleName">Middle Name</Label>
          <Input
            {...register("middleName")}
            id="middleName"
            placeholder="Middle Name"
            className={errors.middleName ? "border-red-500" : ""}
          />
           {errors.middleName && (
            <p className="text-sm text-red-500 mt-1">
              {errors.middleName.message}
            </p>
          )}
        </div>

        <div>
          <Label htmlFor="lastName">Last Name</Label>
          <Input
            {...register("lastName")}
            id="lastName"
            placeholder="Last Name"
            className={errors.lastName ? "border-red-500" : ""}
          />
          {errors.lastName && (
            <p className="text-sm text-red-500 mt-1">
              {errors.lastName.message}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="age">Age</Label>
          <Input
            {...register("age", { valueAsNumber: true })}
            type="number"
            id="age"
            placeholder="Enter age"
            className={errors.age ? "border-red-500" : ""}
          />
          {errors.age && (
            <p className="text-sm text-red-500 mt-1">{errors.age.message}</p>
          )}
        </div>

        <div>
          <Label htmlFor="dob">Date of Birth</Label>
          <DatePicker
            {...register("dob")}
            id="dob"
            className={errors.dob ? "border-red-500" : ""}
          />
          {errors.dob && (
            <p className="text-sm text-red-500 mt-1">{errors.dob.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="voterId">Voter ID</Label>
          <Input
            {...register("voterId")}
            id="voterId"
            placeholder="Enter Voter ID"
            className={errors.voterId ? "border-red-500" : ""}
          />
          {errors.voterId && (
            <p className="text-sm text-red-500 mt-1">
              {errors.voterId.message}
            </p>
          )}
        </div>

        <div>
          <Label htmlFor="aadharNumber">Aadhaar Number</Label>
          <Input
            {...register("aadharNumber")}
            id="aadharNumber"
            placeholder="Enter Aadhaar Number"
            className={errors.aadharNumber ? "border-red-500" : ""}
          />
          {errors.aadharNumber && (
            <p className="text-sm text-red-500 mt-1">
              {errors.aadharNumber.message}
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

export default PersonalInfo;
