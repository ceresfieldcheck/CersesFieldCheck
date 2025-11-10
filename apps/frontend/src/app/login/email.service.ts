import { Injectable, Logger } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class EmailService {
    private transporter: nodemailer.Transporter;
    private readonly logger = new Logger(EmailService.name);

    constructor() {
        // IMPORTANT: Use environment variables for credentials in production!
        // For development, you can use a Gmail account with an "App Password".
        // See: https://support.google.com/accounts/answer/185833
        this.transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST || 'smtp.gmail.com',
            port: parseInt(process.env.EMAIL_PORT || '587', 10),
            secure: false, // true for 465, false for other ports
            auth: {
                user: process.env.EMAIL_USER, // your email address
                pass: process.env.EMAIL_PASS, // your app password
            },
        });
    }

    /**
     * Sends the OTP verification email.
     * @param to The recipient's email address.
     * @param otp The 6-digit one-time password.
     */
    async sendOtp(to: string, otp: string): Promise<void> {
        const mailOptions = {
            from: `"CeresFieldCheck" <${process.env.EMAIL_USER}>`,
            to,
            subject: 'Your Verification Code',
            html: this.getOtpEmailTemplate(otp),
        };

        try {
            const info = await this.transporter.sendMail(mailOptions);
            this.logger.log(`Message sent: ${info.messageId}`);
        } catch (error) {
            this.logger.error('Failed to send OTP email', error);
            // Re-throw the error to be handled by the calling service
            throw new Error('Could not send verification email.');
        }
    }

    private getOtpEmailTemplate(otp: string): string {
        return `
      <div style="font-family: Arial, sans-serif; color: #333;">
        <h2>Welcome to CeresFieldCheck!</h2>
        <p>Your one-time verification code is:</p>
        <p style="font-size: 24px; font-weight: bold; letter-spacing: 2px;">${otp}</p>
        <p>This code will expire in 10 minutes.</p>
        <p>If you did not request this, please ignore this email.</p>
      </div>
    `;
    }
}