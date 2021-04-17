import React, { useState } from "react"
import ReactDOM from "react-dom"
import ComputerOutlined from "@material-ui/icons/ComputerOutlined"
import WhatsApp from "@material-ui/icons/WhatsApp"
import LinkedIn from "@material-ui/icons/LinkedIn"
import GitHub from "@material-ui/icons/GitHub"
import Instagram from "@material-ui/icons/Instagram"
import Telegram from "@material-ui/icons/Telegram"
import computerSrc from "../Resources/Programmer image.png"
import Footer from "./Footer"
const ContactHome = () => {
    return (
        <>
            <div className="profileMain" style={{ backgroundColor: "#444", margin: "0" }}>
                <h1 className="profileHeading" style={{ color: "white" }}>Contact</h1>
                <h5 className="profileHeading2" style={{ color: "white" }}>“If I had asked people what they wanted, they would have said faster horses. ”
                - Henry Ford</h5>
                <div style={{ marginLeft: "20%", marginRight: "20%" }}>
                    <hr style={{ width: "100%" }}></hr>
                </div>
                <div className="grandParentProfile">
                    <div className="parentProfile">
                        <div className="child1Profile">
                            <div className="mb-1 text-dark my-3" style={{ transform: "scale(1.3)" }}><a href="https://github.com/akashghadge" target="blank" className="iconSimple text-white">
                                GitHub  <GitHub></GitHub>
                            </a>
                            </div>
                            <div className="mb-1 text-primary my-3" style={{ transform: "scale(1.3)" }}>
                                <a className="iconSimple" href="https://www.linkedin.com/in/akash-ghadge-724864198/" target="blank">
                                    LinkedIn  <LinkedIn></LinkedIn> </a>
                            </div>
                        </div>
                        <div className="child3Profile my-3">
                            <div className="mb-1 " style={{ transform: "scale(1.3)" }}>
                                <a href="https://www.instagram.com/akash_ghadge3/" className="iconSimple" target="blank" style={{ color: "pink" }}>
                                    Instagram   <Instagram className="instagramIcon"></Instagram>
                                </a>
                            </div>
                            <div className="mb-1 my-3" style={{ transform: "scale(1.3)" }}>
                                <a href="https://t.me/akashghadge3" className="iconSimple" target="blank" style={{ color: "aqua" }}>
                                    Telegram   <Telegram></Telegram>
                                </a>
                                {/* <h3 className="mb-0 contactHead" id="socialHeading">Feel Free to connect :)</h3> */}
                            </div>
                        </div>
                    </div>
                    <h3 className="mb-0 contactHead text-white" id="socialHeading" style={{ color: "white" }}>Feel Free to connect :)</h3>
                </div>
                <Footer></Footer>
            </div>
        </>
    )
}
export default ContactHome;
