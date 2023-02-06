const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    tagname: String,
    currtime: String
  });

  module.exports = mongoose.model('logs', dataSchema)