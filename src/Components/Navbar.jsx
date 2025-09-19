// src/components/Navbar.jsx
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import logo from "../assets/Yaaraa.jpeg";

const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "Courses", path: "/Courses" },
  { name: "Internship", path: "/Internship" },
  { name: "Workshops", path: "/Workshops" },
  { name: "About Us", path: "/AboutUs" },
  { name: "Contact Us", path: "/Contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/20 backdrop-blur-md shadow-lg border-b border-white/30">
        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2">
            <img
              src={logo}
              alt="Logo"
              className="h-10 w-10 md:h-12 md:w-12 object-contain rounded-full"
            />
            <span className="hidden sm:inline text-lg md:text-xl font-extrabold text-sky-600">
              YaaRaa Technologies
            </span>
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6 ">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-md font-bold relative  ${
                    isActive
                      ? "text-pink-600 font-bold after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-pink-600 after:left-0 after:-bottom-1"
                      : "text-sky-400"
                  } hover:text-pink-600`
                }
              >
                {link.name}
              </NavLink>
            ))}

            {/* Request Callback Button */}
            <button
              onClick={() => setShowModal(true)}
              className="ml-4 px-5 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold shadow hover:scale-105 transition-transform"
            >
              Request a Callback
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={() => setShowModal(true)}
              className="px-3 py-1 rounded bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm font-semibold"
            >
              Callback
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-sky-600 text-2xl"
            >
              {menuOpen ? <HiX /> : <HiMenuAlt3 />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white/90 backdrop-blur-md shadow-md px-6 py-4 space-y-4">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `block text-base font-semibold ${
                    isActive ? "text-pink-600 underline" : "text-sky-600"
                  } hover:text-pink-600`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        )}
      </nav>

      {/* Callback Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-xl shadow-lg w-96 p-6 relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              ✖
            </button>
            <h2 className="text-xl font-bold text-center mb-4 text-sky-700">
              Request a Callback
            </h2>

            <form className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-sky-400"
                  placeholder="Enter your name"
                />
              </div>

              {/* Status */}
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Status
                </label>
                <select className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-sky-400">
                  <option>Student</option>
                  <option>Professional</option>
                </select>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-sky-400"
                  placeholder="Enter your phone number"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full mt-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-sky-400"
                  placeholder="Enter your email"
                />
              </div>

              {/* Gender */}
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">
                  Gender
                </label>
                <div className="flex gap-4">
                  <label className="flex items-center gap-1">
                    <input type="radio" name="gender" value="Male" /> Male
                  </label>
                  <label className="flex items-center gap-1">
                    <input type="radio" name="gender" value="Female" /> Female
                  </label>
                  <label className="flex items-center gap-1">
                    <input type="radio" name="gender" value="Other" /> Other
                  </label>
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full py-2 mt-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold hover:scale-105 transition-transform"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
