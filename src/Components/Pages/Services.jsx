// Services.jsx
import React from "react";
import { motion } from "framer-motion";
import { Code, Palette, Briefcase, GraduationCap, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: <Code className="w-14 h-14" />,
    title: "Web Development",
    description:
      "Build modern, scalable, and responsive web applications with the latest technologies.",
    gradient: "from-teal-500 to-cyan-500",
  },
  {
    icon: <Palette className="w-14 h-14" />,
    title: "UI/UX Design",
     slug: "ui-ux-design",
    description:
      "Craft user-friendly designs and experiences that delight customers and boost engagement.",
    gradient: "from-orange-500 to-pink-500",
  },
  {
    icon: <Briefcase className="w-14 h-14" />,
    title: "Internships",
    description:
      "Gain hands-on industry experience through guided real-world projects.",
    gradient: "from-teal-500 to-emerald-500",
  },
  {
    icon: <GraduationCap className="w-14 h-14" />,
    title: "Career Upskilling",
    description:
      "Enhance your professional skills with structured learning programs.",
    gradient: "from-pink-500 to-orange-500",
  },
  {
    icon: <Globe className="w-14 h-14" />,
    title: "Digital Marketing",
    description:
      "Grow your brand visibility with effective SEO, SEM, and marketing strategies.",
    gradient: "from-blue-500 to-teal-500",
  },
];

const Services = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-16 px-6">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-14"
      >
        <h1 className="text-4xl font-bold text-gray-800">
          Our <span className="text-pink-500">Services</span>
        </h1>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          We provide a wide range of services to help you enhance your skills,
          grow your career, and scale your business with the latest technology
          and design trends.
        </p>
      </motion.div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className={`bg-gradient-to-r ${service.gradient} 
              w-full sm:w-64 h-auto min-h-[380px] 
              rounded-[4rem] flex flex-col justify-center items-center text-center 
              shadow-lg hover:shadow-2xl relative overflow-hidden transition-all duration-500 hover:bg-gradient-to-t
              ${index % 2 !== 0 ? "sm:mt-12" : "mt-0"}
            `}
          >
            <Link to={`/services/${service.title.toLowerCase().replace(/\s+/g, "-")}`} className="flex flex-col justify-center items-center w-full h-full">
      <div className="mb-6 bg-white rounded-full p-5 shadow-md">{service.icon}</div>
      <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
      <p className="text-white/90 text-sm max-w-xs px-4">{service.description}</p>
    </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
