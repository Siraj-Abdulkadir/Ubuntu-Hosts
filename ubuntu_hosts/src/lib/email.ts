/** Mail Services */
const nodemailer = require("nodemailer")

type EmailPrams = {
    to: string,
    subject: string,
    text: string
}

export async function accountVerificationMail({ to, subject, text }: EmailPrams) {

  const config = {
    service: 'gmail',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  }

  let message = {
    from: process.env.SMTP_USER,
    to:to,
    subject: subject,
    text: text,
  }

  const transporter = nodemailer.createTransport(config);

  try{
    await transporter.sendMail(message)
    console.log(`Verification email sent to ${to}`)
  } catch (error) {
    console.error("Error sending email:", error)
  }

}
