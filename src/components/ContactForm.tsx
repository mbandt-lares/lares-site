"use client";

import { useId, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/Button";
import { LandingButton } from "@/components/landing/LandingButton";
import styles from "@/components/landing/landing.module.css";
import { buildPilotMessage } from "@/components/landing/pilot-message";

type ContactFormProps = {
  className?: string;
  pilot?: boolean;
};

export function ContactForm({ className = "", pilot = false }: ContactFormProps) {
  const uid = useId();
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [noteOpen, setNoteOpen] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;
    if (!e.currentTarget.reportValidity()) return;
    setStatus("submitting");
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: pilot
        ? buildPilotMessage(String(formData.get("audience") || "Myself"), String(formData.get("message") || ""))
        : String(formData.get("message") || ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (res.ok && result.ok) {
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

  if (pilot) return <div className={`${styles.formCard} ${className}`}>
    {status === "success" ? <div className={styles.formSuccess} role="status">
      <h3>You&apos;re on the list!</h3>
      <p>Thanks for your interest in LaresCare. We&apos;ll be in touch as pilot spots open.</p>
    </div> : <form onSubmit={handleSubmit} aria-busy={status === "submitting"}>
      <h3>Join the pilot</h3>
      <fieldset className={styles.audienceField}>
        <legend>Who is this for?</legend>
        <div className={styles.audienceOptions}>
          <label><input type="radio" name="audience" value="Myself" defaultChecked /><span>Myself</span></label>
          <label><input type="radio" name="audience" value="A loved one" /><span>A loved one</span></label>
        </div>
      </fieldset>
      <label className={styles.formField} htmlFor={`${uid}-name`}><span>Your name</span>
        <input id={`${uid}-name`} name="name" type="text" autoComplete="name" required />
      </label>
      <label className={styles.formField} htmlFor={`${uid}-email`}><span>Email address</span>
        <input id={`${uid}-email`} name="email" type="email" autoComplete="email" required />
      </label>
      <button type="button" className={styles.noteToggle} aria-expanded={noteOpen} aria-controls={`${uid}-note`} onClick={() => setNoteOpen(!noteOpen)}>
        <Image src="/landing/shared/plus.svg" alt="" width={24} height={24} /> {noteOpen ? "Hide note" : "Add a note (optional)"}
      </button>
      <div id={`${uid}-note`} hidden={!noteOpen}>
        <label className={styles.formField} htmlFor={`${uid}-message`}><span>Your note</span>
          <textarea id={`${uid}-message`} name="message" rows={4} />
        </label>
      </div>
      {status === "error" && <p className={styles.formError} role="alert">{errorMessage}</p>}
      <LandingButton type="submit" disabled={status === "submitting"} className={styles.formSubmit}>
        {status === "submitting" ? "Sending…" : "Join the pilot"}
      </LandingButton>
      <p className={styles.formHelp}>We&apos;ll email you about pilot availability and next steps.</p>
    </form>}
  </div>;

  return (
    <div className={`bg-white p-10 md:p-12 rounded-[2.5rem] border border-brand-cream/50 shadow-2xl shadow-brand-blue/10 ${className}`}>
      {status === "success" ? (
        <div className="text-center space-y-8 animate-in zoom-in duration-500">
          <div className="mx-auto w-20 h-20 rounded-full bg-brand-blue flex items-center justify-center text-brand-cream">
            <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-3xl md:text-4xl font-headline">You&apos;re on the list!</h2>
          <p className="text-base md:text-lg text-text-secondary">
            Thanks for your interest in LaresCare. We&apos;ll be in touch as pilot spots open.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="space-y-2">
            <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest opacity-60">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              required
              className="w-full bg-transparent border-b-2 border-brand-blue/10 py-4 text-lg focus:border-brand-blue outline-none transition-colors"
              placeholder="Your full name"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest opacity-60">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full bg-transparent border-b-2 border-brand-blue/10 py-4 text-lg focus:border-brand-blue outline-none transition-colors"
              placeholder="your@email.com"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest opacity-60">Your Situation</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full bg-transparent border-b-2 border-brand-blue/10 py-4 text-lg focus:border-brand-blue outline-none transition-colors resize-none"
              placeholder="Tell us about your family..."
            />
          </div>

          {status === "error" && (
            <div className="p-4 bg-red-50 text-red-600 rounded-xl text-sm font-medium">
              {errorMessage}
            </div>
          )}

          <Button 
            type="submit" 
            variant="primary" 
            disabled={status === "submitting"}
            className="w-full py-5 text-lg"
          >
            {status === "submitting" ? "Sending..." : "Submit Application"}
          </Button>
          
          <p className="text-center text-xs opacity-40 normal-case tracking-normal">
            We contact you only about early access opportunities.
          </p>
        </form>
      )}
    </div>
  );
}
