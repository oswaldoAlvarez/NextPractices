"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import style from "./ActiveLink.module.css";

interface IActiveLink {
  path: string;
  text: string;
}

export const ActiveLink = ({ path, text }: IActiveLink) => {
  const pathname = usePathname();

  return (
    <Link
      className={`${style.link} ${pathname === path && style["active-link"]}`}
      href={path}
    >
      {text}
    </Link>
  );
};
