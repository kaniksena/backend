const express = require('express');
const User = require('./models/userModel');

const router = express.Router();

router.get('/getUsers', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;