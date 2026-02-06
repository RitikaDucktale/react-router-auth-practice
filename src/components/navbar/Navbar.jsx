import { NavLink } from "react-router-dom";

import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <ul>
        <li>
          <NavLink
            style={({ isActive }) => {
              if (isActive) return { color: "rgb(9, 69, 201)" };
              else return { color: "black" };
            }}
            to="/dashboard"
          >
            Home
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/dashboard/users"
            style={({ isActive }) => {
              if (isActive) return { color: "rgb(9, 69, 201)" };
              else return { color: "black" };
            }}
          >
            Load Users
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dashboard/contact"
            style={({ isActive }) => {
              if (isActive) return { color: "rgb(9, 69, 201)" };
              else return { color: "black" };
            }}
            >
            Contact
          </NavLink>
            </li>
          <li>
          <NavLink
            to="/dashboard/demo"
            style={({ isActive }) => {
              if (isActive) return { color: "rgb(9, 69, 201)" };
              else return { color: "black" };
            }}
          >
            Demo
          </NavLink>
          </li>
      </ul>
    </div>
  );
};

export default Navbar;
