import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request }) => {
	try {
		const data = await request.json();

		// Validate required fields
		const { firstName, lastName, email, projectType, message } = data;

		if (!firstName || !lastName || !email || !projectType || !message) {
			return json(
				{ success: false, message: 'Please fill in all required fields.' },
				{ status: 400 }
			);
		}

		// Validate email format
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email)) {
			return json(
				{ success: false, message: 'Please enter a valid email address.' },
				{ status: 400 }
			);
		}

		// Here you would typically:
		// 1. Send email notification
		// 2. Save to database
		// 3. Send to CRM
		// For now, we'll just log it and return success

		console.log('Contact form submission:', {
			firstName,
			lastName,
			email,
			phone: data.phone || 'Not provided',
			projectType,
			message: message.substring(0, 100) + (message.length > 100 ? '...' : '')
		});

		// TODO: Integrate with email service (e.g., Resend, SendGrid, AWS SES)
		// Example:
		// await sendEmail({
		//   to: 'anilamofficial@gmail.com',
		//   subject: `New Contact Form Submission - ${projectType}`,
		//   body: { firstName, lastName, email, phone, projectType, message }
		// });

		return json({
			success: true,
			message: 'Thank you for your message. We will get back to you within 24 hours.'
		});
	} catch (error) {
		console.error('Contact form error:', error);
		return json(
			{ success: false, message: 'An unexpected error occurred. Please try again later.' },
			{ status: 500 }
		);
	}
};
