import { NextResponse } from "next/server";
import { sendLeadNotificationEmail } from "@/lib/email";
import { validateLeadInput, type LeadInput } from "@/lib/validation";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as LeadInput;
    const validation = validateLeadInput(body);

    if (!validation.valid) {
      return NextResponse.json(
        { ok: false, message: "Validation failed", errors: validation.errors },
        { status: 400 }
      );
    }

    const submission = {
      fullName: body.fullName.trim(),
      companyName: body.companyName.trim(),
      email: body.email.trim(),
      phone: body.phone?.trim() || "",
      systems: body.systems,
      biggestPain: body.biggestPain.trim(),
      volume: body.volume,
      budgetRange: body.budgetRange,
      timeline: body.timeline,
      consent: body.consent,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString()
    };

    console.log("[lead-received]", submission);
    await sendLeadNotificationEmail(submission);

    return NextResponse.json({ ok: true, id: submission.id });
  } catch (error) {
    console.error("[contact-api-error]", error);
    return NextResponse.json(
      { ok: false, message: "Unexpected server error. Please try again." },
      { status: 500 }
    );
  }
}
