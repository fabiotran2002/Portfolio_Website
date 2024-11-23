import { NavLink } from "react-router-dom";

export default function Footer() {
  return (
    <div className="border-t-2 border-black">
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
        <p className="text-gray-700">
          <a href="https://www.linkedin.com/in/fabio-tran/" className="text-blue-500 hover:underline">
            LinkedIn: https://www.linkedin.com/in/fabio-tran/
          </a>
        </p>
        <p className="text-gray-700">
          <a href="https://github.com/fabiotran2002" className="text-blue-500 hover:underline">
            GitHub: https://github.com/fabiotran2002
          </a>
        </p>
      </nav>
    </div>
  );
}