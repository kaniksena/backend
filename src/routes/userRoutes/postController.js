const express = require('express');
const User = require('./models/userModel.js');

const router = express.Router();

// Yeni kullanıcı oluşturma endpoint'i
router.post('/users', async (req, res) => {
    try {
      const { id,username, password, name, surname } = req.body;
  
      // Kullanıcı adı ve şifre zorunlu olduğunda gerekli doğrulamaları yapın
  
      // Yeni bir kullanıcı nesnesi oluştur
      const newUser = new User({
        id: id,
        username: username,
        password: password,
        name: name,
        surname: surname
      });
  
      // Yeni kullanıcıyı veritabanına kaydet
      const savedUser = await newUser.save();
  
      res.status(201).json(savedUser); // 201 Created durumuyla yeni kullanıcıyı yanıt olarak döndür
    } catch (error) {
      res.status(400).json({ message: error.message }); // Hata durumunu yanıt olarak döndür
    }
  });
  
  module.exports = router;