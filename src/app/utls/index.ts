import { Resend } from "resend";

const resend = new Resend(process.env.API_KEY as string); // Ensure it's treated as a string

type Email = {
    subject: string;
    desc: string;
};

export async function sendEmail({ subject, desc }: Email) {
    const email = process.env.EMAIL_RECEVIER; // Correct the variable name if necessary

    if (!email || !process.env.EMAIL_USER) {
        throw new Error('Email receiver or user not defined in environment variables.');
    }

    const messageData = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: subject,
        text: desc,
    };

    try {
        const response = await resend.emails.send(messageData);
        console.log("Email sent successfully:", response);
    } catch (error) {
        console.log("🚀 ~ exports.sendEmail= ~ error:", error);
        throw new Error('Failed to send email');
    }
}
