import React, { useState } from "react"
import ReactDOM from "react-dom"

// bootstrap adding
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle"

// adding date to the footer
let date = new Date()
let dateYear = date.getFullYear()

const Footer = () => {
    return (
        <>
            <footer className="blog-footer text-center">
                <p style={{ color: "white" }}>Copyright &copy; {dateYear}</p>
            </footer>
        </>
    )
}
export default Footer;
