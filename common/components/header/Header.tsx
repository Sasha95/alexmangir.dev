import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "../../../public/icons/logo.png";
import s from "./styles/header.module.scss";

interface NavigateType {
  navigate: string;
  link: string;
}

const navigate: NavigateType[] = [
  { navigate: "About", link: "/about" },
  { navigate: "Passions", link: "/passions" },
  { navigate: "Portfolio", link: "/portfolio" },
];

export const Header = () => {
  return (
    <div className={s.header}>
      <div className={s.logo}>
        <Link href="/">
          <Image src={logo} alt="logo" width={160} height={27} />
        </Link>
      </div>

      <div className={s.navigate}>
        <div className={s.link}>
          {navigate.map((x) => (
            <Link key={x.link} href={x.link}>
              {x.navigate}
            </Link>
          ))}
        </div>
        <Link href="/contact" className={s.button}>
          Contact Me
        </Link>
      </div>
    </div>
  );
};
