import React from "react";
import Link from "next/link";
import Image from "next/image";
import ScrollToNext from "./ScrollToNext";

const IntroSection = () => {
  return (
    <section>
        <div className="flex flex-col text-center items-center justify-center my-auto py-auto sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left w-full md:w-auto">
          <Link
            href={"https://www.linkedin.com/in/imericwilliams/"}>
            <Image 
              src="/headshot-suit.jpg"
              width={400}
              height={400}
              className="rounded-full shadow-2xl hover:-translate-y-3 transition-transform cursor-pointer"
              alt=""
          />
          </Link>
          <div className="md:mt-2 md:w-3/5 p-6">
            <h1 className="mb-6 font-bold text-5xl">Hi, I&#39;m <span className="underline underline-offset-8 decoration-accent-color">Eric</span>!</h1>
            <p className="text-2xl"><span className="font-semibold text-accent-color">Software Engineer</span> based in Tucson, AZ. Working towards creating software that enhances user experience.</p>
          </div>
        </div>
        <div className="hidden md:flex flex flex-row items-center text-center justify-center mt-2">
          <ScrollToNext />
        </div>
      </section>
  )
}

export default IntroSection;