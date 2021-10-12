require('dotenv/config');
const express = require('express');
const config = require('../config/main');
// const connectdb = require('../config/dbconnection');
// const cors = require('cors');

const { port, mongoURL } = config;
// const regionRoutes = require('./routes/region');

const app = express();

// cors
// app.use(cors());
// app.options('*', cors());

// middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// connect db
// connectdb(mongoURL);

app.get('/', (req, res) => {
  return res.send('Hello AWS, this is my first deployment project');
});

// app.use('/api/v1/regions', regionRoutes);

app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
