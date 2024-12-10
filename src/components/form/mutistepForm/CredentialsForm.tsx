import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FormWrapper } from "./FormWrapper";

type CredentialsData = {
  username: string;
  password: string;
  confirmPassword: string;
  pin: string;
  confirmPin: string;
};

type CredentialsFormProps = CredentialsData & {
  updateFields: (fields: Partial<CredentialsData>) => void;
};

const CredentialsForm: React.FC<CredentialsFormProps> = ({
  username,
  password,
  confirmPassword,
  pin,
  confirmPin,
  updateFields,
}) => {
  return (
    <FormWrapper title="Credentials Details">
      <div className="grid gap-4">
        {/* Username */}
        {/* <div>
          <Label htmlFor="username">Username</Label>
          <Input
            id="username"
            placeholder="Choose a username"
            value={username}
            onChange={(e) => updateFields({ username: e.target.value })}
          />
        </div> */}

        {/* Password and Confirm Password in same row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Create a password"
              value={password}
              onChange={(e) => updateFields({ password: e.target.value })}
            />
          </div>
          <div>
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input
              id="confirmPassword"
              type="password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) =>
                updateFields({ confirmPassword: e.target.value })
              }
            />
          </div>
        </div>

        {/* Pin and Confirm Pin in same row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="pin">PIN</Label>
            <Input
              id="pin"
              type="password"
              placeholder="Enter your PIN"
              value={pin}
              onChange={(e) => updateFields({ pin: e.target.value })}
            />
          </div>
          <div>
            <Label htmlFor="confirmPin">Confirm PIN</Label>
            <Input
              id="confirmPin"
              type="password"
              placeholder="Confirm your PIN"
              value={confirmPin}
              onChange={(e) => updateFields({ confirmPin: e.target.value })}
            />
          </div>
        </div>
      </div>
    </FormWrapper>
  );
};

export default CredentialsForm;
