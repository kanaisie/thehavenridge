import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function POST(req: NextRequest){
  try {
    const body = await req.json();
    // TODO: integrate with your email/CRM (SendGrid, Resend, Mailgun, HubSpot, etc.)
    console.log("Contact form submission", body);
    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
