"use client"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useState } from "react"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Courses from "./pages/Courses"
import Faculty from "./pages/Faculty"
import Announcements from "./pages/Announcements"
import Events from "./pages/Events"
import Timetable from "./pages/Timetable"
import Contact from "./pages/Contact"
import MobileMenu from "./components/MobileMenu"

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar toggleMobileMenu={toggleMobileMenu} />
        {mobileMenuOpen && <MobileMenu setMobileMenuOpen={setMobileMenuOpen} />}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/faculty" element={<Faculty />} />
            <Route path="/announcements" element={<Announcements />} />
            <Route path="/events" element={<Events />} />
            <Route path="/timetable" element={<Timetable />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
