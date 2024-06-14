const mongoose = require("mongoose");

const StatSchema = new mongoose.Schema({
   title: {type: String, require: true},
   stat: {type: Number},
});

module.exports = mongoose.model("Stats", StatSchema);
