import React from "react";
import Link from "next/link";
const LinkItem = ({ text, href }) => {
  return (
    <a
      href={href}
      className={
        "font-hand text-2xl font-semibold hover:text-slate-400 transition-all ease-in-out duration-150 cursor-pointer"
      }
    >
      {text}
    </a>
  );
};

export const Navbar = () => {
  return (
    <div className="hidden md:flex items-center justify-evenly pr-4 mt-4 text-center text-xl">
      <Link passHref={true} href={"/"}>
        <LinkItem href="/" text={"Home"} />
      </Link>
      <Link passHref={true} href={"/rsvp"}>
        <LinkItem href={"/rsvp"} text={"RSVP"} />
      </Link>
      <Link passHref={true} href={"/location"}>
        <LinkItem href={"/location"} text={"Location"} />
      </Link>
      <Link passHref={true} href={"/accommodation"}>
        <LinkItem href={"/accommodation"} text={"Accommodation"} />
      </Link>
    </div>
  );
};
