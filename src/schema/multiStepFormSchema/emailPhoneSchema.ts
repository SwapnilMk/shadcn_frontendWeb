import { z } from "zod";

export const emailPhoneSchema = z.object({
    email: z
        .string()
        .email("Invalid email address")
        .or(z.string().regex(/^[0-9]{10}$/, "Invalid phone number")),
});

export type EmailFormData = z.infer<typeof emailPhoneSchema>;