const mongoose = require("mongoose");
const Schema = mongoose.Schema;


var userSchema = new mongoose.Schema({
    name: {
      first: String,
      last: { type: String, trim: true }
    },
    age: { type: Number, min: 0 }
  });


const Transaction = mongoose.model("Transaction", userSchema);

module.exports = Transaction;
