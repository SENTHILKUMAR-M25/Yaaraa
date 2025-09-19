import React, { useState } from "react";
import {
  FaGraduationCap,
  FaRegClock,
  FaChalkboardTeacher,
  FaPlayCircle,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const SearchCourses = () => {
  const [selectedCourse, setSelectedCourse] = useState("");
  const navigate = useNavigate();

  const handleCourseSelect = (value) => {
    setSelectedCourse(value);

    if (value) {
      navigate(`/courses/${value}`); // redirect to course details page
    }
  };

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, when: "beforeChildren", staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.7, rotate: -10 },
    visible: { opacity: 1, scale: 1, rotate: 0, transition: { duration: 0.8 } },
  };

  return (
    <motion.section
      className="px-6 py-12 bg-pink-50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      {/* Title */}
      <motion.h2
        className="text-2xl md:text-3xl font-bold text-center mb-6 text-gray-800"
        variants={itemVariants}
      >
        Select Your Path in IT Learning
      </motion.h2>

      {/* Content */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-12">
        {/* Left Image Block */}
        <motion.div
          className="p-6 rounded-3xl shadow-md inline-block -ml-12"
          variants={itemVariants}
        >
          <motion.div
            className="grid grid-cols-2 grid-rows-2 w-96 h-96 overflow-hidden rounded-3xl"
            variants={containerVariants}
          >
            {/* Top Left */}
            <motion.div
              className="bg-pink-300 flex items-center justify-center rounded-br-[120px]"
              variants={imageVariants}
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="student"
                className="w-40 h-40 object-cover rounded-full shadow-lg"
              />
            </motion.div>

            {/* Top Right */}
            <motion.div
              className="bg-purple-400 flex items-center justify-center rounded-bl-[120px]"
              variants={imageVariants}
              whileHover={{ scale: 1.1, rotate: -5 }}
            >
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="student"
                className="w-40 h-40 object-cover rounded-full shadow-lg"
              />
            </motion.div>

            {/* Bottom Left */}
            <motion.div
              className="bg-orange-300 flex items-center justify-center rounded-tr-[120px]"
              variants={imageVariants}
              whileHover={{ scale: 1.1, rotate: -5 }}
            >
              <img
                src="https://randomuser.me/api/portraits/women/65.jpg"
                alt="student"
                className="w-40 h-40 object-cover rounded-full shadow-lg"
              />
            </motion.div>

            {/* Bottom Right */}
            <motion.div
              className="bg-pink-400 flex items-center justify-center rounded-tl-[120px]"
              variants={imageVariants}
              whileHover={{ scale: 1.1, rotate: 5 }}
            >
              <img
                src="https://randomuser.me/api/portraits/men/78.jpg"
                alt="student"
                className="w-40 h-40 object-cover rounded-full shadow-lg"
              />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right Side Text */}
        <motion.div
          className="max-w-md text-left"
          variants={itemVariants}
        >
          <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-800">
            Benefits From Our IT Courses Academy
          </h3>

          <p className="mb-6 text-gray-600 leading-relaxed">
            At <span className="font-semibold">Yaaraa Technologies</span>, we
            provide cutting-edge training programs in software development,
            data science, cloud computing, AI, cybersecurity, and more.
          </p>

          {/* Animated List */}
          <motion.ul className="space-y-4 mb-6" variants={containerVariants}>
            <motion.li className="flex items-start gap-3" variants={itemVariants}>
              <FaGraduationCap className="text-purple-600 text-xl mt-1" />
              <span>
                <strong>Industry-Recognized Certifications</strong> — Gain
                credentials that boost your career in IT.
              </span>
            </motion.li>
            <motion.li className="flex items-start gap-3" variants={itemVariants}>
              <FaRegClock className="text-pink-500 text-xl mt-1" />
              <span>
                <strong>Flexible Learning</strong> — Online & offline classes
                with self-paced modules.
              </span>
            </motion.li>
            <motion.li className="flex items-start gap-3" variants={itemVariants}>
              <FaChalkboardTeacher className="text-red-500 text-xl mt-1" />
              <span>
                <strong>Expert Instructors</strong> — Learn from certified
                professionals with real-world experience.
              </span>
            </motion.li>
            <motion.li className="flex items-start gap-3" variants={itemVariants}>
              <FaPlayCircle className="text-purple-500 text-xl mt-1" />
              <span>
                <strong>1.5k+ Video Lessons</strong> — Covering programming, IT
                tools & advanced tech stacks.
              </span>
            </motion.li>
          </motion.ul>

          {/* Dropdown for Course Selection */}
          <motion.div className="mt-4" variants={itemVariants}>
            <label className="block mb-2 font-medium text-gray-700">
              Choose a Course for Enquiry:
            </label>
            <motion.select
              value={selectedCourse}
              onChange={(e) => handleCourseSelect(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              whileFocus={{ scale: 1.02 }}
            >
              <option value="">-- Select Course --</option>
              <option value="web">Web Development</option>
              <option value="data">Data Science</option>
              <option value="cloud">Cloud Computing</option>
              <option value="ai">Artificial Intelligence</option>
              <option value="cybersecurity">Cybersecurity</option>
              <option value="fullstack">Full Stack Development</option>
              <option value="mobile">Mobile App Development</option>
            </motion.select>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default SearchCourses;
