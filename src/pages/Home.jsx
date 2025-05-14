import { Link } from "react-router-dom"
import { FaBook, FaUsers, FaBullhorn, FaCalendarAlt } from "react-icons/fa"


const Home = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="bg-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">Department of Computer Science</h1>
            <p className="mt-3 max-w-md mx-auto text-xl sm:text-2xl md:mt-5 md:max-w-3xl">
              Faculty of Physical Sciences
            </p>
            <p className="mt-3 max-w-md mx-auto text-xl sm:text-2xl md:mt-5 md:max-w-3xl">
              University for Development Studies
            </p>
            <div className="mt-10 flex justify-center">
              <Link
                to="/courses"
                className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-gray-100 md:py-4 md:text-lg md:px-10"
              >
                View Courses
              </Link>
              <Link
                to="/contact"
                className="ml-4 px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-gray-400 md:py-4 md:text-lg md:px-10"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Department Profile */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Department Profile</h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Providing quality education in Computer Science since 2021
            </p>
          </div>

          <div className="mt-10">
            <div className="bg-white shadow overflow-hidden rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <p className="text-gray-700 leading-relaxed">
                  The Department of Computer Science at the University for Development Studies is committed to
                  excellence in teaching, research, and service. Our mission is to provide students with a strong
                  foundation in computer science principles and practices, preparing them for successful careers in the
                  rapidly evolving field of technology.
                </p>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  Our curriculum covers a wide range of topics, from programming and algorithms to artificial
                  intelligence and cybersecurity. We emphasize hands-on learning, problem-solving, and critical
                  thinking, ensuring that our graduates are well-equipped to meet the challenges of the digital age.
                </p>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  With state-of-the-art facilities and a dedicated faculty of experienced professionals, we offer a
                  supportive and stimulating environment for academic and personal growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12">Quick Links</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <Link to="/courses" className="group">
              <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <FaBook className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-medium text-gray-900 group-hover:text-blue-600">Courses</h3>
                <p className="mt-2 text-sm text-gray-500 text-center">Explore our comprehensive range of courses</p>
              </div>
            </Link>
            <Link to="/faculty" className="group">
              <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <FaUsers className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-medium text-gray-900 group-hover:text-blue-600">Faculty</h3>
                <p className="mt-2 text-sm text-gray-500 text-center">
                  Meet our experienced and dedicated faculty members
                </p>
              </div>
            </Link>
            <Link to="/announcements" className="group">
              <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <FaBullhorn className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-medium text-gray-900 group-hover:text-blue-600">Announcements</h3>
                <p className="mt-2 text-sm text-gray-500 text-center">Stay updated with the latest department news</p>
              </div>
            </Link>
            <Link to="/events" className="group">
              <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <FaCalendarAlt className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-medium text-gray-900 group-hover:text-blue-600">Events</h3>
                <p className="mt-2 text-sm text-gray-500 text-center">
                  Discover upcoming department events and activities
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
