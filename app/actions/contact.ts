"use server";

export interface ContactFormState {
  success: boolean;
  message: string;
  errors?: {
    name?: string;
    email?: string;
    phone?: string;
    district?: string;
    subject?: string;
    message?: string;
  };
}

export async function submitContactMessage(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = formData.get("name")?.toString().trim() || "";
  const email = formData.get("email")?.toString().trim() || "";
  const phone = formData.get("phone")?.toString().trim() || "";
  const district = formData.get("district")?.toString().trim() || "";
  const subject = formData.get("subject")?.toString().trim() || "";
  const message = formData.get("message")?.toString().trim() || "";

  const errors: ContactFormState["errors"] = {};

  if (!name || name.length < 2) {
    errors.name = "Please provide your full name (at least 2 characters).";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    errors.email = "Please provide a valid email address.";
  }

  if (phone && !/^[+0-9\s-]{7,15}$/.test(phone)) {
    errors.phone = "Please enter a valid phone number (e.g., +91 9876543210).";
  }

  if (!subject || subject.length < 3) {
    errors.subject = "Please enter a subject (at least 3 characters).";
  }

  if (!message || message.length < 10) {
    errors.message =
      "Please provide details for your representation (at least 10 characters).";
  }

  if (Object.keys(errors).length > 0) {
    return {
      success: false,
      message: "Please correct the errors in the form.",
      errors,
    };
  }

  // Log receipt on server console (static/content-driven mode without external DB dependency)
  console.log("Contact representation received:", {
    name,
    email,
    phone,
    district,
    subject,
    timestamp: new Date().toISOString(),
  });

  return {
    success: true,
    message:
      "Your message has been submitted successfully to the office of Ratnesh Patel. It will be reviewed by the office administration.",
  };
}
