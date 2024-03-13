"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../styles/navigation.module.css";

// ** global navigation bar
const Navigation = () => {
  // current url path getter hook
  const path = usePathname();

  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li>
          <Link href="/">Home</Link> {path === "/" && "🔥"}
        </li>
        <li>
          <Link href="/about-us">About Us</Link> {path === "/about-us" && "🔥"}
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
