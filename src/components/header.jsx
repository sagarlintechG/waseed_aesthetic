import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from "../../public/icons/WELLNESS-01.svg"

const Header = () => {
  return (
    <header  className={`fixed left-0 top-[1rem] z-[30] w-full sm:block px-4`}>
         <div className=" bg-[#242B44] py-3 rounded-[1.25rem] shadow-[0px_4px_29px_0px_rgba(0,_0,_0,_0.15)]  mx-auto flex flex-wrap items-center justify-between px-8 md:px-[3.31rem]">
        <section className="flex flex-row items-center justify-start">
          <Link href="/" className="inline-flex">
            <Image
              src={logo}
              // className="md:h-[2.875rem] h-[2.875rem]"
              alt="Company Logo"
              height={60}
              width={60}
            />
            {/* <div className='text-3xl text-white font-bold'>

            Logo
            </div> */}
          </Link>
        </section>
        </div>
    </header>
  )
}

export default Header