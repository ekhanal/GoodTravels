import React from "react";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h4 className="text-lg font-medium mb-4">About Us</h4>
          <p className="text-gray-400 text-sm">
            We are a leading travel agency providing high-quality travel
            services to our customers.
          </p>
          <div className="flex space-x-4 mt-4">
            <a href="/" className="text-gray-400 hover:text-white">
              <FaFacebookF />
            </a>
            <a href="/" className="text-gray-400 hover:text-white">
              <FaTwitter />
            </a>
            <a href="/" className="text-gray-400 hover:text-white">
              <FaInstagram />
            </a>
            <a href="/" className="text-gray-400 hover:text-white">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-medium mb-4">Services</h4>
          <ul className="space-y-2">
            <li>
              <a href="/" className="text-gray-400 hover:text-white">
                Flight Booking
              </a>
            </li>
            <li>
              <a href="/" className="text-gray-400 hover:text-white">
                Hotel Booking
              </a>
            </li>
            <li>
              <a href="/" className="text-gray-400 hover:text-white">
                hrefur Packages
              </a>
            </li>
            <li>
              <a href="/" className="text-gray-400 hover:text-white">
                Visa Services
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-medium mb-4">Quick as</h4>
          <ul className="space-y-2" >
            <li>
              <a href="/" className="text-gray-400 hover:text-white">Home</a>
               
            </li>
            <li>
              <a href="/about" className="text-gray-400 hover:text-white">
                About
              </a>
            </li>
            <li>
              <a
                href="/destinations"
                className="text-gray-400 hover:text-white"
              >
                Destinations
              </a>
            </li>
            <li>
              <a href="/contactus" className="text-gray-400 hover:text-white"> contact_us</a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-medium mb-4">Contact</h4>
          <ul className="space-y-2">
            <li className="flex items-center">
              <FaMapMarkerAlt className="mr-2" />
              <span className="text-gray-400">Gaushala, Kathmandu</span>
            </li>
            <li className="flex  items-center">
              <FaPhoneAlt className="mr-2" />
              <span className="text-gray-400">01-5914359, 01-5914329</span>
            </li>
            <li className="flex items-center">
              <FaEnvelope className="mr-2" />
              <a
                href="mailto:info@example.com"
                className="text-gray-400 hover:text-white"
              >
                info@example.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-700 pt-4 text-center">
        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Good Travels Nepal All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
