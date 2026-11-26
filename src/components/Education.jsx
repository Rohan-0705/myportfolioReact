import React from 'react'

const Education = ({ edu }) => {
  return (
    <div>
      <div className="container" style={{height:"75vh"}}>
        <h2 className="customHeading">Education</h2>
          <div>
             <h4>{edu.degree}</h4>
             <p className="fs-4">{edu.institution} {edu.location}</p>
             <p className="fs-6 lh-">{edu.grade}</p>
          </div>
      </div>
    </div>
  )
}

export default Education
