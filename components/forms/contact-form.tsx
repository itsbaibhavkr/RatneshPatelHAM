"use client";

import * as React from "react";
import { useActionState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { submitContactMessage, type ContactFormState } from "@/app/actions/contact";
import { Button } from "@/components/ui/button";

const initialState: ContactFormState = {
  success: false,
  message: "",
};

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    submitContactMessage,
    initialState
  );

  const formRef = React.useRef<HTMLFormElement>(null);

  React.useEffect(() => {
    if (state.success && formRef.current) {
      formRef.current.reset();
    }
  }, [state.success]);

  return (
    <div className="space-y-6">
      {state.success ? (
        <div
          role="alert"
          className="rounded-lg border border-emerald-200 bg-emerald-50 p-6 text-emerald-900 space-y-3"
        >
          <div className="flex items-center gap-2.5 font-semibold text-emerald-800 text-sm">
            <CheckCircle2 className="h-5 w-5 text-emerald-600" />
            <span>Representation Successfully Submitted</span>
          </div>
          <p className="text-xs sm:text-sm text-emerald-700 leading-relaxed">
            {state.message}
          </p>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => window.location.reload()}
            className="text-xs border-emerald-300 text-emerald-800 hover:bg-emerald-100"
          >
            Submit Another Message
          </Button>
        </div>
      ) : null}

      {!state.success && state.message ? (
        <div
          role="alert"
          className="rounded-lg border border-red-200 bg-red-50 p-4 text-red-900 flex items-start gap-2.5 text-xs sm:text-sm"
        >
          <AlertCircle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
          <div>{state.message}</div>
        </div>
      ) : null}

      <form ref={formRef} action={formAction} className="space-y-4">
        {/* Name and Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label
              htmlFor="name"
              className="block text-xs font-semibold text-[var(--color-dark-text)]"
            >
              Full Name <span className="text-[var(--color-primary)]">*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              disabled={isPending}
              placeholder="e.g., Rajesh Kumar"
              className="w-full rounded-md border border-[var(--color-border-gray)] bg-[var(--color-white)] px-3 py-2 text-sm text-[var(--color-dark-text)] placeholder:text-[var(--color-muted-text)] focus:border-[var(--color-primary)] focus:outline-none transition-colors"
            />
            {state.errors?.name && (
              <p className="text-xs text-red-600 mt-1">{state.errors.name}</p>
            )}
          </div>

          <div className="space-y-1.5">
            <label
              htmlFor="phone"
              className="block text-xs font-semibold text-[var(--color-dark-text)]"
            >
              Contact Number (Optional)
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              disabled={isPending}
              placeholder="+91 XXXXX XXXXX"
              className="w-full rounded-md border border-[var(--color-border-gray)] bg-[var(--color-white)] px-3 py-2 text-sm text-[var(--color-dark-text)] placeholder:text-[var(--color-muted-text)] focus:border-[var(--color-primary)] focus:outline-none transition-colors"
            />
            {state.errors?.phone && (
              <p className="text-xs text-red-600 mt-1">{state.errors.phone}</p>
            )}
          </div>
        </div>

        {/* Email and District */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label
              htmlFor="email"
              className="block text-xs font-semibold text-[var(--color-dark-text)]"
            >
              Email Address <span className="text-[var(--color-primary)]">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              disabled={isPending}
              placeholder="name@example.com"
              className="w-full rounded-md border border-[var(--color-border-gray)] bg-[var(--color-white)] px-3 py-2 text-sm text-[var(--color-dark-text)] placeholder:text-[var(--color-muted-text)] focus:border-[var(--color-primary)] focus:outline-none transition-colors"
            />
            {state.errors?.email && (
              <p className="text-xs text-red-600 mt-1">{state.errors.email}</p>
            )}
          </div>

          <div className="space-y-1.5">
            <label
              htmlFor="district"
              className="block text-xs font-semibold text-[var(--color-dark-text)]"
            >
              District (Bihar)
            </label>
            <input
              id="district"
              name="district"
              type="text"
              disabled={isPending}
              placeholder="e.g., Patna, Gaya, Muzaffarpur..."
              className="w-full rounded-md border border-[var(--color-border-gray)] bg-[var(--color-white)] px-3 py-2 text-sm text-[var(--color-dark-text)] placeholder:text-[var(--color-muted-text)] focus:border-[var(--color-primary)] focus:outline-none transition-colors"
            />
            {state.errors?.district && (
              <p className="text-xs text-red-600 mt-1">{state.errors.district}</p>
            )}
          </div>
        </div>

        {/* Subject */}
        <div className="space-y-1.5">
          <label
            htmlFor="subject"
            className="block text-xs font-semibold text-[var(--color-dark-text)]"
          >
            Subject / Matter <span className="text-[var(--color-primary)]">*</span>
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            required
            disabled={isPending}
            placeholder="Concise summary of representation"
            className="w-full rounded-md border border-[var(--color-border-gray)] bg-[var(--color-white)] px-3 py-2 text-sm text-[var(--color-dark-text)] placeholder:text-[var(--color-muted-text)] focus:border-[var(--color-primary)] focus:outline-none transition-colors"
          />
          {state.errors?.subject && (
            <p className="text-xs text-red-600 mt-1">{state.errors.subject}</p>
          )}
        </div>

        {/* Message */}
        <div className="space-y-1.5">
          <label
            htmlFor="message"
            className="block text-xs font-semibold text-[var(--color-dark-text)]"
          >
            Detailed Message / Representation <span className="text-[var(--color-primary)]">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            disabled={isPending}
            placeholder="Please share specific details, context, and any relevant references..."
            className="w-full rounded-md border border-[var(--color-border-gray)] bg-[var(--color-white)] px-3 py-2 text-sm text-[var(--color-dark-text)] placeholder:text-[var(--color-muted-text)] focus:border-[var(--color-primary)] focus:outline-none transition-colors resize-y"
          />
          {state.errors?.message && (
            <p className="text-xs text-red-600 mt-1">{state.errors.message}</p>
          )}
        </div>

        <div className="pt-2">
          <Button
            type="submit"
            disabled={isPending}
            variant="default"
            size="lg"
            className="w-full sm:w-auto min-w-[200px]"
          >
            {isPending ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                <span>Submitting Representation...</span>
              </>
            ) : (
              <>
                <Send className="h-4 w-4" />
                <span>Submit Representation</span>
              </>
            )}
          </Button>
          <p className="mt-2 text-[11px] text-[var(--color-muted-text)]">
            Submissions are transmitted securely to the office of Ratnesh Patel. Public users cannot read submitted entries.
          </p>
        </div>
      </form>
    </div>
  );
}
