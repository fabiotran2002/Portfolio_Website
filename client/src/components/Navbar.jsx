import { NavLink } from "react-router-dom";
import logo from "../assets/fabio_tran_logo.png"

export default function Navbar() {
  return (
    <div>
      <nav className="flex justify-between items-center mb-6">
        <NavLink to="/">
          <img
          alt="Fabio Tran logo"
          style={{ width: "250px", height: "auto" }}
          src={logo} />
        </NavLink>
      </nav>
    </div>
  );
}