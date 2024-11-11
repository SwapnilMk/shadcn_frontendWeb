import * as z from "zod";




// Membership Info Schema
export const membershipSchema = z.object({
  state: z.string().min(1, "State is required"),
  language: z.string().min(1, "Language is required"),
  hasReferral: z.boolean().optional(),
  referralCode: z.string().optional(),
  isOver18: z.boolean().refine((val) => val === true, {
    message: "I confirm that I am 18 years of age or older.",
  }),
  termsAccepted: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms and conditions",
  }),
});

// Personal Info Schema
export const personalSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  middleName: z.string().min(1, "Middle name is required"),
  lastName: z.string().min(1, "Last name is required"),
  age: z.number().min(18, "Must be at least 18 years old"),
  // dob: z
  // .coerce.date() 
  // .refine((dob) => isAtLeast18YearsOld(dob), {
  //   message: "You must be at least 18 years old",
  // }),
  voterId: z.string().min(1, "Voter ID is required"),
  aadharNumber: z.string().length(12, "Aadhaar number must be 12 digits"),
});

// Address Info Schema
export const addressSchema = z.object({
  addressLine1: z.string().min(1, "Address line 1 is required"),
  addressLine2: z.string().optional(),
  district: z.string().min(1, "District is required"),
  city: z.string().min(1, "City is required"),
  taluka: z.string().min(1, "Taluka/Block is required"),
  village: z.string().min(1, "Village is required"),
  state: z.string().min(1, "State is required"),
  zipcode: z.string().length(6, "Zipcode must be 6 digits"),
});

// Account Info Schema
export const accountSchema = z
  .object({
    username: z.string().min(3, "Username must be at least 3 characters"),
    password: z.string().min(8, "Password must be at least 8 characters"),
    confirmPassword: z
      .string()
      .min(8, "Password must be at least 8 characters"),
    pin: z.string().length(4, "PIN must be 4 digits"),
    confirmPin: z.string().length(4, "PIN must be 4 digits"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  })
  .refine((data) => data.pin === data.confirmPin, {
    message: "PINs don't match",
    path: ["confirmPin"],
  });

export type MembershipFormData = z.infer<typeof membershipSchema>;
export type PersonalFormData = z.infer<typeof personalSchema>;
export type AddressFormData = z.infer<typeof addressSchema>;
export type AccountFormData = z.infer<typeof accountSchema>;

// Combined form data type
export type FormData = {
  membershipInfo: MembershipFormData;
  personal: PersonalFormData;
  address: AddressFormData;
  account: AccountFormData;
};
