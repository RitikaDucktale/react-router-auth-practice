import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../../context/AuthContext";

import Navbar from "../navbar/Navbar";
import Logo from "../logo/Logo";

import styles from "./Header.module.css";

const Header = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const onclickHandler = () => {
    logout();
    // console.log(loggedInUsers)
    localStorage.removeItem("authUser");
    navigate("/");
  };
  return (
    <div className={styles.container}>
      <Logo />
      <Navbar />
      <div>
        <Button
          variant="contained"
          onClick={onclickHandler}
          className={styles.btn}
        >
          Log Out
        </Button>
      </div>
    </div>
  );
};

export default Header;
