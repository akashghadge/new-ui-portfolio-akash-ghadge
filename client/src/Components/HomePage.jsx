import React, { useState } from "react"
import ReactDOM from "react-dom"

// adding bootstrap in it
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle"

// material ui 
import ComputerOutlined from "@material-ui/icons/ComputerOutlined"
import WhatsApp from "@material-ui/icons/WhatsApp"
import LinkedIn from "@material-ui/icons/LinkedIn"
import GitHub from "@material-ui/icons/GitHub"
import Instagram from "@material-ui/icons/Instagram"
import Telegram from "@material-ui/icons/Telegram"
// images require
import Skills from "./Skills"
import akashSrc from "../Resources/Akash Image.jpg"
import computerSrc from "../Resources/Programmer image.png"
import HeadingHome from "./HeadingHome"
import Profile from "./Profile"
import ContactHome from "./ContactHome"
import Footer from "./Footer"
import Projects from "./Projects"
const HomePage = () => {
    return (
        <>
            <div className="">
                <HeadingHome></HeadingHome>
                <Profile></Profile>
                <Skills></Skills>
                <Projects></Projects>
                <ContactHome></ContactHome>
            </div>
        </>
    )
}
export default HomePage;


// github https://github.com/akashghadge

// insta https://www.instagram.com/akash_ghadge3/

// Telegram https://t.me/akashghadge3

// linkeding https://www.linkedin.com/in/akash-ghadge-724864198/