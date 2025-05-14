"use client"

import { useState } from "react"
import { FaDownload, FaCalendarAlt } from "react-icons/fa"
import { timetableData } from "../assets/assets"

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]

const Timetable = () => {
  const [selectedLevel, setSelectedLevel] = useState("300")

  const handleDownload = () => {
    alert("Timetable download functionality would be implemented here.")
  }

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-4 md:mb-0">Class Timetable</h1>
          <button
            onClick={handleDownload}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            <FaDownload className="mr-2" />
            Download Timetable
          </button>
        </div>

        {/* Level Selector */}
        <div className="mb-8">
          <label htmlFor="level" className="block text-sm font-medium text-gray-700 mb-2">
            Select Level
          </label>
          <select
            id="level"
            name="level"
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
            value={selectedLevel}
            onChange={(e) => setSelectedLevel(e.target.value)}
          >
            <option value="100">Level 100</option>
            <option value="200">Level 200</option>
            <option value="300">Level 300</option>
            <option value="400">Level 400</option>
          </select>
        </div>

        {/* Timetable */}
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <div className="flex items-center mb-4">
              <FaCalendarAlt className="h-5 w-5 text-blue-600 mr-2" />
              <h2 className="text-lg font-medium text-gray-900">Level {selectedLevel} Timetable</h2>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Time
                    </th>
                    {days.map((day) => (
                      <th
                        key={day}
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        {day}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {["08:00 - 10:00", "10:00 - 12:00", "12:00 - 14:00", "14:00 - 16:00"].map((timeSlot) => (
                    <tr key={timeSlot}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{timeSlot}</td>
                      {days.map((day) => {
                        const session = timetableData[selectedLevel][day]?.find((s) => s.time === timeSlot)
                        return (
                          <td key={`${day}-${timeSlot}`} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {session ? (
                              <div>
                                <div className="font-medium text-green-600">{session.course}</div>
                                <div>{session.venue}</div>
                              </div>
                            ) : (
                              <span className="text-gray-400">-</span>
                            )}
                          </td>
                        )
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Timetable
