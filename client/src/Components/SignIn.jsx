import React, { useState } from "react"
import ReactDOM from "react-dom"

import axios from "axios"
import AccountBox from "@material-ui/icons/AccountBox"
import { Button } from "@material-ui/core"
import { useHistory, useLocation } from "react-router-dom"


const SignIn = () => {
    let history = useHistory();
    let location = useLocation();
    let [allCurrentData, setAllCurrentData] = useState({
        username: "",
        password: ""
    })
    function inputChange(event) {
        const { id, value } = event.target
        // console.log(id, value);
        setAllCurrentData((prev) => {
            return {
                ...prev,
                [id]: value
            }
        })
    }
    let [finalData, setFinalData] = useState({
        username: "",
        password: ""
    })


    function SendUser(event) {
        event.preventDefault()
        if (allCurrentData.username.length > 5 && allCurrentData.password.length > 8) {
            // setFinalData({
            //     username: allCurrentData.username,
            //     password: allCurrentData.password
            // })
            axios.post("/api/user/in", {
                username: allCurrentData.username,
                password: allCurrentData.password
            }).then((data) => {
                // window.location.reload(true);
                // console.log("User Sign In successfully");
                // console.log(data);
                let token = data.data.jwt;
                // console.log(token);
                localStorage.setItem("token", token);
                setAllCurrentData({
                    username: "",
                    password: ""
                })
                window.location.reload(true);
                history.push("/");
            }).catch(() => {
                alert("Incorrect username or password");
            })
        }

        else {
            alert("Please enter first and last name min 3 letters and username is 5 letters and password 8 letters");
        }
    }

    return (
        <>
            <div className="container my-5 px-5">
                <h1 className="text-primary signInUpHead">Sign In</h1>
                <div className="row widthSignIn">
                    <div className="mb-3">
                        <label className="labelSign" >UserName</label>
                        <input type="text" className="form-control fieldSign" id="username" placeholder="akash@3" onChange={inputChange} value={allCurrentData.username} required></input>
                    </div>
                    <div className="mb-3">
                        <label className="labelSign" >Password</label>
                        <input type="password" className="form-control fieldSign" id="password" onChange={inputChange} value={allCurrentData.password} required></input>
                    </div>
                </div>
                <div className="text-center">
                    <Button id="addContactUs" onClick={SendUser}>Save <AccountBox></AccountBox></Button>
                </div>
            </div>
        </>
    )
}
export default SignIn;
