import React, { useState, useEffect } from "react"
import ReactDOM from "react-dom"
import { useHistory } from "react-router-dom"
// adding bootstrap in it
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle"

// axios for post and get request
import axios from "axios"

// material ui
import Send from "@material-ui/icons/Send"
import Button from "@material-ui/core/Button/Button"
import Chats from "./Chats"
const Forum = () => {
    let history = useHistory();
    let [currentChat, setcurrentChat] = useState("");
    let token = localStorage.getItem("token");
    function inputChange(event) {
        let value = event.target.value;
        setcurrentChat(value)
    }

    function submitChat() {
        axios.post("/api/me", {
            token: token
        }).then((data) => {
            console.log(data);
            const username = data.data.username;
            const chat = currentChat;
            axios.post("/api/forum/add", {
                username: username,
                chat: chat
            }).then((data) => {
                alert("chat successfully submited")
                setcurrentChat("");
            }).catch((err) => {
                alert(err)
            })
        }).catch((err) => {
            alert("For forum feature you must be logged in...")
            history.push("/sign");
            console.log(err);
        })
    }
    let [totalChat, setTotalChat] = useState([]);
    async function getChat() {
        let data = await axios.get("/api/forum/");
        // console.log(data.data);
        setTotalChat(data.data);
    }
    // getChat();
    useEffect(() => {
        getChat();
    }, [currentChat])

    return (
        <>
            <div className="container my-5 px-5">
                <div className="row fourmIn">
                    <h1 className="contactHead">Ask Something Here...</h1>
                    <div className="col-5 mb-3">
                        <input type="text" className="form-control chatBox fieldContact" id="username" placeholder="typeing ..." onChange={inputChange} value={currentChat} required></input>
                    </div>
                    <div className="col-2">
                        <Button id="chatAdd" onClick={submitChat}><Send></Send></Button>
                    </div>
                    <div className="mx-5">
                        {totalChat.reverse().map((v, i) => {
                            return <Chats chat={v.chat} username={v.username} time={v.created_time} id={v._id}></Chats>
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}
export default Forum;
