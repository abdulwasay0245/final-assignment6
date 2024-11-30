import React from 'react'
import Image from 'next/image'
const Navbar = () => {
  return (
      <nav className='flex items-center justify-center h-[72px] px-6 border-b-[2px] border-black bg-[#F7F7F7] '>
          <div className='w-[80%] flex items-center justify-between gap-8'>
              <div className='flex items-center justify-center gap-[10.5px]'>
                    <Image
                  alt='companyLogo'
                  width={32.58}
                  height={30.38}
                  src="/main/company.png"></Image>
              <h1 className='text-[25.07px] font-bold'>Ddsgnr</h1>
              </div>
              <Image
                  alt='hamburgur'
                  width={24}
                  height={24}
          src="/main/hamburger.png"
          className='md:hidden'></Image>
              <div className='hidden md:flex gap-8 justify-self-center text-sm bg-white px-3'>
        <ul className='flex gap-8 text-center items-center'>
          <li>Home</li>
          <li>Courses</li>
          <li>Services</li>
          <li>Achivements</li>
          <li>About Us</li>
          <li>Testimonials</li>
        </ul>
      <div className='flex gap-4'>
     
        <button className='border-[1px] border-black rounded-[5px] px-5 py-2'>Login</button>
        <button className='border-[1px] border-black rounded-[5px] bg-black text-white px-5 py-2'>Sign Up</button>

      </div>
      </div>
      </div>

</nav>
  )
}

export default Navbar