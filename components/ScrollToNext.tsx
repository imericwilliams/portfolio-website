import React from 'react'
import { IoIosArrowRoundDown } from 'react-icons/io';
import Link from 'next/link';

const ScrollToNext = () => {
  return (
    <Link 
      className="scroll-down-style hover:translate-y-3 transition-transform cursor-pointer"
      href={"#about-section"}>
        <IoIosArrowRoundDown className="inline-block h-14 w-14" />
    </Link>
  )
}

export default ScrollToNext;