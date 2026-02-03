"use client";

import { useState } from "react";
import { Container } from "@/components/Container";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (result.ok) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMessage(result.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Unable to connect. Please check your internet and try again.");
    }
  }

  return (
    <div className="space-y-16 md:space-y-20">
      <Container className="py-10">
        {/* Header copy */}
        <div className="max-w-3xl space-y-3">
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.2em] text-sky-600">
            Join the waitlist
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
            Join the Lares Health waitlist
          </h1>
          <p className="text-base md:text-lg text-slate-700">
            Share your details and we&apos;ll reach out as pilot spots open. Early families
            help shape the product and receive preferred pricing.
          </p>
        </div>

        {/* Form card */}
        <div className="mt-8 max-w-xl rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 md:p-7">
          {status === "success" ? (
            <div className="py-8 text-center space-y-4">
              <div className="mx-auto w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-slate-900">You&apos;re on the list!</h2>
              <p className="text-slate-600">
                Thanks for your interest in Lares Health. We&apos;ll be in touch as pilot spots open.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div className="space-y-1.5">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-slate-800"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  className="block w-full rounded-md border border-slate-300 bg-white px-3 py-2.5 text-base text-slate-900 shadow-sm outline-none ring-0 placeholder:text-slate-400 focus:border-sky-500 focus:ring-2 focus:ring-sky-500"
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-slate-800"
                >
                  Email <span className="text-rose-500">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md border border-slate-300 bg-white px-3 py-2.5 text-base text-slate-900 shadow-sm outline-none ring-0 placeholder:text-slate-400 focus:border-sky-500 focus:ring-2 focus:ring-sky-500"
                  placeholder="you@example.com"
                />
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-800"
                >
                  Anything we should know?
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="block w-full rounded-md border border-slate-300 bg-white px-3 py-2.5 text-base text-slate-900 shadow-sm outline-none ring-0 placeholder:text-slate-400 focus:border-sky-500 focus:ring-2 focus:ring-sky-500"
                  placeholder="Tell us about your family or situation (optional)"
                />
              </div>

              {/* Error message */}
              {status === "error" && (
                <div className="rounded-md bg-red-50 p-3 text-sm text-red-700">
                  {errorMessage}
                </div>
              )}

              {/* Submit button */}
              <div className="pt-1">
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="btn-primary w-full sm:w-auto disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "submitting" ? "Submitting..." : "Join the waitlist"}
                </button>
              </div>
            </form>
          )}

          {/* Privacy note */}
          {status !== "success" && (
            <p className="mt-4 text-xs md:text-sm text-slate-500">
              We&apos;ll never sell your information. We&apos;ll contact you only about
              Lares Health and related early access opportunities.
            </p>
          )}
        </div>
      </Container>
    </div>
  );
}
