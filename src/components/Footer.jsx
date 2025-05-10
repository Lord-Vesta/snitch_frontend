import React from 'react';

const Footer = () => {
    const path = window.location.pathname;
    
  return (
    <footer className="bg-white py-10 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Clothivo.</h2>
          <p className="text-sm text-gray-600">
            123 Fashion Street, Suite 101<br />
            New York, NY 10001 USA
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-sm font-semibold mb-4 text-gray-800">Links</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><a href="#">Home</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3 className="text-sm font-semibold mb-4 text-gray-800">Help</h3>
          <ul className="space-y-2 text-sm text-gray-600">
            <li><a href="#">Payment Options</a></li>
            <li><a href="#">Returns</a></li>
            <li><a href="#">Privacy Policies</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-sm font-semibold mb-4 text-gray-800">Newsletter</h3>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Enter Your Email Address"
              className="border-b border-gray-400 px-2 py-1 focus:outline-none w-full sm:w-auto"
            />
            <button type="submit" className="text-sm font-semibold uppercase border-b border-gray-800 hover:text-black">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-100 text-center pt-4 text-sm text-gray-500">
        © 2025 Clothivo. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
