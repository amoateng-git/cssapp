"use client"

import { Link } from "react-router-dom"
import { FaTimes, FaHome, FaBook, FaUsers, FaBullhorn, FaCalendarAlt, FaClock, FaEnvelope } from "react-icons/fa"

const MobileMenu = ({ setMobileMenuOpen }) => {
  const closeMenu = () => {
    setMobileMenuOpen(false)
  }

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      <div className="fixed inset-0 bg-black bg-opacity-50" onClick={closeMenu}></div>
      <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-blue-800 text-white shadow-xl flex flex-col">
        <div className="flex items-center justify-between p-4 border-b border-blue-700">
          <h2 className="text-xl font-bold">Menu</h2>
          <button onClick={closeMenu} className="p-2 rounded-md hover:bg-blue-700">
            <FaTimes className="h-6 w-6" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto py-4">
          <nav className="flex flex-col space-y-1 px-2">
            <Link to="/" className="flex items-center px-4 py-3 rounded-md hover:bg-blue-700" onClick={closeMenu}>
              <FaHome className="mr-3 h-5 w-5" />
              Home
            </Link>
            <Link
              to="/courses"
              className="flex items-center px-4 py-3 rounded-md hover:bg-blue-700"
              onClick={closeMenu}
            >
              <FaBook className="mr-3 h-5 w-5" />
              Courses
            </Link>
            <Link
              to="/faculty"
              className="flex items-center px-4 py-3 rounded-md hover:bg-blue-700"
              onClick={closeMenu}
            >
              <FaUsers className="mr-3 h-5 w-5" />
              Faculty
            </Link>
            <Link
              to="/announcements"
              className="flex items-center px-4 py-3 rounded-md hover:bg-blue-700"
              onClick={closeMenu}
            >
              <FaBullhorn className="mr-3 h-5 w-5" />
              Announcements
            </Link>
            <Link
              to="/events"
              className="flex items-center px-4 py-3 rounded-md hover:bg-blue-700"
              onClick={closeMenu}
            >
              <FaCalendarAlt className="mr-3 h-5 w-5" />
              Events
            </Link>
            <Link
              to="/timetable"
              className="flex items-center px-4 py-3 rounded-md hover:bg-blue-700"
              onClick={closeMenu}
            >
              <FaClock className="mr-3 h-5 w-5" />
              Timetable
            </Link>
            <Link
              to="/contact"
              className="flex items-center px-4 py-3 rounded-md hover:bg-blue-700"
              onClick={closeMenu}
            >
              <FaEnvelope className="mr-3 h-5 w-5" />
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default MobileMenu
