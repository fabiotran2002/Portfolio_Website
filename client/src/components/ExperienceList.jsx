import { NavLink } from "react-router-dom";
import logo from "../assets/fabio_tran_logo.png";

const experiences = [
  { title: "Title 1", description: "Description 1" },
  { title: "Title 2", description: "Description 2" },
  { title: "Title 2", description: "Description 3" },
];

export default function ExperienceList() {
  return (
    <div>
      <nav className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Projects</h1>
      </nav>
      {experiences.map((experience, index) => (
        <div key={index} className="mb-4">
          <p className="text-lg font-semibold">{experience.title}</p>
          <p className="text-sm text-gray-500">{experience.description}</p>
        </div>
      ))}
    </div>
  );
}
