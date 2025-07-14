import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    // Use fields from the frontend form: firstName, lastName, email, contact, message
    const { firstName, lastName, email, contact, message } = data;

    if (!firstName || !lastName || !email || !contact) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    // Compose admin email
    const adminTo = process.env.CONTACT_RECEIVER || process.env.SMTP_USER;
    const adminSubject = "New Contact Form Submission";
    const adminText = `
        First Name: ${firstName}
        Last Name: ${lastName}
        Email: ${email}
        Contact: ${contact}
        Message: ${message || "(No message provided)"}
    `;
    const adminHtml = `
      <h2>New Contact Form Submission</h2>
      <p><strong>First Name:</strong> ${firstName}</p>
      <p><strong>Last Name:</strong> ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Contact:</strong> ${contact}</p>
      <p><strong>Message:</strong> ${
        message ? message : "(No message provided)"
      }</p>
    `;

    // Compose user confirmation email
    const userTo = email;
    const userSubject = "Thank you for contacting Milan Juice Centre!";
    const userText = `Dear ${firstName},\n\nThank you for reaching out to Milan Juice Centre. We have received your message and will get back to you soon.\n\nYour message:\n${
      message || "(No message provided)"
    }\n\nBest regards,\nMilan Juice Centre Team`;
    const userHtml = `<p>Dear ${firstName},</p><p>Thank you for reaching out to Milan Juice Centre. We have received your message and will get back to you soon.</p><p><strong>Your message:</strong><br/>${
      message ? message : "(No message provided)"
    }</p><p>Best regards,<br/>Milan Juice Centre Team</p>`;

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS || process.env.SMTP_PASSWORD,
      },
    });

    // Send to admin
    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: adminTo,
      subject: adminSubject,
      text: adminText,
      html: adminHtml,
    });

    // Send confirmation to user
    await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: userTo,
      subject: userSubject,
      text: userText,
      html: userHtml,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}
