import Image from 'next/image'
import React from 'react'
const logos = [
    { address: '/logos/logo.png' },
    { address: '/logos/logo1.png' },
    { address: '/logos/logo2.png' },
    { address: '/logos/logo3.png' },
    { address: '/logos/logo4.png' },
    { address: '/logos/logo5.png' },
    
]

const Trust = () => {
  return (
      <section className='py-12 px-6 flex flex-col  gap-6 bg-[#F7F7F7] lg:flex-row'>
          <p className='text-2xl font-bold hidden lg:block'>Trusted by 2000+ companies worldwide.</p>
          <p className='text-[18px] font-bold lg:hidden'>Trusted by the world's best companies [social proof to build credibility]</p>
          <div className='grid grid-cols-3 grid-rows-2 gap-2 lg:grid-cols-6 lg:grid-rows-1 '>
              {logos.map((logos, index) => (
                  <Image
                      key={index}
                      src={logos.address}
                      alt={`Logo ${index + 1}`}
                      width={107.15}
                      height={33.34}>
                      
                 </Image>
             ))}
          </div>
      </section>
  )
}

export default Trust