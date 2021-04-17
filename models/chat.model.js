const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const chatSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    chat: {
        type: String,
        required: true,
    },
    created_time: {
        type: Date,
        default: Date.now()
    }

}
    , {
        timestamps: true
    })

const Chat = mongoose.model("chat", chatSchema);

module.exports = Chat;