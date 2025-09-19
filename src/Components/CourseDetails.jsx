import React from "react";
import { useParams } from "react-router-dom";

const syllabusData = {
  web: ["HTML, CSS, JS", "React.js & Node.js", "Databases", "Projects"],
  data: ["Python & Pandas", "Machine Learning", "SQL", "Capstone Project"],
  cloud: ["AWS Basics", "Azure", "Google Cloud", "DevOps"],
  ai: ["Neural Networks", "Deep Learning", "NLP", "AI Deployment"],
  cybersecurity: ["Network Security", "Ethical Hacking", "Risk Management"],
  fullstack: ["Frontend", "Backend", "Databases", "Deployment"],
  mobile: ["React Native", "Flutter", "iOS/Android Deployment"],
};

const CourseDetails = () => {
  const { id } = useParams();
  const syllabus = syllabusData[id] || [];

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold text-purple-700 mb-6">
        {id.toUpperCase()} Course Syllabus
      </h2>
      <ul className="list-disc pl-6 space-y-2 text-gray-700">
        {syllabus.map((topic, i) => (
          <li key={i}>{topic}</li>
        ))}
      </ul>
    </div>
  );
};

export default CourseDetails;
