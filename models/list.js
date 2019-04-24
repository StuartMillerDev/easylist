const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ListSchema = new Schema({
  listName: { type: String, required: true },
  listItems:[],
  date: { type: Date, default: Date.now }
});

const List = mongoose.model("List", ListSchema);

module.exports = List;
