const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
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

const User = mongoose.model("User", UserSchema);

module.exports = User;