var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var schema = new Schema({
    title: String,
    description: String,
    submitted_on: {type: Date, default: Date.now},
})

module.exports = mongoose.model('Posting', schema);

