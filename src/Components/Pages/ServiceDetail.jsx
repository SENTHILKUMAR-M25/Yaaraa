import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";

// Service data with extra details
const serviceDetails = {
  "web-development": {
    title: "Web Development",
    content:
      "We build modern, scalable, and responsive websites using React, Node.js, MongoDB, and more. Our goal is to create high-performance applications tailored to your business.",
    image: "/images/webdev.jpg",
    highlights: [
      "Responsive and mobile-friendly design",
      "Performance optimization",
      "API integrations",
      "Custom dashboards & admin panels",
    ],
  },
  "ui/ux design": {
    title: "UI/UX Design",
    content:
      "Our UI/UX services focus on creating intuitive, engaging, and user-friendly interfaces that provide the best customer experience.",
    image: "/images/uiux.jpg",
    highlights: [
      "User research & wireframing",
      "High-fidelity prototypes",
      "Interactive design",
      "Accessibility-first approach",
    ],
  },
  internships: {
    title: "Internships",
    content:
      "Gain hands-on experience with real-world projects under expert guidance, preparing you for industry roles.",
    image: "/images/internship.jpg",
    highlights: [
      "Mentorship from industry experts",
      "Real-world projects",
      "Certification upon completion",
      "Placement support",
    ],
  },
  "career-upskilling": {
    title: "Career Upskilling",
    content:
      "Enhance your professional journey with structured courses, workshops, and certifications.",
    image: "/images/upskilling.jpg",
    highlights: [
      "Job-ready skill training",
      "Workshops & webinars",
      "Portfolio building",
      "Career counseling",
    ],
  },
  "digital-marketing": {
    title: "Digital Marketing",
    content:
      "Boost your brand visibility with SEO, SEM, and data-driven marketing strategies.",
    image: "/images/marketing.jpg",
    highlights: [
      "Search Engine Optimization (SEO)",
      "Social Media Marketing",
      "Google Ads & PPC",
      "Analytics & performance tracking",
    ],
  },
};

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const service = serviceDetails[serviceId];

  if (!service)
    return (
      <h2 className="text-center text-red-600 text-2xl mt-20">
        Service Not Found
      </h2>
    );

  return (
    <motion.div
      className="min-h-screen bg-gray-50 py-16 px-6"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Hero Section */}
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          {service.title}
        </h1>
        <p className="text-gray-600 text-lg">{service.content}</p>
      </div>

      {/* Image + Highlights */}
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <img
          src={service.image}
          alt={service.title}
          className="w-full md:w-1/2 rounded-2xl shadow-lg object-cover"
        />

        <ul className="flex-1 space-y-4">
          {service.highlights.map((point, index) => (
            <li
              key={index}
              className="flex items-start gap-3 text-gray-700 text-base"
            >
              <span className="w-3 h-3 mt-2 rounded-full bg-blue-500"></span>
              {point}
            </li>
          ))}
        </ul>
      </div>

      {/* Back button */}
      <div className="text-center mt-12">
        <Link
          to="/services"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition"
        >
          ← Back to Services
        </Link>
      </div>
    </motion.div>
  );
};

export default ServiceDetail;
