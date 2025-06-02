import React from 'react'
import { skills, experiences } from '../constants';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import CTA from '../components/CTA';


const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Hello, I'm <span className='blue-gradient_text 
    font-semibold drop-shadow'>Hansadhwaja</span>
      </h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>Web Developer based in India, specializing in crafting modern, full-stack applications using the MERN stack (MongoDB, Express, React, Node.js). Passionate about building responsive, user-focused web experiences.</p>
      </div>
      <div className='py-10 flex flex-col'>
        <h3 className='subhead-text'>My Skills</h3>

        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            <div className='block-container w-20 h-20'>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex 
            justify-center items-center'>
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain' />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='py-16'>
        <h3 className='subhead-text'>Work Experience</h3>
        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>I want to work with all sorts of companies — startups, studios, or solo founders — to level up my skills and team up with smart people. I’ve completed two internships focused on MERN stack training, which helped me build a solid foundation in full-stack development. While I haven’t worked on live projects yet, I’ve spent time building my own apps, exploring new tools, and learning how real-world development works. Here’s the rundown:</p>
        </div>
        <div className='mt-12 flex'>
          <VerticalTimeline>
            {experiences.map((experience) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                icon={<div className='flex justify-center items-center w-full h-full'>
                  <img src={experience.icon}
                    alt={experience.company_name}
                    className='w-[60%] h-[60%] object-contain' />
                </div>}
                iconStyle={{ background: experience.iconBg }}
                contentStyle={{
                  borderBottom: '8px',
                  borderStyle: 'solid',
                  borderBottomColor: experience.iconBg,
                  boxShadow: 'none'
                }}>
                <div>
                  <h3 className='text-black text-xl font-poppins 
      font-semibold'>{experience.title}</h3>
                  <p className='text-black-500 font-medium font-base'
                    style={{ margin: 0 }}>{experience.company_name}</p>
                </div>
                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {experience.points.map((point, index) => (
                    <li
                      className='text-black-500/50 font-normal pl-1 text-sm'
                      key={`experience-point-${index}`}>{point}</li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>
      <hr className='border-slate-200' />
      <CTA />
    </section>
  )
}

export default About