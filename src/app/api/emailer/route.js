import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req) {
  console.log("hi from the route");
  const body = await req.json();

  const { name, email, message } = body;

  const transporter = nodemailer.createTransport({
    host: "smtp.zoho.eu",
    port: 465,
    secure: true,
    auth: {
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PW,
    },
  });

  let mailOptions;

  mailOptions = {
    from: process.env.NODEMAILER_EMAIL,
    to: "info@leithhillpianos.co.uk", // Change this to the recipient's email for registration
    subject: `contact: ${name}`,
    html: `
        <p>Name: ${name}</p>
              <p>Email: ${email}</p>
        <p>Message: ${message}</p>
      `,
  };

  console.log("mailoptions---------------------", mailOptions);

  // Send email
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.response);
    return NextResponse.json({
      status: 200,
      success: true,
      message: "Email sent successfully!",
    });
  } catch (error) {
    console.log("error----", error);
    console.error("Error sending email:", error);
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}
