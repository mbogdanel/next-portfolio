'use client'
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'
import Link from 'next/link'

const HeroSection = () => {
  return (
    <section
      className='lg:py-16 hero-page'
      style={{ height: 'calc(100vh - 80px)' }}
    >
      <div className='grid grid-cols-1 sm:grid-cols-12'>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className='col-span-8 place-self-center text-center sm:text-left justify-self-start'
        >
          <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-400'>
              Hello, I&apos;m{' '}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                'Marius',
                3000,
                'Javascript Developer',
                3000,
                'Full-Stack Developer',
                3000,
              ]}
              wrapper='span'
              speed={50}
              repeat={Infinity}
            />
          </h1>

          <div>
            <Link
              target='_blank'
              rel='noreferrer'
              href='https://docs.google.com/document/d/e/2PACX-1vS365i5D4aU-llz2wDj9pbf1cct6tPUCO9ryblhcQCA0CdaKjNRkvT6Oe73oZipKDkYcO4S5CSnOsOJ/pub'
              className='px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3'
            >
              <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>
                View CV
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className='col-span-4 place-self-center mt-4 lg:mt-0'
        >
          <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] relative'>
            <Image
              src='/images/profile2.jpg'
              alt='hero image'
              className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
              width={300}
              height={300}
              style={{ borderRadius: '50%' }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
