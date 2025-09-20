import React, { useState, useMemo } from "react";
import { FaStar } from "react-icons/fa";
import { X, Clock, Award, BookOpen } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import TrandingCourse from "./TrandingCourse";

import "swiper/css";
import "swiper/css/navigation";

// 📌 Course images
import course1 from "../assets/course1.png";
import course2 from "../assets/course2.jpg";
import course3 from "../assets/course3.jpg";
import course4 from "../assets/course4.png";
import course5 from "../assets/course5.jpg";
import course6 from "../assets/course6.jpg";
import course7 from "../assets/course7.png";
import course8 from "../assets/course6.jpg";
import course9 from "../assets/course9.jpeg";

const Courses = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [filter, setFilter] = useState("All");

  const courses = [
    { id: 1, category: "Information Technologies", title: "Full Stack Web Development", level: "Beginner", desc: "Learn HTML, CSS, JavaScript, React, Node.js, and MySQL/MongoDB to build real-world projects.", rating: 5, img: course1, duration: "6 Months", syllabus: ["HTML, CSS, JS", "React, Node.js", "MongoDB & MySQL", "Project Work"], faqs: ["Do I need coding experience? → No, we start from basics.", "Will I get a certificate? → Yes, after successful completion."] },
    { id: 2, category: "Information Technologies", title: "Data Science & AI", level: "Intermediate", desc: "Master Python, Machine Learning, and AI concepts with practical datasets and projects.", rating: 4, img: course2, duration: "8 Months", syllabus: ["Python Basics", "Machine Learning", "Deep Learning", "Capstone Project"], faqs: ["Do I need math background? → Basic statistics is enough.", "Is it project-based? → Yes, includes real datasets."] },
    { id: 3, category: "Information Technologies", title: "Digital Marketing", level: "Beginner", desc: "Boost your career with SEO, Social Media Marketing, Google Ads, and Analytics training.", rating: 4, img: course3, duration: "3 Months", syllabus: ["SEO", "Google Ads", "Social Media Marketing", "Analytics"], faqs: ["Is it suitable for beginners? → Yes, no prior experience required.", "Will I work on campaigns? → Yes, hands-on practice included."] },
    { id: 4, category: "Electronics", title: "IoT (Internet of Things)", level: "Intermediate", desc: "Learn to connect devices and build IoT-based smart systems.", rating: 4, img: course4, duration: "5 Months", syllabus: ["Sensors", "IoT Protocols", "Cloud IoT", "Mini Project"], faqs: ["Do I need electronics background? → Basics will be taught.", "Will it include hardware kits? → Yes."] },
    { id: 5, category: "Electronics", title: "Cyber Security & Networking", level: "Advanced", desc: "Understand ethical hacking, network defense, and cyber law essentials.", rating: 5, img: course5, duration: "7 Months", syllabus: ["Networking Basics", "Ethical Hacking", "Firewalls", "Capstone Project"], faqs: ["Will I get a certificate? → Yes.", "Is it practical-based? → Yes, with lab sessions."] },
    { id: 6, category: "Civil Engineering", title: "AutoCAD Civil 3D", level: "Beginner", desc: "Master AutoCAD Civil 3D for surveying and design.", rating: 4, img: course6, duration: "4 Months", syllabus: ["Survey Basics", "AutoCAD Tools", "3D Projects"], faqs: ["Is prior CAD knowledge required? → No.", "Do we get project files? → Yes."] },
    { id: 7, category: "Civil Engineering", title: "STAAD Pro", level: "Intermediate", desc: "Structural analysis and design using STAAD Pro.", rating: 5, img: course7, duration: "6 Months", syllabus: ["Basics", "Load Analysis", "Project Work"], faqs: ["Will I learn real-world applications? → Yes.", "Is certification included? → Yes."] },
    { id: 8, category: "Commerce & Economics", title: "Tally with GST", level: "Beginner", desc: "Learn Tally ERP with GST implementation.", rating: 4, img: course8, duration: "3 Months", syllabus: ["Accounting Basics", "Tally ERP", "GST Filing"], faqs: ["Is it beginner-friendly? → Yes.", "Will we do GST projects? → Yes."] },
    { id: 9, category: "Commerce & Economics", title: "Microsoft Excel for Business", level: "Beginner", desc: "Master Excel formulas, pivot tables, and dashboards.", rating: 5, img: course9, duration: "2 Months", syllabus: ["Excel Basics", "Formulas", "Dashboards"], faqs: ["Is prior knowledge required? → No.", "Will it include case studies? → Yes."] },
  ];

  const categories = ["All", ...new Set(courses.map((c) => c.category))];



  const filteredCourses = useMemo(() => {
    if (filter === "All") return courses;
    return courses.filter((c) => c.category === filter);
  }, [filter, courses]);

  const handleDetailsClick = (course) => {
    setSelectedCourse(course);
    setShowDetails(true);
    setShowForm(false);
  };

  const handleCloseModal = () => {
    setSelectedCourse(null);
    setShowDetails(false);
    setShowForm(false);
  };

  const handleEnrollClick = () => setShowForm(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Enrollment Submitted ✅");
    handleCloseModal();
  };


  return (
    <motion.section
      id="courses"
      className="py-16 sm:py-20 px-4 sm:px-6 md:px-20 bg-gradient-to-b from-gray-50 to-white relative top-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight">
          Choose your<span className="text-blue-600"> Learning Track</span>
        </h2>
        <p className="text-gray-600 mt-3 sm:mt-4 text-base sm:text-lg max-w-2xl mx-auto">
          Choose from multiple domains and learn with hands-on training, expert instructors, and industry projects.
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 sm:px-5 py-2 rounded-full border font-medium text-sm sm:text-base transition ${
              filter === cat
                ? "bg-blue-600 text-white shadow"
                : "bg-white text-gray-700 hover:bg-blue-50 border-gray-300"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Swiper Carousel */}
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1200: { slidesPerView: 3 },
        }}
        className="relative"
      >
        {filteredCourses.map((course) => (
          <SwiperSlide key={course.id}>
            <motion.div
              whileHover={{ y: -6, scale: 1.02 }}
              className="bg-white/20 rounded-2xl m-4 shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden relative flex flex-col h-[430px]"
            >
              {/* Image */}
              <div className="h-[180px] w-full overflow-hidden">
                <img
                  src={course.img}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="absolute top-3 left-3 bg-blue-600 text-white px-2 sm:px-3 py-1 text-xs font-semibold rounded-full shadow">
                {course.level}
              </span>

              {/* Content */}
              <div className="p-4 sm:p-6 flex flex-col flex-grow">
                <h3 className="text-lg sm:text-xl font-semibold line-clamp-1">{course.title}</h3>
                <p className="text-gray-600 mt-2 text-sm sm:text-base leading-relaxed line-clamp-3 flex-grow">
                  {course.desc}
                </p>
                <div className="flex items-center gap-2 text-gray-500 text-sm mt-2">
                  <Clock size={16} /> {course.duration}
                </div>
                <div className="flex items-center gap-1 text-yellow-400 mt-2">
                  {[...Array(course.rating)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <motion.button
                  onClick={() => handleDetailsClick(course)}
                  className="mt-4 w-full px-4 py-2 sm:px-5 sm:py-2.5 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg font-medium shadow-md hover:from-blue-700 hover:to-blue-600 transition"
                  whileTap={{ scale: 0.97 }}
                >
                  View Details →
                </motion.button>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}

        {/* Custom arrows styling (outside) */}
        <style>{`
          .swiper-button-prev,
          .swiper-button-next {
            color: #2563eb; /* Blue */
            font-weight: bold;
            background: white;
            border-radius: 9999px;
            padding: 12px;
            box-shadow: 0 4px 10px rgba(0,0,0,0.15);
          }
          .swiper-button-prev {
            left: -2.5rem;
          }
          .swiper-button-next {
            right: -2.5rem;
          }
          .swiper-button-prev::after,
          .swiper-button-next::after {
            font-size: 18px;
            font-weight: bold;
          }
        `}</style>
      </Swiper>

      {/* Details Modal (unchanged) */}
      <AnimatePresence>
        {showDetails && selectedCourse && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 px-3 sm:px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleCloseModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-2xl shadow-xl w-full max-w-lg sm:max-w-2xl relative overflow-y-auto max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Banner */}
              <div className="h-32 sm:h-40 w-full overflow-hidden rounded-t-2xl relative">
                <img src={selectedCourse.img} alt="banner" className="w-full h-full object-cover" />
                <button
                  onClick={handleCloseModal}
                  className="absolute top-3 right-3 bg-white/80 rounded-full p-1.5 sm:p-2 shadow hover:bg-red-500 hover:text-white"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-4 sm:p-8">
                {!showForm ? (
                  <>
                    <h2 className="text-xl sm:text-3xl font-bold text-blue-600 mb-2 text-center">
                      {selectedCourse.title}
                    </h2>
                    <p className="text-gray-600 text-center mb-4 sm:mb-6 text-sm sm:text-base">
                      {selectedCourse.desc}
                    </p>
                    <div className="space-y-4 sm:space-y-5 text-sm sm:text-base">
                      <div className="flex items-center gap-2">
                        <Clock className="text-blue-600" size={18} />
                        <p className="text-gray-700">Duration: {selectedCourse.duration}</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg flex items-center gap-2">
                          <BookOpen className="text-blue-600" /> Syllabus
                        </h3>
                        <ul className="list-disc pl-5 sm:pl-6 text-gray-700">
                          {selectedCourse.syllabus.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg flex items-center gap-2">
                          <Award className="text-blue-600" /> FAQs
                        </h3>
                        <ul className="list-disc pl-5 sm:pl-6 text-gray-700">
                          {selectedCourse.faqs.map((faq, i) => (
                            <li key={i}>{faq}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <motion.button
                      onClick={handleEnrollClick}
                      className="mt-5 w-full px-4 py-2.5 sm:px-5 sm:py-3 bg-gradient-to-r from-green-600 to-green-500 text-white rounded-lg font-semibold shadow-md hover:from-green-700 hover:to-green-600 transition"
                      whileTap={{ scale: 0.97 }}
                    >
                      🚀 Enroll Now
                    </motion.button>
                  </>
                ) : (
                  <motion.form
                    onSubmit={handleSubmit}
                    className="space-y-4 sm:space-y-5"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 20, opacity: 0 }}
                  >
                    <h2 className="text-xl sm:text-2xl font-bold text-blue-600 text-center mb-3 sm:mb-4">
                      Enrollment Form
                    </h2>
                    <div>
                      <label className="block font-medium text-sm sm:text-base">Name</label>
                      <input type="text" required className="w-full border rounded-lg px-3 sm:px-4 py-2 mt-1 focus:ring-2 focus:ring-blue-500 outline-none text-sm sm:text-base" />
                    </div>
                    <div>
                      <label className="block font-medium text-sm sm:text-base">Email</label>
                      <input type="email" required className="w-full border rounded-lg px-3 sm:px-4 py-2 mt-1 focus:ring-2 focus:ring-blue-500 outline-none text-sm sm:text-base" />
                    </div>
                    <div>
                      <label className="block font-medium text-sm sm:text-base">Phone</label>
                      <input type="tel" required className="w-full border rounded-lg px-3 sm:px-4 py-2 mt-1 focus:ring-2 focus:ring-blue-500 outline-none text-sm sm:text-base" />
                    </div>
                    <p className="text-gray-500 text-xs sm:text-sm">
                      We’ll contact you within 24 hours after submission.
                    </p>
                    <motion.button
                      type="submit"
                      className="w-full px-4 sm:px-5 py-2.5 sm:py-3 bg-gradient-to-r from-green-600 to-green-500 text-white rounded-lg font-semibold shadow-md hover:from-green-700 hover:to-green-600 transition text-sm sm:text-base"
                      whileTap={{ scale: 0.97 }}
                    >
                      ✅ Submit Enrollment
                    </motion.button>
                  </motion.form>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
  <TrandingCourse />
    </motion.section>
  );
};

export default Courses;
