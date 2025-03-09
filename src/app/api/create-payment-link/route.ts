import { NextResponse } from 'next/server';
import Razorpay from 'razorpay';

// Initialize Razorpay
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID || '',
  key_secret: process.env.RAZORPAY_KEY_SECRET || '',
});

export async function POST(request: Request) {
  try {
    // Validate environment variables
    if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
      throw new Error('Missing Razorpay credentials');
    }

    if (!process.env.NEXT_PUBLIC_APP_URL) {
      throw new Error('Missing APP_URL environment variable');
    }

    const { name, email, phone, amount } = await request.json();

    // Validate required fields
    if (!name || !email || !phone || !amount) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create payment link with proper callback URL
    const paymentLink = await razorpay.paymentLink.create({
      amount: amount,
      currency: 'INR',
      accept_partial: false,
      description: 'Mutual Fund Masterclass Webinar By Nithin',
      customer: {
        name,
        email,
        contact: phone,
      },
      notify: {
        sms: true,
        email: true,
      },
      reminder_enable: true,
      notes: {
        course_name: 'Mutual Fund Masterclass',
        user_email: email
      },
      callback_url: `${process.env.NEXT_PUBLIC_APP_URL}/payment-success`,
      callback_method: 'get'
    });

    // Validate payment link creation response
    if (!paymentLink || !paymentLink.short_url) {
      throw new Error('Failed to generate payment link');
    }

    return NextResponse.json({ 
      success: true, 
      payment_link_url: paymentLink.short_url 
    });
    
  } catch (error: any) {
    console.error('Error creating payment link:', error);
    
    // Return appropriate error message
    const errorMessage = error.error?.description || error.message || 'Failed to create payment link';
    
    return NextResponse.json(
      { 
        success: false, 
        error: errorMessage 
      },
      { status: error.statusCode || 500 }
    );
  }
} 