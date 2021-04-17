import React, { useState } from "react"
import ReactDOM from "react-dom"
import OneProject from "./OneProject"
import akashSrc from "../Resources/Akash Image1.jpg"
import MERN1 from "../Resources/MERN1.jpg"
import MERN2 from "../Resources/MERN2.jpg"
import Node from "../Resources/Node.jpg"
import Angular from "../Resources/Angular.jpg"
const Projects = () => {
    return (
        <>
            <div className="px-3 py-4">
                <h1 className="projectHeading">Projects</h1>
                <h5 className="projectHeading2">“Life without knowledge is death in disguise.”
            - Talib Kweli</h5>
                <div style={{ marginLeft: "20%", marginRight: "20%" }}>
                    <hr style={{ width: "100%" }}></hr>
                </div>
            </div>
            <div id="myCarousel" className="carousel slide container-sm projectMain" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                    <li data-target="#myCarousel" data-slide-to="3"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={MERN1} className="projectImage"></img>
                        <div className="container">
                            <div className="carousel-caption">
                                <h1 className="heaadingProjectOne">MERN Stack Protfolio.</h1>
                                <p className="descProjectOne">Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                                <a className="btn btn-lg btn-dark" target="blank" href="https://personal-website-mern-akash.herokuapp.com/" role="button">View Project</a>
                                <a className="btn btn-lg btn-dark" target="blank" href="https://github.com/akashghadge/website-akashghadge" role="button">View Source</a>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={MERN2} className="projectImage"></img>
                        <div className="container">
                            <div className="carousel-caption">
                                <h1 className="heaadingProjectOne">MERN Stack Social Media.</h1>
                                <p className="descProjectOne">Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                                <a className="btn btn-lg btn-dark" href="https://instagram-blogpost-clone.herokuapp.com/" target="blank" role="button" >View Project</a>
                                <a className="btn btn-lg btn-dark" target="blank" href="https://github.com/akashghadge/blogpost-instagram-clone" role="button">View Source</a>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={Node} className="projectImage"></img>
                        <div className="container">
                            <div className="carousel-caption">
                                <h1 className="heaadingProjectOne">Node JS Chat App.</h1>
                                <p className="descProjectOne">Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                                <a className="btn btn-lg btn-dark" href="https://chat-app-node-akash.herokuapp.com/" target="blank" role="button">View Project</a>
                                <a className="btn btn-lg btn-dark" href="https://github.com/akashghadge/node-chat-app" target="blank" role="button">View Source</a>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={Angular} className="projectImage"></img>
                        <div className="container">
                            <div className="carousel-caption">
                                <h1 className="heaadingProjectOne">Angular To-Do List.</h1>
                                <p className="descProjectOne">Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                                <a className="btn btn-lg btn-dark" href="https://to-do-angular-akash.netlify.app/" target="blank" role="button">View Project</a>
                                <a className="btn btn-lg btn-dark" target="blank" href="https://github.com/akashghadge/To-Do-Angular" role="button">View Source</a>
                            </div>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev " href="#myCarousel" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon bg-dark" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                    <span className="carousel-control-next-icon bg-dark" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </>
    )
}
export default Projects;
