import React from "react";
import SideBar from "../ui/dashboard/sidebar/page";
import styles from "../ui/dashboard/dashboard.module.css"
import Navbar from "../ui/dashboard/navbar/page";

const Layout = ({children}) => {
  return (
    <div className={styles.container}>
        <div className={styles.menu}>
            <SideBar/>
        </div>
        <div className={styles.content}>
        <Navbar/>
        {children}
        </div>
    </div>
  )
};

export default Layout;
