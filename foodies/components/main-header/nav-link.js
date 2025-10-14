"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import classes from "./nav-link.module.css";

export function NavLink({ href, children }) {
  const path = usePathname();
  return (
    <Link
      {...{ href }}
      className={
        path === href ? `${classes.link} ${classes.active}` : undefined
      }
    >
      {children}
    </Link>
  );
}
