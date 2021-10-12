const mongoose = require('mongoose');

async function connectdb(mongoURL) {
  try {
    await mongoose.connect(mongoURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('connect db successfully');
  } catch (error) {
    console.log(error);
  }
}

module.exports = connectdb;
