import Image from 'next/image'
import React from 'react'

const courseCards = [
    {
        address: "/course1/course(1).png",
        heading: "Design & Development"
    },
     {
        address: "/course1/course(2).png",
        heading: "Marketing"
    },
     {
        address: "/course1/course(3).png",
        heading: "Development"
    },
     {
        address: "/course1/course(4).png",
        heading: "Communication"
    },
     {
        address: "/course1/course(5).png",
        heading: "Design & Development"
    },
     {
        address: "/course1/course(6).png",
        heading: "Digital Marketing"
    },
     {
        address: "/course1/course(7).png",
        heading: "Business"
    },
     {
        address: "/course1/course(8).png",
        heading: "Finance"
    },
     {
        address: "/course1/course(9).png",
        heading: "Consulting"
    },
     
]

const Course1 = () => {
  return (
      <section className='flex flex-col items-center gap-12'>
           <h2 className='text-[32px] lg:text-[48px] font-bold text-center'>Explore Courses By Category</h2>
          <p className='w-[385px] text-[18px] font-normal text-center lg:w-[768px]'>Discover a wide range of courses covering a variety of subjects, taught by expert instructors.</p>
          <div className='grid grid-rows-10 gap-5 justify-items-center  lg:grid-cols-3 lg:grid-rows-4 lg:gap-x-6 lg:gap-y-16'>
              
              {courseCards.map((courseCards, index) => (
                  <div key={ index} className='flex p-4 items-center  w-[410px]  bg-[#F7F7F7] rounded-[5px] gap-2 '>
                  <Image
                      alt='course'
                      width={100}
                      height={100}
                      src={courseCards.address}>
                  </Image> 
                  <div>
                          <h2 className='text-[20px] font-semibold'>{courseCards.heading }</h2>
                      <p className='text-[18px] font-normal'>50+ Courses Available</p>
                  </div>   
                  </div>
                 ))}
<button className='w-[155px] h-[48px] gap-2 border-[1px] border-black rounded-[5px] lg:col-span-3'>View All Courses</button>
          </div>
    </section>
  )
}

export default Course1