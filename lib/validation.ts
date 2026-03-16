export const systemOptions = [
  "HubSpot",
  "WhatsApp",
  "Email",
  "Google Workspace",
  "Accounting",
  "Helpdesk",
  "Custom API",
  "Other"
] as const;

export const volumeOptions = ["<50/wk", "50-200/wk", "200-1000/wk", "1000+/wk"] as const;
export const budgetOptions = ["R10k-R30k", "R30k-R80k", "R80k-R150k", "R150k+"] as const;
export const timelineOptions = ["ASAP", "2-4 weeks", "1-2 months", "3+ months"] as const;

export type LeadInput = {
  fullName: string;
  companyName: string;
  email: string;
  phone?: string;
  systems: string[];
  biggestPain: string;
  volume: string;
  budgetRange: string;
  timeline: string;
  consent: boolean;
};

export type ValidationResult = {
  valid: boolean;
  errors: Partial<Record<keyof LeadInput, string>>;
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateLeadInput(input: LeadInput): ValidationResult {
  const errors: ValidationResult["errors"] = {};

  if (!input.fullName?.trim()) {
    errors.fullName = "Full name is required.";
  }

  if (!input.companyName?.trim()) {
    errors.companyName = "Company name is required.";
  }

  if (!input.email?.trim() || !emailRegex.test(input.email)) {
    errors.email = "A valid email is required.";
  }

  if (!input.systems?.length) {
    errors.systems = "Select at least one current system.";
  }

  if (!input.biggestPain?.trim() || input.biggestPain.trim().length < 20) {
    errors.biggestPain = "Describe your biggest workflow pain (min 20 characters).";
  }

  if (!volumeOptions.includes(input.volume as (typeof volumeOptions)[number])) {
    errors.volume = "Select your estimated weekly volume.";
  }

  if (!budgetOptions.includes(input.budgetRange as (typeof budgetOptions)[number])) {
    errors.budgetRange = "Select your budget range.";
  }

  if (!timelineOptions.includes(input.timeline as (typeof timelineOptions)[number])) {
    errors.timeline = "Select your timeline.";
  }

  if (!input.consent) {
    errors.consent = "Consent is required to process your information.";
  }

  return { valid: Object.keys(errors).length === 0, errors };
}
