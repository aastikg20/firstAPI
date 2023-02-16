const mongoose = require('mongoose');
const moment = require('moment');

const dataSchema = new mongoose.Schema({
    tid : String,
    epc : String,
    user : String,
    time : { type: Date, default: Date.now, required: false}
  });

  module.exports = mongoose.model('RFIDdata', dataSchema)