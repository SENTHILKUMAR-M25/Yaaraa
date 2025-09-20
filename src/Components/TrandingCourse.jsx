import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaMobileAlt, FaFigma } from "react-icons/fa";
import { SiMongodb, SiExpress, SiRedux, SiGraphql, SiAdobephotoshop } from "react-icons/si";
import { MdSecurity } from "react-icons/md";
import { VscDebugConsole } from "react-icons/vsc";
import { AiOutlineApi } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

/* =========================================================
   RoadmapCircle Component
   ========================================================= */
function RoadmapCircle({ title, color, skills }) {
  const [radius, setRadius] = useState(getRadius());
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", contact: "" });
  const [errors, setErrors] = useState({});

  function getRadius() {
    if (window.innerWidth >= 1024) return 250;
    if (window.innerWidth >= 768) return 200;
    return 150;
  }

  useEffect(() => {
    const handleResize = () => setRadius(getRadius());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Form Submit Handler
  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!/^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/.test(formData.email))
      newErrors.email = "Valid email required";
    if (!/^\d{10}$/.test(formData.contact))
      newErrors.contact = "Enter 10-digit number";
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted:", formData);
      setShowForm(false);
      setFormData({ name: "", email: "", contact: "" });
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center bg-white/10 p-6 rounded-xl">
      {/* Orbit Container */}
      <motion.div
        className="relative flex items-center justify-center w-72 h-72 sm:w-96 sm:h-96 md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px]"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      >
        {skills.map((skill, i) => {
          const total = skills.length;
          const angle = (2 * Math.PI * i) / total;
          const x = radius * Math.cos(angle);
          const y = radius * Math.sin(angle);
          const deg = (angle * 180) / Math.PI;
          const flipped = deg > 90 && deg < 270 ? 180 : 0;

          return (
            <div
              key={i}
              className="absolute flex flex-col gap-2.5 items-center"
              style={{
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
                transform: "translate(-50%, -50%)",
              }}
            >
              <div
                className="rounded-full text-white flex items-center justify-center shadow-lg w-12 h-12 sm:w-16 sm:h-16 md:w-16 md:h-16 lg:w-20 lg:h-20"
                style={{ backgroundColor: color }}
              >
                {skill.icon}
              </div>
              <motion.span
                className="mt-2 text-xs sm:text-sm md:text-sm lg:text-base text-black text-center"
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                style={{ transform: `rotate(${deg + flipped}deg)` }}
              >
                {skill.name}
              </motion.span>
            </div>
          );
        })}
      </motion.div>

      {/* Central Title */}
      <div className="absolute flex flex-col items-center">
        <div
          className="flex items-center justify-center rounded-full shadow-2xl w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36"
          style={{ backgroundColor: color }}
        >
          <h1 className="text-white font-bold text-lg sm:text-2xl md:text-2xl lg:text-3xl text-center">
            {title}
          </h1>
        </div>
      </div>

      {/* CTA Button */}
      <button
        className="mt-8 px-5 py-2 rounded-lg text-white font-semibold hover:opacity-80 transition"
        style={{ backgroundColor: color }}
        onClick={() => setShowForm(true)}
      >
        Apply Now
      </button>

      {/* Modal Form */}
      {showForm && (
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center z-20">
          <div className="bg-white p-6 rounded-2xl w-80 shadow-xl">
            <h3 className="text-lg font-bold mb-4 text-gray-800 text-center">
              Apply for {title}
            </h3>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Name"
                className="w-full border p-2 rounded mb-2"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
              {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}

              <input
                type="email"
                placeholder="Email"
                className="w-full border p-2 rounded mb-2"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}

              <input
                type="tel"
                placeholder="Contact Number"
                className="w-full border p-2 rounded mb-2"
                value={formData.contact}
                onChange={(e) =>
                  setFormData({ ...formData, contact: e.target.value })
                }
              />
              {errors.contact && (
                <p className="text-red-500 text-xs">{errors.contact}</p>
              )}

              <div className="flex gap-3 mt-4">
                <button
                  type="submit"
                  className="flex-1 bg-green-600 text-white py-2 rounded hover:bg-green-700"
                >
                  Submit
                </button>
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="flex-1 bg-gray-300 py-2 rounded hover:bg-gray-400"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

/* =========================================================
   RoadmapPage Component
   ========================================================= */
export default function RoadmapPage() {
  const mernSkills = [
    { name: "MongoDB", icon: <SiMongodb size={28} /> },
    { name: "Express.js", icon: <SiExpress size={28} /> },
    { name: "React.js", icon: <FaReact size={28} /> },
    { name: "Node.js", icon: <FaNodeJs size={28} /> },
    { name: "Redux", icon: <SiRedux size={28} /> },
    { name: "GraphQL", icon: <SiGraphql size={28} /> },
    { name: "REST API", icon: <AiOutlineApi size={28} /> },
    { name: "Authentication", icon: <MdSecurity size={28} /> },
    { name: "Debugging", icon: <VscDebugConsole size={28} /> },
  ];

  const reactNativeSkills = [
    { name: "React Native Core", icon: <FaReact size={28} /> },
    { name: "Redux", icon: <SiRedux size={28} /> },
    { name: "APIs", icon: <AiOutlineApi size={28} /> },
    { name: "Authentication", icon: <MdSecurity size={28} /> },
    { name: "Debugging", icon: <VscDebugConsole size={28} /> },
  ];

  const uiuxSkills = [
    { name: "Figma", icon: <FaFigma size={28} /> },
    { name: "Adobe XD", icon: <SiAdobephotoshop size={28} /> },
    { name: "Wireframes", icon: <FaFigma size={28} /> },
    { name: "Prototyping", icon: <FaFigma size={28} /> },
    { name: "User Testing", icon: <FaMobileAlt size={28} /> },
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-start bg-gray-50">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mt-16 mb-8 text-gray-900">
        Our Trending Courses
      </h2>
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={50}
        slidesPerView={1}
        className="w-full h-screen"
      >
        <SwiperSlide>
          <RoadmapCircle title="MERN" color="#9333EA" skills={mernSkills} />
        </SwiperSlide>
        <SwiperSlide>
          <RoadmapCircle title="React Native" color="#06B6D4" skills={reactNativeSkills} />
        </SwiperSlide>
        <SwiperSlide>
          <RoadmapCircle title="UI/UX" color="#F97316" skills={uiuxSkills} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
