'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { CheckCircle2, ArrowLeft } from 'lucide-react';

export default function PaymentSuccess() {
  const searchParams = useSearchParams();
  const [paymentDetails, setPaymentDetails] = useState({
    paymentId: '',
    orderId: '',
    signature: ''
  });

  useEffect(() => {
    // Get payment details from URL parameters
    const razorpay_payment_id = searchParams.get('razorpay_payment_id');
    const razorpay_order_id = searchParams.get('razorpay_order_id');
    const razorpay_signature = searchParams.get('razorpay_signature');

    setPaymentDetails({
      paymentId: razorpay_payment_id || '',
      orderId: razorpay_order_id || '',
      signature: razorpay_signature || ''
    });
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full text-center">
        <div className="mb-6">
          <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto" />
        </div>
        
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Payment Successful!
        </h1>
        
        <p className="text-gray-600 mb-6">
          Thank you for enrolling in the Mutual Fund Masterclass. You will receive a confirmation email shortly.
        </p>

        {paymentDetails.paymentId && (
          <div className="bg-gray-50 rounded-lg p-4 mb-6 text-left">
            <p className="text-sm text-gray-600 mb-1">
              <span className="font-medium">Payment ID:</span> {paymentDetails.paymentId}
            </p>
            {paymentDetails.orderId && (
              <p className="text-sm text-gray-600">
                <span className="font-medium">Order ID:</span> {paymentDetails.orderId}
              </p>
            )}
          </div>
        )}

        <div className="space-y-4">
          <Link 
            href="/dashboard" 
            className="inline-flex items-center justify-center w-full px-4 py-3 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700 transition-colors"
          >
            Go to Dashboard
          </Link>
          
          <Link 
            href="/" 
            className="inline-flex items-center justify-center w-full px-4 py-3 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
} 