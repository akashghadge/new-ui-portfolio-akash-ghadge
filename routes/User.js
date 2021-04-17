const { Router } = require("express");
const router = Router();

let User = require("../models/User.model");
let SessionUser = require("../models/SessionUser.model")

// new auth system 
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");



router.route("/add").post(async (req, res) => {
    // // geting data from request
    // const fname = req.body.fname;
    // const lname = req.body.lname;
    // const email = req.body.email;
    // const username = req.body.username;
    // const password = req.body.password;
    // // finding for exiting user if not add it
    // if (User.findOne({ username: username })) {
    //     const newUser = new User({
    //         fname, lname, email, username, password
    //     })
    //     newUser.save().then(() => res.status(200).json({ fname, lname, email, username, password })).catch(err => res.status(400).json("error :" + err))
    // }
    // else {
    //     // if there was user dont add it
    //     res.status(400).json("user already exits")
    // }


    // geting data from request
    const fname = req.body.fname;
    const lname = req.body.lname;
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;
    console.log("hello");
    // finding for exiting user if not add it
    User.find({ username: username })
        .then(async (data) => {
            console.log(data);
            if (data.length != 0) {
                // console.log("user already exist");
                res.status(404).json({
                    "message": "user already exists"
                })
            }
            let newUser = new User({
                fname, lname, email, username, password
            });
            const salt = await bcrypt.genSalt(10);
            newUser.password = await bcrypt.hash(newUser.password, salt);

            // making a new access token for the user for sign in
            let payload = {
                username: username
            }

            //create the access token with the shorter lifespan
            let accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {
                expiresIn: 900
            })

            newUser.save().then((data) => {
                res.status(200).json({
                    "jwt": accessToken
                })
            }).catch((err) => {
                console.log(err);
                res.status(400).json(err)
            })
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json(err);
        })

})

// routing for the sign in feature
router.route("/in").post(async (req, res) => {
    // const username = req.body.username;
    // const password = req.body.password;
    // // if it dont find any user it will return empty array and it also goes to then so we need to use if else
    // User.find({ username: username, password: password }).then((data) => {
    //     if (data.length == 1) {
    //         // res.status(200).json(data[0].fname)
    //         const fname = data[0].fname;
    //         const lname = data[0].lname;
    //         const email = data[0].email;
    //         const username = data[0].username;
    //         const password = data[0].password;
    //         let newSessionUser = new SessionUser({
    //             fname, lname, email, username, password
    //         });
    //         newSessionUser.save().then((data) => {
    //             res.status(200).json(data);
    //         }).catch((err) => {
    //             res.status(400).json("hello " + err)
    //         })
    //     }
    //     else {
    //         res.status(400).json("user not found");
    //     }
    // })
    //     .catch(err => {
    //         res.json(err)
    //         console.log(err)
    //     })


    // new jwt
    const username = req.body.username;
    const password = req.body.password;

    const user = await User.findOne({ username: username });
    if (user) {
        const validPassword = await bcrypt.compare(password, user.password);
        if (validPassword) {

            /**
             *issuesing the token
             */
            let payload = {
                username: username
            }

            //create the access token with the shorter lifespan
            let accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, { expiresIn: 900 });

            // res.cookie("jwt", accessToken, { secure: true, httpOnly: true });
            // res.send();
            // console.log(accessToken);
            res.status(200).json({
                "jwt": accessToken
            })
        }
        else {
            res.status(400).json({ err: "invalid password" });
        }
    } else {
        res.status(401).json({ err: "user does not exists" })
    }
})

// router.route("/out").post((req, res) => {
//     SessionUser.collection.drop().then((data) => {
//         res.json("drop succefully " + data)
//     }).catch((err) => {
//         res.json(err)
//     })
// })


module.exports = router;