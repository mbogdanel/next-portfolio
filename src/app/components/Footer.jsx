import React from 'react'

import GithubIcon from '../../../public/github-icon.svg'
import LinkedinIcon from '../../../public/linkedin-icon.svg'
import GmailIcon from '../../../public/gmail-icon.svg'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer
      id='contact'
      className='footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white flex justify-center mt-20'
    >
      <div className='container p-12'>
        <div>
          <div className='socials flex flex-row gap-2 justify-center'>
            <Link href='https://github.com/mbogdanel'>
              <Image src={GithubIcon} alt='Github Icon' />
            </Link>
            <Link href='https://www.linkedin.com/in/marius-bogdanel-1252651b4/'>
              <Image src={LinkedinIcon} alt='Linkedin Icon' />
            </Link>
            <Link href='mailto:marius.bogdanel@gmail.com'>
              <Image src={GmailIcon} alt='Gmail Icon' className='p-[5px]' />
            </Link>
          </div>

          <div className='flex justify-center'>
            <p className='text-xs mt-10'>
              Template from
              <Link
                target='_blank'
                rel='noreferrer'
                href='https://www.youtube.com/watch?v=Kb1f5bvF6f4&t=5420s'
                className='text-teal-500'
              >
                {' '}
                webdecoded
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
