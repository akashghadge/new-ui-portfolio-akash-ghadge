const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SessionUserSchema = new Schema({
    fname: {
        type: String,
        required: true,
        minlength: 3
    },
    lname: {
        type: String,
        required: true,
        minlength: 3
    },
    email: {
        type: String,
        required: true,
    },
    username: {
        type: String,
        unique: true,
        required: true,
        minlength: 5
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    }
}
    , {
        timestamps: true
    })

const SessionUser = mongoose.model("SessionUser", SessionUserSchema);

module.exports = SessionUser;