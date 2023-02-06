const express = require('express');
const xlsx = require('xlsx');
const fs = require('fs');
const mongoose = require('mongoose');
const Data = require('../model/user');

const router = express.Router();

const getLatestEntry=async()=>{
  mongoose.connect("mongodb+srv://aastik:aastik@cluster0.vd5wjct.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true });
  const latestEntry = await Data.find().sort({ currtime: -1 }).limit(1);
  mongoose.disconnect();
  return latestEntry[0];
}

router.post('/data/post', async (req, res) => {
  const newData = new Data({ data: req.body });
  if (req.body.getLastEntry) {
    try{
    // retrieve the latest entry from the data source
    // (e.g. database, file, etc.)
    const latestEntry = getLatestEntry();
    // send the latest entry back in the response
    res.send({ tagname: latestEntry.tagname, currtime: latestEntry.currtime });
    }
    catch (error) {
      res.status(400).json({message: error.message})
  }
  }
  else{
    try {
          const dataToSave = await newData.save();
          res.status(200).json(dataToSave)
      }
      catch (error) {
          res.status(400).json({message: error.message})
      }
  }
});

router.get('/data', async (req, res) => {
    Data.find((error, data) => {
      if (error) {
        return res.status(500).send(error);
      }
      return res.status(200).send(data);
    });
  });

module.exports = router
