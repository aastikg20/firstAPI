const express = require('express');
const mongoose = require('mongoose');
const Data = require('./model/user');

require('dotenv').config();

const mongoString = process.env.DATABASE_URL
mongoose.set("strictQuery", true);

const database = mongoose.connection
database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
const app = express();

mongoose.connect("mongodb+srv://aastik:aastik@cluster0.vd5wjct.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true }, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.log('Successfully connected to MongoDB');
  }
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
app.use(express.json());
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method == "OPTIONS") {
      res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
      return res.status(200).json({});
    }
  
    next();
  });

const routes = require('./routes/routes');

app.use('/api', routes)
