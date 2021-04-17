import React, { useState, useEffect } from "react"
import ReactDOM from "react-dom"
import { useHistory } from "react-router-dom"

// axios
import axios from "axios"

import Button from "@material-ui/core/Button/Button"


const Chats = (props) => {
    let [user, setUser] = useState(null);

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
    function deleteChat(event) {
        // console.log(props.id);
        if (user == props.username) {
            axios.post("/api/forum/delete", {
                username: props.username,
                chat: props.chat,
                _id: props.id
            }).then((data) => {
                alert("chat deleted successully");
                window.location.reload(true);
            }).catch((err) => {
                alert(err);
            })
        }
        else {
            alert("your not writer of this comment so can not delete the chat ");
        }
    }
    return (
        <>
            <div className="row mb-2">
                <div className="col-md-6">
                    <div
                        className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                        <div className="col p-4 d-flex flex-column position-static">
                            <strong className="d-inline-block mb-2 text-primary chatUsername">{props.username}</strong>
                            <h5 className="mb-0 chatChat">{props.chat}</h5>
                            <div className="mb-1 text-muted">{props.time}</div>
                            <Button onClick={deleteChat} style={{ outline: "none", color: "red" }}>Delete</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Chats;
