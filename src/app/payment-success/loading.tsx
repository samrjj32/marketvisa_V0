export default function PaymentSuccessLoading() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full text-center">
        <div className="animate-pulse">
          <div className="h-16 w-16 bg-gray-200 rounded-full mx-auto mb-6" />
          <div className="h-8 bg-gray-200 rounded-lg w-3/4 mx-auto mb-2" />
          <div className="h-4 bg-gray-200 rounded w-full mb-6" />
          <div className="space-y-4">
            <div className="h-12 bg-gray-200 rounded-lg w-full" />
            <div className="h-12 bg-gray-200 rounded-lg w-full" />
          </div>
        </div>
      </div>
    </div>
  );
} 