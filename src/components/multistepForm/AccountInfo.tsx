import { PanelNavigation } from "@/components/section";
import { useForm } from "react-hook-form";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useState, useEffect } from "react";

// Password validation functions
const passwordValidation = (password: string) => {
  const hasNumber = /\d/;
  const hasUppercase = /[A-Z]/;
  const hasLowercase = /[a-z]/;
  const hasSymbol = /[@$!%*?&]/;
  const isLongEnough = password.length >= 6;

  return {
    hasNumber: hasNumber.test(password),
    hasUppercase: hasUppercase.test(password),
    hasLowercase: hasLowercase.test(password),
    hasSymbol: hasSymbol.test(password),
    isLongEnough,
  };
};

const AccountInfo = ({ defaultState, updateInfo, onComplete }) => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [pinMatch, setPinMatch] = useState(true);

  const personal = defaultState.personal ?? {};

  const password = watch("password");
  const confirmPassword = watch("confirmPassword");

  const pin = watch("pin");
  const confirmPin = watch("confirmPin");

  // Track password validation conditions
  const [passwordConditions, setPasswordConditions] = useState({
    hasNumber: false,
    hasUppercase: false,
    hasLowercase: false,
    hasSymbol: false,
    isLongEnough: false,
  });

  useEffect(() => {
    if (password) {
      const conditions = passwordValidation(password);
      setPasswordConditions(conditions);
    }
  }, [password]);

  // Check if password and confirm password match
  const checkPasswordMatch = () => {
    setPasswordMatch(password === confirmPassword);
  };

  // Check if pin and confirm pin match
  const checkPinMatch = () => {
    setPinMatch(pin === confirmPin);
  };

  return (
    <form onSubmit={handleSubmit(updateInfo)}>
      <div className="grid gap-6">
        {/* Username in one row */}
        <div className="mb-4">
          <Label htmlFor="username">Username</Label>
          <Input
            {...register("username", {
              required: true,
              value: personal.username,
            })}
            className="my-1"
            type="text"
            id="username"
            placeholder="Enter your username"
            required
          />
        </div>

        {/* Password and Confirm Password in the second row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="mb-4">
            <Label htmlFor="password">Password</Label>
            <Input
              {...register("password", { required: true })}
              className="my-1"
              type="password"
              id="password"
              placeholder="Enter your password"
              onBlur={checkPasswordMatch} // Check password match on blur
              required
            />

            <ul className="text-sm mt-2">
              <li
                className={`flex items-center ${
                  passwordConditions.hasNumber
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {passwordConditions.hasNumber ? "✔" : "❌"} At least one number
              </li>
              <li
                className={`flex items-center ${
                  passwordConditions.hasUppercase
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {passwordConditions.hasUppercase ? "✔" : "❌"} At least one
                uppercase letter
              </li>
              <li
                className={`flex items-center ${
                  passwordConditions.hasLowercase
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {passwordConditions.hasLowercase ? "✔" : "❌"} At least one
                lowercase letter
              </li>
              <li
                className={`flex items-center ${
                  passwordConditions.hasSymbol
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {passwordConditions.hasSymbol ? "✔" : "❌"} At least one symbol
              </li>
              <li
                className={`flex items-center ${
                  passwordConditions.isLongEnough
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {passwordConditions.isLongEnough ? "✔" : "❌"} At least 6
                characters
              </li>
            </ul>
          </div>

          <div className="mb-4">
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input
              {...register("confirmPassword", { required: true })}
              className="my-1"
              type="password"
              id="confirmPassword"
              placeholder="Confirm your password"
              onBlur={checkPasswordMatch} // Check password match on blur
              required
            />
            {!passwordMatch && (
              <p className="text-red-500 text-sm">Passwords do not match.</p>
            )}
          </div>
        </div>

        {/* Pin and Confirm Pin in the third row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="mb-4">
            <Label htmlFor="pin">Pin</Label>
            <Input
              {...register("pin", {
                required: true,
                validate: (value) => /^\d{4}$/.test(value),
              })}
              className="my-1"
              type="text"
              id="pin"
              placeholder="Enter your pin"
              onBlur={checkPinMatch} // Check pin match on blur
              required
            />
            {pin && !/^\d{4}$/.test(pin) && (
              <p className="text-red-500 text-sm">Pin must be 4 digits.</p>
            )}
          </div>
          <div className="mb-4">
            <Label htmlFor="confirmPin">Confirm Pin</Label>
            <Input
              {...register("confirmPin", { required: true })}
              className="my-1"
              type="text"
              id="confirmPin"
              placeholder="Confirm your pin"
              onBlur={checkPinMatch} // Check pin match on blur
              required
            />
            {!pinMatch && (
              <p className="text-red-500 text-sm">Pins do not match.</p>
            )}
          </div>
        </div>
      </div>

      <PanelNavigation
        panelCompletionStatus={1}
        onGoBack={undefined}
        onNext={undefined}
        onComplete={onComplete}
        isValid={true}
      />
    </form>
  );
};

export default AccountInfo;
