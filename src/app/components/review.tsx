import Image from 'next/image'
import React from 'react'

interface Card {
    address: string,
    name: string,
    details: string,
}

const reviewCard : Card[] = [
    {
        address: "/team/member3.png",
        name: "Wade Warren",
        details: "Software Developer",
    },
       {
        address: "/team/member1.png",
        name: "Erick Kipkemboi",
        details: "Scrum Master",
    },
          {
        address: "/team/member6.png",
        name: "Stephen Kerubo",
        details: "UI/UX Designer",
    },

]

const Review = () => {
  return (
      <section className='flex flex-col gap-12 py-12 px-6'>
          <div className='flex flex-col gap-6 text-center '>
              <h4 className='text-[32px] font-bold '>What Our Student Say</h4>
              <p className='text-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
<div className='flex flex-col gap-8 lg:flex-row'>
          <article className='flex flex-col gap-8 border-[1px] border-black p-8'>
              <div className='flex gap-1'>
                  {Array.from({ length: 5 }).map((_, index) => (
                      <Image
                      key={index}
                      alt='star'
                      width={20}
                      height={20}
                      src="/main/blackStar.png"
                      className=''>
                  </Image>
               ))}
              </div>
              <p className='text-lg'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."</p>
              <div className="flex gap-5">
                  <Image
                      alt='profile'
                      width={56}
                      height={56}
                      src="/team/member3.png"
                      className='rounded-full'>
                  </Image>
                  <div className='flex flex-col'>
                      <h6 className='text-base font-semibold'>Jame Nduku</h6>
                      <p>Software Developer</p>
                  </div>
              </div>
          </article>

{/* card2 */}

              <article className='flex flex-col gap-8 border-[1px] border-black p-8'>
              <div className='flex gap-1'>
                  {Array.from({ length: 5 }).map((_, index) => (
                      <Image
                      key={index}
                      alt='star'
                      width={20}
                      height={20}
                      src="/main/blackStar.png"
                      className=''>
                  </Image>
               ))}
              </div>
              <p className='text-lg'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."</p>
              <div className="flex gap-5">
                  <Image
                      alt='profile'
                      width={56}
                      height={56}
                      src="/team/member1.png"
                      className='rounded-full'>
                  </Image>
                  <div className='flex flex-col'>
                      <h6 className='text-base font-semibold'>Erick Kipkemboi</h6>
                      <p>Scrum Master</p>
                  </div>
              </div>
          </article>

          {/* card3 */}



              <article className='flex flex-col gap-8 border-[1px] border-black p-8'>
              <div className='flex gap-1'>
                  {Array.from({ length: 5 }).map((_, index) => (
                      <Image
                      key={index}
                      alt='star'
                      width={20}
                      height={20}
                      src="/main/blackStar.png"
                      className=''>
                  </Image>
               ))}
              </div>
              <p className='text-lg'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."</p>
              <div className="flex gap-5">
                  <Image
                      alt='profile'
                      width={56}
                      height={56}
                      src="/team/member6.png"
                      className='rounded-full'>
                  </Image>
                  <div className='flex flex-col'>
                      <h6 className='text-base font-semibold'>Stephen Kerubo</h6>
                      <p>UI/UX Designer</p>
                  </div>
              </div>
              </article>
              </div>
          <div className='flex justify-between'>
              <div className='flex gap-2 items-center justify-center'>
                  <Image
                      alt='dot'
                      width={8}
                      height={8}
                      src="/main/Dot.png">
                  </Image>
                  
                       <Image
                      alt='dot'
                      width={8}
                      height={8}
                      src="/main/Dot.png">
                    </Image>
                         <Image
                      alt='dot'
                      width={8}
                      height={8}
                      src="/main/Dot.png">
                  </Image>
                       <Image
                      alt='dot'
                      width={8}
                      height={8}
                      src="/main/Dot.png">
                  </Image>
                       <Image
                      alt='dot'
                      width={8}
                      height={8}
                      src="/main/Dot.png">
                    </Image>
              </div>
              <div className='flex gap-[15px]'>
                  <button className='w-[48px] h-[48px] border-black border[1px] rounded-full'>
                  <Image
                      alt='arrow'
                      width={16}
                      height={16}
                      src="/main/arrowleft.png"
                      >
                      
                      </Image>
                  </button>
                  
                       <button className='w-[48px] h-[48px] border-black border[1px] rounded-full'>
                  <Image
                      alt='arrow'
                      width={16}
                      height={16}
                      src="/main/arrowright.png"
                      >
                      
                      </Image>
                      </button>
              </div>
          </div>

    </section>
  )
}

export default Review