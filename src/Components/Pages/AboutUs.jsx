import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import team1 from "../../assets/ceo.png";
import team2 from "../../assets/ceo.png";
import team3 from "../../assets/ceo.png";
import team4 from "../../assets/ceo.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// 🔥 Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const containerStagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

const zoomIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const teamMembers = [
  {
    name: "Dr. Sarah Johnson",
    role: "Admin",
    image: team1,
    desc: "Leading groundbreaking research in pharmaceutical sciences for over 15 years.",
  },
  {
    name: "Michael Lee",
    role: "Trainer",
    image: team2,
    desc: "Ensuring smooth global operations with efficiency and excellence.",
  },
  {
    name: "Anita Rao",
    role: "Trainer",
    image: team3,
    desc: "Building strong brand presence and customer trust worldwide.",
  },
  {
    name: "Rajesh Kumar",
    role: "Trainer",
    image: team4,
    desc: "Dedicated to maintaining the highest standards of product quality.",
  },
];

const About = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  const headingClass =
    "text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent";

  return (
    <section className="bg-white text-gray-900 mt-7 py-16 sm:px-6 lg:relative overflow-hidden">
      {/* Page Title */}
      <div className="text-center mb-14">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={0}
          className={headingClass}
        >
          About Us
        </motion.h2>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "80px" }}
          transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
          className="h-1 mt-3 mx-auto bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
        />
      </div>

      {/* About Content */}
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Text Content */}
        <motion.div
          variants={containerStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex-1 text-center lg:text-left space-y-6"
        >
          <motion.p
            variants={fadeInUp}
            className=" text-base font-semibold sm:text-lg leading-relaxed text-justify"
            style={{ fontFamily: "Libertinus Serif Display" }}
          >
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  YaaRaa Technologies is a leading Corporate Training Institute which
            bridges the gap between colleges and companies. We offer world-class
            education across multi-domain technologies for students, non-IT
            professionals, and corporates through online and offline classes.
            Established in 2021, we are a group of experienced training
            providers with strong technical and core foundation in various
            domains, bringing quality and result-oriented education to learning
            aspirants within a corporate environment.
          </motion.p>
        {/* Our features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            {[
              "💼 Gain Corporate Exposure from the Industry’s Professionals",
              "🕒 With Flexible Timings Master Domains at your convenience",
              "📜 Certificate Courses for Official Recognition",
              "🚀 Gain Hands-on Training with Live Project Exposure",
              "🎯 Job assured Trending courses at affordable cost",
              "🧩 Set your Corporate career on the Right path with Placement Assistance",
            ].map((item, i) => (
              // <motion.div
              //   key={i}
              //   variants={fadeInUp}
              //   custom={i}
              //   className="flex items-start sm:items-center sm:justify-start space-x-4 p-5 rounded-lg hover:bg-black transition"
              // >
              //   <span className="text-2xl">{item.split(" ")[0]}</span>
              //   <p className="text-sm sm:text-base">
              //     {item.replace(/^[^ ]+ /, "")}
              //   </p>
              // </motion.div>
              <motion.div
  key={i}
  variants={fadeInUp}
  custom={i}
  className="flex items-start sm:items-center sm:justify-start space-x-4 p-5 rounded-lg transition
             bg-black/40 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:shadow-lg"
>
  <span className="text-2xl">{item.split(" ")[0]}</span>
  <p className="text-sm sm:text-base">
    {item.replace(/^[^ ]+ /, "")}
  </p>
</motion.div>

            ))}
          </div>
        </motion.div>

        {/* Image with zoom effect */}
      <motion.div
  variants={zoomIn}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  className="flex-1 relative w-full max-w-md mx-auto group"
>
  {/* The image */}
  <motion.img
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 150 }}
    src={team1}
    alt="About"
    className="w-full rounded-xl relative z-10"
  />

  {/* Custom “floating” shadow */}
  <div
    className="
      absolute
      left-6
      right-6
      bottom-2
      h-10
      rounded-xl
      bg-black/70
      blur-2xl
      opacity-0
      group-hover:opacity-60
      transition-all
      duration-500
    "
  />

  <div className="absolute top-0 left-0 bg-blue-600 text-white px-4 py-2 rounded-br-xl font-bold text-sm sm:text-base">
    7+ Years Experience
  </div>
</motion.div>

      </div>

      {/* Training Process */}
      <div className="mt-20 max-w-7xl mx-auto text-center px-4">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={8}
          className={headingClass}
        >
          Our Training Process
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={9}
          className="mt-4 text-gray-700 max-w-3xl mx-auto text-sm sm:text-base"
        >
          Our training process kick starts with talent procurement and is
          tailored to meet industry requirements. We focus on 100% hands-on
          training with live projects, gaining technical intelligence, and
          grooming personalities for the corporate world.
        </motion.p>

        {/* Process Steps */}
        <motion.div
          variants={containerStagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mt-10"
        >
          {[
            { icon: "🔍", text: "Recognize Career Potential with talent acquisition" },
            { icon: "🎓", text: "Select your Technical Course of your Interest" },
            { icon: "🚀", text: "Obtain Practical Knowledge of Working with live projects" },
            { icon: "🏅", text: "Attend the final interview to receive the Course Certificate" },
            { icon: "⭐", text: "Kick Start your Career with Placement Assistance" },
          ].map((step, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              custom={i}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 150 }}
              className="flex flex-col items-center bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition text-center"
            >
              <div className="text-3xl mb-2">{step.icon}</div>
              <p className="text-sm sm:text-base">{step.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Team Section */}
      <div className="mt-24 max-w-7xl mx-auto  px-4">
        <motion.h2
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={`text-center mb-12 ${headingClass}`}
        >
          Meet Our Team
        </motion.h2>

        <div className="relative ">
          <Slider {...{ ...sliderSettings, adaptiveHeight: true }}>
            {teamMembers.map((member, i) => (
              <div key={i} className="px-3 my-2.5">
                <motion.div
                  whileHover={{ scale: 1.05, y: -8 }}
                  transition={{ type: "spring", stiffness: 120 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden text-center p-6 h-full flex flex-col items-center"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 sm:w-28 sm:h-28 mx-auto rounded-full border-4 border-blue-500 object-cover"
                  />
                  <h3 className="mt-4 text-lg sm:text-xl font-semibold text-gray-900">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium text-sm sm:text-base">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-xs sm:text-sm mt-3">
                    {member.desc}
                  </p>
                </motion.div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default About;
