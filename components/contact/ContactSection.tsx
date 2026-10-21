"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Clock, Loader2, Mail, MapPin, Phone } from "lucide-react";
import Button from "@/components/Button";

type Status = "idle" | "loading" | "success" | "error";

const contactInfo = [
  {
    icon: MapPin,
    label: "Address",
    text: "Capital House, 47 Rushey Green, London SE6 4AS, United Kingdom",
    href: "https://www.google.com/maps/search/?api=1&query=Capital+House+47+Rushey+Green+London+SE6+4AS",
    external: true,
  },
  {
    icon: Phone,
    label: "Phone",
    text: "+44 20 3633 8802",
    href: "tel:+442036338802",
    external: false,
  },
  {
    icon: Mail,
    label: "Email",
    text: "info@hanifproperties.com",
    href: "mailto:info@hanifproperties.com",
    external: false,
  },
  {
    icon: Clock,
    label: "Opening Hours",
    text: "Mon - Fri: 9:00 AM - 6:00 PM",
    href: undefined,
    external: false,
  },
];

const inputClass =
  "w-full rounded-md border border-gray-300 bg-white px-4 py-3 text-[15px] text-[#14213d] placeholder:text-slate-400 transition focus:border-[#4a8c26] focus:outline-none focus:ring-2 focus:ring-[#4a8c26]/25";

const labelClass = "mb-2 block text-sm font-semibold text-[#14213d]";

export default function ContactSection() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("loading");

    try {
      const data = Object.fromEntries(new FormData(form));

      // TODO: apni API route / email service yaha connect karo
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Request failed");

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <main className="bg-white">
      {/* Page heading */}
      <section className="">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h1 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-[#14213d] sm:text-4xl lg:text-5xl">
            Get in touch
          </h1>
          <p className="mt-5 max-w-7xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            You can reach us by phone, email, or by filling out the contact
            form. Our team will do their best to respond to your inquiry in a
            timely manner. Thank you for your interest in connecting with us!
          </p>
        </div>
      </section>

      {/* Details + form */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[1fr_1.4fr] lg:gap-14">
          {/* Contact details */}
          <ul className="space-y-5">
            {contactInfo.map(({ icon: Icon, label, text, href, external }) => (
              <li
                key={label}
                className="flex items-start gap-5 rounded-sm bg-white p-6 shadow-[0_6px_30px_rgba(20,33,61,0.10)]"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#4a8c26]/10 text-[#4a8c26]">
                  <Icon size={22} strokeWidth={1.75} />
                </span>
                <div className="min-w-0">
                  <h2 className="text-lg font-bold text-[#14213d]">{label}</h2>
                  {href ? (
                    <a
                      href={href}
                      {...(external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="mt-1 block break-words text-[15px] leading-7 text-slate-600 transition-colors hover:text-[#4a8c26]"
                    >
                      {text}
                    </a>
                  ) : (
                    <p className="mt-1 text-[15px] leading-7 text-slate-600">{text}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>

          {/* Enquire form */}
          <div className="rounded-sm bg-white p-6 shadow-[0_10px_40px_rgba(20,33,61,0.12)] sm:p-9">
            <h2 className="text-2xl font-bold text-[#14213d] sm:text-3xl">Enquire</h2>
            <p className="mt-2 text-[15px] leading-7 text-slate-600">
              Our experts are happy to answer all of your questions.
            </p>

            {status === "success" ? (
              <div className="mt-8 flex flex-col items-center rounded-sm bg-[#4a8c26]/10 px-6 py-12 text-center">
                <CheckCircle2 size={48} strokeWidth={1.5} className="text-[#4a8c26]" />
                <h3 className="mt-4 text-xl font-bold text-[#14213d]">Thank you!</h3>
                <p className="mt-2 text-[15px] text-slate-600">
                  Your enquiry has been sent. Our team will get back to you shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus("idle")}
                  className="mt-6 text-sm font-semibold text-[#4a8c26] underline underline-offset-4 hover:text-[#3d751f]"
                >
                  Send another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className={labelClass}>
                      Full Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="John Smith"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className={labelClass}>
                      Phone
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="+44 20 1234 5678"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="email" className={labelClass}>
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="you@example.com"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="type" className={labelClass}>
                      Property Type
                    </label>
                    <select id="type" name="type" defaultValue="" className={inputClass}>
                      <option value="" disabled>
                        Select type
                      </option>
                      <option>Office Spaces</option>
                      <option>Retail Units</option>
                      <option>Industrial Spaces</option>
                      <option>Investment Opportunities</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className={labelClass}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Tell us about your requirements..."
                    className={`${inputClass} resize-y`}
                  />
                </div>

                {status === "error" && (
                  <p role="alert" className="rounded-md bg-red-50 px-4 py-3 text-sm text-red-700">
                    Something went wrong. Please try again or contact us by phone or email.
                  </p>
                )}

                <Button
                  type="submit"
                  disabled={status === "loading"}
                  variant="fill"
                  size="lg"
                  className="w-full sm:w-auto"
                  icon={
                    status === "loading" ? (
                      <Loader2 size={18} className="animate-spin" />
                    ) : undefined
                  }
                >
                  {status === "loading" ? "Sending" : "Send Enquiry"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}