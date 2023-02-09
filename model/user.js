const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    tid : String,
    epc : String,
    user : String
  });

  module.exports = mongoose.model('RFIDdata', dataSchema)