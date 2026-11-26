import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid" style={{backgroundColor:"#EFF6FF"}}>
                    <a className="navbar-brand" href="#">Portfolio</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup" style={{backgroundColor:"#EFF6FF"}} >
                        <div className="navbar-nav" style={{marginLeft:"100px",display:"flex",gap:"40px",fontSize:"large"}}>
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            <Link className="nav-link active" aria-current="page" to="/about">About</Link>
                            <Link className="nav-link active" aria-current="page" to="/projects">Projects</Link>
                            <Link className="nav-link active" aria-current="page" to="/skills">Technologies</Link>
                            <Link className="nav-link active" aria-current="page" to="/education">Education</Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
