import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";
import Location from "./Location";
const testimonials = [
  {
    name: "Aarav Sharma",
    role: "Frontend Developer at Infosys",
    feedback:
      "This platform helped me go from basics of HTML & CSS to building full React apps. The courses are structured and easy to follow.",
    image:
      "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Priya Mehta",
    role: "UI/UX Designer at TCS",
    feedback:
      "The projects and quizzes gave me real confidence. I landed my first internship after completing the React specialization.",
    image:
      "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Rohit Kumar",
    role: "Full Stack Engineer at Wipro",
    feedback:
      "Hands-on approach with clear explanations. Highly recommend for anyone serious about web development.",
    image:
      "https://randomuser.me/api/portraits/men/65.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-12"
        >
          What Our Learners Say
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center"
            >
              <FaQuoteLeft className="text-indigo-500 text-2xl mb-4" />
              <p className="text-gray-600 mb-4 italic">“{t.feedback}”</p>
              <img
                src={t.image}
                alt={t.name}
                className="w-16 h-16 rounded-full border-2 border-indigo-500 mb-3"
              />
              <h4 className="font-semibold">{t.name}</h4>
              <span className="text-sm text-gray-500">{t.role}</span>
            </motion.div>
          ))}
        </div>
      </div>
      <Location />
    </section>
  );
};

export default Testimonials;
