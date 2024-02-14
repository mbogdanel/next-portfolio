'use client'
import React, { useTransition, useState } from 'react'
import Image from 'next/image'
import TabButton from './TabButton'

const TAB_DATA = [
  {
    title: 'Skills',
    id: 'skills',
    content: (
      <ul className='list-disc pl-2'>
        <li>JavaScript, Angular, Ionic, React</li>
        <li>PHP, NodeJs</li>
        <li>Material Design, Bootstrap, Tailwind</li>
        <li>MySQL, MongoDB</li>
        <li>Git, Jira</li>
      </ul>
    ),
  },
  {
    title: 'Education',
    id: 'education',
    content: (
      <ul className='list-disc pl-2'>
        <li>
          <p>Gheorghe Asachi University, Iasi, RO — Bachelor’s Degree</p>
          <p>Civil Engineering</p>
        </li>
      </ul>
    ),
  },
  {
    title: 'Certifications',
    id: 'certifications',
    content: (
      <ul className='list-disc pl-2'>
        <li>The Complete Web Developer, Udemy - Zero To Mastery</li>
        <li>Data Structures and Algorithms, Udemy - Zero To Mastery</li>
        <li>MERN eCommerce from Scratch, Udemy - Traversy Media</li>
        <li>
          Angular - The Complete Guide, Udemy - Maximillian Schwarzmullerr
        </li>
      </ul>
    ),
  },
]

const AboutSection = () => {
  const [tab, setTab] = useState('skills')
  const [isPending, startTransition] = useTransition()

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id)
    })
  }

  return (
    <section className='text-white' id='about'>
      <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        <Image src='/images/profile4.jpg' width={500} height={500} />
        <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
          <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
          <p className='text-base lg:text-lg'>
            I am a full stack web developer with good knowledge of Javascript
            and related tools. I enjoy tackling coding problems, and discovering
            their solutions brings me a sense of great satisfaction. I am a
            friendly, hardworking, responsible person, with a great desire to
            improve and wish to find a team of developers to share these values
            with. In my spare time I enjoy the outdoor activities, gardening and
            playing the blues.
          </p>

          <div className='flex flex-row justify-start mt-8'>
            <TabButton
              selectTab={() => handleTabChange('skills')}
              active={tab === 'skills'}
            >
              {' '}
              Skills{' '}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange('education')}
              active={tab === 'education'}
            >
              {' '}
              Education{' '}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange('certifications')}
              active={tab === 'certifications'}
            >
              {' '}
              Courses{' '}
            </TabButton>
          </div>
          <div className='mt-8'>
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
