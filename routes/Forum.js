const router = require("express").Router();
let Chat = require("../models/chat.model")
let SessionUser = require("../models/SessionUser.model")

router.route("/add").post((req, res) => {
    // geting data from request
    const username = req.body.username;
    const chat = req.body.chat;
    console.log("username is :", username, " chat is ", chat);
    // finding for exiting user if not add it
    const newChat = new Chat({
        username: username, chat: chat
    })
    newChat.save().then(() => res.status(200).json({ username, chat })).catch(err => res.status(505).json("error :" + err))

})

router.route("/").get((req, res) => {
    Chat.find({}).then((data) => {
        res.status(200).json(data)
    })
        .catch((err) => {
            res.status(400).json(err)
        })
})
// for deletedin chats
router.route("/delete").post((req, res) => {
    // getting info of the deleting user
    const id = req.body._id;
    const username = req.body.username;
    const chat = req.body.chat;
    Chat.deleteOne({ username: username, _id: id, chat: chat }).then((data) => {
        res.status(200).json(data)
    }).catch((err) => {
        res.status(505).json(err);
    })
})


module.exports = router;