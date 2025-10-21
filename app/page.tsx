import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
            Smart Inventory
            <span className="text-blue-600 block">Management</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed px-4 sm:px-0">
            Streamline your business operations with our comprehensive inventory management system.
            Track, analyze, and optimize your stock levels with real-time insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
            <Link
              href="/dashboard"
              className="bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-blue-700 transition-colors w-full sm:w-auto">
              Get Started Free
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Everything You Need to Manage Inventory
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4 sm:px-0">
              Powerful features designed to simplify inventory tracking and boost your business
              efficiency
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center p-4 sm:p-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <svg
                  className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Real-time Tracking
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                Monitor stock levels, sales, and movements in real-time across all your locations
              </p>
            </div>

            <div className="text-center p-4 sm:p-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <svg
                  className="w-6 h-6 sm:w-8 sm:h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                Analytics & Reports
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                Get detailed insights with customizable reports and predictive analytics
              </p>
            </div>

            <div className="text-center p-4 sm:p-6 sm:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <svg
                  className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">Mobile Access</h3>
              <p className="text-sm sm:text-base text-gray-600">
                Manage your inventory on-the-go with our responsive mobile interface
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
            Ready to Transform Your Inventory Management?
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-blue-100 max-w-2xl mx-auto px-4 sm:px-0">
            Start your free trial today and see how our platform can streamline your operations
          </p>

          <Link
            href="/sign-in"
            className="bg-white text-blue-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-gray-100 transition-colors w-full sm:w-auto">
            Start Free Trial
          </Link>
        </div>
      </section>
    </div>
  );
}
