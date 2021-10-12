const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const regionSchema = new Schema(
  {
    kv: {
      type: String,
      require: true,
    },
    name: {
      type: String,
      require: true,
    },
    image: {
      type: String,
      require: false,
    },
    description: {
      type: String,
      require: false,
    },
  },
  {
    collection: 'region',
  },
);

regionSchema.virtual('id').get(function () {
  return this._id.toHexString();
});

regionSchema.set('toJSON', {
  virtuals: true,
});

module.exports = mongoose.model('Region', regionSchema);
