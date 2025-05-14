"use client"

import { useState } from "react"
import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from "react-icons/fa"

const eventsData = [
  {
    id: 1,
    title: "Artificial Intelligence in Healthcare Seminar",
    date: "2025-05-05",
    time: "14:00 - 16:00",
    location: "Main Auditorium",
    description:
      "A seminar exploring the applications of artificial intelligence in healthcare, featuring guest speakers from leading medical institutions.",
    category: "seminar",
  },
  {
    id: 2,
    title: "Programming Competition",
    date: "2025-05-10",
    time: "09:00 - 17:00",
    location: "Computer Lab 1",
    description:
      "An annual programming competition for students to showcase their coding skills and problem-solving abilities.",
    category: "competition",
  },
  {
    id: 3,
    title: "Career Fair",
    date: "2025-05-20",
    time: "10:00 - 15:00",
    location: "University Hall",
    description:
      "A career fair featuring representatives from tech companies looking to recruit talented computer science graduates.",
    category: "career",
  },
  {
    id: 4,
    title: "Mobile App Development Workshop",
    date: "2025-05-25",
    time: "13:00 - 17:00",
    location: "Computer Lab 2",
    description: "A hands-on workshop on mobile app development, covering both Android and iOS platforms.",
    category: "workshop",
  },
  {
    id: 5,
    title: "Game Development Showcase",
    date: "2025-05-30",
    time: "15:00 - 18:00",
    location: "Main Auditorium",
    description: "A showcase of games developed by students in the Game Design and Programming course.",
    category: "showcase",
  },
]

const Events = () => {
  const [filter, setFilter] = useState("all")

  const filteredEvents = filter === "all" ? eventsData : eventsData.filter((event) => event.category === filter)

  // Sort events by date
  const sortedEvents = [...filteredEvents].sort((a, b) => new Date(a.date) - new Date(b.date))

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-gray-900 text-center mb-8">Upcoming Events</h1>

        {/* Filter */}
        <div className="mb-8 flex justify-center">
          <div className="inline-flex flex-wrap justify-center gap-2">
            <button
              type="button"
              className={`px-4 py-2 text-sm font-medium rounded-md ${
                filter === "all" ? "bg-blue-600 text-white" : "bg-white text-gray-700 hover:bg-gray-50"
              }`}
              onClick={() => setFilter("all")}
            >
              All Events
            </button>
            <button
              type="button"
              className={`px-4 py-2 text-sm font-medium rounded-md ${
                filter === "seminar" ? "bg-blue-600 text-white" : "bg-white text-gray-700 hover:bg-gray-50"
              }`}
              onClick={() => setFilter("seminar")}
            >
              Seminars
            </button>
            <button
              type="button"
              className={`px-4 py-2 text-sm font-medium rounded-md ${
                filter === "workshop" ? "bg-blue-600 text-white" : "bg-white text-gray-700 hover:bg-gray-50"
              }`}
              onClick={() => setFilter("workshop")}
            >
              Workshops
            </button>
            <button
              type="button"
              className={`px-4 py-2 text-sm font-medium rounded-md ${
                filter === "competition" ? "bg-blue-600 text-white" : "bg-white text-gray-700 hover:bg-gray-50"
              }`}
              onClick={() => setFilter("competition")}
            >
              Competitions
            </button>
            <button
              type="button"
              className={`px-4 py-2 text-sm font-medium rounded-md ${
                filter === "career" ? "bg-blue-600 text-white" : "bg-white text-gray-700 hover:bg-gray-50"
              }`}
              onClick={() => setFilter("career")}
            >
              Career Events
            </button>
            <button
              type="button"
              className={`px-4 py-2 text-sm font-medium rounded-md ${
                filter === "showcase" ? "bg-green-600 text-white" : "bg-white text-gray-700 hover:bg-gray-50"
              }`}
              onClick={() => setFilter("showcase")}
            >
              Showcases
            </button>
          </div>
        </div>

        {/* Events List */}
        <div className="space-y-6">
          {sortedEvents.map((event) => (
            <div key={event.id} className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <div className="sm:flex sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">{event.title}</h3>
                    <div className="mt-2 sm:flex sm:flex-col">
                      <div className="flex items-center text-sm text-gray-500">
                        <FaCalendarAlt className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                        <span>
                          {new Date(event.date).toLocaleDateString("en-US", {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </span>
                      </div>
                      <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-1">
                        <FaClock className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                        <span>{event.time}</span>
                      </div>
                      <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-1">
                        <FaMapMarkerAlt className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    <div className="mt-3">
                      <p className="text-gray-600">{event.description}</p>
                    </div>
                  </div>
                  <div className="mt-4 sm:mt-0 sm:ml-6">
                    <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 text-blue-800 capitalize">
                      {event.category}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {sortedEvents.length === 0 && <div className="text-center py-10 text-gray-500">No events found.</div>}
        </div>
      </div>
    </div>
  )
}

export default Events
