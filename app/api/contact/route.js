"use server";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  //   secure: true,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

export async function POST(request) {
  const { name, email, number, title, message } = await request.json();

  await transport.sendMail({
    from: process.env.MAIL_USER,
    to: "contactarriache@gmail.com",
    subject: `New Contact Form Submission: ${title}`,
    html: `
    <html>
      <body style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 20px; color: #333;">
        <div style="max-width: 600px; margin: auto; background-color: #fff; border-radius: 10px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); padding: 20px;">
          <h2 style="background-color: #1a73e8; color: white; padding: 15px; border-radius: 10px; text-align: center;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #1a73e8; text-decoration: none;">${email}</a></p>
          <p><strong>Phone Number:</strong> ${number}</p>
          <h3 style="margin: 20px 0;">Subject: ${title}</h3>
          <p style="background-color: #f1f1f1; padding: 15px; border-radius: 5px; border: 1px solid #e0e0e0; color: #333;">
            ${message.replace(/(?:\r\n|\r|\n)/g, "<br>")}
          </p>
          <p style="font-size: 14px; color: #555; text-align: center;">This email was sent from your website's contact form.</p>
        </div>
      </body>
    </html>
  `,
  });

  return Response.json({
    success: true,
    message: "Message sent successfully.",
  });
}
