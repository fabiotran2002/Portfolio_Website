import { NavLink } from "react-router-dom";

// Import portfolio pictures
import portfolio_demo_pic from "../assets/portfolio_demo_pic.png"
// Import IceBreaker pictures
import icebreaker_demo_pic_one from "../assets/icebreaker_demo_pic_one.png"
import icebreaker_demo_pic_two from "../assets/icebreaker_demo_pic_two.png"
// Import SyncUp pictures
import syncup_demo_pic_one from "../assets/syncup_demo_pic_one.png"

const experiences = [
  {
    title: "Coding Portfolio Web Application w/ MERN Technology Stack (current site)",
    image: portfolio_demo_pic,
    description: [
      "Designed a digital portfolio with an intuitive and responsive user interface for seamless browsing on all devices.",
      "Implemented React components to display project details and skills.",
      "Integrated back-end services with Node.js and Express.js.",
      "Followed Agile development practices for structured and iterative project completion."
    ],
  },
  {
    title: "Social Networking Mobile Android Application",
    image: icebreaker_demo_pic_one,
    description: [
      "Developed mobile application using Android Studio, Kotlin/Java, Jetpack Compose, and object-oriented principles",
      "Implemented Google Firebase to utilize several cloud-based development tools and services for various app features",
      "Utilized Scrum methodology to distribute workload between sprints and ensure deliverables meet deadlines"
    ],
  },
  {
    title: "Calendar/Availability Web-Based Application",
    image: syncup_demo_pic_one,
    description: [
      "Built web-based application using Java, JavaFX, Spring Boot, Maven, and object-oriented principles",
      "Documented project through producing Software Requirements Specification and Software Design Document",
      "Distributed the workload evenly to groupmates and monitored project progress"
    ],
  },
];

export default function ExperienceList() {
  return (
    <div>
      <nav className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Projects</h1>
      </nav>
      {experiences.map((experience, index) => (
        <div key={index} className="mb-8"> {/* Increased margin for spacing */}
          {/* Description */}
          <div className="mb-4">
            <p className="text-lg font-semibold">{experience.title}</p>
            <ul className="text-sm text-gray-500 list-disc list-inside">
              {experience.description.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>

          {/* Image */}
          <img
            src={experience.image}
            alt={`${experience.title} logo`}
            className="w-1/2 h-auto object-cover rounded mx-auto"
          />
        </div>
      ))}
    </div>
  );
}

