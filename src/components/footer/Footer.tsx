import React from "react";
import { NavLink } from "react-router-dom";
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
            <NavLink to="/" className="text-gray-400 hover:text-white">
              <FaFacebookF />
            </NavLink>
            <NavLink to="/" className="text-gray-400 hover:text-white">
              <FaTwitter />
            </NavLink>
            <NavLink to="/" className="text-gray-400 hover:text-white">
              <FaInstagram />
            </NavLink>
            <NavLink to="/" className="text-gray-400 hover:text-white">
              <FaLinkedinIn />
            </NavLink>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-medium mb-4">Services</h4>
          <ul className="space-y-2">
            <li>
              <NavLink to="/" className="text-gray-400 hover:text-white">
                Flight Booking
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className="text-gray-400 hover:text-white">
                Hotel Booking
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className="text-gray-400 hover:text-white">
                Tour Packages
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className="text-gray-400 hover:text-white">
                Visa Services
              </NavLink>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-medium mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <NavLink to="/" className="text-gray-400 hover:text-white">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className="text-gray-400 hover:text-white">
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/destinations"
                className="text-gray-400 hover:text-white"
              >
                Destinations
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="text-gray-400 hover:text-white">
                Contact
              </NavLink>
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
              <NavLink
                to="mailto:info@example.com"
                className="text-gray-400 hover:text-white"
              >
                info@example.com
              </NavLink>
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
