import React from "react";
import Link from "next/link";
import Image from "next/image";

const IntroSection = () => {
  return (
    <section id="home-section">
        <div className="flex flex-col text-center items-center justify-center my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left space-x-10">
          <Link
            href={"https://www.linkedin.com/in/imericwilliams/"}>
            <Image 
              src="/headshot-suit.jpg"
              width={325}
              height={325}
              className="rounded-full shadow-2xl hover:-translate-y-3 transition-transform cursor-pointer"
              alt=""
          />
          </Link>
          <div className="md:mt-2 md:w-3/5">
            <h1 className="mb-8 font-bold text-4xl">Hi, I&#39;m Eric!</h1>
            <p><b>Software Engineer</b> based in Tucson, AZ. Working towards creating software that enhances user experience.</p>
          </div>
        </div>
      </section>
  )
}

export default IntroSection