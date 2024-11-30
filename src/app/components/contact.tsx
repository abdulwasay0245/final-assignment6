import React from 'react'
import Image from 'next/image'

const Contact = () => {
  return (
        <header className=' hidden gap-8 lg:flex py-3 px-16 text-sm'>
      <div className='flex gap-4'>
        <p>Phone Number: 956 742 455 678</p>
        <p>Email:info@ddsgnr.com</p>
          </div>
          
          <div className='flex gap-4 justify-self-end ml-auto'>
              <Image
                  alt='socialLinks'
                  width={24}
                  height={24}
                  src="/social/Facebook.png">
              </Image>
              <Image
                  alt='socialLinks'
                  width={24}
                  height={24}
                  src="/social/Instagram.png">
              </Image>
              <Image
                  alt='socialLinks'
                  width={24}
                  height={24}
                  src="/social/Twitter.png">
              </Image>
              <Image
                  alt='socialLinks'
                  width={24}
                  height={24}
                  src="/social/Linkedin.png">
            </Image>
          </div>
      </header>
  )
}

export default Contact