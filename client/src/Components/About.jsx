import React from "react"


let date = new Date();
let oldYear = date.getFullYear() - 2002;
const About = () => {
    return (
        <>
            {/* <div className="container my-2">
                <div className="jumbotron p-4 p-md-5 text-white rounded bg-primary">
                    <div className="col-md-6 px-0">
                        <h1 className="display-6 font-italic" style={{ fontSize: 32 }}>I am {oldYear} year old kid and i am very curious about the programming and other tect like Robotics,Computer Vision and Embeded Systems and would like to make some contribution on it and i have passion to do this things at next level.<br></br>
                                  -Akash Ghadge</h1>
                    </div>
                </div>
            </div> */}
            <div id="parentAboutBox">
                <div id="aboutBox" >
                    <h1 id="aboutText">I am {oldYear} year old kid and i am very curious about the programming and other tect like Robotics,Computer Vision and Embeded Systems and would like to make some contribution on it and i have passion to do this things at next level.<br></br>
                        <span style={{ display: "block", textAlign: "left" }}>
                            -Akash Ghadge
                                 </span>
                    </h1>
                </div>
            </div>
        </>
    )
}
export default About;
