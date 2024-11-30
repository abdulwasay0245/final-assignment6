import Image from 'next/image'
import React from 'react'
interface Product {
    image: string,
    heading: string,
    Paragraph: string,
}

const products:Product[] = [
    {
        image: '/course2/course2(1).png',
        heading: 'UX/UI Design 201',
        Paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
    },
    
      {
        image: '/course2/course2(2).png',
        heading: 'Introduction to Python',
        Paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
    }
    ,
        {
        image: '/course2/course2(3).png',
        heading: 'Data Analysis for Beginners',
        Paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
    },
          {
        image: '/course2/course2(4).png',
        heading: 'Art Specialization',
        Paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
    },
            {
        image: '/course2/course2(5).png',
        heading: 'Rule of Law',
        Paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
    },
              {
        image: '/course2/course2(6).png',
        heading: 'Introduction to webflow',
        Paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.',
     },
]


const Course2 = () => {
  return (
      <section className='flex flex-col py-12 px-6 gap-6 items-center'>
          <div className='flex flex-col gap-6'>
              <h4 className='text-[32px] font-bold text-center'>Courses</h4>
              <p className='text-lg text-center'>Your Ultimate Guide to learning</p>
          </div>
               <ul className='flex items-center justify-between '>
                  <li>Popular</li>
                  <li>Recommended</li>
                  <li>Best Price</li>
              </ul>
          <div className='grid grid-rows-7 gap-2 lg:grid-cols-3 lg:grid-rows-2 lg:gap-x-8 lg:gap-y-16'>
       
              
             
              {products.map((products, index) => (
                
                  
                      <div key={index} className='w-[416px] h-[574px] bg-[#F7F7F7] flex flex-col gap-6 rounded-[5px]'>
                    <Image
                        alt={products.heading}
                        width={416}
                        height={300}
                        src={products.image}
                        className='object-cover'
                    />
                    <span className='flex text-[14px] font-semibold justify-between px-2'>
                        <h3 className=''>{products.heading}</h3> 
                        <div className='flex gap-1'>
                            <Image
                                alt='star'
                                width={24}
                                height={24}
                                src="/main/star.png"
                            />
                            <p>5.0</p>  
                        </div>
                    </span>
                    <h1 className='text-2xl font-bold px-2'>{products.heading}</h1>
                    <p className='text-[16px] px-2'>{products.Paragraph}</p>
                    <div className='flex text-[16px] gap-4 items-center px-2 '>
                        <button className=' font-normal w-[117px] h-[40]   py-[8px] rounded-[5px] border-[1px] border-solid border-black'>Enroll Now</button>
                        <h2 className='font-medium text-center'>$400</h2>  
                    </div>
                </div>
                  
                ))}
              
          </div>
                <button className='border-[1px] border-black w-[152px] h-10 text-center p-2 rounded-[5px]'>View All Courses</button>
               
    </section>
  )
}

export default Course2