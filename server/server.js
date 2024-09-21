const express = require('express');
const cors = require('cors')
// const mongoose = require('mongoose');

const app = express();
app.use(cors())

const dbConfig = require('./db')
const roomsroute = require('./routes/roomsroute')
// mongoose.connect('mongodb://localhost/mern-room/sample', { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('Connected to MongoDB...'))
//   .catch(err => console.error('Could not connect to MongoDB...', err));
app.use('/api/room', roomsroute)

app.get('/', (_req, res) => {
  res.status(200).json({
    status: "success"
  });
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}...`));