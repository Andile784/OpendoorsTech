"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  budgetOptions,
  systemOptions,
  timelineOptions,
  volumeOptions,
  type LeadInput
} from "@/lib/validation";

const initialState: LeadInput = {
  fullName: "",
  companyName: "",
  email: "",
  phone: "",
  systems: [],
  biggestPain: "",
  volume: "",
  budgetRange: "",
  timeline: "",
  consent: false
};

export function ContactForm() {
  const router = useRouter();
  const [form, setForm] = useState<LeadInput>(initialState);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState("");

  function toggleSystem(value: string) {
    setForm((prev) => {
      if (prev.systems.includes(value)) {
        return { ...prev, systems: prev.systems.filter((item) => item !== value) };
      }
      return { ...prev, systems: [...prev.systems, value] };
    });
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setServerError("");
    setErrors({});

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });

      const data = (await response.json()) as {
        ok: boolean;
        errors?: Record<string, string>;
        message?: string;
      };

      if (!response.ok) {
        setErrors(data.errors || {});
        setServerError(data.message || "Submission failed.");
        return;
      }

      router.push("/contact/success");
    } catch {
      setServerError("Network error while submitting. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="card space-y-5" noValidate>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label htmlFor="fullName" className="text-sm font-medium text-ink">
            Full name *
          </label>
          <input
            id="fullName"
            value={form.fullName}
            onChange={(e) => setForm({ ...form, fullName: e.target.value })}
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
            required
          />
          {errors.fullName ? <p className="mt-1 text-xs text-red-600">{errors.fullName}</p> : null}
        </div>
        <div>
          <label htmlFor="companyName" className="text-sm font-medium text-ink">
            Company name *
          </label>
          <input
            id="companyName"
            value={form.companyName}
            onChange={(e) => setForm({ ...form, companyName: e.target.value })}
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
            required
          />
          {errors.companyName ? (
            <p className="mt-1 text-xs text-red-600">{errors.companyName}</p>
          ) : null}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label htmlFor="email" className="text-sm font-medium text-ink">
            Email *
          </label>
          <input
            id="email"
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
            required
          />
          {errors.email ? <p className="mt-1 text-xs text-red-600">{errors.email}</p> : null}
        </div>
        <div>
          <label htmlFor="phone" className="text-sm font-medium text-ink">
            Phone (optional)
          </label>
          <input
            id="phone"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
          />
        </div>
      </div>

      <fieldset>
        <legend className="text-sm font-medium text-ink">Current systems *</legend>
        <div className="mt-2 grid gap-2 sm:grid-cols-2">
          {systemOptions.map((system) => (
            <label key={system} className="flex items-center gap-2 text-sm text-muted">
              <input
                type="checkbox"
                checked={form.systems.includes(system)}
                onChange={() => toggleSystem(system)}
                className="h-4 w-4 rounded border-slate-300"
              />
              {system}
            </label>
          ))}
        </div>
        {errors.systems ? <p className="mt-1 text-xs text-red-600">{errors.systems}</p> : null}
      </fieldset>

      <div>
        <label htmlFor="biggestPain" className="text-sm font-medium text-ink">
          Biggest workflow pain *
        </label>
        <textarea
          id="biggestPain"
          rows={4}
          value={form.biggestPain}
          onChange={(e) => setForm({ ...form, biggestPain: e.target.value })}
          className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
          required
        />
        {errors.biggestPain ? (
          <p className="mt-1 text-xs text-red-600">{errors.biggestPain}</p>
        ) : null}
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <div>
          <label htmlFor="volume" className="text-sm font-medium text-ink">
            Volume *
          </label>
          <select
            id="volume"
            value={form.volume}
            onChange={(e) => setForm({ ...form, volume: e.target.value })}
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
            required
          >
            <option value="">Select volume</option>
            {volumeOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.volume ? <p className="mt-1 text-xs text-red-600">{errors.volume}</p> : null}
        </div>

        <div>
          <label htmlFor="budgetRange" className="text-sm font-medium text-ink">
            Budget range *
          </label>
          <select
            id="budgetRange"
            value={form.budgetRange}
            onChange={(e) => setForm({ ...form, budgetRange: e.target.value })}
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
            required
          >
            <option value="">Select budget</option>
            {budgetOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.budgetRange ? (
            <p className="mt-1 text-xs text-red-600">{errors.budgetRange}</p>
          ) : null}
        </div>

        <div>
          <label htmlFor="timeline" className="text-sm font-medium text-ink">
            Timeline *
          </label>
          <select
            id="timeline"
            value={form.timeline}
            onChange={(e) => setForm({ ...form, timeline: e.target.value })}
            className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
            required
          >
            <option value="">Select timeline</option>
            {timelineOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.timeline ? <p className="mt-1 text-xs text-red-600">{errors.timeline}</p> : null}
        </div>
      </div>

      <label className="flex items-start gap-2 text-sm text-muted">
        <input
          type="checkbox"
          checked={form.consent}
          onChange={(e) => setForm({ ...form, consent: e.target.checked })}
          className="mt-0.5 h-4 w-4 rounded border-slate-300"
          required
        />
        I consent to OpendoorsTech processing my submitted information for consultation follow-up and
        workflow audit communication, in line with POPIA principles. *
      </label>
      {errors.consent ? <p className="mt-1 text-xs text-red-600">{errors.consent}</p> : null}

      {serverError ? <p className="text-sm text-red-600">{serverError}</p> : null}

      <button type="submit" disabled={submitting} className="btn-primary w-full sm:w-auto">
        {submitting ? "Submitting..." : "Submit Qualification Request"}
      </button>
    </form>
  );
}
