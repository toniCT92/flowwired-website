import nodemailer from "nodemailer";

export async function POST(request) {
  const { name, email, message } = await request.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER, 
      pass: process.env.EMAIL_APP_PASSWORD, 
    },
  });

  const mailOptions = {
    from: `"${name}" <${email}>`,
    to: process.env.EMAIL_USER, 
    subject: `New message from ${name} via Flowwired`,
    html: `
      <div style="font-family:Arial, sans-serif; line-height:1.5; background:#0B1120; color:#fff; padding:20px; border-radius:10px;">
        <h2 style="color:#6366f1;"> New Message from Flowwired Contact Form</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <hr style="border:none; border-top:1px solid #333; margin:20px 0;">
        <p style="color:#d1d5db;">${message}</p>
        <hr style="border:none; border-top:1px solid #333; margin:20px 0;">
        <p style="font-size:12px; color:#9ca3af;">This message was sent from your Flowwired contact form.</p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(" Email sent successfully!");
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error(" Email send error:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      { status: 500 }
    );
  }
}
