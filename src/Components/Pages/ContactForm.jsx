// src/components/ContactForm.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, User, MessageSquare, Phone } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setStatus("⚠️ Please fill in all fields");
      return;
    }
    const phoneRegex = /^[0-9]{7,15}$/;
    if (!phoneRegex.test(formData.phone)) {
      setStatus("⚠️ Please enter a valid phone number");
      return;
    }

    try {
      setLoading(true);
      setStatus("");
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setStatus(data.message || "❌ Something went wrong!");
      }
    } catch (err) {
      console.error(err);
      setStatus("❌ Server error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
   <section className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-8 md:px-16 bg-gradient-to-br from-blue-400 via-indigo-400 to-gray-200 text-red-300">


      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Get in Touch
        </motion.h2>
        <p className="text-gray-400 mb-8 sm:mb-10 text-sm sm:text-base">
          Have questions or ideas? Fill out the form and we’ll get back to you.
        </p>
      </div>

      <motion.form
        onSubmit={handleSubmit}
        className="w-full sm:max-w-md md:max-w-xl lg:max-w-2xl mx-auto bg-white/10 backdrop-blur-lg p-6 sm:p-8 rounded-2xl shadow-lg space-y-5 sm:space-y-6"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        {/* Name */}
        <div className="flex items-center bg-white/5 rounded-xl px-3 sm:px-4 py-2 sm:py-3">
          <User className="text-purple-400 mr-2 sm:mr-3" />
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full bg-transparent outline-none text-white placeholder-gray-400 text-sm sm:text-base"
          />
        </div>

        {/* Email */}
        <div className="flex items-center bg-white/5 rounded-xl px-3 sm:px-4 py-2 sm:py-3">
          <Mail className="text-purple-400 mr-2 sm:mr-3" />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full bg-transparent outline-none text-white placeholder-gray-400 text-sm sm:text-base"
          />
        </div>

        {/* Phone */}
        <div className="flex items-center bg-white/5 rounded-xl px-3 sm:px-4 py-2 sm:py-3">
          <Phone className="text-purple-400 mr-2 sm:mr-3" />
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full bg-transparent outline-none text-white placeholder-gray-400 text-sm sm:text-base"
          />
        </div>

        {/* Message */}
        <div className="flex items-start bg-white/5 rounded-xl px-3 sm:px-4 py-2 sm:py-3">
          <MessageSquare className="text-purple-400 mt-1 mr-2 sm:mr-3" />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="w-full bg-transparent outline-none text-white placeholder-gray-400 resize-none text-sm sm:text-base"
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full py-2 sm:py-3 rounded-xl bg-purple-600 hover:bg-purple-700 transition font-semibold text-base sm:text-lg shadow-md disabled:opacity-50"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

        {status && (
          <p
            className={`text-center mt-3 sm:mt-4 ${
              status.startsWith("✅") ? "text-green-400" : "text-red-400"
            } text-sm sm:text-base`}
          >
            {status}
          </p>
        )}
      </motion.form>
    </section>
  );
};

export default ContactForm;
