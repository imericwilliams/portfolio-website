import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="p-8 pb-20 mx-auto px-4 sm:px-6">
        <hr className="w-full h-0.5 mx-auto mt-8 bg-neutral-200 border-0"></hr>
        <div className="mx-auto  p-4 flex flex-col text-center text-neutral-900 md:flex-row md:justify-between">
            <div className="flex flex-row items-center justify-center space-x-1 text-neutral-500 dark:text-neutral-100">
          <a href="/">© 2024 Eric Williams</a>
            </div>
            <div className="flex flex-row items-center justify-center space-x-2 mb-1">
              <Link href={"https://github.com/imericwilliams"} target="_blank">
                <BsGithub size={30} className="hover:-translate-y-1 transition-transform cursor-pointer"/>
              </Link>
              <Link href={"https://www.linkedin.com/in/imericwilliams/"} target="_blank">
                <BsLinkedin size={30} className="hover:-translate-y-1 transition-transform cursor-pointer"/>
              </Link>
            </div>
        </div>
    </footer>
  )
}

export default Footer;