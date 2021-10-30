const express = require('express');
const router = express.Router();
const School = require('../models/school.model');

router.get('/', async (req, res) => {
  let filter = {};
  let area = req.query.area;
  let name = req.query.name;
  console.log('area', area);
  console.log('name', name);
  if (area) {
    filter.area = area;
  }
  if (name) {
    filter.name = new RegExp(name, 'i');
  }

  console.log(filter);
  const schoolList = await School.find(filter).exec();
  if (!schoolList) {
    return res.status(500).json({ code: 500 });
  }
  res.status(200).json({ code: 200, data: schoolList });
});

module.exports = router;
