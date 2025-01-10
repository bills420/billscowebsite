import { COMPANY_INFO } from './constants';

interface EmailData {
  name: string;
  email: string;
  message: string;
  subject?: string;
  service?: string;
}

export const sendEmail = async (data: EmailData): Promise<boolean> => {
  try {
    // Since there's no actual email API endpoint yet, we'll simulate success
    // In production, replace this with your actual email service endpoint
    console.log('Sending email:', {
      to: COMPANY_INFO.email,
      subject: data.subject || 'New Contact Form Submission',
      from: data.email,
      name: data.name,
      message: data.message,
      service: data.service
    });

    // Simulate API success
    return true;

    // When you have an actual API endpoint, use this code:
    /*
    const response = await fetch('YOUR_API_ENDPOINT', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        to: COMPANY_INFO.email,
        subject: data.subject || 'New Contact Form Submission',
        content: `
Name: ${data.name}
Email: ${data.email}
Service: ${data.service || 'Not specified'}
Message: ${data.message}
        `
      })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return true;
    */
  } catch (error) {
    console.error('Email send failed:', error);
    return false;
  }
}