import React from 'react'

const details = [
    {
        heading: "+200",
        content: "Courses"
    },
      {
        heading: "50K",
        content: "Mentors"
    },
        {
        heading: "370k",
        content: "Students"
    },
          {
        heading: "100+",
        content: "Recognition"
    },
    
]

const Achivement = () => {
  return (
      <section className='flex flex-col item gap-12 py-12 px-6 items-center'>
          <article className='flex flex-col gap-4'>
          <h4 className='text-[32px] font-bold text-center '>Our Achivements</h4>
          <p className='text-[18px] text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. </p>
          </article>
          <div className='grid grid-cols-2 grid-rows-2 gap-20 items-center justify-center lg:grid-cols-4 lg:grid-rows-1'>
              {details.map((details, index) => (
                  <div key={index} className='flex flex-col'>
                      <h6 className='text-[20px] font-bold'>{details.heading }</h6>
                      <p className='text-[16px]'>{details.content }</p>
                  </div>
              ))}
          </div>
      </section>
  )
}

export default Achivement