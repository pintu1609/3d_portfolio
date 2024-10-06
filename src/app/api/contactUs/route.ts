import { sendEmail } from "@/app/utls";
import { google } from "googleapis";
import { NextResponse } from "next/server";

type ContactUs = {
   fullName: string,
   email: string,
  phone: string,
  emailSubject: string,
  message: string,
}
export  async function POST(
  
  req:Request,
) {
  
  const body: ContactUs = await req.json();
  
  const data = [[
      
      body.fullName,
        body.email,
        body.phone,
        body.emailSubject,
        body.message,
    ]]

    try {

        const auth = new google.auth.GoogleAuth({
            credentials: {
              client_email: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_EMAIL,
              private_key: process.env.NEXT_PUBLIC_GOOGLE_PRIVATE_KEY?.replace(/\\n/gm, "\n"),
            },
            scopes: ['https://www.googleapis.com/auth/spreadsheets'],
          });
          const googleSheetClient = google.sheets({ version: "v4", auth });
          const response = await googleSheetClient.spreadsheets.values.append({
            spreadsheetId: process.env.NEXT_PUBLIC_GOOGLE_SHEET_ID,
            range: 'Sheet3!A1',
            valueInputOption: 'USER_ENTERED',
            insertDataOption: 'INSERT_ROWS',
            requestBody: {
              values: data,
            },
          });
          
          const subject = 'New Contact Form Submission';
          const desc = `Hi Pintu,
          
         You have a new contact form submission with the following details:
         
         - **Full Name:** ${body.fullName}
         - **Email:** ${body.email}
         - **Phone:** ${body.phone}
         - **Subject:** ${body.emailSubject}
         - **Message:** ${body.message}
         
         Best regards,
         The System`;

          await sendEmail({subject, desc});

          return NextResponse.json({ data:response?.config?.data,
            message: 'Contact details added successfully' }, { status: 200 });


    } catch (error) {
      console.error("🚀 ~ error:", error)
      return NextResponse.json({ message: 'Something went wrong' }, { status: 500 });
    }
        
}