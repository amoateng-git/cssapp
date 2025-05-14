"use client"

import { useState } from "react"
import { FaSearch } from "react-icons/fa"

const coursesData = [
  {
    id: 1,
    code: "CSC 101",
    title: "Introduction to Computer Science",
    level: 100,
    description: "An introduction to the fundamental concepts of computer science and programming.",
    credits: 3,
  },
  {
    id: 2,
    code: "CSC 102",
    title: "Programming Fundamentals",
    level: 100,
    description: "Basic programming concepts using a high-level programming language.",
    credits: 3,
  },
  {
    id: 3,
    code: "CSC 201",
    title: "Data Structures",
    level: 200,
    description: "Study of data structures and their applications in problem-solving.",
    credits: 3,
  },
  {
    id: 4,
    code: "CSC 202",
    title: "Algorithms",
    level: 200,
    description: "Design and analysis of algorithms for solving computational problems.",
    credits: 3,
  },
  {
    id: 5,
    code: "CSC 301",
    title: "Database Systems",
    level: 300,
    description: "Principles and practices of database management systems.",
    credits: 3,
  },
  {
    id: 6,
    code: "CSC 302",
    title: "Software Engineering",
    level: 300,
    description: "Methodologies and tools for software development and project management.",
    credits: 3,
  },
  {
    id: 7,
    code: "CSC 306",
    title: "Mobile Device Programming",
    level: 300,
    description: "Development of applications for mobile devices and platforms.",
    credits: 3,
  },
  {
    id: 8,
    code: "CSC 310",
    title: "Game Design and Programming",
    level: 300,
    description: "Principles and practices of game design and development.",
    credits: 3,
  },
  {
    id: 9,
    code: "CSC 401",
    title: " Introduction To Artificial Intelligence",
    level: 400,
    description: "Introduction to artificial intelligence concepts and applications.",
    credits: 3,
  },
  {
    id: 10,
    code: "CSC 402",
    title: "Computer Networks",
    level: 400,
    description: "Principles and practices of computer networking and communication.",
    credits: 3,
  },
]

const Courses = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedLevel, setSelectedLevel] = useState("all")

  const filteredCourses = coursesData.filter((course) => {
    const matchesSearch =
      course.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.title.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesLevel = selectedLevel === "all" || course.level === Number.parseInt(selectedLevel)
    return matchesSearch && matchesLevel
  })

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-gray-900 text-center mb-8">Courses Offered</h1>

        {/* Search and Filter */}
        <div className="mb-8 flex flex-col md:flex-row gap-4 justify-between">
          <div className="relative flex-1">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search course..."
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring--500 focus:border-blue-500 sm:text-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="w-full md:w-48">
            <select
              className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
            >
              <option value="all">All Levels</option>
              <option value="100">Level 100</option>
              <option value="200">Level 200</option>
              <option value="300">Level 300</option>
              <option value="400">Level 400</option>
            </select>
          </div>
        </div>

        {/* Courses List */}
        <div className="bg-white shadow overflow-hidden sm:rounded-md">
          <ul className="divide-y divide-gray-200">
            {filteredCourses.length > 0 ? (
              filteredCourses.map((course) => (
                <li key={course.id}>
                  <div className="px-4 py-4 sm:px-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="min-w-0 flex-1 px-4">
                          <div>
                            <p className="text-sm font-medium text-blue-600 truncate">{course.code}</p>
                            <p className="mt-1 text-lg font-semibold text-gray-900">{course.title}</p>
                          </div>
                        </div>
                      </div>
                      <div className="ml-2 flex-shrink-0 flex">
                        <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-blue-800">
                          Level {course.level}
                        </p>
                        <p className="ml-2 px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-gray-100 text-gray-800">
                          {course.credits} Credits
                        </p>
                      </div>
                    </div>
                    <div className="mt-2 sm:flex sm:justify-between">
                      <div className="sm:flex">
                        <p className="mt-2 text-sm text-gray-500 sm:mt-0">{course.description}</p>
                      </div>
                    </div>
                  </div>
                </li>
              ))
            ) : (
              <li className="px-4 py-5 text-center text-gray-500">No courses found matching your criteria.</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Courses
