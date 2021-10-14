const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schoolSchema = new Schema(
  {
    id: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: false,
    },
    description: {
      type: String,
      required: false,
    },
    shortDesc: {
      type: String,
      required: false,
    },
    grade: {
      type: Number,
      required: false,
    },
    link: {
      type: String,
      required: false,
    },
    area: {
      type: Number,
      required: true,
    },
    phone: {
      type: String,
      required: false,
    },
    code: {
      type: String,
      required: false,
    },
    name: {
      type: String,
      required: false,
    },
    address: {
      type: String,
      required: false,
    },
    majorInfo: [
      {
        codeMajor: {
          type: String,
          required: false,
        },
        image: {
          type: String,
          required: false,
        },
        name: {
          type: String,
          required: false,
        },
        grade: {
          type: Number,
          required: false,
        },
        description: {
          type: String,
          required: false,
        },
        salary: {
          type: String,
          required: false,
        },
      },
    ],
  },
  {
    collection: 'university',
  },
);

module.exports = mongoose.model('School', schoolSchema);
