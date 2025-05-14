"use client"

import { useState } from "react"
import { FaBullhorn, FaCalendarAlt } from "react-icons/fa"

const announcementsData = [
  {
    id: 1,
    title: "Mid-Trimester Examination Schedule",
    date: "2025-05-01",
    content:
      "The mid-trimester examinations for the 2024/2025 academic year will commence on May 13th, 2025. All students are advised to check the timetable and prepare accordingly.",
    important: true,
  },
  {
    id: 2,
    title: "Group Project Submission Guidelines",
    date: "2025-04-28",
    content:
      "All group projects for CSC 306 and CSC 310 must be submitted via Google Classroom. Please ensure that your project folders are named according to the specified format and include all required documentation.",
    important: true,
  },
  {
    id: 3,
    title: "Department Seminar Series",
    date: "2025-04-25",
    content:
      'The Department of Computer Science will be hosting a seminar on "Artificial Intelligence in Healthcare" on May 5th, 2025. All students and faculty members are encouraged to attend.',
    important: false,
  },
  {
    id: 4,
    title: "New Computer Lab Hours",
    date: "2025-04-20",
    content:
      "The computer lab will now be open from 8:00 AM to 10:00 PM on weekdays and from 9:00 AM to 5:00 PM on weekends to accommodate students working on their projects.",
    important: false,
  },
  {
    id: 5,
    title: "Faculty Office Hours Update",
    date: "2025-04-15",
    content:
      "Dr. Thomas Lawrence has updated his office hours for the remainder of the semester. He will be available for consultations on Mondays and Wednesdays from 2:00 PM to 4:00 PM.",
    important: false,
  },
]

const Announcements = () => {
  const [filter, setFilter] = useState("all")

  const filteredAnnouncements =
    filter === "all"
      ? announcementsData
      : filter === "important"
        ? announcementsData.filter((a) => a.important)
        : announcementsData.filter((a) => !a.important)

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-gray-900 text-center mb-8">Announcements</h1>

        {/* Filter */}
        <div className="mb-8 flex justify-center">
          <div className="inline-flex rounded-md shadow-sm">
            <button
              type="button"
              className={`px-4 py-2 text-sm font-medium rounded-l-md ${
                filter === "all" ? "bg-blue-600 text-white" : "bg-white text-gray-700 hover:bg-gray-50"
              }`}
              onClick={() => setFilter("all")}
            >
              All
            </button>
            <button
              type="button"
              className={`px-4 py-2 text-sm font-medium ${
                filter === "important" ? "bg-blue-600 text-white" : "bg-white text-gray-700 hover:bg-gray-50"
              }`}
              onClick={() => setFilter("important")}
            >
              Important
            </button>
            <button
              type="button"
              className={`px-4 py-2 text-sm font-medium rounded-r-md ${
                filter === "regular" ? "bg-blue-600 text-white" : "bg-white text-gray-700 hover:bg-gray-50"
              }`}
              onClick={() => setFilter("regular")}
            >
              Regular
            </button>
          </div>
        </div>

        {/* Announcements List */}
        <div className="space-y-6">
          {filteredAnnouncements.map((announcement) => (
            <div
              key={announcement.id}
              className={`bg-white overflow-hidden shadow rounded-lg ${
                announcement.important ? "border-l-4 border-blue-500" : ""
              }`}
            >
              <div className="px-4 py-5 sm:p-6">
                <div className="flex items-center">
                  <div className={`flex-shrink-0 ${announcement.important ? "text-blue-500" : "text-blue-500"}`}>
                    <FaBullhorn className="h-6 w-6" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900">
                      {announcement.title}
                      {announcement.important && (
                        <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          Important
                        </span>
                      )}
                    </h3>
                    <div className="mt-1 flex items-center text-sm text-gray-500">
                      <FaCalendarAlt className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                      <span>
                        {new Date(announcement.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-gray-600">{announcement.content}</p>
                </div>
              </div>
            </div>
          ))}

          {filteredAnnouncements.length === 0 && (
            <div className="text-center py-10 text-gray-500">No announcements found.</div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Announcements
