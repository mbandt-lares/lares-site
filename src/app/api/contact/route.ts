import { NextResponse } from "next/server";

const GOOGLE_SHEET_WEBHOOK = "https://script.google.com/macros/s/AKfycbxfFApNdziFftwERf4YD1FDz4dA-bdxTb26TUZYve8t1wtPU4npGiK9QT8qaKxk9S788A/exec";

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body" }, { status: 400 });
  }
  try {
    const { name, email, message } = (typeof body === "object" && body !== null ? body : {}) as Record<string, unknown>;

    if (typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      return NextResponse.json(
        { ok: false, error: "Enter a valid email address" },
        { status: 400 }
      );
    }
    if ((name != null && typeof name !== "string") || (message != null && typeof message !== "string")) {
      return NextResponse.json({ ok: false, error: "Invalid contact details" }, { status: 400 });
    }

    let sheetResponse: Response;
    try {
      sheetResponse = await fetch(GOOGLE_SHEET_WEBHOOK, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: typeof name === "string" ? name.trim() : "", email: email.trim(), message: message ?? "" }),
        signal: AbortSignal.timeout(8000),
      });
    } catch {
      console.error("Google Sheets request failed or timed out");
      return NextResponse.json({ ok: false, error: "We couldn't send your request. Please try again." }, { status: 502 });
    }

    if (!sheetResponse.ok) {
      console.error("Google Sheets returned status:", sheetResponse.status);
      return NextResponse.json({ ok: false, error: "We couldn't send your request. Please try again." }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Error handling contact submission:", err);
    return NextResponse.json(
      { ok: false, error: "Something went wrong" },
      { status: 500 }
    );
  }
}
