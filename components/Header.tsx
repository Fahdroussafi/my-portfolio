import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import LinkedIn from "../assets/linkedin.svg";
import Github from "../assets/github.svg";
import Facebook from "../assets/facebook.svg";
import Message from "../assets/message.svg";
import { Social } from "../typings";

type Props = {
  socials: Social[];
};

export default function Header({ socials }: Props) {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{ opacity: 0, x: -500, scale: 0.5 }}
        animate={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 1.5 }}
        exit={{ opacity: 0 }}
        className="flex flex-row items-center gap-5">
        {socials.map((social) => (
          <Link href={social.url} key={social._id}>
            <img
              src={
                social.title === "LinkedIn"
                  ? LinkedIn.src
                  : social.title === "Github"
                  ? Github.src
                  : social.title === "Facebook"
                  ? Facebook.src
                  : ""
              }
              alt=""
              className="h-5 w-5"
            />
          </Link>
        ))}
      </motion.div>

      <Link href="#contact">
        <motion.div
          initial={{ opacity: 0, x: -500, scale: 0.5 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="flex flex-row items-center text-gray-300 cursor-pointer gap-5">
          <img src={Message.src} alt="" className="h-5 w-5" />
          <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
            Get In Touch
          </p>
        </motion.div>
      </Link>
    </header>
  );
}
