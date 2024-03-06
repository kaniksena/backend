const express = require('express');
const User = require('./models');

const router = express.Router();

// Yeni kullanıcı oluşturma endpoint'i
router.post('/users', async (req, res) => {
  const {id,username, password ,name,surname} = req.body;

  try {
    // Yeni bir User belgesi oluştur
    const newUser = new User({id,username, password ,name,surname});
    
    // Veritabanına kaydet
    const savedUser = await newUser.save();

    res.status(201).json(savedUser); // 201 Created durum koduyla yeni kullanıcıyı yanıt olarak döndür
  } catch (error) {
    res.status(400).json({ message: error.message }); // 400 Bad Request durum koduyla hata mesajını yanıt olarak döndür
  }
});

module.exports = router;

