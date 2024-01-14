import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header  className={`fixed left-0 top-[1rem] z-[30] w-full sm:block px-4`}>
         <div className=" bg-[#242B44] p-7 rounded-[1.25rem] shadow-[0px_4px_29px_0px_rgba(0,_0,_0,_0.15)]  container mx-auto flex flex-wrap items-center justify-between px-8 md:px-[3.31rem]">
        <section className="flex flex-row items-center justify-start">
          <Link href="/" className="inline-flex">
            {/* <img
              src="/assets/logo.svg"
              className="md:h-[2.875rem] h-[2.875rem]"
              alt="Company Logo"
            /> */}
            <div className='text-3xl text-white font-bold'>

            Logo
            </div>
          </Link>
        </section>
        </div>
    </header>
  )
}

export default Header