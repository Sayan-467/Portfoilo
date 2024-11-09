import React from 'react'
import project1 from "../assets/project1.jpg"
import project2 from "../assets/project2.jpg"
import project3 from "../assets/project3.jpg"
import { motion } from 'framer-motion';

const projects = [
    {
        title: "EcoLearn - An Environmental Educational Web",
        image: project3,
        description:
            "EcoLearn is a cloud-based educational platform designed to spread environmental awareness. Built with a robust stack including React and Tailwind CSS for the frontend, Express.js and MongoDB for backend and data storage, and Chart.js for visual data analytics. The platform enables users to learn, track, and engage in sustainable practices.",
        technologies: ["React", "Tailwind CSS", "Express.js", "MongoDB", "Chart.js"],
    },
    {
        title: "Portfolio",
        image: project2,
        description:
            "A personal portfolio website showcasing my projects, skills, and achievements. Developed using React and Tailwind CSS for an interactive and modern UI, with Express.js and Node.js for backend functionality and MongoDB to handle project and experience data. The website serves as a professional online presence and a place to share my work.",
        technologies: ["React", "Tailwind CSS", "Express.js", "Node.js", "MongoDB"],
    },
    {
        title: "iValidator - An Email Validator",
        image: project1,
        description:
            "iValidator is a lightweight tool developed to validate email addresses based on format and syntax. Built using HTML, CSS, and JavaScript, it provides instant feedback to users, ensuring input accuracy and reducing errors in data collection forms.",
        technologies: ["HTML", "CSS", "Javascript"],
    },
];

const Projects = () => {
    return (
        <div className='border-b border-neutral-900 py-3'>
            <motion.h2 whileInView={{opacity: 1, y: 0}} initial={{opacity: 0, y: -100}} transition={{duration: 0.5}}
            className='my-16 text-center text-4xl'>Projects</motion.h2>
            <div>
                {projects.map((project, index) => (
                    <div key={index} className='mb-6 flex flex-wrap lg:justify-center gap-6'>
                        <motion.div whileInView={{opacity: 1, x: 0}} initial={{opacity: 0, x: -100}} transition={{duration: 1}} 
                        className='w-full lg:w-1/4'>
                            <img src={project.image} height={350} width={250} alt={project.title} className='mb-6 rounded' />
                        </motion.div>
                        <motion.div whileInView={{opacity: 1, x: 0}} initial={{opacity: 0, x: 100}} transition={{duration: 1}} 
                        className='w-full max-w-xl lg:w-3/4'>
                            <h5 className='mb-2 font-semibold'>{project.title}</h5>
                            <p className='mb-4 text-neutral-400'>{project.description}</p>
                            {project.technologies.map((technology, index) => (
                                <span key={index} className='mr-3 bg-neutral-900 rounded px-2 py-1 text-sm font-medium text-purple-600'>{technology}</span>
                            ))}
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects
