import { FaFacebook, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa"
import { prof } from "../assets/assets"

const Footer = () => {
  return (
    <footer className="bg-blue-800 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-row">
            <img src={prof.udslogo} alt="" width={90} className='m-2 -mt-1 w-16 h-16' />
            <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold">University for Development Studies</h3>
            <p>Department of Computer Science</p>
          </div>
            </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-800">
              <FaFacebook className="h-6 w-6" />
            </a>
            <a href="#" className="hover:text-gray-800">
              <FaTwitter className="h-6 w-6" />
            </a>
            <a href="#" className="hover:text-gray-800">
              <FaInstagram className="h-6 w-6" />
            </a>
            <a href="#" className="hover:text-gray-800">
              <FaEnvelope className="h-6 w-6" />
            </a>
          </div>
        </div>
        <div className="mt-4 text-center">
          <p>&copy; {new Date().getFullYear()} University for Development Studies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
