const { Resend } =require ("resend");

const resend = new Resend(process.env.NEXT_PUBLIC_API_KEY);
type Email ={
    subject: string,
    desc: string
}

export async function sendEmail ({subject, desc}: Email){
    const email = process.env.NEXT_PUBLIC_EMAIL_RECEVIER
    
    const messageData = {
        from: process.env.NEXT_PUBLIC_EMAIL_USER,
        to: email,
        subject: subject,
        text: desc
      };
   
  
    try {
        const response = await resend.emails.send(messageData);
        console.log("Email sent successfully:", response);
      } catch (error) {
        console.log("🚀 ~ exports.sendEmail= ~ error:", error);
        throw new Error('Failed to send email');
      }
  };