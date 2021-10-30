const express = require('express');
const router = express.Router();
const School = require('../models/school.model');

router.get('/', async (req, res) => {
  let filter = {};
  let area = req.query.area;
  let name = req.query.name;
  if (area) {
    filter = { ...filter, area };
  }
  if (name) {
    filter = { ...filter, name };
  }
  const schoolList = await School.find(filter).exec();
  if (!schoolList) {
    return res.status(500).json({ code: 500 });
  }
  res.status(200).json({ code: 200, data: schoolList });
});

module.exports = router;
