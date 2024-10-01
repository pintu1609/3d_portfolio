import { z } from 'zod';

const initialContact = {
  fullName: '',
  emailSubject: '',
  email: '',
  phone: '',
  message: '',
 
};

const contactValidationSchema = z.object({
  fullName: z.string().min(1, "First name is required"),
  email: z.string().email("Invalid email address").min(1, "Email is required"),
  phone: z.string().length(10, "Phone is required"),
  emailSubject: z.string().min(1, "Email subject is required"),
  message: z.string().min(1, "Message is required"), // Optional field
});

  export {
    initialContact,
    contactValidationSchema
  }