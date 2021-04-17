import React, { useState } from "react"
import ReactDOM from "react-dom"
const OneSkill = (props) => {

    let arr = [];
    // let [arr, setArr] = useState([]);
    for (let i = 0; i < 5; i++) {
        arr[i] = 1;
    }
    for (let i = 0; i < props.n; i++) {
        arr[i] = 0;
    }
    return (
        <>
            <li>
                <span style={{ marginRight: "10px", fontFamily: "serif", fontWeight: "700" }}>{props.name}</span>
                <div style={{ display: "inline", float: "right" }}>
                    {
                        arr.map((val) => {
                            return !val ?
                                <span>&#9733;</span> : <span>&#9734;</span>
                        })
                    }
                </div>
            </li>
        </>
    )
}
export default OneSkill;
