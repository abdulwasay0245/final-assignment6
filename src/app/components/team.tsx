import Image from 'next/image'
import React from 'react'

const members = [
  {
    name: "James Nduku",
    profession:"Marketing Coordinator",
    image:"/team/member1.png",
  },
   {
    name: "Joseph Munyambu",
    profession:"Nursing Assistant",
    image:"/team/member2.png",
  },
    {
    name: "Joseph Ngumbau",
    profession:"Medical Assistant",
    image:"/team/member3.png",
  },
     {
    name: "Erick Kipkemboi",
    profession:"Web Designer",
    image:"/team/member4.png",
  },
      {
    name: "Stephen Kerubo",
    profession:"President of Sales",
    image:"/team/member5.png",
  },
       {
    name: "John Leboo",
    profession:"Dog Trainer",
    image:"/team/member6.png",
  },
]


const Team = () => {
  return (
      <section className='flex flex-col gap-12 py-12 px-6 bg-[#F7F7F7]'>
           <div className='flex flex-col gap-4 '>
              <h1 className='text-[32px] font-bold text-center '>Our team</h1>
              <p className='text-[18px] font-normal text-center '>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </div>

          <div className='grid grid-row-6 gap-24 justify-center lg:grid-cols-3'>
              
                {members.map((members, index) => (
          <article key={index} className='flex flex-col items-center justify-center gap-6 h-[209px]'>
            <Image
              alt='member'
              width={80}
              height={80}
              src={members.image}>
            
            </Image>
            <h3 className='text-[20px] font-semibold'>{members.name}</h3>
            <p>{members.profession}</p>
            <div className='flex gap-[14px] '>
              <Image
                alt='social'
                width={18}
                height={18}
                src="/team/linkedin.png"></Image>
              <Image
                alt='social'
                width={18}
                height={18}
                src="/team/Twitter.png"></Image>
              <Image
                alt='social'
                width={18}
                height={18}
                src="/team/vector.png"></Image>
            </div>
          </article>
        ))}
   
              <button className='w-[155px] h-[48px] gap-2 border-[1px] border-black rounded-[5px] lg:col-span-3 lg:justify-self-center'>View All</button>
          </div>
    </section>
  )
}

export default Team