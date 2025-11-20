import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { ok: false, error: "Email is required" },
        { status: 400 }
      );
    }

    console.log("New contact submission:", {
      name,
      email,
      message,
      at: new Date().toISOString(),
    });

    // Later: send email, write to DB, forward to CRM, etc.

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Error handling contact submission:", err);
    return NextResponse.json(
      { ok: false, error: "Something went wrong" },
      { status: 500 }
    );
  }
}
