import React, { useState } from "react"
import ReactDOM from "react-dom"
import { useHistory } from "react-router-dom"
import axios from "axios"
import AccountBox from "@material-ui/icons/AccountBox"
import { Button } from "@material-ui/core"
const SignUp = () => {
    let history = useHistory();
    let [allCurrentData, setAllCurrentData] = useState({
        fname: "",
        lname: "",
        email: "",
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
        fname: "",
        lname: "",
        email: "",
        username: "",
        password: ""
    })


    function SendUser(event) {
        event.preventDefault()
        if (allCurrentData.fname.length >= 3 && allCurrentData.lname.length >= 3 && allCurrentData.username.length > 5 && allCurrentData.password.length > 8) {
            setFinalData({
                fname: allCurrentData.fname,
                lname: allCurrentData.lname,
                email: allCurrentData.email,
                username: allCurrentData.username,
                password: allCurrentData.password
            })
            axios.post("/api/user/add", {
                fname: allCurrentData.fname,
                lname: allCurrentData.lname,
                email: allCurrentData.email,
                username: allCurrentData.username,
                password: allCurrentData.password
            }).then((data) => {
                setAllCurrentData({
                    fname: "",
                    lname: "",
                    email: "",
                    username: "",
                    password: ""
                })
                let token = data.data.jwt;
                localStorage.setItem("token", token);
                alert("User added  Succesfully");
                window.location.reload(true);
                history.push("/");
            }).catch((err) => {
                console.log(err);
                alert("Username already taken");
            })
        }

        else {
            alert("Please enter first and last name min 3 letters and username is 5 letters and password 8 letters");
        }
    }
    return (
        <>
            <div className="container my-5">
                <h1 className="text-primary signInUpHead">Sign Up</h1>
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label className="labelSign" >First name</label>
                        <input type="text" className="form-control fieldSign" id="fname" placeholder="" value={allCurrentData.fname} onChange={inputChange} required ></input>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label className="labelSign" >Last name</label>
                        <input type="text" className="form-control fieldSign" id="lname" placeholder="" value={allCurrentData.lname} onChange={inputChange} required></input>
                    </div>
                </div>
                <div className="row">
                    <div className="mb-3">
                        <label className="labelSign" >Email</label>
                        <input type="email" className="form-control fieldSign" id="email" placeholder="you@example.com" onChange={inputChange} value={allCurrentData.email} required></input>
                    </div>
                </div>
                <div className="row">
                    <div className="mb-3">
                        <label className="labelSign">UserName</label>
                        <input type="text" className="form-control fieldSign" id="username" placeholder="akash@3" onChange={inputChange} value={allCurrentData.username} required></input>
                    </div>
                    <div className="mb-3">
                        <label className="labelSign">Password</label>
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
export default SignUp;
