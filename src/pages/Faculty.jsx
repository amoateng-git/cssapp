"use client"

import { useState } from "react"
import { FaEnvelope, FaPhone, FaSearch } from "react-icons/fa"
import { facultyData } from "../assets/assets"


const Faculty = () => {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredFaculty = facultyData.filter(
    (faculty) =>
      faculty.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faculty.specialization.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-gray-900 text-center mb-8">Faculty Directory</h1>

        {/* Search */}
        <div className="mb-8 max-w-md mx-auto">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search by name or specialization..."
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Faculty List */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredFaculty.length > 0 ? (
            filteredFaculty.map((faculty) => (
              <div key={faculty.id} className="bg-white overflow-hidden shadow rounded-lg">
                <div className="p-5">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-20 w-20">
                      <img
                        className="h-20 w-20 rounded-full"
                        src={faculty.image || "/placeholder.svg"}
                        alt={faculty.name}
                      />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-gray-900">{faculty.name}</h3>
                      <p className="text-sm text-blue-600">{faculty.position}</p>
                      <p className="text-sm text-gray-500">{faculty.specialization}</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <FaEnvelope className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                      <a href={`mailto:${faculty.email}`} className="hover:text-green-600">
                        {faculty.email}
                      </a>
                    </div>
                    <div className="flex items-center text-sm text-gray-500 mb-2">
                      <FaPhone className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                      <a href={`tel:${faculty.phone}`} className="hover:text-green-600">
                        {faculty.phone}
                      </a>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <svg
                        className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {faculty.office}
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-10 text-gray-500">
              No faculty members found matching your search.
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Faculty
