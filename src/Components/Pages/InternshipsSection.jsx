// InternshipsSection.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, X, CheckCircle } from "lucide-react";

// ✅ Replace with your image
const bgImage =
  "https://png.pngtree.com/thumb_back/fh260/background/20230715/pngtree-d-illustration-of-laptop-furnished-with-educational-materials-signifying-online-education-image_3861968.jpg";

const internships = [
  {
    id: 1,
    role: "Frontend Developer Intern",
    description:
      "Work with React.js, Tailwind CSS, and APIs to build user-friendly interfaces.",
  },
  {
    id: 2,
    role: "UI/UX Design Intern",
    description:
      "Assist in designing modern web and mobile experiences using Figma & Adobe XD.",
  },
  {
    id: 3,
    role: "Backend Developer Intern",
    description:
      "Develop scalable APIs using Node.js, Express, and MongoDB with cloud deployment.",
  },
  {
    id: 4,
    role: "Mobile App Developer Intern",
    description:
      "Develop scalable mobile apps using Flutter or React Native with cloud backend.",
  },
];

const InternshipsSection = () => {
  const [selectedInternship, setSelectedInternship] = useState(null);
  const [resumeFile, setResumeFile] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setResumeFile(file || null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // auto-close after 2.5s
    setTimeout(() => {
      setSubmitted(false);
      setSelectedInternship(null);
      setResumeFile(null);
    }, 2500);
  };

  return (
    <section
      className="py-16 px-6 relative bg-fixed bg-center bg-cover"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-700/70 via-black/10 to-blue-700/70"></div>

      <div className="relative z-10 max-w-6xl mx-auto text-center text-white top-5">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold "
        >
          Internship Opportunities
        </motion.h2>
        <p className="mt-3 mb-10 text-lg text-blue-100">
          Gain real-world experience and grow your career with our curated internships.
        </p>
      </div>

      {/* Internship Cards */}
      <div className="relative z-10 grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {internships.map((internship, index) => (
          <motion.div
            key={internship.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className= " bg-white/50  backdrop-blur-lg shadow-lg rounded-2xl p-6 text-left hover:shadow-xl transition-all border border-blue-100"
          >
            <div className="flex items-center gap-3 mb-4">
              <Briefcase className="text-blue-500" size={28} />
              <h3 className="text-xl font-semibold text-gray-800">
                {internship.role}
              </h3>
            </div>

            <p className="text-gray-900  mt-3">{internship.description}</p>

            <button
              onClick={() => {
                setSelectedInternship(internship);
                setResumeFile(null);
                setSubmitted(false);
              }}
              className="mt-5 px-5 py-2 bg-blue-500 text-white font-medium rounded-xl hover:bg-blue-600 transition"
            >
              Apply Now
            </button>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedInternship && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-2xl shadow-lg w-full max-w-lg max-h-[90vh] p-6 relative border border-blue-200 overflow-y-auto"
            >
              {/* Close */}
              <button
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                onClick={() => setSelectedInternship(null)}
              >
                <X size={24} />
              </button>

              {!submitted ? (
                <>
                  <h3 className="text-2xl font-semibold text-blue-800 mb-4">
                    Apply for {selectedInternship.role}
                  </h3>

                  <form className="space-y-4" onSubmit={handleSubmit}>
                    {/* Full Name */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        placeholder="Enter your name"
                        required
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Email
                      </label>
                      <input
                        type="email"
                        className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        placeholder="Enter your email"
                        required
                      />
                    </div>

                    {/* Contact */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Contact Number
                      </label>
                      <input
                        type="tel"
                        pattern="[0-9]{10}"
                        className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        placeholder="Enter your contact number"
                        required
                      />
                    </div>

                    {/* Duration */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Preferred Internship Duration
                      </label>
                      <select
                        className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        required
                      >
                        <option value="">Select Duration</option>
                        <option value="1 Month">1 Month</option>
                        <option value="2 Months">2 Months</option>
                        <option value="3 Months">3 Months</option>
                        <option value="4 Months">4 Months</option>
                        <option value="5 Months">5 Months</option>
                        <option value="6 Months">6 Months</option>
                      </select>
                    </div>

                    {/* Resume Upload */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700">
                        Upload Resume
                      </label>
                      <input
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={handleFileChange}
                        className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        required
                      />
                    </div>

                    {/* Resume Preview */}
                    {resumeFile && (
                      <div className="mt-3 p-3 border rounded-lg bg-gray-50 text-sm text-gray-700">
                        <div className="flex justify-between items-center mb-2">
                          <div>
                            <p>
                              <strong>File:</strong> {resumeFile.name}
                            </p>
                            <p>
                              <strong>Size:</strong>{" "}
                              {(resumeFile.size / 1024).toFixed(1)} KB
                            </p>
                            <p>
                              <strong>Type:</strong>{" "}
                              {resumeFile.type || "Unknown"}
                            </p>
                          </div>
                          <button
                            type="button"
                            onClick={() => setResumeFile(null)}
                            className="text-red-500 hover:text-red-700 text-sm"
                          >
                            Remove
                          </button>
                        </div>

                        {resumeFile.type === "application/pdf" && (
                          <div className="mt-3 h-60 overflow-y-auto border rounded-lg">
                            <iframe
                              src={URL.createObjectURL(resumeFile)}
                              className="w-full h-full"
                              title="Resume Preview"
                            />
                          </div>
                        )}
                      </div>
                    )}

                    <button
                      type="submit"
                      className="w-full bg-blue-500 text-white py-2 rounded-lg font-medium hover:bg-blue-600 transition"
                    >
                      Submit Application
                    </button>
                  </form>
                </>
              ) : (
                <div className="flex flex-col items-center justify-center py-10">
                  <CheckCircle className="text-green-500 mb-4" size={64} />
                  <h3 className="text-xl font-semibold text-green-600">
                    Application Submitted!
                  </h3>
                  <p className="text-gray-600 mt-2 text-center">
                    Thank you for applying. We’ll get back to you soon.
                  </p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default InternshipsSection;
