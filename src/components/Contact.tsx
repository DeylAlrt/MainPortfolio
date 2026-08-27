"use client";

import { useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import Reveal from "./Reveal";

const SOCIALS = [
  {
    label: "Email",
    value: "alertadale2@gmail.com",
    href: "mailto:alertadale2@gmail.com",
  },
  {
    label: "LinkedIn",
    value: "dale-alerta",
    href: "https://www.linkedin.com/in/dale-alerta-270525328/",
  },
  {
    label: "GitHub",
    value: "DeylAlrt",
    href: "https://github.com/DeylAlrt",
  },
];

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
  const configured = Boolean(serviceId && templateId && publicKey);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;

    if (!configured) {
      setStatus("error");
      return;
    }

    setStatus("sending");
    try {
      const data = new FormData(form);
      const name = String(data.get("name") ?? "");
      const email = String(data.get("email") ?? "");
      const message = String(data.get("message") ?? "");
      const time = new Date().toLocaleString("en-US", {
        dateStyle: "medium",
        timeStyle: "short",
      });

      // Sent via emailjs.send (not sendForm) with every variable name the
      // EmailJS template has referenced so far — {{name}} and {{from_name}}
      // both resolve to the same value, likewise {{email}} and
      // {{reply_to}}. Keeps the form working even if the template's
      // variable naming shifts again without needing another code change.
      await emailjs.send(
        serviceId!,
        templateId!,
        {
          title: "New message from your portfolio",
          time,
          name,
          from_name: name,
          message,
          email,
          reply_to: email,
        },
        { publicKey: publicKey! }
      );
      setStatus("success");
      form.reset();
    } catch (err) {
      console.error("EmailJS send failed:", err);
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="px-5 py-20 sm:px-8">
      <div className="mx-auto max-w-6xl">
        <Reveal variant="up">
          <h2 className="section-heading text-3xl text-ink sm:text-4xl">
            Let&apos;s Build Something
          </h2>
          <p className="mt-4 max-w-xl text-base text-muted sm:text-lg">
            Open to internships, junior front-end roles, and freelance
            collaborations. Reach out directly or send a message below.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <div>
            <ul className="space-y-4">
              {SOCIALS.map((social, index) => (
                <Reveal key={social.label} as="li" variant="left" delay={index * 80}>
                  <a
                    href={social.href}
                    target={social.label !== "Email" ? "_blank" : undefined}
                    rel={
                      social.label !== "Email"
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="group flex items-center justify-between rounded-xl border border-line bg-surface px-5 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-red"
                  >
                    <span>
                      <span className="block text-xs uppercase tracking-[0.2em] text-muted">
                        {social.label}
                      </span>
                      <span className="font-display text-lg text-ink transition-colors group-hover:text-red">
                        {social.value}
                      </span>
                    </span>
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden="true"
                      className="text-muted transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-red"
                    >
                      <path
                        d="M7 17L17 7M17 7H9M17 7V15"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </Reveal>
              ))}
              <Reveal as="li" variant="left" delay={SOCIALS.length * 80}>
                <a
                  href="/Dale-Alerta-Resume.pdf"
                  download
                  className="group flex items-center justify-between rounded-xl border border-dashed border-line px-5 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-purple"
                >
                  <span>
                    <span className="block text-xs uppercase tracking-[0.2em] text-muted">
                      Resume
                    </span>
                    <span className="font-display text-lg text-ink transition-colors group-hover:text-purple">
                      Download PDF
                    </span>
                  </span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    aria-hidden="true"
                    className="text-muted transition-all duration-300 group-hover:translate-y-0.5 group-hover:text-purple"
                  >
                    <path
                      d="M12 4v12m0 0l-5-5m5 5l5-5M5 20h14"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </Reveal>
            </ul>
          </div>

          <Reveal
            as="div"
            variant="right"
            delay={120}
            className="rounded-2xl border border-line bg-surface p-6 sm:p-8"
          >
          <form
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label
                  htmlFor="name"
                  className="mb-2 block text-xs uppercase tracking-[0.2em] text-muted"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  className="w-full rounded-lg border border-line bg-bg px-4 py-3 text-sm text-ink outline-none transition-all duration-300 focus:-translate-y-0.5 focus:border-red"
                />
              </div>
              <div className="sm:col-span-1">
                <label
                  htmlFor="email"
                  className="mb-2 block text-xs uppercase tracking-[0.2em] text-muted"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="w-full rounded-lg border border-line bg-bg px-4 py-3 text-sm text-ink outline-none transition-all duration-300 focus:-translate-y-0.5 focus:border-red"
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="mb-2 block text-xs uppercase tracking-[0.2em] text-muted"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full resize-none rounded-lg border border-line bg-bg px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-red"
                />
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-red px-6 py-3 text-sm font-medium text-bg transition-all duration-300 hover:-translate-y-0.5 active:scale-95 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
              >
                {status === "sending" && (
                  <span
                    aria-hidden="true"
                    className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-bg/40 border-t-bg"
                  />
                )}
                {status === "sending" ? "Sending…" : "Send Message"}
              </button>

              <p aria-live="polite" className="text-sm">
                {status === "success" && (
                  <span className="hero-in text-emerald-400">
                    Message sent — thanks for reaching out!
                  </span>
                )}
                {status === "error" && configured && (
                  <span className="hero-in text-red">
                    Something went wrong. Please email me directly instead.
                  </span>
                )}
                {status === "error" && !configured && (
                  <span className="hero-in text-muted">
                    Contact form isn&apos;t connected yet — please use the
                    email link instead.
                  </span>
                )}
              </p>
            </div>
          </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
