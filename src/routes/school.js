const express = require('express');
const router = express.Router();
const School = require('../models/school.model');

router.get('/', async (req, res) => {
  const schoolList = await School.find();
  if (!schoolList) {
    return res.status(500).json({ code: 500 });
  }
  res.status(200).json({ code: 200, data: schoolList });
});

module.exports = router;
