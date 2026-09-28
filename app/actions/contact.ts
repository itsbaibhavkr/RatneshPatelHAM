"use server";

import { createClient } from "@/lib/supabase/server";

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

  try {
    const supabase = await createClient();
    const { error } = await supabase.from("contact_messages").insert({
      name,
      email,
      phone: phone || null,
      district: district || null,
      subject,
      message,
      status: "new",
    });

    if (error) {
      console.error("Supabase contact_messages insert error:", error);
      return {
        success: false,
        message:
          "Unable to submit message at this time. Please try again shortly or contact the office directly.",
      };
    }

    return {
      success: true,
      message:
        "Your message has been submitted successfully to the office of Ratnesh Patel. It will be reviewed by the office administration.",
    };
  } catch (err) {
    console.error("Unexpected error submitting contact message:", err);
    return {
      success: false,
      message:
        "An unexpected error occurred while submitting your message. Please try again later.",
    };
  }
}
