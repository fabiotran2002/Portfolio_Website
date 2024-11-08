import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <nav className="flex flex-col justify-center items-center mb-6">
        <p className="text-gray-700">Contact Information</p>
        <p className="text-gray-700">
          <a href="mailto:fabiotran18@gmail.com" className="text-blue-500 hover:underline">
            Email: fabiotran18@gmail.com
          </a>
        </p>
        <p className="text-gray-700">
          <a href="tel:+16175487329" className="text-blue-500 hover:underline">
            Phone: +1 (617) 548-7329
          </a>
        </p>
      </nav>
    </div>
  );
}