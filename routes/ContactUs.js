// importing router and model of schema
const router = require("express").Router();
let Comment = require("../models/contact.model");

// routing for contact us form 
router.route("/").post((req, res) => {
    const fname = req.body.fname;
    const lname = req.body.lname;
    const email = req.body.email;
    const comment = req.body.comment;
    const newComment = new Comment({
        fname, lname, email, comment
    })
    // is and every comment is saved to the database
    newComment.save().then(() => res.json({ fname, lname, email, comment })).catch(err => res.status(400).json("error :" + err))
})

module.exports = router;