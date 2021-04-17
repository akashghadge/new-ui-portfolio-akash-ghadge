import React, { useState } from "react"
import ReactDOM from "react-dom"

import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle"


// axios for post and get request
import axios from "axios"

//components
import SignIn from "./SignIn"
import SignUp from "./SignUp"

const Sign = () => {
    let [signOpt, setSignOpt] = useState(0);

    function clicked(event) {
        setSignOpt(Number(event.target.value))
    }
    return (
        <>
            <div className="btn-group" style={{ display: "block", textAlign: "center", marginTop: "1rem" }} role="group" aria-label="Basic example">
                <button type="button" className="btn btn-primary signInUpHead" value="1" onClick={clicked}>Sign In</button>
                <button type="button" className="btn btn-primary signInUpHead" value="0" onClick={clicked}>Sign Up</button>
            </div>
            {signOpt ? <SignIn></SignIn> : <SignUp></SignUp>}
        </>
    )
}
export default Sign;
