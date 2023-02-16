const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    tid : String,
    epc : String,
    user : String,
    createdAt: {
      type: Date,
      default: Date.now
    }
  });

  module.exports = mongoose.model('RFIDdata', dataSchema)