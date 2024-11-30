import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
      <section className='flex flex-col lg:flex-row items-center lg:justify-evenly'>
          <div className='flex flex-col items-center justify-center gap-6 '>
              <h3 className='text-[40px] font-bold w-[380px] lg:text-[56px] lg:w-[500px] '>Learn new skills online with ease</h3>
              <p className='w-[380px] text-[18px] lg:w-[500px]'>Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>
              <div className='flex gap-4 pt-4'>
                  <button className='w-[178px] h-12 border-black border-[1px] rounded-[5px] bg-black text-white'>Start learning now</button>
                  <button className='w-[178px] h-12 border-black border-[1px] rounded-[5px] '>Explore Courses</button>
              </div>
          </div>
          <nav className=''>
              
        </nav>
              <Image
                  alt='hero'
                  className='mt-6 lg:mt-0 lg:w-[640px] '
                  src="/main/girl.png"
                  width={428}
                  height={390}>
                  
              </Image>
          
     </section>
  )
}

export default Hero