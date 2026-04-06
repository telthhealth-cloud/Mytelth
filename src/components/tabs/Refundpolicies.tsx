import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="privacy-page min-h-screen bg-gray-50 dark:bg-gray-900">
      
      {/* Header */}
      <header className="w-full flex items-center justify-between px-6 py-4 bg-white dark:bg-gray-800 shadow-sm">
        
        {/* Left - Logo */}
        <img
          src="/assets/telth-logo.svg"
          alt="Telth Logo"
          className="h-10 md:h-12"
        />

        {/* Right - Contact */}
        <div className="text-gray-800 dark:text-white font-medium">
          📞 1800-570-0140
        </div>
      </header>

      {/* Content */}
      <div className="flex items-center justify-center min-h-[80vh]">
        <div className="text-center px-6">
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
            Coming Soon !
          </h1>

          <p className="text-gray-600 dark:text-gray-400 text-lg mb-6">
            Our Refund Policy page is under construction.
          </p>

          <p className="text-sm text-gray-500 dark:text-gray-500">
            Please check back later or contact support for more details.
          </p>

          <div className="mt-8">
            <button
              onClick={() => window.history.back()}
              className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
            >
              Go to Home
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;