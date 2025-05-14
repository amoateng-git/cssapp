import user1 from './user1.jpeg'
import user2 from './user2.jpeg'
import user3 from './user3.jpeg'
import user4 from './user4.jpeg'

import logocss from './LOGOCSS.png'
import csslogo from './csslogo.jpeg'
import udslogo from './udslogo.png'

export const prof ={
    user1,
    user2,
    user3,
    user4,
    csslogo,
    udslogo,
    logocss
}

 export const facultyData = [
    {
      id: 1,
      name: "Dr. Thomas Lawrence",
      position: "Head of Department",
      specialization: "Artificial Intelligence",
      email: "tlawrence@uds.edu.gh",
      phone: "+233 20 123 4567",
      office: "CS Faculty Building, Room 101",
      image: user1,
    },
    {
      id: 2,
      name: "Dr. A.W.Y. Iddrisu",
      position: "Senior Lecturer",
      specialization: "Software Engineering",
      email: "awyiddrisu@uds.edu.gh",
      phone: "+233 20 765 4321",
      office: "CS Faculty Building, Room 102",
      image: user2,
    },
    {
      id: 3,
      name: "Prof. Tandoh Lawrence",
      position: "Professor",
      specialization: "Computer Networks",
      email: "tandohlaw@uds.edu.gh",
      phone: "+233 20 111 2222",
      office: "CS Faculty Building, Room 103",
      image: user3,
    },
    {
      id: 4,
      name: "Dr. Michael Osei",
      position: "Lecturer",
      specialization: "Database Systems",
      email: "mosei@uds.edu.gh",
      phone: "+233 20 333 4444",
      office: "CS Faculty Building, Room 104",
      image: user3,
    },
    {
      id: 5,
      name: "Dr. Francis Saa-Dittoh",
      position: "Lecturer",
      specialization: "Mobile Computing",
      email: "franssattidoh@uds.edu.gh",
      phone: "+233 20 555 6666",
      office: "CS Faculty Building, Room 105",
      image: user4,
    },
    {
      id: 6,
      name: "Dr. Emmanuel Baako",
      position: "Lecturer",
      specialization: "Game Development",
      email: "ekwame@uds.edu.gh",
      phone: "+233 20 777 8888",
      office: "CS Faculty Building, Room 106",
      image: user1,
    },
  ]
  
export const timetableData = {
    100: {
      Monday: [
        { time: "08:00 - 10:00", course: "CSC 101", venue: "Lecture Hall 1" },
        { time: "12:00 - 14:00", course: "CSC 103", venue: "Lecture Hall 2" },
      ],
      Tuesday: [{ time: "10:00 - 12:00", course: "CSC 105", venue: "Lecture Hall 1" }],
      Wednesday: [
        { time: "08:00 - 10:00", course: "CSC 101", venue: "Lecture Hall 1" },
        { time: "14:00 - 16:00", course: "CSC 107", venue: "Computer Lab 1" },
      ],
      Thursday: [{ time: "10:00 - 12:00", course: "CSC 105", venue: "Lecture Hall 1" }],
      Friday: [
        { time: "12:00 - 14:00", course: "CSC 103", venue: "Lecture Hall 2" },
        { time: "14:00 - 16:00", course: "CSC 107", venue: "Spanish Lab 1" },
      ],
    },
    200: {
      Monday: [
        { time: "08:00 - 10:00", course: "CSC 201", venue: "Lecture Hall 3" },
        { time: "14:00 - 16:00", course: "CSC 203", venue: "Lecture Hall 2" },
      ],
      Tuesday: [{ time: "10:00 - 12:00", course: "CSC 205", venue: "Lecture Hall 3" }],
      Wednesday: [
        { time: "08:00 - 10:00", course: "CSC 201", venue: "Lecture Hall 3" },
        { time: "12:00 - 14:00", course: "CSC 207", venue: "Spanish Lab 2" },
      ],
      Thursday: [{ time: "10:00 - 12:00", course: "CSC 205", venue: "Lecture Hall 3" }],
      Friday: [
        { time: "14:00 - 16:00", course: "CSC 203", venue: "Lecture Hall 2" },
        { time: "12:00 - 14:00", course: "CSC 207", venue: "Spanish Lab 2" },
      ],
    },
    300: {
      Monday: [
        { time: "10:00 - 12:00", course: "CSC 301", venue: "Lecture Hall 4" },
        { time: "14:00 - 16:00", course: "CSC 303", venue: "Lecture Hall 3" },
      ],
      Tuesday: [
        { time: "08:00 - 10:00", course: "CSC 305", venue: "Lecture Hall 4" },
        { time: "12:00 - 14:00", course: "CSC 307", venue: "Spanish Lab 3" },
      ],
      Wednesday: [
        { time: "10:00 - 12:00", course: "CSC 301", venue: "Lecture Hall 4" },
        { time: "14:00 - 16:00", course: "CSC 306", venue: "Spanish Lab 1" },
      ],
      Thursday: [
        { time: "08:00 - 10:00", course: "CSC 305", venue: "Lecture Hall 4" },
        { time: "14:00 - 16:00", course: "CSC 310", venue: "Spanish Lab 3" },
      ],
      Friday: [
        { time: "14:00 - 16:00", course: "CSC 303", venue: "Lecture Hall 3" },
        { time: "12:00 - 14:00", course: "CSC 307", venue: "Spanish Lab 3" },
      ],
    },
    400: {
      Monday: [
        { time: "08:00 - 10:00", course: "CSC 401", venue: "Lecture Hall 5" },
        { time: "12:00 - 14:00", course: "CSC 403", venue: "Lecture Hall 4" },
      ],
      Tuesday: [
        { time: "10:00 - 12:00", course: "CSC 405", venue: "Lecture Hall 5" },
        { time: "14:00 - 16:00", course: "CSC 407", venue: "Spanish Lab 4" },
      ],
      Wednesday: [
        { time: "08:00 - 10:00", course: "CSC 401", venue: "Lecture Hall 5" },
        { time: "12:00 - 14:00", course: "CSC 409", venue: "Lecture Hall 4" },
      ],
      Thursday: [
        { time: "10:00 - 12:00", course: "CSC 405", venue: "Lecture Hall 5" },
        { time: "14:00 - 16:00", course: "CSC 407", venue: "Spanish Lab 4" },
      ],
      Friday: [
        { time: "12:00 - 14:00", course: "CSC 403", venue: "Lecture Hall 4" },
        { time: "14:00 - 16:00", course: "CSC 409", venue: "Lecture Hall 4" },
      ],
    },
  }
