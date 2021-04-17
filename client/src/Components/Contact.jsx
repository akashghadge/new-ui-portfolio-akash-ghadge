import React, { useState } from "react"


// adding bootstrap in it
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle"

// material ui icons
import AccountBox from "@material-ui/icons/AccountBox"
import { Button } from "@material-ui/core"

// axios for post and get request
import axios from "axios"

const Contact = () => {
    let [allCurrentData, setAllCurrentData] = useState({
        fname: "",
        lname: "",
        email: "",
        comment: ""
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
        comment: ""
    })


    function SendComment(event) {
        event.preventDefault()
        if (allCurrentData.fname.length >= 3 && allCurrentData.lname.length >= 3 && allCurrentData.comment.length > 5) {
            setFinalData({
                fname: allCurrentData.fname,
                lname: allCurrentData.lname,
                email: allCurrentData.email,
                comment: allCurrentData.comment,
            })
            axios.post("/api/contact", {
                fname: allCurrentData.fname,
                lname: allCurrentData.lname,
                email: allCurrentData.email,
                comment: allCurrentData.comment,
            })
            setAllCurrentData({
                fname: "",
                lname: "",
                email: "",
                comment: ""
            })
            // console.log(finalData);
            alert("Comment Send Succesfully")

            /**
             * here is one api point from here i will post the date which have the four main fields 
             * fname,lname,email,comment,timestamp
             */
        }

        else {
            alert("Please enter first and last name min 3 letters and comment is 5 letters");
        }
    }
    return (
        <>
            <div className="container my-5">
                <h1 className="text-primary contactHead">Contact Us</h1>
                <div className="row">
                    <div className="col-md-6 mb-3">
                        <label  className="labelContact">First name</label>
                        <input type="text" className="form-control fieldContact" id="fname" placeholder="" value={allCurrentData.fname} onChange={inputChange} required></input>
                    </div>
                    <div className="col-md-6 mb-3">
                        <label className="labelContact">Last name</label>
                        <input type="text" className="form-control fieldContact" id="lname" placeholder="" value={allCurrentData.lname} onChange={inputChange} required></input>
                    </div>
                </div>
                <div className="row">
                    <div className="mb-3">
                        <label className="labelContact" >Email</label>
                        <input type="email" className="form-control fieldContact" id="email" placeholder="you@example.com" onChange={inputChange} value={allCurrentData.email} required></input>
                    </div>
                    <div className="mb-3">
                        <label className="labelContact">Comment</label>
                        <input type="text" className="form-control fieldContact" id="comment" placeholder="comment" onChange={inputChange} value={allCurrentData.comment} required></input>
                    </div>
                </div>
                <div className="text-center">
                    <Button id="addContactUs" onClick={SendComment}>Save <AccountBox></AccountBox></Button>
                </div>
            </div>
        </>
    )
}


export default Contact;
