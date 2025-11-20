"use client";

import { FormEvent, useState } from "react";
import { Container } from "@/components/Container";
import { Card } from "@/components/Card";

export default function ContactPage() {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error || "Submission failed");
      }

      setStatus("success");
      form.reset();
    } catch (err: any) {
      setStatus("error");
      setError(err?.message || "Something went wrong");
    }
  }

  return (
    <Container>
      <div className="max-w-xl space-y-6">
        <header className="space-y-2">
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.2em] text-sky-600">
            Join the waitlist
          </p>
          <h1 className="text-2xl md:text-3xl font-semibold tracking-tight text-slate-900">
            Join the Lares Health waitlist
          </h1>
          <p className="text-sm md:text-base text-slate-600">
            Share your details and we’ll reach out as pilot spots open. Early
            families help shape the product and receive preferred pricing.
          </p>
        </header>

        <Card className="p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1 text-sm">
              <label htmlFor="name" className="block text-slate-800">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm
                           focus:outline-none focus:ring-1 focus:ring-sky-600"
                placeholder="Your name"
              />
            </div>

            <div className="space-y-1 text-sm">
              <label htmlFor="email" className="block text-slate-800">
                Email *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm
                           focus:outline-none focus:ring-1 focus:ring-sky-600"
                placeholder="you@example.com"
              />
            </div>

            <div className="space-y-1 text-sm">
              <label htmlFor="message" className="block text-slate-800">
                Anything we should know?
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-sm
                           focus:outline-none focus:ring-1 focus:ring-sky-600"
                placeholder="Tell us about your family or situation (optional)"
              />
            </div>

            {status === "success" && (
              <p className="text-xs text-emerald-700">
                Thank you—your details have been received. We&apos;ll be in
                touch.
              </p>
            )}
            {status === "error" && (
              <p className="text-xs text-red-600">
                {error || "Something went wrong. Please try again."}
              </p>
            )}

            <button
              type="submit"
              disabled={status === "submitting"}
              className="inline-flex items-center rounded-md px-4 py-2 text-sm font-medium
                         bg-sky-600 text-white hover:bg-sky-500 disabled:opacity-60
                         focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-sky-600"
            >
              {status === "submitting" ? "Submitting..." : "Join the Waitlist"}
            </button>
          </form>
        </Card>

        <p className="text-[0.75rem] text-slate-500">
          We&apos;ll never sell your information. We&apos;ll contact you only
          about Lares Health and related early access opportunities.
        </p>
      </div>
    </Container>
  );
}
