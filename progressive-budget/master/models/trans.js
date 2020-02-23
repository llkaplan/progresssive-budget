const mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
    name: { type: String },
    amount: { type: Number, min: 0 },
    date: { type: Date, default: Date.now}
})

const Transaction = mongoose.model("Transaction", userSchema);

module.exports = Transaction;
