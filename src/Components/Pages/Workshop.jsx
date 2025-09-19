import React, { useState } from "react";
import img1 from "../../assets/Wps1.jpg";

function Workshop() {
  const data = [
    {
      title: "Full-Stack Development",
      date: "28th September 2025",
      desc: "Master front-end and back-end technologies to build complete web applications.",
    },
    {
      title: "UI/UX Designing",
      date: "2nd October 2025",
      desc: "Learn design principles, wireframing, and prototyping for beautiful user interfaces.",
    },
    {
      title: "Mobile App Development",
      date: "8th October 2025",
      desc: "Create cross-platform mobile apps using the latest frameworks and tools.",
    },
    {
      title: "Digital Marketing",
      date: "15th October 2025",
      desc: "Explore SEO, social media strategy, and online advertising campaigns.",
    },
  ];

  const [selected, setSelected] = useState(null);
  const [form, setForm] = useState({ name: "", email: "", phone: "", status: "" });
  const [errors, setErrors] = useState({});
const [success, setSuccess] = useState(false);
  const validate = () => {
    const newErr = {};
    if (!form.name.trim()) newErr.name = "Name is required";
    if (!form.email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/))
      newErr.email = "Valid email required";
    if (!form.phone.match(/^[0-9]{10}$/))
      newErr.phone = "Phone must be 10 digits";
    if (!form.status) newErr.status = "Please choose status";
    setErrors(newErr);
    return Object.keys(newErr).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    alert(
      `✅ Your registration was successful!\n\n` +
        `We will send the course details for "${selected.title}" to your email — please check it.`
    );

    setSelected(null);
    setForm({ name: "", email: "", phone: "", status: "" });
  };

  return (
    <section
      id="workshops"
      className=" py-18 px-4 bg-cover bg-center "
      style={{ backgroundImage: `url(${img1})` }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10">
        <h2 className="text-2xl font-bold text-center mb-10 text-white">
          Upcoming Workshops
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {data.map((item, idx) => (
            <div
              key={idx}
              className="bg-gray-50/20 p-6 rounded-2xl shadow shadow-blue-400 hover:shadow-lg transition"
            >
              <h3 className="text-xl text-blue-300 font-bold mb-2">{item.title}</h3>
              <p className="text-white/75 mb-3">{item.desc}</p>
              <button
                onClick={() => setSelected(item)}
                className="mt-4 bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800"
              >
                Register
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
    {selected && (
  <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
    <div className="bg-white rounded-2xl w-full max-w-md p-8 relative shadow-2xl">
      <button
        onClick={() => setSelected(null)}
        className="absolute right-4 top-4 text-gray-500 hover:text-black text-xl"
      >
        ✕
      </button>

      {success ? (
        <div className="text-center py-6 animate-fade-in">
          <div className="text-green-600 text-5xl mb-4">✔</div>
          <h3 className="text-2xl font-bold mb-2">Registration Successful!</h3>
          <p className="text-gray-600">
            We’ll send details for{" "}
            <span className="font-semibold">{selected.title}</span> to your email.
          </p>
        </div>
      ) : (
        <>
          <h3 className="text-2xl font-bold mb-6 text-center text-gray-800">
            Register for {selected.title}
          </h3>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone
              </label>
              <input
                type="tel"
                placeholder="10-digit phone number"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Current Status
              </label>
              <select
                value={form.status}
                onChange={(e) => setForm({ ...form, status: e.target.value })}
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              >
                <option value="">-- Select --</option>
                <option value="Student">Student</option>
                <option value="Working">Working</option>
                <option value="Non-IT">Non-IT</option>
                <option value="Job-seeker">Job-seeker</option>
              </select>
              {errors.status && (
                <p className="text-red-500 text-sm mt-1">{errors.status}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2 rounded-lg font-semibold hover:opacity-90"
            >
              Submit
            </button>
          </form>
        </>
      )}
    </div>
  </div>
)}

    </section>
  );
}

export default Workshop;
