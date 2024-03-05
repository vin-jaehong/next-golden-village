"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// ** global navigation bar
const Navigation = () => {
  // current url path getter hook
  const path = usePathname();

  return (
    <nav>
      <ul>
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
