const express = require('express');
const router = express.Router();
const Region = require('../models/region.model');

// GET /
router.get('/', async (req, res) => {
  try {
    const regionList = await Region.find();
    if (!regionList) {
      return res.status(500).json({ code: 500 });
    }
    res.status(200).json({ code: 200, data: regionList });
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
