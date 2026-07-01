"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { fadeInUp, scrollRevealViewport } from "@/lib/animations";

type FormStatus = "idle" | "submitted";

/**
 * Client-side contact form — no backend yet.
 * On submit, shows a confirmation message instead of sending data.
 * TODO: Wire up Formspree, Resend, or a Next.js API route when ready.
 */
export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    // TODO: Replace with real form submission
    setStatus("submitted");
  }

  return (
    <motion.form
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={scrollRevealViewport}
      onSubmit={handleSubmit}
      className="space-y-6"
      noValidate
    >
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-ink">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          placeholder="Your name"
          className="mt-2 w-full rounded-card border border-surface-muted bg-surface-elevated px-4 py-3 text-ink outline-none transition-colors placeholder:text-ink-subtle focus:border-primary focus:ring-2 focus:ring-primary/20"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-ink">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@example.com"
          className="mt-2 w-full rounded-card border border-surface-muted bg-surface-elevated px-4 py-3 text-ink outline-none transition-colors placeholder:text-ink-subtle focus:border-primary focus:ring-2 focus:ring-primary/20"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-ink">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Say hello..."
          className="mt-2 w-full resize-y rounded-card border border-surface-muted bg-surface-elevated px-4 py-3 text-ink outline-none transition-colors placeholder:text-ink-subtle focus:border-primary focus:ring-2 focus:ring-primary/20"
        />
      </div>

      <button
        type="submit"
        className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-primary-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      >
        Send message
      </button>

      {status === "submitted" && (
        <p className="text-sm text-sage-dark" role="status">
          Thanks! This form is client-side only for now — connect a backend to
          actually deliver messages.
        </p>
      )}
    </motion.form>
  );
}
