import React from 'react'
import { motion } from 'framer-motion';

const experiences = [
    {
        year: "2024 - Present",
        role: "Core Team Member (Media & Publicity Subcommittee)",
        company: "IEM Generative AI COE",
        description: `As a Core Team Member at the IEM Generative AI Center of Excellence, I contribute to building and enhancing projects centered around generative AI. My work involves Full Stack Web Development using technologies like React and Tailwind CSS for front-end development and leveraging Express.js and MongoDB for scalable back-end solutions. Additionally, I ensure code efficiency and modern JavaScript standards by using Babel.`,
        technologies: ["React", "Tailwind CSS", "Express.js", "MongoDB", "Babel"],
    },
    {
        year: "2024 - Present",
        role: "Student Member",
        company: "IEEE CS Society@IEM",
        description: `As a Student Member of the IEEE Computer Society at IEM, I engage in projects that focus on modern web development. I utilize React for building user interfaces, Node.js for server-side development, and MongoDB for database management, enhancing my skills while collaborating with fellow members on various innovative projects.`,
        technologies: ["React", "Node.js", "MongoDB"],
    },
    {
        year: "2023 - Present",
        role: "Student Member",
        company: "Google Developers Group@IEM",
        description: `In my role as a Student Member of the Google Developers Group at IEM, I participate in workshops and projects that explore Python and Generative AI technologies. This involvement has strengthened my understanding of AI-driven solutions and broadened my technical expertise in artificial intelligence development.`,
        technologies: ["Python", "GEN-AI"],
    },
    {
        year: "2023 - Present",
        role: "Student",
        company: "IEM, Kolkata",
        description: `As a student at IEM, Kolkata, I am building a solid foundation in programming with a focus on languages like C, C++, and Python. These courses and hands-on projects have sharpened my problem-solving skills and prepared me for more advanced studies in computer science and AI.`,
        technologies: ["C", "C++", "Python"],
    },
];

const Experience = () => {
    return (
        <div className='border-b border-neutral-900 py-3'>
            <motion.h2 whileInView={{opacity: 1, y: 0}} initial={{opacity: 0, y: -100}} transition={{duration: 0.5}}
            className='my-16 text-center text-4xl'>Experience</motion.h2>
            <div>
                {experiences.map((experience, index) => (
                    <div key={index} className='mb-6 flex flex-wrap lg:justify-center'>
                        <motion.div whileInView={{opacity: 1, x: 0}} initial={{opacity: 0, x: -100}} transition={{duration: 1}} 
                        className='w-full lg:w-1/4'>
                            <p className='mb-2 text-sm text-neutral-400'>{experience.year}</p>
                        </motion.div>
                        <motion.div whileInView={{opacity: 1, x: 0}} initial={{opacity: 0, x: 100}} transition={{duration: 1}} 
                        className='w-full max-w-xl lg:w-3/4'>
                            <h5 className='mb-2 font-semibold'>{experience.role} - <span>{experience.company}</span></h5>
                            <p className='my-3 text-neutral-400'>{experience.description}</p>
                            {experience.technologies.map((technology, index) => (
                                <span key={index} className='my-3 mr-2 rounded bg-neutral-900 px-2 text-sm font-medium text-purple-600'>{technology}</span>
                            ))}
                        </motion.div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Experience
