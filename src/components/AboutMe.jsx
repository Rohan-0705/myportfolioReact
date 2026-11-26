import React from 'react'


const AboutMe = ({ aboutData }) => {
  return (
   <div className="container" style={{height:"75vh"}}>
    <h1 className='customHeading'>About ME</h1>
    <h3 className="fw-bold mb-3">{aboutData.name}</h3>
    <h4 className='fw-bold mb-3 text-primary'>{aboutData.role}</h4>
    <p className='text-secondary'>{aboutData.introduction}</p>
    <p className='text-secondary'>{aboutData.description}</p>
    <p className='text-secondary'>{aboutData.passion}</p>
    <p className='text-secondary'>{aboutData.goal}</p>
   </div>
  )
}

export default AboutMe
