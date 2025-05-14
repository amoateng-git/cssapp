"use client"

import { Link } from "react-router-dom"
import { FaBars, FaGraduationCap } from "react-icons/fa"
import { prof } from "../assets/assets"

const Navbar = ({ toggleMobileMenu }) => {
  return (
    <nav className="bg-blue-700 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img src={prof.logocss} alt="" className="w-10 h-10" />
              <span className="font-bold text-xl ml-2">CS Department</span>
            </Link>
           
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="px-3 py-2 rounded-md hover:bg-blue-600">
              Home
            </Link>
            <Link to="/courses" className="px-3 py-2 rounded-md hover:bg-blue-600">
              Courses
            </Link>
            <Link to="/faculty" className="px-3 py-2 rounded-md hover:bg-blue-600">
              Faculty
            </Link>
            <Link to="/announcements" className="px-3 py-2 rounded-md hover:bg-blue-600">
              Announcements
            </Link>
            <Link to="/events" className="px-3 py-2 rounded-md hover:bg-blue-600">
              Events
            </Link>
            <Link to="/timetable" className="px-3 py-2 rounded-md hover:bg-blue-600">
              Timetable
            </Link>
            <Link to="/contact" className="px-3 py-2 rounded-md hover:bg-blue-600">
              Contact
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-blue-600 focus:outline-none"
            >
              <FaBars className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
