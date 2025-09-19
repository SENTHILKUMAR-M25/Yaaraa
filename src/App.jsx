import React from 'react'
import Navbar from './Components/Navbar'
import Footer from './Components/Pages/Footer'
import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from './Components/Pages/HomePage';
import { AnimatePresence, motion } from 'framer-motion';
import Courses from './Components/Courses';
import Testimonials from './Components/Testimonials';
import About from './Components/Pages/AboutUs';
import Services from './Components/Pages/Services';
import InternshipsSection from './Components/Pages/InternshipsSection';
import Workshop from './Components/Pages/Workshop';
import ContactForm from './Components/Pages/ContactForm';
import ServiceDetail from './Components/Pages/ServiceDetail';
// import CourseDetail from './Components/Pages/CourseDetail'; 
import CourseDetails from './Components/CourseDetails';

const App = () => {
  const location = useLocation();

  // Reusable animation wrapper
  const PageWrapper = ({ children }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );

  return (
    <>
      {/* Navbar animation */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Navbar />
      </motion.div>

      {/* Page container */}
      <div style={{height:500}} >
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageWrapper><HomePage /></PageWrapper>} />
            <Route path="/Courses" element={<PageWrapper><Courses /></PageWrapper>} />
            
            {/* ✅ Course Details route */}
            <Route
              path="/courses/:courseId"
              element={
                <PageWrapper>
                <CourseDetails />
                </PageWrapper>
              }
            />

            <Route path="/Testimonials" element={<PageWrapper><Testimonials /></PageWrapper>} />
            <Route path="/AboutUs" element={<PageWrapper><About /></PageWrapper>} />
            <Route path="/Services" element={<PageWrapper><Services /></PageWrapper>} />
            <Route path="/Services/:serviceId" element={<PageWrapper><ServiceDetail /></PageWrapper>} />
            <Route path="/Internship" element={<PageWrapper><InternshipsSection /></PageWrapper>} />
            <Route path="/Contact" element={<PageWrapper><ContactForm /></PageWrapper>} />
            <Route path="/Workshops" element={<PageWrapper><Workshop /></PageWrapper>} />
          </Routes>
         
        </AnimatePresence>
          <Footer />
      </div>

      {/* ✅ Footer is always visible */}
     
    </>
  )
}

export default App
