import React from 'react'
import userimg from "../assets/userIMG.png"

const Header = () => {
    return (
        <div className="container text-center" style={{height:"76vh"}}>
            <div className="row align-items-end justify-content-between">
                <div className="col-md-6 text-start">
                    <h2 className="fw-bold mb-3">
                        Rohan Gaikwad
                    </h2>

                    <h4 className="text-primary mb-3">
                        Full Stack Developer
                    </h4>

                    <p className="text-secondary">
                        I am a passionate Full Stack Developer
                        who loves building responsive and
                        user-friendly web applications.
                    </p>
                </div>
                <div className="col-md-5 text-center">
                    <img
                        src={userimg}
                        alt="Rohan Gaikwad"
                        className="img-fluid rounded-4"
                    />
                </div>
            </div>
        </div>
    )
}

export default Header
