# Contact Form Setup Instructions

## Overview

The contact form is now fully functional with email sending capabilities using the Resend API. It includes form validation, toast notifications, and a professional UI.

## Features Implemented ✅

1. **Email Sending**: Uses Resend API to send emails
2. **API Route**: POST endpoint at `/api/contact`
3. **Form Validation**: Client-side and server-side validation using Zod
4. **Toast Notifications**: Success/error messages using Sonner
5. **Environment Variables**: Secure API key management
6. **Loading States**: Disabled button and loading spinner during submission
7. **Responsive Design**: Works on all screen sizes

## Setup Instructions

### 1. Get Resend API Key

1. Go to [resend.com](https://resend.com)
2. Sign up for an account
3. Navigate to API Keys section
4. Create a new API key
5. Copy the API key

### 2. Configure Environment Variables

1. Open `.env.local` file in your project root
2. Replace the placeholder values:

```env
# Resend API Configuration
RESEND_API_KEY=re_your_actual_api_key_here

# Email Configuration
CONTACT_EMAIL=aminebenjebli@gmail.com
FROM_EMAIL=noreply@yourdomain.com
```

**Important Notes:**

- Replace `your_actual_api_key_here` with your real Resend API key
- For `FROM_EMAIL`, you need to verify your domain with Resend first
- Alternatively, use Resend's default domain: `onboarding@resend.dev`

### 3. Domain Verification (Optional but Recommended)

For production use:

1. Add your domain to Resend
2. Verify DNS records
3. Update `FROM_EMAIL` to use your verified domain

## Form Validation Rules

- **First Name**: Required, max 50 characters
- **Last Name**: Required, max 50 characters
- **Email**: Required, valid email format
- **Subject**: Required, max 100 characters
- **Message**: Required, 10-1000 characters

## API Endpoints

### POST /api/contact

Sends an email using the contact form data.

**Request Body:**

```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "subject": "Project Inquiry",
  "message": "Hello, I'd like to discuss a project..."
}
```

**Response (Success):**

```json
{
  "success": true,
  "message": "Email sent successfully",
  "id": "email_id_from_resend"
}
```

**Response (Validation Error):**

```json
{
  "error": "Validation failed",
  "details": [
    {
      "field": "email",
      "message": "Invalid email address"
    }
  ]
}
```

## Dependencies Added

## Dependencies Added

- `resend`: Email sending service
- `sonner`: Toast notifications library

## Project Structure

### Validation & Types

- `/src/types/contact.dto.ts`: Contact form validation schema and TypeScript types
  - `contactFormSchema`: Zod validation schema
  - `ContactFormData`: TypeScript type for form data
  - `ContactApiResponse`: API response types

### API Route

- `/src/app/api/contact/route.ts`: Email sending endpoint

### Components

- `/src/components/sections/ContactSection.tsx`: Contact form component
- `/src/components/ui/sonner.tsx`: Toast notification component

## Testing the Form

1. Fill out the contact form
2. Submit it
3. Check your email (configured in `CONTACT_EMAIL`)
4. You should receive a formatted email with the form data

## Troubleshooting

### "Email service is not configured" error

- Make sure `RESEND_API_KEY` is set in `.env.local`
- Restart your development server after adding environment variables

### Emails not being received

- Check your spam folder
- Verify the `CONTACT_EMAIL` environment variable
- Check Resend dashboard for email logs

### Domain verification issues

- Use `onboarding@resend.dev` as `FROM_EMAIL` for testing
- Set up proper domain verification for production

## Security Features

- Input sanitization and validation
- Rate limiting (can be added to API route)
- No sensitive data exposed to client
- Secure environment variable handling

The contact form is now ready for production use! 🚀
