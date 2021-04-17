const mongoose = require("mongoose");
// making instance of schema
const Schema = mongoose.Schema;

const contactSchema = new Schema({
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
    comment: {
        type: String,
        required: true,
        minlength: 5
    }
}
    , {
        timestamps: true
    })

const Comment = mongoose.model("Comment", contactSchema);
// exporting the model of schema
module.exports = Comment;