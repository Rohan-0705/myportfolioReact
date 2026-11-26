import React from 'react'
import userimgg from "../assets/userIMG.png"
const Projects = ({ pro }) => {
    return (
        <div className="container">
            <h2 className='customHeading'>Projects</h2>
            <div className='row'>
                {
                    pro.map((pr, i) => (
                        <div className='col-md-4' key={i}>
                            <div className="card" style={{ width: "20rem", margin: "11px", backgroundColor: "#EFF6FF", border: "1px solid #BFDBFE", padding: "10px", transition: "all 0.3s ease" }}>
                                <img src={pr.image} className="card-img-top" style={{width: "100%",height: "250px",objectFit: "contain"}} alt={pr.title} />
                                <div className="card-body">
                                    <h5 className="card-title" style={{ color: "#1E293B" }}>{pr.title}</h5>
                                    <p className="card-text" style={{ color: "#475569" }}>{pr.description}</p>
                                    <a href="#" className="btn btn-primary" style={{ marginRight: "10px", backgroundColor: "#2563EB", border: "none" }}>GitHub</a>
                                    <a href="#" className="btn btn-primary" style={{ backgroundColor: "#2563EB" }}>Live Link</a>

                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Projects
