import { Resend } from "resend";
import type { LeadInput } from "@/lib/validation";

export type LeadSubmission = LeadInput & {
  id: string;
  createdAt: string;
};

function buildLeadText(lead: LeadSubmission) {
  return [
    "New qualification request received.",
    "",
    `Lead ID: ${lead.id}`,
    `Submitted: ${lead.createdAt}`,
    `Full name: ${lead.fullName}`,
    `Company: ${lead.companyName}`,
    `Email: ${lead.email}`,
    `Phone: ${lead.phone || "Not provided"}`,
    `Systems: ${lead.systems.join(", ")}`,
    `Volume: ${lead.volume}`,
    `Budget: ${lead.budgetRange}`,
    `Timeline: ${lead.timeline}`,
    `Consent: ${lead.consent ? "Yes" : "No"}`,
    "",
    "Biggest workflow pain:",
    lead.biggestPain
  ].join("\n");
}

function buildLeadHtml(lead: LeadSubmission) {
  const fields = [
    ["Lead ID", lead.id],
    ["Submitted", lead.createdAt],
    ["Full name", lead.fullName],
    ["Company", lead.companyName],
    ["Email", lead.email],
    ["Phone", lead.phone || "Not provided"],
    ["Systems", lead.systems.join(", ")],
    ["Volume", lead.volume],
    ["Budget", lead.budgetRange],
    ["Timeline", lead.timeline],
    ["Consent", lead.consent ? "Yes" : "No"]
  ];

  const rows = fields
    .map(
      ([label, value]) =>
        `<tr><td style="padding:8px 12px;font-weight:600;border:1px solid #e2e8f0;">${label}</td><td style="padding:8px 12px;border:1px solid #e2e8f0;">${value}</td></tr>`
    )
    .join("");

  return `
    <div style="font-family:Arial,sans-serif;color:#0f172a;line-height:1.5;">
      <h2 style="margin-bottom:16px;">New qualification request received</h2>
      <table style="border-collapse:collapse;width:100%;max-width:720px;margin-bottom:20px;">
        <tbody>${rows}</tbody>
      </table>
      <h3 style="margin-bottom:8px;">Biggest workflow pain</h3>
      <p style="white-space:pre-wrap;">${lead.biggestPain}</p>
    </div>
  `;
}

export async function sendLeadNotificationEmail(lead: LeadSubmission) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.LEAD_NOTIFICATION_TO;
  const from = process.env.LEAD_NOTIFICATION_FROM;

  if (!apiKey || !to || !from) {
    const message =
      "Lead email delivery is not configured. Set RESEND_API_KEY, LEAD_NOTIFICATION_TO, and LEAD_NOTIFICATION_FROM.";

    if (process.env.NODE_ENV !== "production") {
      console.warn("[email-config-missing]", message, {
        id: lead.id,
        companyName: lead.companyName,
        email: lead.email
      });
      return;
    }

    throw new Error(message);
  }

  const resend = new Resend(apiKey);

  await resend.emails.send({
    from,
    to: [to],
    replyTo: lead.email,
    subject: `New lead: ${lead.companyName}`,
    text: buildLeadText(lead),
    html: buildLeadHtml(lead)
  });
}
