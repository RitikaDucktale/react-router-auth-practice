import { NavLink } from "react-router-dom";

import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import instagram from "../../assets/instagram.png";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.icons}>
        <NavLink to="/dashboard/contact">
          <img src={facebook} alt="" />
        </NavLink>
        <NavLink to="/dashboard/contact">
          {" "}
          <img src={twitter} alt="" />
        </NavLink>
        <NavLink to="/dashboard/contact">
          {" "}
          <img src={instagram} alt="" />
        </NavLink>
      </div>
    </footer>
  );
};
export default Footer;
