const mongoose = require('mongoose');
const moment = require('moment');

const dataSchema = new mongoose.Schema({
    tid : String,
    epc : String,
    user : String
  }, { timestamps: true});

  module.exports = mongoose.model('RFIDdata', dataSchema)