import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { naam, telefoon, email, plaats, product, breedte, hoogte, bericht, type } = body;

    const afmetingen =
      breedte || hoogte
        ? `\nAfmetingen: ${breedte ? `Breedte ${breedte} cm` : ""}${breedte && hoogte ? " × " : ""}${hoogte ? `Hoogte ${hoogte} cm` : ""}`
        : "";

    const onderwerp = type === "offerte" ? "Nieuwe offerte aanvraag" : "Nieuw contactbericht";

    const tekstBody = `
${onderwerp}
${"─".repeat(40)}

Naam:      ${naam}
Telefoon:  ${telefoon}
E-mail:    ${email}
Plaats:    ${plaats}
Product:   ${product || "Niet opgegeven"}${afmetingen}

Bericht:
${bericht || "(geen bericht)"}
    `.trim();

    const { error } = await resend.emails.send({
      from: "GLS Website <noreply@glszonwering.nl>",
      to: "glszonwering@gmail.com",
      replyTo: email,
      subject: `${onderwerp} — ${naam}`,
      text: tekstBody,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Er is iets misgegaan" }, { status: 500 });
  }
}
