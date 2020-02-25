const mongoose = require("mongoose");

const Schema = mongoose.Schema;

var bankhistorySchema = new Schema({
    name:  String, // String is shorthand for {type: String}
    amount: Number,
    date: { type: Date, default: Date.now }
  });

  const Model = mongoose.model("Transaction", bankhistorySchema);

module.exports = Model;
