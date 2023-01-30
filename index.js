const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config();

const mongoString = process.env.DATABASE_URL
mongoose
  .connect(mongoString, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(process.env.PORT, () =>
      console.log(`Server running on port ${process.env.PORT}`)
    )
  )
  .catch((err) => console.log(err));

const database = mongoose.connection
database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})
const app = express();
app.use(express.json());

app.listen(port, () => {
    console.log(`Server Started at ${port}`)
})

const routes = require('./routes/routes');

app.use('/api', routes)