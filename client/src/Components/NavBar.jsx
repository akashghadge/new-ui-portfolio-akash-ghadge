import React, { useEffect, useState } from "react"
import ReactDOM from "react-dom"
import { NavLink, useHistory } from "react-router-dom"
// bootstrap adding
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle"
// logo
import logoSrc from "../Resources/logo192.png"
import Menu from "@material-ui/icons/Menu"
import Home from "@material-ui/icons/Home"
import Work from "@material-ui/icons/Work"

import MenuOpen from "@material-ui/icons/MenuOpen"
import Forum from "@material-ui/icons/Forum"
import Computer from "@material-ui/icons/Computer"

// axios
import axios from "axios"

const NavBar = () => {
    // sign in and out of the user
    let [user, setUser] = useState(null);
    // useEffect(() => {
    //     // fetching current signed in user and if there is no then not updating user
    //     axios.get("/api/me").then((obj) => {
    //         if (obj.data[0] != undefined) {
    //             setUser(obj.data[0].username)
    //         }
    //     }).catch((err) => {
    //         alert(err);
    //     })
    // }, [user])

    // getting username through jwt
    let history = useHistory();
    let token = localStorage.getItem("token");
    useEffect(() => {
        axios.post("/api/me", {
            token: token
        }).then((data) => {
            setUser(data.data.username);
        }).catch((err) => {
            history.push("/sign");
            console.log(err);
        })
    }, [user])

    function signOut(event) {
        localStorage.setItem("token", "");
        window.location.reload(true);
        alert("User succefully loged out");
    }
    return (
        <>
            <div className="sticky-top">
                <nav className="navbar sticky-top px-2 navbar-expand-sm navbar-dark text-white bg-dark" id="navBarCustom" >
                    <img id="logoMenu" src={logoSrc} alt="logo"></img>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample09"
                        aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"><Menu></Menu></span>
                    </button>
                    <div className="collapse navbar-collapse font-italic" id="navbarsExample09">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link userName" to="/">Home</NavLink>
                                <span className="sr-only">(current)</span>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link userName" to="/forum">Forum</NavLink>
                            </li>
                            {/* <li className="nav-item">
                                <NavLink className="nav-link userName" to="/projects">Projects</NavLink>
                            </li> */}
                            {user == null ? (
                                <li className="nav-item">
                                    <NavLink className="nav-link userName" to="/sign">Sign In/Up</NavLink>
                                </li>
                            )
                                : (
                                    <li className="nav-item">
                                        <NavLink className="nav-link userName" to="/" onClick={signOut} >Sign Out</NavLink>
                                    </li>
                                )
                            }
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="dropdown10" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><Menu className="userName"></Menu></a>
                                <div className="dropdown-menu" aria-labelledby="dropdown10" style={{ padding: "5px" }}>
                                    <NavLink className="nav-link userNameBox" style={{ color: "black" }} to="/contact">Contact Us</NavLink>
                                    <NavLink className="nav-link userNameBox" to="/About" style={{ color: "black" }}>About</NavLink>
                                    {/* <a className="nav-link" href="#"><Work></Work></a> */}
                                </div>
                            </li>
                            <li className="nav-item mx-3 text-primary userName">
                                <h4 className="nav-link">{user}</h4>
                            </li>
                        </ul>

                        {/* <form className="form-inline my-2 my-md-0">

                            <input className="form-control" type="text" placeholder="Search" aria-label="Search"></input>
                        </form> */}
                    </div>
                </nav>
            </div>
        </>
    )
}
export default NavBar;
