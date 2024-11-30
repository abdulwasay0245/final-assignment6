import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
const Footer = () => {
  return (
    <footer className='flex flex-col items-center gap-12 py-12 px-6'>
      <div className='flex flex-col lg:flex-row gap-6 lg:justify-between'>
          <article className='flex flex-col gap-4  lg:gap-0 lg:w-[500px items-start]'>
          <h6 className='text-lg font-semibold text-center'>Subscribe to our newsletter</h6>
          <p className='text-center w-[287px] lg:[500px]'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          </article>
          <div className='flex flex-col gap-4 lg:flex-row'>
              <input type="text" placeholder='Enter your Email' className='gap-2 p-3 border-[1px] border-black rounded-[5px] w-[380px] lg:w-[265px]' />
              <button className='gap-2 p-3 border-[1px] border-black rounded-[5px] w-[380px] lg:w-auto'>Subscribe</button>
        </div>
        </div>
              <p className='text-xs text-center font-normal'>By subscribing you agree to with out <span className='underline'>Privacy policy</span></p>
      
      <div className=' lg:grid  lg:grid-cols-4  gap-24'>
      <div className='flex items-center justify-center gap-[10.5px] lg:items-start'>
                    <Image
                  alt='companyLogo'
                  width={32.58}
                  height={30.38}
                  src="/main/company.png"></Image>
              <h1 className='text-[25.07px] font-bold'>Ddsgnr</h1>
      </div>
      {/* list1 */}
      <div className='flex flex-col gap-4 text-center lg:text-start'>
        <h6 className='text-base font-semibold'>Courses</h6>
        <ul className='flex flex-col gap-4'>
          <li>Business</li>
          <li>Development</li>
          <li>Technology</li>
          <li>Design</li>
          <li>Programming</li>
        </ul>
      </div>

{/* list2 */}

       <div className='flex flex-col gap-4 text-center lg:text-start'>
        <h6 className='text-base font-semibold'>Resources</h6>
        <ul className='flex flex-col gap-4'>
          <li>Career</li>
          <li>Resume</li>
          <li>Learning</li>
          <li>Interview Prepration</li>
          <li>Jobs</li>
        </ul>
      </div>

      {/* list3 */}

      
       <div className='flex flex-col gap-4 text-center lg:text-start'>
        <h6 className='text-base font-semibold'>About Us</h6>
        <ul className='flex flex-col gap-4'>
          <li>Contact</li>
          <li>Help/Support</li>
          <li>FAQ</li>
          <li>Terms and Conditions</li>
          <li>Partners</li>
        </ul>
        </div>
        </div>

      <hr className='border-solid border-black border-[1px] w-[80%]' />

      <div className='flex flex-col items-center gap-6'>
        <p className='text-sm'>2023 Ddsgnr.All right reserved.</p>
        <div className='flex gap-6 text-sm underline'>
          <Link href='#'>Privacy Policy</Link>
          <Link href='#'>Terms of Service</Link>
          <Link href='#'>Cookies Settings</Link>
        </div>
        
        <div className='flex gap-3'>
          <Image
            alt='socialLink'
            width={24}
            height={24}
            src="/social/Facebook.png">

          </Image>

            <Image
            alt='socialLink'
            width={24}
            height={24}
            src="/social/Instagram.png">

          </Image>
            <Image
            alt='socialLink'
            width={24}
            height={24}
            src="/social/Twitter.png">

          </Image>

            <Image
            alt='socialLink'
            width={24}
            height={24}
            src="/social/LinkedIn.png">

          </Image>
        </div>

      </div>
    </footer>
  )
}

export default Footer
