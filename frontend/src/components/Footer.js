import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h4 className="text-white font-bold mb-4 text-lg">Quick-Commerce</h4>
          <p>Fast and reliable medicine delivery service.</p>
          <p className="mt-4 text-sm">&copy; 2025 Quick-Commerce. All rights reserved.</p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4 text-lg">Categories</h4>
          <ul>
            <li className="mb-2 hover:underline cursor-pointer">Pain Relief</li>
            <li className="mb-2 hover:underline cursor-pointer">Vitamins & Supplements</li>
            <li className="mb-2 hover:underline cursor-pointer">Cold & Flu</li>
            <li className="mb-2 hover:underline cursor-pointer">Diabetes Care</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4 text-lg">Contact Us</h4>
          <p>Email: support@quickcommerce.com</p>
          <p>Phone: +1 234 567 890</p>
          <p>Address: 123 Medicine St, Health City</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
