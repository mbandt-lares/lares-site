import { NextResponse } from "next/server";

const GOOGLE_SHEET_WEBHOOK = "https://script.google.com/macros/s/AKfycbxfFApNdziFftwERf4YD1FDz4dA-bdxTb26TUZYve8t1wtPU4npGiK9QT8qaKxk9S788A/exec";

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

    // Send to Google Sheets
    const sheetResponse = await fetch(GOOGLE_SHEET_WEBHOOK, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, message }),
    });

    if (!sheetResponse.ok) {
      console.error("Google Sheets error:", await sheetResponse.text());
      // Still return success to user - we don't want to lose leads due to sheet issues
    }

    console.log("New contact submission:", {
      name,
      email,
      message,
      at: new Date().toISOString(),
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Error handling contact submission:", err);
    return NextResponse.json(
      { ok: false, error: "Something went wrong" },
      { status: 500 }
    );
  }
}
