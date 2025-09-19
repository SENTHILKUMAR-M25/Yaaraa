import React from "react";
import FooterBrand from "./FooterBrand";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] text-white py-10 ">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-bold mb-4">Yaaraa Technologies</h2>
          <p className="text-gray-300">
            Empowering businesses with modern tech solutions for a digital future.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-pink-400 transition">Home</a></li>
            <li><a href="#" className="hover:text-pink-400 transition">About</a></li>
            <li><a href="#" className="hover:text-pink-400 transition">Services</a></li>
            <li><a href="#" className="hover:text-pink-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Services</h3>
          <ul className="space-y-2">
            <li>Web Development</li>
            <li>Mobile Apps</li>
            <li>Cloud Solutions</li>
            <li>AI & Automation</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <p>Email: info@yaaraa.com</p>
          <p>Phone: +91 73394 08488 </p>
          <p>Location: Madurai, India</p>
        </div>
      </div>

      {/* Brand Section (Separate Component) */}
      <FooterBrand />
    </footer>
  );
};

export default Footer;
