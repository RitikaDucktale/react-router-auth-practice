import { Outlet } from "react-router-dom";

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

import styles from "./Layout.module.css";

const MainLayout = () => {
  console.log("MainLayout rendered \/");
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.outlet}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
