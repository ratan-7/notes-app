const {
    Schema,
    model
} = require("mongoose");

const userSchema = new Schema({
    name: String,
    email: {
        type: String,
        unique: true
    },
    password: String,
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const userModel = model("user", userSchema)

module.exports = userModel