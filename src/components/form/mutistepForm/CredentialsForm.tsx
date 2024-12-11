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
        <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
          <div>
            <Label htmlFor="password">Password <span className="text-red-700">*</span></Label>
            <Input
              id="password"
              type="password"
              placeholder="Create a password"
              value={password}
              onChange={(e) => updateFields({ password: e.target.value })}
            />
          </div>
          <div>
            <Label htmlFor="confirmPassword">Confirm Password <span className="text-red-700">*</span></Label>
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
          <div>
            <Label htmlFor="referal">Referal code ( Optional )</Label>
            <Input
              id="referal"
              placeholder="referal code"
            />
          </div>
        </div>
      </div>
    </FormWrapper>
  );
};

export default CredentialsForm;
