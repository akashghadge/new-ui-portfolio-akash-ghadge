const router = require("express").Router();
let SessionUser = require("../models/SessionUser.model")

router.route("/").get((req, res) => {
    SessionUser.find({}).then((data) => {
        res.json(data)
    }).catch((err) => {
        res.json(err)
    })
})

module.exports = router;