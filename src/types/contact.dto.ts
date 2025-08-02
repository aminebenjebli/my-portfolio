import { z } from "zod";

// Contact form validation schema
export const contactFormSchema = z.object({
  firstName: z
    .string()
    .min(1, "First name is required")
    .max(50, "First name must be less than 50 characters")
    .trim(),
  lastName: z
    .string()
    .min(1, "Last name is required")
    .max(50, "Last name must be less than 50 characters")
    .trim(),
  email: z
    .string()
    .min(1, "Email is required")
    .refine(
      (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
      "Invalid email address"
    )
    .transform((email) => email.toLowerCase().trim()),
  subject: z
    .string()
    .min(1, "Subject is required")
    .max(100, "Subject must be less than 100 characters")
    .trim(),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be less than 1000 characters")
    .trim(),
});

// Type definition for the contact form data
export type ContactFormData = z.infer<typeof contactFormSchema>;

// API response types
export interface ContactApiSuccessResponse {
  success: true;
  message: string;
  id?: string;
}

export interface ContactApiErrorResponse {
  error: string;
  details?: Array<{
    field: string;
    message: string;
  }>;
}

export type ContactApiResponse =
  | ContactApiSuccessResponse
  | ContactApiErrorResponse;
