"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../styles/navigation.module.scss";

// ** global navigation bar
const Navigation = () => {
  // current url path getter hook
  const path = usePathname();

  return (
    <nav className={styles.nav}>
      <Link href="/">
        <img src="/images/common/logo.png" alt="logo"></img>
        <p>NGV</p>
      </Link>
    </nav>
  );
};

export default Navigation;
