import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";
import { FormWrapper } from "./FormWrapper";

type CredentialsData = {
  password: string;
  confirmPassword: string;
  referralCode: string;
};

type CredentialsFormProps = CredentialsData & {
  updateFields: (fields: Partial<CredentialsData>) => void;
};

const CredentialsForm: React.FC<CredentialsFormProps> = ({
  password,
  confirmPassword,
  referralCode,
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
              required
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
              required
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) =>
                updateFields({ confirmPassword: e.target.value })
              }
            />
          </div>
          <div>
            <Label htmlFor="referralCode">Referal code ( Optional )</Label>
            <Input
              id="referralCode"
              type="text"
              placeholder="referal code"
              value={referralCode}
              onChange={(e) =>
                updateFields({ referralCode: e.target.value })
              }
            />
          </div>
        </div>
      </div>
    </FormWrapper>
  );
};

export default CredentialsForm;
