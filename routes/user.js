const express = require('express');
const Data = require('../model/user');

const router = express.Router();

router.post('/tagread/saveTagData', async (req, res) => {
  const newData = new Data({
     tid: req.body.tid,
     epc: req.body.epc,
     user: req.body.user
     });
    try {
          const dataToSave = await newData.save();
          res.status(200).json(dataToSave)
      }
      catch (error) {
          res.status(400).json({message: error.message})
      }
});

router.get('/tagData', async (req, res) => {
    Data.find((error, data) => {
      if (error) {
        return res.status(500).send(error);
      }
      return res.status(200).send(data);
    });
  });

module.exports = router
