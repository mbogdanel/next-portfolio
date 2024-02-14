'use client'
import React, { useState, useRef } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'
import { motion, useInView } from 'framer-motion'

const projectsData = [
  {
    id: 1,
    title: 'BibiCraft online shop',
    description:
      'eCommerce platform built with the MERN stack & Redux for state management, showing MVC design pattern.',
    image: '/images/projects/bibicraft.jpg',
    tag: ['All', 'Web'],
    gitUrl: 'https://github.com/mbogdanel/Bibi-Craft',
    previewUrl: 'https://bibicraft.onrender.com/',
  },
  {
    id: 2,
    title: 'FaceDetection App',
    description:
      'This is a full stack application that detects faces in pictures. Frontend built with React witch uses the Clarifai face recgnition API, backend built with Express and Node.js.',
    image: '/images/projects/FaceDetectionApp.jpg',
    tag: ['All', 'Web'],
    gitUrl: 'https://github.com/mbogdanel/FaceDetectionApp-frontend',
    previewUrl: 'https://face-detection-app-front.herokuapp.com/',
  },
  {
    id: 3,
    title: 'RoboFriends',
    description:
      'Front-end web application that utilizes an API to display random users, with search functionality. App built with HTML5, CSS3, and ReactJS with Hooks.',
    image: '/images/projects/Robofriends.jpg',
    tag: ['All', 'Web'],
    gitUrl: 'https://github.com/mbogdanel/Robo-Friends',
    previewUrl: 'https://mbogdanel.github.io/Robo-Friends/',
  },
  {
    id: 4,
    title: 'Cambridge-Materialize',
    description: 'Static Webpage built with Materialize CSS framework',
    image: '/images/projects/Cambridge.png',
    tag: ['All', 'Mobile'],
    gitUrl: 'https://github.com/mbogdanel/Cambridge-Materialize',
    previewUrl: 'https://mbogdanel.github.io/Cambridge-Materialize/',
  },
  {
    id: 5,
    title: 'Work Organiser',
    description:
      'Kanban board app with drag and drop functionality, built with Vanila Javascript, CSS and HTML',
    image: '/images/projects/WorkOrganiser.jpg',
    tag: ['All', 'Web'],
    gitUrl: 'https://github.com/mbogdanel/Kanban--Board',
    previewUrl: 'https://mbogdanel.github.io/Kanban--Board/',
  },
  {
    id: 6,
    title: 'Portfolio',
    description: 'Portfolio website build with Angular and Bootstrap',
    image: '/images/projects/Bence.png',
    tag: ['All', 'Web'],
    gitUrl: 'https://github.com/mbogdanel/Bence',
    previewUrl: 'https://www.bencemezei.com/home',
  },
  {
    id: 6,
    title: 'Microguard Website',
    description:
      'MicroGuard, security cameras and services company, website built with Gatsby.js, GraphQL, Styed Components',
    image: '/images/projects/microguard.png',
    tag: ['All', 'Web'],
    gitUrl: 'https://github.com/mbogdanel/MicroGuard',
    previewUrl: 'https://elated-liskov-68d353.netlify.app/',
  },
]

const ProjectsSection = () => {
  const [tag, setTag] = useState('All')
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const handleTagChange = (newTag) => {
    setTag(newTag)
  }

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  )

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  }

  return (
    <section id='projects' className=''>
      <h2 className='text-center text-4xl font-bold text-white mt-20 mb-8 md:mb-12'>
        Projects
      </h2>
      {/* <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
        <ProjectTag
          onClick={handleTagChange}
          name='All'
          isSelected={tag === 'All'}
        />
        <ProjectTag
          onClick={handleTagChange}
          name='Web'
          isSelected={tag === 'Web'}
        />
        <ProjectTag
          onClick={handleTagChange}
          name='Mobile'
          isSelected={tag === 'Mobile'}
        />
      </div> */}
      <ul ref={ref} className='grid md:grid-cols-3 gap-8 md:gap-12'>
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial='initial'
            animate={isInView ? 'animate' : 'initial'}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  )
}

export default ProjectsSection
