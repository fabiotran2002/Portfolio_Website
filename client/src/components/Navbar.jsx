import { NavLink } from "react-router-dom";
import logo from "../assets/fabio_tran_logo.png"

const menuOptions = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Projects", path: "/projects" },
  { title: "Contact", path: "/contact" },
];

export default function Navbar() {
  return (
    <div>
      <nav className="flex justify-between items-center mb-6 px-4 py-0 bg-primary">
        <NavLink to="/">
          <img
            alt="Fabio Tran logo"
            style={{ width: "300px", height: "auto" }}
            src={logo} />
        </NavLink>
        <div className="flex space-x-4 text-white">
          {menuOptions.map((menuOption, index) => (
            <NavLink
              key={index}
              to={menuOption.path}
              className="text-lg font-semibold mb-4"
            >
              {menuOption.title}
            </NavLink>
          ))}
        </div>
      </nav>
    </div>
  );
}
