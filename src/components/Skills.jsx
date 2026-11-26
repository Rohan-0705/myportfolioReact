
import React from "react";

const Skills = ({ skills }) => {
  return (
    <div className="container py-4">
        <h2 className="customHeading" style={{marginBottom:"20px"}}>Skills</h2>
      <div className="row g-3">
        {skills.map((skill) => (
          <div className="col-md-6" key={skill.id}>
            <div
              className="p-3 h-100"
              style={{
                border: "2px solid black",
                borderRadius: "10px"
              }}
            >
              <h4>{skill.category}</h4>

              <div className="d-flex flex-wrap gap-2 mt-3">
                {skill.technologies.map((tech, i) => (
                  <span className="customSpan" key={i}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
