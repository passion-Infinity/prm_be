const express = require('express');
const router = express.Router();
const User = require('../models/user.model');
const jwt = require('jsonwebtoken');

// GET ALL USERS
router.get('/', async (req, res) => {
  try {
    const userList = await User.find().select('-password');

    if (!userList) {
      res.status(500).json({ success: false });
    }

    res.status(200).json(userList);
  } catch (err) {
    console.log('ERROR: ', err);
  }
});

// GET SINGLE USER
router.get('/:username', async (req, res) => {
  try {
    const username = req.params.username;

    const user = await User.findOne({ username }).select('-password');

    if (!user) {
      return res.status(500).json({
        success: false,
        message: 'The user with given username was not found',
      });
    }
    res.status(200).json(user);
  } catch (err) {
    console.log('ERROR: ', err);
  }
});

// CREATE USER
router.post('/', (req, res) => {
  createOrRegisterUser(req, res, 'created');
});

// UPDATE USER
router.put('/:username', async (req, res) => {
  let update = {};
  const username = req.params.username;
  const fullname = req.body.fullname;
  const password = req.body.password;

  if (fullname) update.fullname = fullname;
  if (password) update.password = password;

  const user = await User.findOneAndUpdate({ username }, update);

  if (!user) {
    return res.status(500).json({
      success: false,
      message: 'The user with ID given was not found',
    });
  }

  res.status(200).json({
    success: true,
    message: 'The user was updated',
  });
});

// DELETE USER
router.delete('/:username', async (req, res) => {
  try {
    const username = req.params.username;
    const user = await User.findOneAndDelete({ username });

    if (!user) {
      return res.status(500).json({
        success: false,
        message: 'The user with ID given was not found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'The user was deleted',
    });
  } catch (err) {
    console.log('ERROR: ', err);
  }
});

// LOGIN USER
router.post('/login', async (req, res) => {
  const user = await User.findOne({ username: req.body.username });
  const secret = 'anh_yeu_em';
  const password = req.body.password;
  if (user && user.password === password) {
    const token = jwt.sign(
      {
        username: user.username,
      },
      secret,
      {
        expiresIn: '1h',
      },
    );

    res.status(200).json({
      success: true,
      message: 'user authenticated',
      token: token,
    });
  } else {
    res.status(200).json({
      success: false,
      message: 'Username or Password is wrong',
    });
  }
});

// REGISTER USER
router.post('/register', (req, res) => {
  createOrRegisterUser(req, res, 'registered');
});

// USE FOR CREATE USER/REGISTER USER
async function createOrRegisterUser(req, res, message) {
  const username = req.body.username;

  const userFind = await User.findOne({ username: req.body.username });

  if (userFind) {
    return res.status(200).json({
      success: false,
      message: 'Tên đăng nhập đã tồn tại',
    });
  }

  let user = new User({
    username: username,
    fullname: req.body.fullname,
    password: req.body.password,
  });

  try {
    user = await user.save();

    if (!user)
      return res.status(500).json({
        success: false,
        message: `Can not be ${message}`,
      });

    res.status(200).json({
      success: true,
      message: `The user was ${message}`,
    });
  } catch (error) {
    console.log(error);
  }
}

module.exports = router;
