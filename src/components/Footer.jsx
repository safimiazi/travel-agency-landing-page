import React from "react";
import Container from "./Container";

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white py-8">
      <Container>
        <div className="flex flex-col lg:flex-row md:justify-between items-start">
          {/* About Us Section */}
          <div className="mb-6 md:mb-0 md:w-1/4">
            <h4 className="font-semibold text-lg mb-2">About Us</h4>
            <p className="text-sm">
              We are committed to providing the best service in the travel
              industry, helping you create unforgettable experiences.
            </p>
          </div>

          {/* Links Section */}
          <div className="mb-6 md:mb-0 md:w-1/4">
            <h4 className="font-semibold text-lg mb-2">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Hom
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  About
                </a>
               
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="mb-6 md:mb-0 md:w-1/4">
            <h4 className="font-semibold text-lg mb-2">Contact Us</h4>
            <p className="text-sm">Email: info@example.com</p>
            <p className="text-sm">Phone: (123) 456-7890</p>
            <div className="mt-4">
              <h4 className="font-semibold text-lg mb-2">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-gray-400">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="hover:text-gray-400">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="hover:text-gray-400">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="hover:text-gray-400">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Newsletter Signup Section */}
          <div className="md:w-1/4">
            <h4 className="font-semibold text-lg mb-2">Newsletter Signup</h4>
            <p className="text-sm mb-4">
              Subscribe to our newsletter to receive the latest travel updates.
            </p>
            <form>
              <input
                type="email"
                placeholder="Your Email"
                className="p-2 rounded-md w-full mb-2"
                required
              />
              <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Copyright Section */}
        <div className="text-center mt-6">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
